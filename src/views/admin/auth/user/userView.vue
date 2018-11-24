<!--
描述：系统应用-用户管理-查看组件
开发人：hqj
开发日期：2017年12月11日
-->
<template lang="pug">
  kalix-dialog.user-add(bizKey="user" ref="kalixBizDialog" v-bind:formModel.sync="formModel" isView)
    div.el-form(slot="dialogFormSlot" style="width:60%;margin:auto;")
      el-form-item(label="姓名" prop="name"  v-bind:label-width="labelWidth")
        el-input(v-model="formModel.name" readonly)
      el-form-item(label="别名" prop="idCard"  v-bind:label-width="labelWidth")
        el-input(v-model="formModel.idCard" readonly)
      el-form-item(label="性别" prop="sex" v-bind:label-width="labelWidth")
        el-radio-group(v-model="formModel.sex" disabled)
          el-radio(label="男")
          el-radio(label="女")
      el-form-item(label="邮箱" prop="email" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.email" readonly)
      el-form-item(label="固定电话" prop="phone" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.phone" readonly)
      el-form-item(label="手机" prop="mobile" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.mobile" readonly)
      el-form-item(label="登录名" prop="loginName"  v-bind:label-width="labelWidth")
        el-input(v-model="formModel.loginName" readonly)
      el-form-item(label="状态" prop="available" v-bind:label-width="labelWidth")
        template(v-if="formModel.available === 1")
          | 启用
        template(v-else)
          | 停用
      el-form-item(label="出生日期" prop="birthdate" v-bind:label-width="labelWidth")
        el-date-picker(v-model="formModel.birthdate" type="date" placeholder="选择出生日期" format="yyyy/M/d" style="width: 100%;" disabled)
      el-form-item(label="身份证号" prop="idNumber"  v-bind:label-width="labelWidth")
        el-input(v-model="formModel.idNumber" readonly)
      el-form-item(label="地址" prop="address"  v-bind:label-width="labelWidth")
        el-input(v-model="formModel.address" readonly)
      el-form-item(label="谱属地" prop="apanage"  v-bind:label-width="labelWidth")
        el-input(v-model="formModel.apanage" readonly)
      el-form-item(label="祖籍" prop="ancestralhome"  v-bind:label-width="labelWidth")
        el-input(v-model="formModel.ancestralhome" readonly)
      el-form-item(label="审核状态" prop="audit"  v-bind:label-width="labelWidth")
        kalix-dict-select(v-model="formModel.audit" appName="admin" dictType="审核标识" style="width:100%" disabled)
</template>

<script type="text/ecmascript-6">
  import FormModel from './model'

  export default {
    name: 'AdminUserView',
    data() {
      return {
        formModel: Object.assign({}, FormModel),
        labelWidth: '140px'
      }
    },
    methods: {
    }
  }
</script>
