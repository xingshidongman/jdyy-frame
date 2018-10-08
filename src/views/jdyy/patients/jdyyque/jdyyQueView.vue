
<template lang="pug">
  kalix-dialog.user-add(title='查询详情页' bizKey="jdyyque" ref="kalixBizDialog" v-bind:formModel.sync="formModel" isView)
    div.el-form(slot="dialogFormSlot")
      el-form-item(label="姓名" prop="name" v-bind:label-width="labelWidth" )
        el-input(v-model="formModel.name" readonly)
      el-form-item(label="性别" prop="sex" v-bind:label-width="labelWidth" )
        el-input(v-model="formModel.sex" type="textarea" readonly)
      el-form-item(label="年龄" prop="age" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.age" readonly)
      el-form-item(label="诊断" prop="diagnosis" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.diagnosis" readonly)
      el-form-item(label="术式" prop="surgical" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.surgical" readonly)
      el-form-item(label="主管医生" prop="directorDoctor" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.directorDoctor" readonly)
      el-form-item(label="病历号" prop="bedNumber" v-bind:label-width="labelWidth" )
        el-input(v-model="formModel.bedNumber" readonly)
      el-form-item(label="住院日期" prop="date_admission" v-bind:label-width="labelWidth" )
        kalix-datepicker-simple(v-model="formModel.dateAdmission" type="datetime" placeholder="选择日期" format="yyyy-MM-dd" style="width: 100%;")
        <!--el-input(v-model="formModel.dateAdmission" type="textarea" readonly)-->
      el-form-item(label="手术日期" prop="date_operation" v-bind:label-width="labelWidth" )
        kalix-datepicker-simple(v-model="formModel.dateOperation" type="datetime" placeholder="选择日期" format="yyyy-MM-dd" style="width: 100%;")
        <!--el-input(v-model="formModel.dateOperation" type="textarea" readonly)-->
      el-form-item(label="床位号" prop="bedNumber" v-bind:label-width="labelWidth" )
        el-input(v-model="formModel.bedNumber" type="textarea" readonly)



</template>

<script type="text/ecmascript-6">
  import FormModel from './model'
  export default {
    name: 'JdyyQueView',
    data() {
      return {
        formModel: Object.assign({}, FormModel),
        labelWidth: '120px'
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">

</style>
