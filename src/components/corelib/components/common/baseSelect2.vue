<!--
描述：支持服务查询的select组件，通过后台查询返回list<map>，展示到前台
开发人：hqj
开发日期：2018年11月28日
-->
<template lang="pug">
  el-select(v-model='currentValue' v-bind:placeholder='placeholder' v-bind:disabled="disabled" filterable clearable
  v-on:change="onChange" style="width:100%")
    el-option(v-for='item in options' v-bind:key='item[optionKey]' v-bind:value='item[optionKey]' v-bind:label='item[label]')
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'kalix-select2',
    props: {
      optionsUrl: '', // 字典请求服务地址
      optionKey: {
        default: 'value'
      },
      label: {
        default: 'label'
      },
      value: { // 用于绑定v-model
        required: true
      },
      placeholder: {
        type: String,
        default: '请选择'
      },
      jsonStr: '', // 字典查询条件字符串
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        options: [],
        currentValue: this.value
      }
    },
    created() {
      this.fentch()
    },
    watch: {
      jsonStr(newValue) {
        this.fentch()
      },
      value(newValue) {
        this.initCurrentValue()
      },
      optionsUrl(newValue) {
        this.fentch()
      }
    },
    methods: {
      // 组件初始化
      fentch() {
        this.clearData()
        this.getData()
        this.initCurrentValue()
      },
      // 获取数据
      getData() {
        if (!this.optionsUrl) {
          return
        }
        let _params = {
          jsonStr: this.jsonStr,
          page: 1,
          start: 0,
          limit: 200
        }
        this.axios.request({
          method: 'GET',
          url: this.optionsUrl,
          params: _params
        }).then(response => {
          this.options = response.data
          if (response.data.data) {
            this.options = response.data.data
          }
        })
      },
      // 初始值绑定
      initCurrentValue() {
        if (this.value) {
          this.currentValue = this.value
        } else {
          this.currentValue = null
        }
      },
      onChange(value) {
        // 选择的对象
        let _selectOption = {}
        // 选择的对象id(多选用,分隔)
        let _optionIds = null
        let _options = this.options.filter((item) => {
          return item[this.optionKey] === value
        })
        _selectOption = _options[0] || {}
        _optionIds = _selectOption[this.optionKey]
        // 发送事件
        this.$emit('optionSelected', _selectOption)
        // 设置model的数值
        this.$emit('input', _optionIds)
      },
      clearData() {
        this.options = []
      }
    }
  }
</script>
