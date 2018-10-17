<!--
描述：系统应用-用户管理-查看组件
开发人：hqj
开发日期：2017年12月11日
-->
<template lang="pug">
  kalix-dialog.user-add(bizKey="user" ref="kalixBizDialog" v-bind:formModel.sync="formModel" isView)
    div.el-form(slot="dialogFormSlot" style="width:60%;margin:auto;")
      el-form-item(label="手机" prop="mobile" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.mobile" readonly)
      el-form-item(label="登录名" prop="loginName"  v-bind:label-width="labelWidth")
        el-input(v-model="formModel.loginName" readonly)
      el-form-item(label="状态" prop="available" v-bind:label-width="labelWidth")
        template(v-if="formModel.available === 1")
          | 启用
        template(v-else)
          | 停用
      <!--el-form-item(label="出生日期" prop="birthdate" v-bind:label-width="labelWidth")-->
        <!--kalix-datepicker-simple(v-model="formModel.birthdate" type="datetime" placeholder="选择出生日期" format="yyyy-MM-dd" style="width: 100%;")-->
      el-form-item(label="年龄" prop="age"  v-bind:label-width="labelWidth")
        el-input(v-model="formModel.age" readonly)
      el-form-item(label="职位" prop="position"  v-bind:label-width="labelWidth")
        el-input(v-model="formModel.position" readonly)
      el-form-item(label="所属主管医生" prop="doctor"  v-bind:label-width="labelWidth")
        el-input(v-model="formModel.doctor" readonly)
      <!--el-form-item(label="祖籍" prop="ancestralhome"  v-bind:label-width="labelWidth")-->
        <!--el-input(v-model="formModel.ancestralhome" readonly)-->
      <!--el-form-item(label="审核状态" prop="audit"  v-bind:label-width="labelWidth")-->
        <!--kalix-dict-select(v-model="formModel.audit" appName="admin" dictType="审核标识" style="width:100%" disabled)-->
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
