<template lang="pug">
  // kalix-dialog.user-add(bizKey="jdyystat" ref="kalixBizDialog" v-bind:formModel.sync="formModel" v-bind:targetURL="targetURL")
  // div.el-form(slot="dialogFormSlot")
  keep-alive
    el-form(:model="formModel" :rules="rules" ref="formModel")
      el-form-item.line(label="值班医生" prop="doctor" v-bind:rules="rules.doctor" v-bind:label-width="labelWidth")
        el-input.line_input(v-model="formModel.doctor")
      el-form-item.line(label="值班日期" prop="date" v-bind:rules="rules.date" v-bind:label-width="labelWidth")
        kalix-datepicker-simple.line_input(v-model="formModel.date" type="datetime" placeholder="选择日期" format="yyyy-MM-dd" style="width: 100%;")
      el-form-item.line_one(label="原住院人数" prop="protoNum" v-bind:rules="rules.protoNum" v-bind:label-width="labelWidth")
        el-input.input_one(v-model="formModel.protoNum")
      el-form-item.line_one(label="出院人数" prop="outNum" v-bind:rules="rules.outNum" v-bind:label-width="labelWidth")
        el-input.input_one(v-model="formModel.outNum")
      el-form-item.line_one(label="入院（转）入人数" prop="inNum" v-bind:rules="rules.inNum" v-bind:label-width="labelWidth")
        el-input.input_one(v-model="formModel.inNum")
      el-form-item.line_one(label="手术人数" prop="surgeryNum" v-bind:rules="rules.surgeryNum" v-bind:label-width="labelWidth")
        el-input.input_one(v-model="formModel.surgeryNum")
      el-form-item.line_one(label="死亡人数" prop="deathNum" v-bind:rules="rules.deathNum" v-bind:label-width="labelWidth")
        el-input.input_one(v-model="formModel.deathNum")
      el-form-item.line_one(label="现住院人数" prop="nowNum" v-bind:rules="rules.nowNum" v-bind:label-width="labelWidth")
        el-input.input_one(v-model="formModel.nowNum")
      el-form-item.line_one(label="重病人数" prop="illNum" v-bind:rules="rules.illNum" v-bind:label-width="labelWidth")
        el-input.input_one(v-model="formModel.illNum")
      div.button(type="primary" size="large" v-on:click="submitForm") 保存
</template>
<script type="text/ecmascript-6">
  import FormModel from './model'
  import {JdyystatURL} from '../../config.toml'

  export default {
    name: 'kalix-jdyy-jdyytentry',
    data() {
      return {
        formModel: Object.assign({}, FormModel),
        rules: {
          doctor: [{required: true, message: '请输入值班医生', trigger: 'blur'}],
          date: [{required: true, message: '请选择值班日期', trigger: 'blur'}],
          protoNum: [{required: true, message: '请输入原住院人数', trigger: 'blur'}],
          outNum: [{required: true, message: '请输入出院人数', trigger: 'blur'}],
          inNum: [{required: true, message: '请输入入院（转）入人数', trigger: 'blur'}],
          surgeryNum: [{required: true, message: '请输入手术人数', trigger: 'blur'}],
          deathNum: [{required: true, message: '请输入死亡人数', trigger: 'blur'}],
          nowNum: [{required: true, message: '请输入现住院人数', trigger: 'blur'}],
          illNum: [{required: true, message: '请输入重病人数', trigger: 'blur'}]
        },
        targetURL: JdyystatURL,
        labelWidth: '140px'
      }
    },
    created() {
    },
    methods: {
      submitForm() {
        this.$refs['formModel'].validate((valid) => { // 对整个表单进行校验的方法，参数为一个回调函数
          if (valid) {
            this.$http.request({ // 满足验证条件，向后台发送请求
              method: 'POST',
              url: '/camel/rest/jdyy/stats',
              data: this.formModel
            }).then(response => {
              console.log(response.data.msg) // 添加成功
              this.$refs['formModel'].resetFields() // 重置信息
            })
          } else {
            console.log('error submit!!') // 不满足表单的校验，不能向后台发送请求
            return false
          }
        })
      }
    }
  }
</script>
<style scoped lang="stylus" type="text/stylus">
  .el-form-item__label
    text-align: center
    float: left
    font-size: 14px
    color: #3465cb
    line-height: 40px
    padding: 0 12px 0 0
    -webkit-box-sizing: border-box
    box-sizing: border-box
.el-form
  width 60%
  margin 30px auto
  .line
    width 50%
    display inline-block
    .el-form-item__label
      text-align: center
      float: left
      font-size: 14px
      color: #3465cb
      line-height: 40px
      padding: 0 12px 0 0
      -webkit-box-sizing: border-box
      box-sizing: border-box
    .line_input
      width 90%
  .line_one
    width 100%
    background-color #9E9E9E
    .input_one
      width 60%
      background-color #9E9E9E
      border 1px solid #3465cb
      margin-left 20%
      height 40px
      line-height 40px
  .button
    margin auto
    width 100px
    text-align center
    background-color #3465cb
    color white
    padding 10px 0
    font-size 1vw
</style>
