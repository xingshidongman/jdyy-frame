<template lang="pug">
  kalix-dialog.user-add(bizKey="user" ref="kalixBizDialog" v-bind:formModel.sync="formModel" v-bind:targetURL="targetURL")
    div.el-form(slot="dialogFormSlot")
      el-form-item(label="姓名" prop="name" v-bind:rules="rules.name" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.name")
      <!--el-form-item(label="别名" prop="idCard" v-bind:rules="rules.idCard" v-bind:label-width="labelWidth")-->
        <!--el-input(v-model="formModel.idCard")-->
      el-form-item(label="性别" prop="sex" v-bind:label-width="labelWidth")
        el-radio-group(v-model="formModel.sex")
          el-radio(label="男")
          el-radio(label="女")
      el-form-item(label="邮箱" prop="email" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.email")
      <!--kalix-phone-form-item(v-model="formModel.phone" v-bind:label-width="labelWidth")-->
      kalix-mobile-form-item(v-model="formModel.mobile" v-bind:label-width="labelWidth")
      el-form-item(label="登录名" prop="loginName" v-bind:rules="rules.loginName" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.loginName")
      el-form-item(label="密码" prop="password" v-bind:rules="rules.password" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.password" type="password")
      el-form-item(label="确认密码" prop="confirmPassword" v-bind:rules="rules.confirmPassword" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.confirmPassword" type="password")
      // el-form-item(label="状态" prop="available" v-bind:label-width="labelWidth")
        el-switch(v-model="formModel.available" active-text="停用" inactive-text="启用" active-value="0" inactive-value="1")
      <!--el-form-item(label="出生日期" prop="birthdate" v-bind:label-width="labelWidth")-->
        <!--kalix-datepicker-simple(v-model="formModel.birthdate" type="datetime" placeholder="选择出生日期" format="yyyy-MM-dd" style="width: 100%;")-->
      el-form-item(label="年龄" prop="age" v-bind:rules="rules.age" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.age")
      el-form-item(label="职位" prop="position" v-bind:rules="rules.position" v-bind:label-width="labelWidth")
        kalix-select(v-model="formModel.position" v-bind:requestUrl="rolesURL" appName="position" id="name" placeholder="请选择职位")
      el-form-item(label="所属主管医生" prop="doctor" v-bind:rules="rules.doctor" v-bind:label-width="labelWidth")
        <!--kalix-select(v-model="formModel.doctor" v-bind:requestUrl="targetURL" appName="doctor" id="name" position="主任医生" placeholder="请选择医生")-->
        el-select(v-model="formModel.doctor" filterable placeholder="请选择主管医生")
          el-option(v-for="item in items" :key="items.index" :label="item.label" :value="item.value")
      <!--el-form-item(label="祖籍" prop="ancestralhome" v-bind:rules="rules.ancestralhome" v-bind:label-width="labelWidth")-->
        <!--el-input(v-model="formModel.ancestralhome")-->
      <!--el-form-item(label="审核状态" prop="audit" v-bind:rules="rules.audit" v-bind:label-width="labelWidth")-->
        <!--kalix-dict-select(v-model="formModel.audit" appName="admin" dictType="审核标识" style="width:100%")-->
</template>
<script type="text/ecmascript-6">
  import FormModel from './model'
  import {usersURL, rolesURL} from '../../config.toml'

  export default {
    name: 'AdminUserAdd',
    data() {
      let validatePassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'))
        } else {
          if (this.formModel.confirmPassword !== '') {
            this.$refs.kalixBizDialog.$refs.dialogForm.validateField('confirmPassword')
          }
          callback()
        }
      }
      let validateConfirmPassword = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'))
        } else if (value !== this.formModel.password) {
          callback(new Error('两次输入密码不一致!'))
        } else {
          callback()
        }
      }
      return {
        formModel: Object.assign({}, FormModel),
        rules: {
          name: [{required: true, message: '请输入姓名', trigger: 'blur'}],
          loginName: [{required: true, message: '请输入登录名', trigger: 'blur'}],
          password: [
            {required: true, validator: validatePassword, trigger: 'blur'}
          ],
          confirmPassword: [
            {required: true, validator: validateConfirmPassword, trigger: 'blur'}
          ],
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
    created() {
    },
    mounted() {
      this.findByPosition()
    },
    methods: {
      change(event) {
        this.$refs.kalixBizDialog.$refs.dialogForm.clearValidate()
      },
      findByPosition() {
        console.log('findByPosition=================active')
        this.axios.request({
          method: 'GET',
          url: usersURL + '/findByPosition',
          params: {
            position: '主任医生'
          }
        }).then(res => {
          console.log('findByPosition-res.data.data======================', res.data.data)
          this.items = res.data.data
        })
      }
    }
  }
</script>
