<template lang="pug">
  kalix-dialog.user-add(title='修改' bizKey="jdyyman" ref="kalixBizDialog" v-bind:formModel.sync="formModel" v-bind:targetURL="targetURL")
    div.el-form(slot="dialogFormSlot")
      el-form-item(label="姓名" prop="name" v-bind:label-width="labelWidth" v-bind:rules="rules.name")
        el-input(v-model="formModel.name")
      el-form-item(label="性别" prop="sex" v-bind:label-width="labelWidth" v-bind:rules="rules.sex" style="")
        el-radio-group(v-model="formModel.sex" )
          el-radio(label="男")
          el-radio(label="女")
      el-form-item(label="年龄" prop="age" v-bind:label-width="labelWidth" v-bind:rules="rules.age")
        el-input(v-model="formModel.age" type="number")
      el-form-item(label="出生日期" prop="brith" v-bind:label-width="labelWidth" v-bind:rules="rules.brith")
        el-date-picker(v-model="formModel.brith" type="date" placeholder="选择日期" value-format="yyyy-MM-dd" style="width: 100%;")
      el-form-item(label="身份证号" prop="idCard" v-bind:label-width="labelWidth" v-bind:rules="rules.idCard")
        el-input(v-model="formModel.idCard" type="number")
      el-form-item(label="本人联系方式" prop="telephonePerson" v-bind:label-width="labelWidth" v-bind:rules="rules.telephonePerson")
        el-input(v-model="formModel.telephonePerson")
      el-form-item(label="身高" prop="stature" v-bind:label-width="labelWidth" v-bind:rules="rules.stature")
        el-input(v-model="formModel.stature" type="number")
      el-form-item(label="体重" prop="weight" v-bind:label-width="labelWidth" v-bind:rules="rules.weight")
        el-input(v-model="formModel.weight" type="number")
      el-form-item(label="入院日期" prop="dateAdmission" v-bind:label-width="labelWidth" v-bind:rules="rules.dateAdmission")
        el-date-picker(v-model="formModel.dateAdmission" type="date" placeholder="选择日期" value-format="yyyy-MM-dd" style="width: 100%;")
      el-form-item(label="出院日期" prop="dischargeDate" v-bind:label-width="labelWidth" v-bind:rules="rules.dischargeDate")
        el-date-picker(v-model="formModel.dischargeDate" type="date" placeholder="选择日期" value-format="yyyy-MM-dd" style="width: 100%;")
      el-form-item(label="主管医生" prop="directorDoctor" v-bind:label-width="labelWidth" v-bind:rules="rules.directorDoctor")
        el-input(v-model="formModel.directorDoctor")
      el-form-item(label="病历" prop="medicalRecords" v-bind:label-width="labelWidth" v-bind:rules="rules.medicalRecords")
        el-input(v-model="formModel.medicalRecords")
      el-form-item(label="病历号" prop="medicalRecordNumber" v-bind:label-width="labelWidth" v-bind:rules="rules.medicalRecordNumber")
        el-input(v-model="formModel.medicalRecordNumber")
      el-form-item(label="住院号" prop="hospitalNumber" v-bind:label-width="labelWidth" v-bind:rules="rules.hospitalNumber")
        el-input(v-model="formModel.hospitalNumber" type="number")
      el-form-item(label="床位号" prop="bedNumber" v-bind:label-width="labelWidth" v-bind:rules="rules.bedNumber")
        el-input(v-model="formModel.bedNumber")
      el-form-item(label="现况" prop="currentSituation" v-bind:label-width="labelWidth" v-bind:rules="rules.currentSituation")
        el-input(v-model="formModel.currentSituation")
      el-form-item(label="重患时间" prop="heavyTime" v-bind:label-width="labelWidth" v-bind:rules="rules.heavyTime")
        el-date-picker(v-model="formModel.heavyTime" type="date" placeholder="选择日期" value-format="yyyy-MM-dd" style="width: 100%;")
      el-form-item(label="家属联系方式" prop="familyPhone" v-bind:label-width="labelWidth" v-bind:rules="rules.familyPhone")
        el-input(v-model="formModel.familyPhone")
      el-form-item(label="省市区" prop="address" v-bind:label-width="labelWidth" v-bind:rules="rules.address")
        kalix-font-cascader.Border(v-on:change="getModel")
      el-form-item.address(label="通讯地址" prop="completeAddress" v-bind:label-width="labelWidth" v-bind:rules="rules.completeAddress")
        el-input(v-model="formModel.completeAddress")
      el-form-item(label="BMI" prop="bmi" v-bind:label-width="labelWidth" v-bind:rules="rules.bmi")
        el-input(v-model="formModel.bmi" type="number")
      el-form-item(label="血压" prop="bloodPressure" v-bind:label-width="labelWidth" v-bind:rules="rules.bloodPressure")
        el-input(v-model="formModel.bloodPressure" type="number")
      el-form-item(label="特殊疾患" prop="specialDisorders" v-bind:label-width="labelWidth" v-bind:rules="rules.specialDisorders")
        el-input(v-model="formModel.specialDisorders")
      el-form-item(label="特殊疾患描述" prop="descriptionSpecialDisease" v-bind:label-width="labelWidth" v-bind:rules="rules.descriptionSpecialDisease")
        el-input(v-model="formModel.descriptionSpecialDisease")
      el-form-item(label="过敏史" prop="allergicHistory" v-bind:label-width="labelWidth" v-bind:rules="rules.allergicHistory")
        el-input(v-model="formModel.allergicHistory")
      el-form-item(label="医疗类别" prop="medicalCategory" v-bind:label-width="labelWidth" v-bind:rules="rules.medicalCategory")
        el-input(v-model="formModel.medicalCategory")
      el-form-item(label="Harris评分" prop="harris" v-bind:label-width="labelWidth" v-bind:rules="rules.harris")
        el-input(v-model="formModel.harris" type="number")
      el-form-item(label="HSS评分" prop="hss" v-bind:label-width="labelWidth" v-bind:rules="rules.hss")
        el-input(v-model="formModel.hss" type="number")
      el-form-item(label="是否出院" prop="WhetherDischarge" v-bind:label-width="labelWidth" v-bind:rules="rules.WhetherDischarge")
        el-radio-group(v-model="formModel.WhetherDischarge" )
          el-radio(label="是")
          el-radio(label="否")
      el-form-item.address(label="备注" prop="remarks" v-bind:label-width="labelWidth" v-bind:rules="rules.remarks")
        el-input(v-model="formModel.remarks")
      el-form-item.address(label="修改人员" prop="modifyStaff" v-bind:label-width="labelWidth" v-bind:rules="rules.modifyStaff")
        el-input(v-model="formModel.modifyStaff")
