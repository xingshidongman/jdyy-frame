
<template lang="pug">
  kalix-dialog.user-add(title='查看' bizKey="jdyyMan" ref="kalixBizDialog" v-bind:formModel.sync="formModel" isView)
    div.el-form(slot="dialogFormSlot")
      el-form-item(label="姓名" prop="name" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.name" readonly)
      el-form-item(label="性别" prop="sex" v-bind:label-width="labelWidth" style="")
        el-radio-group(v-model="formModel.sex" disabled)
          el-radio(label="男")
          el-radio(label="女")
      el-form-item(label="年龄" prop="age" v-bind:label-width="labelWidth" )
        el-input(v-model="formModel.age" type="number" readonly)
      el-form-item(label="出生日期" prop="brith" v-bind:label-width="labelWidth" )
        el-date-picker(v-model="formModel.brith" type="date" placeholder="选择日期" format="yyyy/MM/dd" value-format="yyyy/MM/dd" style="width: 100%;" readonly)
      el-form-item(label="身份证号" prop="idCard" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.idCard" type="number" readonly)
      el-form-item(label="本人联系方式" prop="telephonePerson" v-bind:label-width="labelWidth" )
        el-input(v-model="formModel.telephonePerson" readonly)
      el-form-item(label="身高" prop="stature" v-bind:label-width="labelWidth" )
        el-input(v-model="formModel.stature" type="number" readonly)
      el-form-item(label="体重" prop="weight" v-bind:label-width="labelWidth" )
        el-input(v-model="formModel.weight" type="number" readonly)
      el-form-item(label="入院日期" prop="dateAdmission" v-bind:label-width="labelWidth")
        el-date-picker(v-model="formModel.dateAdmission" type="date" placeholder="选择日期" format="yyyy/MM/dd" value-format="yyyy/MM/dd" style="width: 100%;" readonly)
      el-form-item(label="出院日期" prop="dischargeDate" v-bind:label-width="labelWidth" )
        el-date-picker(v-model="formModel.dischargeDate" type="date" placeholder="选择日期" format="yyyy/MM/dd" value-format="yyyy/MM/dd" style="width: 100%;" readonly)
      el-form-item(label="主管医生" prop="directorDoctor" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.directorDoctor" readonly)
      el-form-item(label="病历" prop="medicalRecords" v-bind:label-width="labelWidth" )
        el-input(v-model="formModel.medicalRecords" readonly)
      el-form-item(label="病历号" prop="medicalRecordNumber" v-bind:label-width="labelWidth" )
        el-input(v-model="formModel.medicalRecordNumber" readonly)
      el-form-item(label="住院号" prop="hospitalNumber" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.hospitalNumber" type="number" readonly)
      el-form-item(label="床位号" prop="bedNumber" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.bedNumber" readonly)
      el-form-item(label="现况" prop="currentSituation" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.currentSituation" readonly)
      el-form-item(label="重患时间" prop="heavyTime" v-bind:label-width="labelWidth")
        el-date-picker(v-model="formModel.heavyTime" type="date" placeholder="选择日期" format="yyyy/MM/dd" value-format="yyyy/MM/dd" style="width: 100%;" readonly)
      el-form-item(label="家属联系方式" prop="familyPhone" v-bind:label-width="labelWidth" )
        el-input(v-model="formModel.familyPhone" readonly)
      <!--el-form-item(label="省市区" prop="address" v-bind:label-width="labelWidth" )-->
        <!--kalix-font-cascader.Border(v-on:change="getModel" readonly)-->
      el-form-item.address(label="通讯地址" prop="completeAddress" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.completeAddress" readonly)
      el-form-item(label="BMI" prop="bmi" v-bind:label-width="labelWidth" )
        el-input(v-model="formModel.bmi" type="number" readonly)
      el-form-item(label="血压" prop="bloodPressure" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.bloodPressure" type="number" readonly)
      el-form-item(label="特殊疾患" prop="specialDisorders" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.specialDisorders" readonly)
      el-form-item(label="特殊疾患描述" prop="descriptionSpecialDisease" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.descriptionSpecialDisease" readonly)
      el-form-item(label="过敏史" prop="allergicHistory" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.allergicHistory" readonly)
      el-form-item(label="医疗类别" prop="medicalCategory" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.medicalCategory" readonly)
      el-form-item(label="Harris评分" prop="harris" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.harris" type="number" readonly)
      el-form-item(label="HSS评分" prop="hss" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.hss" type="number" readonly)
      el-form-item(label="是否出院" prop="whetherDischarge" v-bind:label-width="labelWidth")
        el-radio-group(v-model="formModel.whetherDischarge" disabled)
          el-radio(label="是")
          el-radio(label="否")
      el-form-item.address(label="备注" prop="remarks" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.remarks" readonly)
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
    },
    methods: {
      getModel(val) { // 三级联动地区参数区分
        this.formModel.completeAddress = val.join('')
        console.log('address=========', this.formModel.completeAddress)
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">

</style>
