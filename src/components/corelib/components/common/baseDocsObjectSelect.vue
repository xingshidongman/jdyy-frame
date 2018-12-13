<!--
描述：医生信息
开发人：桑杨
开发日期：2018年12月12日
-->
<template lang="pug">
  div
    el-select(v-model='currentValue' v-bind:placeholder='placeholder' v-bind:disabled="disabled" filterable clearable
    v-on:change="onChange")
      el-option(v-for='(object,index) in objects' v-bind:key='index' v-bind:label='object[label]'
      v-bind:value='index')
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'kalix-docs-object-select',
    props: {
      objectsUrl: '', // 对象字典请求服务地址(如：'/camel/rest/users')
      optValue: {
        default: 'value'
      },
      label: {
        default: 'name'
      },
      value: { // 用于绑定v-model
        required: true
      },
      placeholder: {
        type: String,
        default: '请选择'
      },
      multiple: { // 是否允许多选
        type: Boolean,
        default: false
      },
      jsonStr: '', // 对象字典查询条件字符串
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        objects: [],
        currentValue: null
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
      }
    },
    methods: {
      // 组件初始化
      fentch() {
        this.getData()
        this.initCurrentValue()
      },
      // 获取数据
      getData() {
        if (!this.objectsUrl) {
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
          url: this.objectsUrl,
          params: _params
        }).then(response => {
          if (response.data.data) {
            this.objects = response.data.data
            console.log('objects', this.objects)
          }
        })
      },
      // 初始值绑定
      initCurrentValue() {
        this.currentValue = this.value || null
      },
      onChange(value) {
        let _docsObj = this.objects[value]
        if (_docsObj) {
          // 发送事件
          this.$emit('input', _docsObj[this.optValue])
          // this.$emit('objectSelected', _docsObj[this.optValue])
        } else {
          // 设置model的数值
          this.$emit('input', value)
        }
      }
    }
  }
</script>
