<template lang="pug">
  kalix-dialog.user-add(title='个人信息修改' bizKey="user" ref="kalixBizDialog" v-bind:form-model.sync="formModel" v-bind:targetURL="targetURL")
    div.el-form(slot="dialogFormSlot")
      // 暂无
      el-form-item(label="邮箱" prop="email" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.email")
      kalix-phone-form-item(v-model="formModel.phone" v-bind:label-width="labelWidth")
      kalix-mobile-form-item(v-model="formModel.mobile" v-bind:label-width="labelWidth")
      el-form-item(label="地址" prop="address" v-bind:rules="rules.address" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.address")
      el-form-item(label="谱属地" prop="apanage" v-bind:rules="rules.apanage" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.apanage")
      el-form-item(label="祖籍" prop="ancestralhome" v-bind:rules="rules.ancestralhome" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.ancestralhome")
</template>

<script type="text/ecmascript-6">
  import FormModel from './model'
  import {usersURL} from '../../config.toml'

  export default {
    name: 'AdminUserEdit',
    data() {
      return {
        formModel: Object.assign({}, FormModel),
        rules: {
          userType: [{type: 'number', required: true, message: '请选择用户类别', trigger: 'change'}],
          code_xh: [{required: true, message: '请输入学生学号', trigger: 'blur'}],
          code_qy: [{required: true, message: '请输入企业组织机构代码', trigger: 'blur'}],
          name: [{required: true, message: '请输入名称', trigger: 'blur'}],
          loginName: [{required: true, message: '请输入登录名', trigger: 'blur'}],
          email: [
            {required: true, message: '请输入邮箱地址', trigger: 'blur'},
            {type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change'}
          ]
        },
        targetURL: usersURL,
        labelWidth: '140px'
      }
    },
    methods: {
      open(obj) {
        this.$refs.kalixBizDialog.open('', true, obj)
      },
      change(event) {
        this.$refs.kalixBizDialog.$refs.dialogForm.clearValidate()
      }
    }
  }
</script>
