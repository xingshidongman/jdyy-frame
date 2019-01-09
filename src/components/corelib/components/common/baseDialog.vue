<!--
描述：el-dialog组件的二次封装
开发人：sunlf
开发日期：2017年8月17日
智信（2018-10-13）修改el-form属性
-->

<template lang="pug">
  transition(name="down-in")
    el-dialog.dialog-form(v-bind:title="dialogTitle" v-bind:visible="visible"
    v-on:close="close"
    v-bind:close-on-click-modal="false" v-bind:size="size"
    v-bind:append-to-body="true" width="80%")
      template(v-if="isSearchView")
        a(href="#" v-on:click="prev" v-show="showBtnPrev")
          img.prev(src="../../../../../static/images/prev.png" height="120" width="100" )
        a(href="#" v-on:click="next" v-show="showBtnNext")
          img.next(src="../../../../../static/images/next.png" height="120" width="100" )
      el-form(ref="dialogForm" v-bind:model="formModel" :label-width="labelWidth" :label-position="labelPosition")
        <!--div formModel.limit：{{formModel.limit}}-->
        slot(name="dialogFormSlot")
      div.dialog-footer(slot="footer")
        template(v-if="isSearchView")
          el-button(v-on:click="prev" v-show="showBtnPrev") 上一个
          el-button(v-on:click="next" v-show="showBtnNext") 下一个
          el-button(type="primary" v-on:click="onCancelClick") 关 闭
        template(v-else-if="isYesNoView")
          el-button(type="primary" v-on:click="onYesClick") {{yesText}}
          el-button(type="primary" v-on:click="onNoClick") {{noText}}
        template(v-else-if="isNoView")
        template(v-else)
          el-button(v-on:click="onCancelClick") 取 消
          el-button(type="primary" v-on:click="onSubmitClick") 提 交
</template>

