
<template lang="pug">
  kalix-dialog.user-add(title='查看' bizKey="jdyyVis" ref="kalixBizDialog" v-bind:formModel.sync="formModel" isView)
    div.el-form(slot="dialogFormSlot")
      el-form-item(label="患者" prop="pname" v-bind:label-width="labelWidth")
        el-input.tests(v-model="formModel.pname" readonly)
      el-form-item(label="诊断" prop="diagnosis" v-bind:label-width="labelWidth")
        el-input.tests(v-model="formModel.diagnosis" readonly)
      el-form-item(label="术式" prop="surgical" v-bind:label-width="labelWidth")
        el-input.tests(v-model="formModel.surgical" readonly)
      el-form-item(label="手术日期" prop="operationDate" v-bind:label-width="labelWidth")
        el-input.tests(v-model="formModel.operationDate" readonly)
      el-form-item(label="分期" prop="periodization" v-bind:label-width="labelWidth")
        el-input.tests(v-model="formModel.periodization" readonly)
      el-form-item(label="分型" prop="parting" v-bind:label-width="labelWidth")
        el-input.tests(v-model="formModel.parting" readonly)
</template>

<script type="text/ecmascript-6">
  import FormModel from './model'
  export default {
    name: 'JdyyVisView',
    data() {
      return {
        formModel: Object.assign({}, FormModel),
        labelWidth: '120px'
      }
    },
    methods: {
      init(dialogOption) {
        console.log('---------dialogOption------------', dialogOption)
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">

</style>
