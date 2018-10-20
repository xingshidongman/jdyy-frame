
<template lang="pug">
  kalix-dialog.user-add(title='查看' bizKey="jdyyman" ref="kalixBizDialog" v-bind:formModel.sync="formModel" isView)
    div.el-form(slot="dialogFormSlot")
      el-form-item(label="姓名" prop="name" v-bind:label-width="labelWidth" )
        el-input(v-model="formModel.name" readonly)
      el-form-item(label="性别" prop="sex" v-bind:label-width="labelWidth" )
        el-input(v-model="formModel.sex" readonly)
        <!--el-radio-group(v-model="formModel.sex" readonly)-->
          <!--el-radio(label="男")-->
          <!--el-radio(label="女")-->
      el-form-item(label="年龄" prop="age" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.age" type="number" readonly)
      el-form-item(label="病历号" prop="bedNumber" v-bind:label-width="labelWidth" )
        el-input(v-model="formModel.bedNumber" type="number" readonly)
      el-form-item(label="住院日期" prop="dateAdmission" v-bind:label-width="labelWidth" )
        el-input(v-model="formModel.dateAdmission" readonly)
        <!--kalix-datepicker-simple(v-model="formModel.dateAdmission" type="datetime" placeholder="选择日期" format="yyyy-MM-dd" style="width: 100%;")-->
        <!--el-input(v-model="formModel.date_admission" type="textarea" readonly)-->
      <!--el-form-item(label="诊断" prop="diagnosis" v-bind:label-width="labelWidth")-->
        <!--el-input(v-model="formModel.diagnosis" readonly)-->
      <!--el-form-item(label="手术日期" prop="dateOperation" v-bind:label-width="labelWidth" )-->
        <!--kalix-datepicker-simple(v-model="formModel.dateOperation" type="datetime" placeholder="选择日期" format="yyyy-MM-dd" style="width: 100%;")-->
      el-form-item(label="主管医生" prop="directorDoctor" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.directorDoctor" readonly)
</template>

<script type="text/ecmascript-6">
  import FormModel from './model'
  import KalixDatepickerSimple from '../../../../components/corelib/components/common/baseDatepicker'
  export default {
    name: 'JdyyManView',
    components: {KalixDatepickerSimple},
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
