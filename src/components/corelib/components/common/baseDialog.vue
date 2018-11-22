<!--
描述：el-dialog组件的二次封装
开发人：sunlf
开发日期：2017年8月17日
智信（2018-10-13）修改el-form属性
-->

<template lang="pug">
  transition(name="down-in")
    el-dialog.dialog-form(v-bind:title="dialogTitle" v-bind:visible="visible"
    v-bind:before-close="close"
    v-bind:close-on-click-modal="false" v-bind:size="size"
    v-bind:append-to-body="true" width="80%")
      el-form(ref="dialogForm" v-bind:model="formModel" :label-width="labelWidth" :label-position="labelPosition")
        <!--div formModel.limit：{{formModel.limit}}-->
        slot(name="dialogFormSlot")
      div.dialog-footer(slot="footer")
        template(v-if="isView")
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
      isView: false,
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
        isEdit: false
      }
    },
    methods: {
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
        this.$emit('KalixDialogClose')
        console.log('dialog cancel button clicked !')
        this.visible = false
        if (!this.isView && !this.isYesNoView) {
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
        this.privateTitle = _title
        this.visible = true
        this.isEdit = isEdit
        // 树表结构json解析会报错,后面没有用到这个解析,注释掉
        // let beforeFormModel = JSON.parse(JSON.stringify(this.formModel))
        // console.log(`open before formModel :`, beforeFormModel)
        if (row) {
          this.$emit('update:formModel', row)
        } else {
          this.$emit('update:formModel', JSON.parse(this.tempFormModel))
        }
        console.log('open temp FormModel', this.tempFormModel)
        console.log('open formModel', this.formModel)
        console.log('open row', row)

        this.$emit('KalixDialogOpen')
      },
      initData(row) {
        console.log(`[kalix] init base dialog ${this.bizKey}`)
      },
      _afterDialogClose(closeParam) {
        console.log(` =========== bizKey ======`, this.bizKey)
        EventBus.$emit(this.bizKey + '-' + 'KalixDialogClose', closeParam)
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
