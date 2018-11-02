<template lang="pug">
  kalix-dialog.user-add(title='添加' bizKey="jdyyVis" ref="kalixBizDialog" v-bind:formModel.sync="formModel" v-bind:targetURL="targetURL")
    div.el-form(slot="dialogFormSlot")
      el-form-item(label="患者" prop="pname" v-bind:rules="rules.pid" v-bind:label-width="labelWidth")
        el-autocomplete(v-model="formModel.pname" :fetch-suggestions="querySearchAsync" placeholder="请输入患者姓名" @select="handleSelect")
      el-form-item(label="诊断" prop="diagnosis" v-bind:label-width="labelWidth" v-bind:rules="rules.diagnosis" )
        el-cascader.tests(placeholder="请选择诊断信息" :options="options" filterable @change="getDia"  v-bind:show-all-levels="false" change-on-select)
      el-form-item(label="术式" prop="surgical" v-bind:label-width="labelWidth" v-bind:rules="rules.surgical" )
        el-cascader.tests(placeholder="请选择术式信息" :options="items" filterable @change="getSur" v-bind:show-all-levels="false" change-on-select)
      el-form-item(label="手术日期" prop="dateOperation" v-bind:label-width="labelWidth" v-bind:rules="rules.dateOperation")
        el-date-picker(v-model="formModel.operationDate" type="date" placeholder="选择日期" value-format="yyyy/MM/dd" style="width: 50%;")
      el-form-item(label="分期" prop="periodization" v-bind:label-width="labelWidth" v-bind:rules="rules.periodization")
        el-select.tests(v-model="formModel.periodization" placeholder="请选择")
          el-option(label="内科" value="内科")
          el-option(label="外科" value="外科")
      el-form-item(label="分型" prop="parting" v-bind:label-width="labelWidth" v-bind:rules="rules.parting")
        el-input.tests(v-model="formModel.parting")
</template>

<script type="text/ecmascript-6">
  import {JdyyvisitURL, JdyysurURL, JdyypatientsURL, JdyydiaURL} from '../../config.toml'
  import FormModel from './model'
  export default {
    name: 'JdyyVisAdd',
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
        rules: {
          pid: [{required: true, message: '请输入患者', trigger: 'change'}]
          // diagnosis: [{required: true, message: '请输入诊断', trigger: 'change'}],
          // surgical: [{required: true, message: '请输入术式', trigger: 'change'}],
          // dateOperation: [{required: true, message: '请输入手术日期', trigger: 'change'}],
          // periodization: [{required: true, message: '请输入分期', trigger: 'change'}]
        },
        targetURL: JdyyvisitURL,
        JdyypatientsURL: JdyypatientsURL,
        restaurants: [],
        timeout: null
      }
    },
    mounted() {
      this.getDiaCascader() // 获取诊断信息并以级联形式显示
      this.getSurCascader() // 获取术式信息并以级联形式显示
      this.loadAll() // 获取病员信息
    },
    methods: {
      init(dialogOption) {
        console.log('---------dialogOption------------', dialogOption)
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
          console.log('formModel.diagnosisCode==============================', res.data.data)
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
      },
      loadAll() { // 获取病员信息
        this.axios.request({
          method: 'GET',
          url: JdyypatientsURL + '/getPatientsByAutocomplete'
        }).then(res => {
          console.log('getPatientsByAutocomplete======================', res.data.data)
          this.restaurants = res.data.data
        })
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants

        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          cb(results)
        }, 3000 * Math.random())
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
        }
      },
      handleSelect(item) {
        console.log('item===========================', item)
        this.formModel.pid = item.vpid
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
        width: 50%;
</style>
