<template lang="pug">
  kalix-dialog.user-add(title='添加' bizKey="jdyyMan" ref="kalixBizDialog" v-bind:formModel.sync="formModel" v-bind:targetURL="targetURL")
    div.el-form(slot="dialogFormSlot")
      el-form-item(label="姓名" prop="name" v-bind:label-width="labelWidth" v-bind:rules="rules.name")
        el-input(v-model="formModel.name")
      el-form-item(label="性别" prop="sex" v-bind:label-width="labelWidth" v-bind:rules="rules.sex")
        el-input(v-model="formModel.sex" )
      <!--el-form-item.toleft(label="出生日期" prop="brith" v-bind:label-width="labelWidth" v-bind:rules="rules.brith")-->
      <!--el-col(:span="22")-->
      <!--el-date-picker(type="date" placeholder="选择日期" v-model="formModel.brith" style="width: 100%;")-->
      el-form-item(label="出生日期" prop="brith" v-bind:label-width="labelWidth" v-bind:rules="rules.brith")
        kalix-datepicker-simple(v-model="formModel.brith" type="datetime" placeholder="选择日期" format="yyyy-MM-dd" style="width: 100%;")
      el-form-item(label="年龄" prop="age" v-bind:label-width="labelWidth" v-bind:rules="rules.age" type="number")
        el-input(v-model="formModel.age")
      el-form-item(label="身份证号" prop="idCard" v-bind:label-width="labelWidth" v-bind:rules="rules.idCard")
        el-input(v-model="formModel.idCard")
      el-form-item(label="床位号" prop="bedNumber" v-bind:label-width="labelWidth" v-bind:rules="rules.bedNumber")
        el-input(v-model="formModel.bedNumber")
      el-form-item(label="住院号" prop="hospitalNumber" v-bind:label-width="labelWidth" v-bind:rules="rules.hospitalNumber")
        el-input(v-model="formModel.hospitalNumber")
      el-form-item(label="主管医生" prop="directorDoctor" v-bind:label-width="labelWidth" v-bind:rules="rules.directorDoctor")
        el-input(v-model="formModel.directorDoctor")
      el-form-item(label="入院日期" prop="dateAdmission" v-bind:label-width="labelWidth" v-bind:rules="rules.dateAdmission")
        kalix-datepicker-simple(v-model="formModel.dateAdmission" type="datetime" placeholder="选择日期" format="yyyy-MM-dd" style="width: 100%;")
      el-form-item(label="出院日期" prop="DischargeDate" v-bind:label-width="labelWidth" v-bind:rules="rules.DischargeDate")
        kalix-datepicker-simple(v-model="formModel.DischargeDate" type="datetime" placeholder="选择日期" format="yyyy-MM-dd" style="width: 100%;")
      el-form-item(label="身高" prop="stature" v-bind:label-width="labelWidth" v-bind:rules="rules.stature")
        el-input(v-model="formModel.stature")
      el-form-item(label="体重" prop="weight" v-bind:label-width="labelWidth" v-bind:rules="rules.weight")
        el-input(v-model="formModel.weight")
      el-form-item(label="BMI" prop="bmi" v-bind:label-width="labelWidth" v-bind:rules="rules.bmi")
        el-input(v-model="formModel.bmi")
      el-form-item(label="血压" prop="bloodPressure" v-bind:label-width="labelWidth" v-bind:rules="rules.bloodPressure")
        el-input(v-model="formModel.bloodPressure")
      el-form-item(label="特殊疾患" prop="specialDisorders" v-bind:label-width="labelWidth" v-bind:rules="rules.specialDisorders")
        el-input(v-model="formModel.specialDisorders")
      el-form-item(label="特殊疾患描述" prop="descriptionSpecialDisease" v-bind:label-width="labelWidth" v-bind:rules="rules.descriptionSpecialDisease")
        el-input(v-model="formModel.descriptionSpecialDisease")
      el-form-item(label="过敏史" prop="allergicHistory" v-bind:label-width="labelWidth" v-bind:rules="rules.allergicHistory")
        el-input(v-model="formModel.allergicHistory")
      el-form-item(label="医疗类别" prop="typeMedicalTreatment" v-bind:label-width="labelWidth" v-bind:rules="rules.typeMedicalTreatment")
        el-input(v-model="formModel.typeMedicalTreatment")
      el-form-item(label="是否出院" prop="WhetherDischarge" v-bind:label-width="labelWidth" v-bind:rules="rules.WhetherDischarge")
        el-input(v-model="formModel.WhetherDischarge")
      el-form-item(label="本人联系方式" prop="telephonePerson" v-bind:label-width="labelWidth" v-bind:rules="rules.telephonePerson")
        el-input(v-model="formModel.telephonePerson")
      el-form-item(label="家属联系方式" prop="familyPhone" v-bind:label-width="labelWidth" v-bind:rules="rules.familyPhone")
        el-input(v-model="formModel.familyPhone")
      el-form-item(label="省市区" prop="address" v-bind:label-width="labelWidth" v-bind:rules="rules.address")
        kalix-font-cascader.Border(v-model="formModel.address" v-on:change="getModel")
      el-form-item.address(label="详细地址" prop="completeAddress" v-bind:label-width="labelWidth" v-bind:rules="rules.completeAddress")
        el-input(v-model="formModel.completeAddress")
      el-form-item.address(label="备注" prop="remarks" v-bind:label-width="labelWidth" v-bind:rules="rules.remarks")
        el-input(v-model="formModel.remarks")
      el-form-item(label="Harris评分" prop="harris" v-bind:label-width="labelWidth" v-bind:rules="rules.harris")
        el-input(v-model="formModel.harris")
      el-form-item(label="HSS评分" prop="hss" v-bind:label-width="labelWidth" v-bind:rules="rules.hss")
        el-input(v-model="formModel.hss")
</template>

<script type="text/ecmascript-6">
  import {JdyypatientsURL} from '../../config.toml'
  import FormModel from './model'
  import {baseURL} from '../../../../config/global.toml'
  import KalixClansmanUpload from '../../../../components/fileUpload/upload'
  import KalixDatepickerSimple from '../../../../components/corelib/components/common/baseDatepicker'
  import KalixFontCascader from '../../../../components/cascader/ThreeCascader'
  export default {
    name: 'JdyyManAdd',
    components: {KalixDatepickerSimple, KalixClansmanUpload, KalixFontCascader},
    data() {
      return {
        downloadURL: JdyypatientsURL,
        formModel: Object.assign({}, FormModel),
        labelWidth: '120px',
        action: baseURL + '/camel/rest/upload',
        columnParam: undefined,
        options: [],
        rules: {
          name: [{required: true, message: '请输入姓名', trigger: 'change'}],
          sex: [{required: true, message: '请输入性别', trigger: 'change'}],
          age: [{required: true, message: '请输入年龄', trigger: 'change'}]
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
        this.formModel.photo = filePath
        this.formModel.imgName = fileName
      },
      setGroup(val) {
        this.formModel.downlosd = val
      },
      getModel(val) { // 三级联动地区参数区分
        this.formModel.address = val.toString()
        console.log('address=========', this.formModel.address)
      }

    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">

</style>
