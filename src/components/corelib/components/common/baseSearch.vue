<!--
描述：table上方查询组件的二次封装
开发人：sunlf
开发日期：2017年8月17日

2017年8月31日
-->

<template lang="pug">
  div.kalix-search
    div.kalix-search-hd
      div.line
      i.iconfont.icon-chaxun1(style=" margin-left:1%;line-height: 20px;position: absolute;")
      span.test {{title}}
    div.kalix-search-bd
      el-form.search-container(ref="searchForm" v-bind:model="form" v-bind:inline="true")
        slot(name="searchFormSlot")
          el-form-item.short(v-for="item in searchFields" v-bind:label="item.label" v-bind:prop="item.prop" v-bind:key="item.prop")
            el-select(v-if="item.type==='select'" v-model="form[item.prop]" v-bind:class="bindCls(item.cls)" v-bind:data-type="item.dataType" v-bind:clearable="item.clearable" style="width: 100%;")
              el-option(v-for="option in item.options" v-bind:key="option.value" v-bind:label="option.label" v-bind:value="option.value"  :key="option.value")
            kalix-select2(v-else-if="item.type==='select2'" v-model="form[item.prop]" v-bind:optionsUrl="item.optionsUrl" v-bind:optionKey="item.optionValue" v-bind:label="item.optionLabel"
            v-bind:class="bindCls(item.cls)" v-bind:data-type="item.dataType")
            el-input-number(v-else-if="item.type==='number'" v-model="form[item.prop]" v-bind:class="bindCls(item.cls)" v-bind:data-type="item.dataType")
            kalix-object-select2(v-else-if="item.type==='object2'" v-model="form[item.prop]" v-bind:objectsUrl="item.objectsUrl" v-bind:id="item.fieldName" v-bind:label="item.fieldName")
            kalix-docs-object-select(v-else-if="item.type==='docsObject'" v-model="form[item.prop]" v-bind:objectsUrl="item.objectsUrl" v-bind:value="item.fieldName" v-bind:label="item.fieldName")
            org-tree.inline(v-else-if="item.type==='orgTree'" v-model="form[item.prop]" v-bind:isAll="item.isAll")
            kalix-query-date-picker(v-else-if="item.type==='date'" v-model="form[item.prop]")
            <!--kalix-query-date-picker(v-else-if="show" v-model="form[item.prop]")-->
            kalix-query-date-picker(v-else-if="item.type==='year'" v-model="form[item.prop]" type="year")
            kalix-query-datetime-picker(v-else-if="item.type==='datetime'" v-model="form[item.prop]")
            kalix-dict-select(v-else-if="item.type==='dict'" v-bind:appName="item.appName" v-bind:dictType="item.dictType" v-model="form[item.prop]")
            Kalix-map-select(v-else-if="item.type==='map'" v-bind:appName="item.appName" v-bind:prop="item.prop" v-bind:selectUrl="item.selectUrl" v-model="form[item.prop]"
            v-bind:selectedOptions="item.options" v-on:getProp="getProp" v-on:input="getSelectValue" v-bind:stopChange="item.stopChange")
            el-input.min(v-else-if="item.type==='age'" v-model="form[item.prop]" type="number" placeholder="开始年龄段" min="0")
            el-input.min.end-time(v-else-if="item.type==='ages'" v-model="form[item.prop]" type="number" placeholder="结束年龄段" min="1")
            el-input(v-else v-model="form[item.prop]")
          el-form-item.right(style="margin-left: 1%;")
            el-button.icon-search(type="primary" v-on:click="onSubmitClick")
              i.iconfont.icon-chaxun1(style="padding-right:3px;")
              span(style="font-size: 14px;") 查询
            el-button.icon-reset(type="success" v-on:click="onResetClick")
              i.iconfont.icon-zhongzhi(style="padding-right:3px;")
              span(style="font-size: 14px;") 重置
</template>