</template>

<script type="text/ecmascript-6">
  import {JdyypatientsURL} from '../../config.toml'
  import FormModel from './model'
  import {baseURL} from '../../../../config/global.toml'
  import KalixClansmanUpload from '../../../../components/fileUpload/upload'
  import KalixSelect from '../../../../components/corelib/components/common/baseSelect'
  import KalixFontCascader from '../../../../components/cascader/ThreeCascader'
  import KalixDatepickerSimple from '../../../../components/corelib/components/common/baseDatepicker'

  export default {
    name: 'JdyyManEdit',
    components: {KalixDatepickerSimple, KalixSelect, KalixClansmanUpload, KalixFontCascader},
    data() {
      return {
        downloadURL: JdyypatientsURL,
        fileList: [],
        labelWidth: '120px',
        action: baseURL + '/camel/rest/upload',
        columnParam: undefined,
        formModel: Object.assign({}, FormModel),
        rules: {
          name: [{required: true, message: '请输入姓名', trigger: 'change'}]
        },
        targetURL: JdyypatientsURL
      }
    },
    methods: {
      init(dialogOption) {
        console.log('---------dialogOption------------', dialogOption)
      },
      getFilePath(filePath, fileName) {
        console.log('--getFilePath---', filePath)
        console.log('--fileName---', fileName)
        this.formModel.name = fileName
      },
      setGroup(val) {
        this.formModel.downlosd = val
      },
      getModel(val) { // 三级联动地区参数区分
        this.formModel.completeAddress = val.toString()
        console.log('address=========', this.formModel.completeAddress)
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
  .el-form
    width 60%
    margin auto
    .el-form-item
      width 49%
      display inline-block
    .address
      width 98%
    .Border
      width 49%
      height 40px
      line-height 40px
    .el-form-item__content
      position: relative;
      font-size: 14px;
      padding: 12px 10px;
    .el-input__inner
      border-radius 1px
</style>
