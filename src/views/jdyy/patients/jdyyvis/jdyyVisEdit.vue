<template lang="pug">
  kalix-dialog.user-add(title='修改' bizKey="jdyyVis" ref="kalixBizDialog" v-bind:formModel.sync="formModel" v-bind:targetURL="targetURL")
    div.el-form(slot="dialogFormSlot")
      el-form-item(label="患者" prop="pname" v-bind:label-width="labelWidth")
        <!--kalix-select.tests(v-model="formModel.pid" v-bind:requestUrl="JdyypatientsURL" appName="pid" id="name" placeholder="请选择患者" readonly style="width: 60%;")-->
        el-select.border(v-model="formModel.pname" filterable placeholder="请选择" @change="getQue($event)")
          el-option(v-for="item in option" :key="option.index" :label="item.label" :value="item.value" )
      el-form-item(label="性别" prop="sex" v-bind:label-width="labelWidth" v-bind:rules="rules.sex")
        el-radio-group(v-model="formModel.sex")
          el-radio(label="男")
          el-radio(label="女")
      el-form-item(label="年龄" prop="age" v-bind:label-width="labelWidth" v-bind:rules="rules.age")
        el-input(v-model="formModel.age" type="number")
      el-form-item(label="诊断" prop="diagnosis" v-bind:label-width="labelWidth" )
        el-cascader.tests(placeholder="请选择诊断信息" :options="options" filterable @change="getDia")
      el-form-item(label="术式" prop="surgical" v-bind:label-width="labelWidth" )
        el-cascader.tests(placeholder="请选择术式信息" :options="items" filterable @change="getSur")
      el-form-item(label="手术日期" prop="operationdate" v-bind:label-width="labelWidth" )
        el-date-picker(v-model="formModel.operationDate" type="date" placeholder="选择日期" value-format="yyyy-MM-dd" style="width: 60%;")
      el-form-item(label="分期" prop="periodization" v-bind:label-width="labelWidth" )
        el-select.tests(v-model="formModel.periodization" placeholder="请选择")
          el-option(label="内科" value="内科")
          el-option(label="外科" value="外科")
      el-form-item(label="分型" prop="parting" v-bind:label-width="labelWidth" v-bind:rules="rules.parting")
        el-input(v-model="formModel.parting")
</template>

<script type="text/ecmascript-6">
  import {JdyyvisitURL, JdyypatientsURL, JdyysurURL, JdyydiaURL} from '../../config.toml'
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
        rules: {
          // diagnosis: [{required: true, message: '请输入诊断', trigger: 'change'}],
          // surgical: [{required: true, message: '请输入术式', trigger: 'change'}],
          // dateOperation: [{required: true, message: '请输入手术日期', trigger: 'change'}],
          // periodization: [{required: true, message: '请输入分期', trigger: 'change'}]
        },
        targetURL: JdyyvisitURL
      }
    },
    mounted () {
      this.getDiaCascader()
      this.getSurCascader()
      this.getQueDate()
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
      },
      getQue(value) { // 将pname存到数据库
        for (let i = 0; i < this.option.length; i++) {
          if (this.option[i].value === value) {
            console.log('4564564564564564================', this.option[i].label)
            this.formModel.pname = this.option[i].label
          }
        }
      },
      getQueDate() { // 获取病员信息
        console.log('getQueDate=================')
        this.axios.request({
          method: 'GET',
          url: JdyypatientsURL + '/getDataBySelect',
          params: {
            position: '患者'
          }
        }).then(res => {
          console.log('getQueDate-res.data.data======================', res.data.data)
          this.option = res.data.data
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
