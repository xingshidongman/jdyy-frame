<template lang="pug">
  kalix-dialog.user-add(title='修改' bizKey="jdyyVis" ref="kalixBizDialog" v-bind:formModel.sync="formModel" v-bind:targetURL="targetURL")
    div.el-form(slot="dialogFormSlot")
      el-form-item(label="患者" prop="pid" v-bind:label-width="labelWidth")
        kalix-select.tests(v-model="formModel.pid" v-bind:requestUrl="JdyypatientsURL" appName="visPat" placeholder="请选择患者" readonly style="width: 60%;")
      el-form-item(label="诊断" prop="diagnosis" v-bind:label-width="labelWidth" )
        el-cascader.tests(placeholder="请选择诊断信息" :options="options" filterable @change="getDia")
      el-form-item(label="术式" prop="surgical" v-bind:label-width="labelWidth" )
        el-cascader.tests(placeholder="请选择术式信息" :options="items" filterable @change="getSur")
      el-form-item(label="手术日期" prop="operationdate" v-bind:label-width="labelWidth" )
        kalix-datepicker-simple.tests(v-model="formModel.operationDate" type="datetime" placeholder="选择日期" format="yyyy-MM-dd" style="width: 60%;")
      el-form-item(label="分期" prop="periodization" v-bind:label-width="labelWidth" )
        el-select.tests(v-model="formModel.periodization" placeholder="请选择")
          el-option(label="内科" value="内科")
          el-option(label="外科" value="外科")
</template>

<script type="text/ecmascript-6">
  import {JdyyvisitURL, JdyysurURL, JdyydiaURL, JdyypatientsURL} from '../../config.toml'
  import FormModel from './model'
  export default {
    name: 'JdyyVisEdit',
    components: {},
    data() {
      return {
        downloadURL: JdyyvisitURL,
        formModel: Object.assign({}, FormModel),
        labelWidth: '120px',
        fileList: [],
        columnParam: undefined,
        albumname: '',
        options: [],
        items: [],
        filePathArr: [],
        fileNameArr: [],
        rules: {
          // diagnosis: [{required: true, message: '请输入诊断', trigger: 'change'}],
          // surgical: [{required: true, message: '请输入术式', trigger: 'change'}],
          // dateOperation: [{required: true, message: '请输入手术日期', trigger: 'change'}],
          // periodization: [{required: true, message: '请输入分期', trigger: 'change'}]
        },
        JdyypatientsURL: JdyypatientsURL,
        targetURL: JdyyvisitURL
      }
    },
    mounted () {
      this.getDiaCascader()
      this.getSurCascader()
    },
    methods: {
      init(dialogOption) {
        console.log('---------dialogOption------------', dialogOption)
      },
      setGroup(item) {
        this.formModel.downlosd = item.albumname
      },
      getDiaCascader() { // 获取诊断信息并以级联形式显示
        console.log('getDiaCascader========================')
        this.axios.request({
          method: 'GET',
          url: JdyydiaURL + '/getDiaCascader'
        }).then(res => {
          console.log('Request-Cascader-Success==============', res.data.data)
          this.options = res.data.data
        })
      },
      getSurCascader() { // 获取术式信息并以级联形式显示
        console.log('getSurCascader========================')
        this.axios.request({
          method: 'GET',
          url: JdyysurURL + '/getSurCascader'
        }).then(res => {
          console.log('Request-getSurCascader-Success==============', res.data.data)
          this.items = res.data.data
        })
      },
      getDia(val) { // 通过级联获取数据后转成字符串
        console.log('val===========================', val)
        this.formModel.diagnosis = val.toString()
      },
      getSur(val) { // 通过级联获取数据后转成字符串
        this.formModel.surgical = val.toString()
      }
    }
  }
</script>
<style scoped lang="stylus" type="text/stylus">
  .el-form
    width 60%
    margin auto
    .el-form-item
      width 100%
      display inline-block
    .tests
      display: inline-block;
      position: relative;
      width: 60%;
</style>