<script type="text/ecmascript-6">
  import Message from '../../common/message'
  // import Vue from 'vue'
  import EventBus from '../../common/eventbus'
  import {ON_REFRESH_DATA, ON_INIT_DIALOG_DATA} from './event.toml'

  export default {
    name: 'kalix-dialog',
    activated() {
      console.log('base dialog ' + this.bizKey + '  is activated')
      EventBus.$on(ON_INIT_DIALOG_DATA, this.initData)
    },
    deactivated() {
      console.log('base dialog ' + this.bizKey + '  is deactivated')
      EventBus.$off(ON_INIT_DIALOG_DATA)
    },
    props: {
      size: {
        type: String,
        default: 'large'
      },
      bizKey: String,
      formModel: { // dialog中的form的数据模型，由父组件传递
        type: Object,
        required: true
      },
      labelWidth: {
        type: String
      },
      labelPosition: {
        type: String
      },
      rules: {
        type: Object
      },
      targetURL: {
        type: String
      },
      isSearchView: false,
      isNoView: false,
      isYesNoView: {
        type: Boolean,
        default: false
      },
      yesText: {
        type: String,
        default: '同意'
      },
      noText: {
        type: String,
        default: '拒绝'
      },
      title: '',
      submitBefore: {
        type: Function
      },
      submitAfter: {
        type: Function
      },
      submitCustom: {
        type: Function
      }
    },
    render() {

    },
    data() {
      return {
        privateTitle: '',
        visible: false,
        isEdit: false,
        currentIndex: null,
        showBtnPrev: false,
        showBtnNext: false
      }
    },
    methods: {
      prev() {
        this._getRowIndex(() => {
          if (this.currentIndex > 0) {
            this.currentRow = this.tableData[this.currentIndex - 1]
            this._resetFormModel()
          }
          this._setBtn()
        })
      },
      next() {
        this._getRowIndex(() => {
          if (this.currentIndex < this.tableData.length - 1) {
            this.currentRow = this.tableData[this.currentIndex + 1]
            this._resetFormModel()
          }
          this._setBtn()
        })
      },
      _getRowIndex(callBack) {
        if (this.tableData && this.currentRow.rowNumber) {
          this.currentIndex = this.tableData.findIndex(e => {
            return e.rowNumber === this.currentRow.rowNumber
          })
          callBack()
        }
      },
      _resetFormModel() {
        this.$http.get('/camel/rest/jdyy/visits/getAllByUserId', {
          params: {
            userId: this.currentRow.id
          }
        }).then(res => {
          let row = this.currentRow
          row.imgs = []
          if (row.photo !== undefined && row.photo !== null) {
            if (row.photo.indexOf(',') !== -1) {
              let arr = row.photo.split(',')
              for (let i = 0; i < arr.length; i++) {
                let imgObj = {}
                imgObj.val = arr[i]
                imgObj.key = 'img' + i
                row.imgs.push(imgObj)
              }
            } else {
              let imgObj = {}
              imgObj.val = row.photo
              imgObj.key = 'img' + 1
              row.imgs.push(imgObj)
            }
          }
          let _tableData = res.data.data
          this.currentRow.tableData = []
          if (_tableData.length > 0) {
            this.currentRow.tableData = _tableData
          }
          this.$emit('update:formModel', this.currentRow)
        })
      },
      _setBtn() {
        this._getRowIndex(() => {
          this.showBtnPrev = this.currentIndex > 0
          this.showBtnNext = this.currentIndex < this.tableData.length - 1
        })
      },
      submitComplete(_flag) { // 提交完成后执行
        if (this.submitAfter && typeof (this.submitAfter) === 'function') {
          this.submitAfter(this)
        } else {
          if (_flag !== false) {
            this.onCancelClick()
          }
        }
      },
      submitAction() {
        this.$refs.dialogForm.validate((valid) => {
          console.log('valid', valid)
          this.formModel.parent = null
          this.formModel.childred = null
          console.log('submitAction this.formModel：', this.formModel)
          if (valid) {
            this.axios.request({
              method: this.isEdit ? 'PUT' : 'POST',
              url: this.isEdit ? `${this.targetURL}/${this.formModel.id}` : this.targetURL,
              data: this.formModel,
              params: {}
            }).then(response => {
              if (response.data.success) {
                Message.success(response.data.msg)
                this.visible = false
                this.$refs.dialogForm.resetFields()
                this.submitComplete()
                // 关闭对话框
              } else {
                Message.error(response.data.msg)
                this.submitComplete()
              }
              // 刷新列表
              console.log(' ===== BaseDialog ON_REFRESH_DATA ===== ', ON_REFRESH_DATA)
              EventBus.$emit(ON_REFRESH_DATA, this.bizKey, this.formModel)
              this._afterDialogClose()
              console.log('[kalix] dialog submit button clicked !')
              this.visible = false
            })
          } else {
            Message.error('请检查输入项！')
            this.submitComplete(false)
            return false
          }
        })
      },
      onCancelClick() {
        // EventBus.$emit(this.bizKey + '-KalixDialogClose')
        console.log('dialog cancel button clicked !')
        this.visible = false
        if (!this.isSearchView && !this.isYesNoView) {
          this.$refs.dialogForm.resetFields()
        }
        this._afterDialogClose()
      },
      onYesClick() {
        // console.log(' ===== onYesClick 1 =====')
        this.$emit('yesClick', this.bizKey)
        // console.log(' ===== onYesClick 2 =====')
        // this.visible = false
        // this._afterDialogClose()
        // console.log(' ===== onYesClick 3 =====')
      },
      onNoClick() {
        this.$emit('noClick', this.bizKey)
        this.visible = false
        this._afterDialogClose()
      },
      onSubmitClick() {
        if (this.submitCustom && typeof (this.submitCustom) === 'function') {
          this.submitCustom(this)
        } else if (this.submitBefore && typeof (this.submitBefore) === 'function') {
          this.submitBefore(this, () => {
            this.submitAction()
          })
        } else {
          this.submitAction()
        }
      },
      onBeforeClose() {
        this.close()
      },
      close() {
        this.onCancelClick()
      },
      open(_title, isEdit = false, row) {
        this.tableData = this.$store.state.tableData
        this.privateTitle = _title
        this.visible = true
        this.isEdit = isEdit
        console.log(' 2019年1月5日15:13:23：_title', _title)
        // 树表结构json解析会报错,后面没有用到这个解析,注释掉
        // let beforeFormModel = JSON.parse(JSON.stringify(this.formModel))
        // console.log(`open before formModel :`, beforeFormModel)
        if (row) {
          this.currentRow = row
          this._setBtn()
          this.$emit('update:formModel', row)
        } else {
          this.$emit('update:formModel', JSON.parse(this.tempFormModel))
        }
        console.log('open temp FormModel', this.tempFormModel)
        console.log('open formModel', this.formModel)
        console.log('open row', row)

        // this.$emit('KalixDialogOpen')
      },
      initData(row) {
        console.log(`[kalix] init base dialog ${this.bizKey}`)
      },
      _afterDialogClose(closeParam) {
        console.log(` =========== bizKey ======`, this.bizKey)
        EventBus.$emit(this.bizKey + '-' + 'KalixDialogClose', closeParam)
        EventBus.$emit(ON_REFRESH_DATA, this.bizKey, this.formModel)
      }
    },
    created() {
      this.tempFormModel = JSON.stringify(Object.assign({}, this.formModel))
      console.log('called created!!!')
    },
    computed: {
      dialogTitle() {
        return this.title || this.privateTitle
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
  .down-in-enter-active
    transition: all 0.2s ease

  .down-in-leave-active
    transition: all 0.2s ease

  .down-in-enter, .down-in-leave-active
    opacity 0
    transform scale(0.8)


</style>