<script>
  import {strToUnicode} from '../../common/unicode-convert'
  import {isEmptyObject} from '../../common/util'
  import EventBus from '../../common/eventbus'
  import {ON_SEARCH_BUTTON_CLICK} from './event.toml'
  import QueryDatepicker from './date/datepicker'
  import QueryDatetimepicker from './date/datetimepicker'
  import BaseDictSelect from './baseDictSelect'
  import BaseMapSelect from './baseMapSelect'

  export default {
    name: 'kalix-search',
    activated() {
      console.log('[kalix] base search ' + '  is activated')
    },
    deactivated() {
      console.log('[kalix] base search ' + '  is deactivated')
    },
    data() {
      return {
        form: {},
        isSearch: false,
        queryStrs: {},
        show: false
      }
    },
    props: {
      bizKey: {
        type: String,
        default: ''
      },
      searchForm: {
        type: Object
      },
      title: {
        type: String,
        default: ''
      },
      searchFields: { // 搜索查询的字段
        type: Array
      },
      formRules: null,
      submitBefore: {
        type: Function
      }
    },
    created() {
      this._currentForm()
    },
    mounted() {
    },
    methods: {
      bindFormDataType(e) {
        this.formDataType[e.prop] = e.dataType || e.type || 'string'
        this.formDataField[e.prop] = e.field || null
      },
      bindCls(label) {
        if (label) {
          return label.length > 0 ? `${this.bizKey}-${label}` : ''
        }
        return ''
      },
      _currentForm() {
        this.isSearchFrom = false
        this.formDataType = {}
        this.formDataField = {}
        if (!isEmptyObject(this.searchForm)) {
          this.form = this.searchForm
          this.isSearchFrom = true
        } else {
          this.searchFields.forEach(item => {
            this.bindFormDataType(item)
            if (item.defaultVal) {
              this.$set(this.form, item.prop, item.defaultVal)
            } else {
              this.$set(this.form, item.prop, null)
            }
          })
        }
      },
      // 提交查询
      onSubmitClick() {
        if (this.submitBefore && typeof (this.submitBefore) === 'function') {
          this.submitBefore(this, () => {
            this.submitAction()
          })
        } else {
          this.submitAction()
        }
      },
      submitAction() {
        this.$refs.searchForm.validate((valid) => {
          if (valid) {
            console.log('onSubmitClick', this.form)
            let requestDatas = []
            for (let item in this.form) {
              const itemVal = this.form[item]
              if (this.isSearchFrom) {
                let dataType = typeof itemVal
                let field = item
                let docItems = document.getElementsByClassName(`${this.bizKey}-${item}`)
                if (docItems && docItems.length === 1) {
                  //  如果 docItems 存在并且只有一个，获取当前字段的数据类型并赋值给 dataType
                  let docItem = docItems[0]
                  dataType = docItem.getAttribute('data-type')
                  field = docItem.getAttribute('field')
                  if (field && itemVal.length) {
                    let key = `"${field}"`
                    let val = `${itemVal}`
                    switch (dataType) {
                      case 'string':
                        //  如果 dataType 是 String 格式，key 和 val 增加双引号
                        key = `"%${field}%"`
                        if (this.isChinese(itemVal)) {
                          val = `"${strToUnicode(itemVal)}"`
                        } else {
                          val = `"${itemVal}"`
                        }
                        break
                      case 'datetime':
                        //  如果 dataType 是 Datetime 格式，val 增加双引号
                        key = `"${field}"`
                        val = `"${itemVal}"`
                        break
                      case 'orgTree':
                        val = `${itemVal}`
                        break
                    }
                    requestDatas.push(`${key}: ${val}`)
                  }
                }
              } else {
                if (itemVal !== undefined && itemVal !== null) {
                  let field = item
                  let key = `"${field}"`
                  let val = `"${itemVal}"`
                  if (this.formDataField[item]) {
                    key = `"${this.formDataField[item]}"`
                  } else if (this.formDataType[item] === 'string') {
                    key = `"%${field}%"`
                  }
                  switch (this.formDataType[item]) {
                    case 'string':
                      if (this.isChinese(itemVal)) {
                        val = `"${strToUnicode(itemVal)}"`
                      }
                      break
                    case 'number':
                      val = `${itemVal}`
                      break
                  }
                  requestDatas.push(`${key}: ${val}`)
                }
              }
            }
            let searchObj = {}
            if (requestDatas.length > 0) {
              searchObj.jsonStr = `{${requestDatas.join(',')}}`
            }
            this.isSearch = true
            // 兼容多个basetable查询情况
            let searchObjAll = {}
            if (this.bizKey) {
              searchObjAll.searchObj = searchObj
              searchObjAll.bizKey = this.bizKey
            } else {
              searchObjAll = searchObj
            }
            // EventBus.$emit(ON_SEARCH_BUTTON_CLICK, searchObj)
            EventBus.$emit(ON_SEARCH_BUTTON_CLICK, searchObjAll)
          } else {
            console.log('ERR')
          }
        })
      },
      // 重置搜索框
      onResetClick() {
        this.$refs.searchForm.resetFields()
        if (this.isSearch) {
          EventBus.$emit(ON_SEARCH_BUTTON_CLICK, {})
          this.isSearch = false
        }
      },
      // 是否是数字
      isNumberData(_data) {
        const regNumber = /^[0-9]+.?[0-9]*$/
        return regNumber.test(_data)
      },
      isChinese(str) {
        let strExp = new RegExp(/^[\u4E00-\u9FA5]+$/)
        if (strExp.test(str)) {
          return true
        }
        return false
      },
      getProp(val) {
        this.$emit('getProp', val)
      },
      getSelectValue(val) {
        this.$emit('selectVal', val)
      }
    },
    components: {
      KalixQueryDatePicker: QueryDatepicker,
      KalixQueryDatetimePicker: QueryDatetimepicker,
      KalixDictSelect: BaseDictSelect,
      KalixMapSelect: BaseMapSelect
    },
    computed: {},
    watch: {
      // 'form[select]'() {
      //   if (this.form.date === '') {
      //     this.show = false
      //     console.log('123')
      //   } else {
      //     this.show = true
      //   }
      // }
    }
  }
