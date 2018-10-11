<!--
描述：table上方查询组件的二次封装
开发人：sunlf
开发日期：2017年8月17日

2017年8月31日
-->

<template lang="pug">
  div.kalix-search
    div.kalix-search-bd
      el-form.search-container(ref="searchForm" v-bind:model="form" v-bind:inline="true" label-width="80px")
        slot(name="searchFormSlot")
          el-form-item.short(v-for="item in searchFields" v-bind:label="item.label" v-bind:prop="item.prop" v-bind:key="item.prop")
            el-select(v-if="item.type==='select'" v-model="form[item.prop]" v-bind:class="bindCls(item.cls)" v-bind:data-type="item.dataType" v-bind:clearable="item.clearable")
              el-option(v-for="option in item.options" v-bind:key="option.value" v-bind:label="option.label" v-bind:value="option.value")
            el-input-number(v-else-if="item.type==='number'" v-model="form[item.prop]" v-bind:class="bindCls(item.cls)" v-bind:data-type="item.dataType")
            org-tree.inline(v-else-if="item.type==='orgTree'" v-model="form[item.prop]" v-bind:isAll="item.isAll")
            kalix-query-date-picker(v-else-if="item.type==='date'" v-model="form[item.prop]")
            kalix-query-date-picker(v-else-if="item.type==='year'" v-model="form[item.prop]" type="year")
            kalix-query-datetime-picker(v-else-if="item.type==='datetime'" v-model="form[item.prop]")
            kalix-dict-select(v-else-if="item.type==='dict'" v-bind:appName="item.appName" v-bind:dictType="item.dictType" v-model="form[item.prop]")
            Kalix-map-select(v-else-if="item.type==='map'" v-bind:appName="item.appName" v-bind:prop="item.prop" v-bind:selectUrl="item.selectUrl" v-model="form[item.prop]"
              v-bind:selectedOptions="item.options" v-on:getProp="getProp" v-on:input="getSelectValue" v-bind:stopChange="item.stopChange")
            input(v-else-if="item.type==='inputHidden'" v-model="form[item.prop]" type="hidden")
            el-input(v-else v-model="form[item.prop]")
          el-form-item.right
            el-button(type="primary" v-on:click="onSubmitClick")
              i.iconfont.icon-query
              | 查询
            el-button(type="success" v-on:click="onResetClick")
              i.iconfont.icon-reset
              | 重置
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
        queryStrs: {}
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
      formRules: null
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
        this.$refs.searchForm.validate((valid) => {
          if (valid) {
            console.log('onSubmitClick')
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
                if (itemVal) {
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
    computed: {
    },
    watch: {}
  }
</script>

<style lang='stylus' type='text/stylus'>
  @import "../../assets/stylus/color.styl"
  @import "../../assets/stylus/kalix-color.styl"
  .kalix-search
    padding  10px
    width 100%
    background-color $background-color-1
    .kalix-search-hd
      background-color $plank-title-background-color
      color $plank-title-color
      line-height 5%
      padding 0 2%
      text-align left
      width 100%
      height 500px
    .kalix-search-bd
      /*border-top 1px solid border-color_1*/
      font-size 0
      /*padding 1% 2%*/
      text-align left
      width 100%
      .search-container
        margin-bottom -12px
        /*width 100%*/
    .el-form-item
      margin-bottom 12px
      /*width 18%*/
      display inline-block
      .el-form-item__label
          float: left;
          text-align: center
          font-size: 14px;
          color:  #3465cb
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          /*width 30%*/
      .el-form-item__content
          display: inline-block;
          vertical-align: top;
          /*width: 70%;*/
          /*float right*/
        .el-input__inner
            border-radius: 4px;
            border: 1px solid #3465cb;
            -webkit-box-sizing: border-box;
            display: inline-block;
            font-size: inherit;
            height: 40px;
            line-height: 40px;
            outline: 0;
            padding: 0 15px;
            -webkit-transition: border-color .2s cubic-bezier(.645,.045,.355,1);
            transition: border-color .2s cubic-bezier(.645,.045,.355,1);
            width: 100%;
    .el-button
      .iconfont
        font-size 14px
  .short
    /*width 32%*/
    display inline-block
  .right
    margin-left 80px
    display block
</style>
