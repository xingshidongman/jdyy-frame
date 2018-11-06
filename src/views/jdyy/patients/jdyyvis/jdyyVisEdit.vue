<template lang="pug">
  kalix-dialog.user-add(title='修改' bizKey="jdyyVis" ref="kalixBizDialog" v-bind:formModel.sync="formModel" v-bind:targetURL="targetURL")
    div.el-form(slot="dialogFormSlot")
      el-form-item(label="患者" prop="pname" v-bind:label-width="labelWidth")
        el-input.tests(v-model="formModel.pname" readonly)
      el-form-item(label="诊断" prop="diagnosis" v-bind:label-width="labelWidth" )
        el-cascader.tests(v-model="diaCascader" placeholder="请选择诊断信息" :options="options" filterable @change="getDia" v-bind:show-all-levels="false" change-on-select)
      el-form-item(label="术式" prop="surgical" v-bind:label-width="labelWidth" )
        el-cascader.tests(v-model="surCascader" placeholder="请选择术式信息" :options="items" filterable @change="getSur" v-bind:show-all-levels="false" change-on-select)
      el-form-item(label="手术日期" prop="operationdate" v-bind:label-width="labelWidth" )
        el-date-picker(v-model="formModel.operationDate" type="date" placeholder="选择日期" value-format="yyyy/M/d" format="yyyy/M/d" style="width: 60%;")
      el-form-item(label="分期" prop="periodization" v-bind:label-width="labelWidth" )
        el-select.tests(v-model="formModel.periodization" placeholder="请选择")
          el-option(label="内科" value="内科")
          el-option(label="外科" value="外科")
      el-form-item(label="分型" prop="parting" v-bind:label-width="labelWidth" v-bind:rules="rules.parting")
        el-input.tests(v-model="formModel.parting")
</template>

<script type="text/ecmascript-6">
  import {JdyyvisitURL, JdyysurURL, JdyydiaURL} from '../../config.toml'
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
        option: [],
        filePathArr: [],
        fileNameArr: [],
        rules: {},
        targetURL: JdyyvisitURL,
        diaCascader: [],
        surCascader: []
      }
    },
    mounted () {
      this.getDiaCascader()
      this.getSurCascader()
    },
    methods: {
      init(dialogOption) {
        console.log('---------dialogOption------------', dialogOption)
        console.log('this.formModel.diagnosis==================', this.formModel.diagnosisCode)
        console.log('this.formModel.surgical==================', this.formModel.surgicalCode)
        let diaCode = this.formModel.diagnosisCode // 诊断级联回显
        for (let i = 1; i <= diaCode.length / 2; i++) {
          if (diaCode.substring((i - 1) * 2, i * 2) !== '00') {
            let a = ''
            for (let j = 0; j < (diaCode.length - i * 2); j++) {
              a += '0'
            }
            this.diaCascader.push(diaCode.substring(0, i * 2) + a)
          }
        }
        console.log('diaCascader+++++++++++++++++++++++', this.diaCascader)
        let surCode = this.formModel.surgicalCode // 术式级联回显
        for (let i = 1; i <= surCode.length / 2; i++) {
          if (surCode.substring((i - 1) * 2, i * 2) !== '00') {
            let a = ''
            for (let j = 0; j < (surCode.length - i * 2); j++) {
              a += '0'
            }
            this.surCascader.push(surCode.substring(0, i * 2) + a)
          }
        }
        console.log('surCascader+++++++++++++++++++++++', this.surCascader)
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
        console.log('val===========================', val.toString().substring(val.toString().lastIndexOf(',') + 1, val.toString().length))
        this.formModel.diagnosisCode = val.toString().substring(val.toString().lastIndexOf(',') + 1, val.toString().length)
        this.axios.request({
          method: 'GET',
          url: JdyydiaURL + '/getCodeByContent',
          params: {
            code: this.formModel.diagnosisCode
          }
        }).then(res => {
          console.log('formModel.diagnosis==============================', res.data.data)
          this.formModel.diagnosis = res.data.data[0].content
        })
      },
      getSur(val) { // 通过级联获取数据后转成字符串
        this.formModel.surgicalCode = val.toString().substring(val.toString().lastIndexOf(',') + 1, val.toString().length)
        this.axios.request({
          method: 'GET',
          url: JdyysurURL + '/getCodeByContent',
          params: {
            code: this.formModel.surgicalCode
          }
        }).then(res => {
          console.log('formModel.diagnosisCode==============================', res.data.data)
          this.formModel.surgical = res.data.data[0].content
        })
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