</script>

<style lang='stylus' type='text/stylus'>
  @import "~@/assets/stylus/color.styl"
  @import "~@/assets/stylus/kalix-color.styl"
  .kalix-search
    margin: 8px 25px;
    background-color $background-color-1
    margin-right 0
    .kalix-search-hd
      padding 0 2px
      .line
        width 0.5%
        background-color #3465cb
        height 20px
        display: inline-block;
      .test
        margin-left: 2.5%;
        position: absolute;
        height 20px
        line-height 20px
        font-size 14px
    .kalix-search-bd
      font-size 0
      padding 8px 0px
      text-align left
      .search-container
        margin-bottom -12px
    .el-form-item
      margin-bottom 0
      display inline-block
      width 23%
      .el-form-item__label
        float: left;
        text-align: right
        font-size: 22px;
        color: #606266
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        width 37%
        line-height 31px
        font-weight bold
      .el-form-item__content
        display: inline-block;
        vertical-align: top;
        width 63%
        line-height 30px
      .el-input__inner
        color #3465cb;
        border-radius: 3px;
        border: 2px solid #3465cb;
        -webkit-box-sizing: border-box;
        font-size: 20px;
        font-weight bold
        height: 30px;
        line-height: 30px;
        outline: 0;
        padding: 0 22px;
        -webkit-transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
        transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
        width: 100%;
      .el-input__icon
        line-height 31px
        width auto
      .min
        height 24px
        line-height 24px
      .end-time
        margin-left 26%
    .el-button
      padding: 8px 12px;
      .iconfont
        font-size 14px

  .short
    /*width 32%*/
    height 34px
    display inline-block
    .iconfont
      font-size 14px

  .icon-search
  .icon-reset
    height 25px
    padding 0 10px !important

  .icon-search
    margin-left 24%
    background-color #1c6086
    color white

  .icon-reset
    margin-top 4px !important
</style>

