<template lang="pug">
  kalix-dialog.user-add(title='个人信息修改' bizKey="user" ref="kalixBizDialog" v-bind:form-model.sync="formModel"
    v-bind:targetURL="targetURL" v-bind:submitBefore="submitBefore" )
    div.el-form(slot="dialogFormSlot" style="width:60%;margin:auto;")
      el-form-item(label="姓名" prop="name" v-bind:rules="rules.name" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.name")
      el-form-item(label="别名" prop="idCard" v-bind:rules="rules.idCard" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.idCard")
      el-form-item(label="性别" prop="sex" v-bind:label-width="labelWidth")
        el-radio-group(v-model="formModel.sex")
          el-radio(label="男")
          el-radio(label="女")
      el-form-item(label="邮箱" prop="email" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.email")
      kalix-phone-form-item(v-model="formModel.phone" v-bind:label-width="labelWidth")
      kalix-mobile-form-item(v-model="formModel.mobile" v-bind:label-width="labelWidth")
      el-form-item(label="登录名" prop="loginName" v-bind:rules="rules.loginName" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.loginName")
      <!--el-form-item(label="密码" prop="password" v-bind:rules="rules.password" v-bind:label-width="labelWidth")-->
        <!--el-input(v-model="formModel.password" type="password")-->
      <!--el-form-item(label="确认密码" prop="confirmPassword" v-bind:rules="rules.confirmPassword" v-bind:label-width="labelWidth")-->
        <!--el-input(v-model="formModel.confirmPassword" type="password")-->
      el-form-item(label="状态" prop="available" v-bind:label-width="labelWidth")
        el-switch(v-model="formModel.available" active-text="停用" inactive-text="启用" active-value="0" inactive-value="1")
      el-form-item(label="出生日期" prop="birthdate" v-bind:label-width="labelWidth")
        kalix-datepicker-simple(v-model="formModel.birthdate" type="datetime" placeholder="选择出生日期" format="yyyy-MM-dd" style="width: 100%;")
      el-form-item(label="身份证号" prop="idNumber" v-bind:rules="rules.idNumber" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.idNumber")
      el-form-item(label="地址" prop="address" v-bind:rules="rules.address" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.address")
      el-form-item(label="谱属地" prop="apanage" v-bind:rules="rules.apanage" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.apanage")
      el-form-item(label="祖籍" prop="ancestralhome" v-bind:rules="rules.ancestralhome" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.ancestralhome")
</template>

<script type="text/ecmascript-6">
  import FormModel from './model'
  import {usersURL, rolesURL} from '../../config.toml'

  export default {
    name: 'AdminUserEdit',
    data() {
      return {
        formModel: Object.assign({}, FormModel),
        rules: {
          name: [{required: true, message: '请输入姓名', trigger: 'blur'}],
          loginName: [{required: true, message: '请输入登录名', trigger: 'blur'}],
          email: [
            {required: true, message: '请输入邮箱地址', trigger: 'blur'},
            {type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change'}
          ]
        },
        targetURL: usersURL,
        rolesURL: rolesURL,
        labelWidth: '140px',
        items: []
      }
    },
    methods: {
      open(obj) {
        this.$refs.kalixBizDialog.open('', true, obj)
      },
      submitBefore(baseDialog, callBack) {
        baseDialog.formModel.password = null
        callBack()
      }
    }
  }
</script>

