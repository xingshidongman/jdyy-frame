<!--
描述：系统应用-应用管理-查看组件
开发人：yangz
开发日期：2018年01月14日
-->
<template lang="pug">
  kalix-dialog.user-add(title='查看' bizKey="application" ref="kalixBizDialog" v-bind:formModel.sync="formModel" isView)
    div.el-form(slot="dialogFormSlot")
      el-form-item(label="名称" prop="name" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.name" readonly)
      el-form-item(label="应用代码" prop="code" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.code" readonly)
      el-form-item(label="应用图标" prop="iconCls" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.iconCls" readonly)
      el-form-item(label="备注" prop="remark" v-bind:label-width="labelWidth")
        el-input(type="textarea" v-model="formModel.remark" v-bind:rows="3" readonly)
</template>

<script type="text/ecmascript-6">
  import FormModel from './model'

  export default {
    name: 'AdminApplicationView',
    data() {
      return {
        formModel: Object.assign({}, FormModel),
        labelWidth: '140px'
      }
    }
  }
</script>
<style scoped lang="stylus" type="text/stylus">
  .el-form
    width 60%
    margin auto
</style>
