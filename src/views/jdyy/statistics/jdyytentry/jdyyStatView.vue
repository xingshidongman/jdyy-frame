<template lang="pug">
  kalix-dialog.user-add(title='查看' bizKey="jdyyStat" ref="kalixBizDialog" v-bind:formModel.sync="formModel" isView)
    div.el-form(slot="dialogFormSlot")
      el-form-item(label="原住院人数" prop="protoNum" v-bind:label-width="labelWidth" )
        el-input(v-model="formModel.protoNum" readonly)
      el-form-item(label="出院人数" prop="outNum" v-bind:label-width="labelWidth" )
        el-input(v-model="formModel.outNum" readonly)
      el-form-item(label="入院（转）入人数" prop="inNum" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.inNum" readonly)
      el-form-item(label="手术人数" prop="surgeryNum" v-bind:label-width="labelWidth" )
        el-input(v-model="formModel.surgeryNum" readonly)
      el-form-item(label="死亡人数" prop="deathNum" v-bind:label-width="labelWidth" )
        el-input(v-model="formModel.deathNum" readonly)
      el-form-item(label="现住院人数" prop="nowNum" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.nowNum" readonly)
      el-form-item(label="重病人数" prop="illNum" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.illNum" readonly)
      el-form-item(label="坐班医生" prop="doctor" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.doctor" readonly)
      el-form-item(label="坐班日期" prop="date" v-bind:label-width="labelWidth" )
        kalix-datepicker-simple(v-model="formModel.date" type="datetime" placeholder="选择日期" format="yyyy-MM-dd" style="width: 100%;")
</template>

<script type="text/ecmascript-6">
  import FormModel from './model'
  export default {
    name: 'JdyyStatView',
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
