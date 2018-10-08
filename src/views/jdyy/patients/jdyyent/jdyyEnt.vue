<template lang="pug">
  keep-alive
    el-form(:model="formModel" :rules="rules" ref="formModel")
      el-form-item(label="姓名" prop="name" v-bind:label-width="labelWidth" v-bind:rules="rules.name")
        el-input(v-model="formModel.name")
      el-form-item(label="性别" prop="sex" v-bind:label-width="labelWidth" v-bind:rules="rules.sex")
        el-input(v-model="formModel.sex" )
      el-form-item(label="出生日期" prop="brith" v-bind:label-width="labelWidth" v-bind:rules="rules.brith")
        el-input(v-model="formModel.brith" )
      el-form-item(label="年龄" prop="age" v-bind:label-width="labelWidth" v-bind:rules="rules.age")
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
      el-form-item(label="出院日期" prop="dateAischarge" v-bind:label-width="labelWidth" v-bind:rules="rules.dateAischarge")
        kalix-datepicker-simple(v-model="formModel.dateAischarge" type="datetime" placeholder="选择日期" format="yyyy-MM-dd" style="width: 100%;")
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
      <!--el-form-item(label="省" prop="province" v-bind:label-width="labelWidth" v-bind:rules="rules.province")-->
        <!--el-select(v-model="formModel.province" placeholder="请选择省")-->
          <!--el-option(label="区域一" value="shanghai")-->
          <!--el-option(label="区域二" value="beijing")-->
      <!--el-form-item(label="市" prop="city" v-bind:label-width="labelWidth" v-bind:rules="rules.city")-->
        <!--el-select(v-model="formModel.city" placeholder="请选择市")-->
          <!--el-option(label="区域一" value="shanghai")-->
          <!--el-option(label="区域二" value="beijing")-->
      <!--el-form-item(label="区" prop="district" v-bind:label-width="labelWidth" v-bind:rules="rules.district")-->
        <!--el-select(v-model="formModel.district" placeholder="请选择区")-->
          <!--el-option(label="区域一" value="shanghai")-->
          <!--el-option(label="区域二" value="beijing")-->
      el-form-item(label="省市县" prop="province" v-bind:label-width="labelWidth" v-bind:rules="rules.province")
        kalix-font-cascader(v-model="formModel.province" v-on:getModelInfo="getModel" cascader-type="address")
      el-form-item(label="详细地址" prop="completeAddress" v-bind:label-width="labelWidth" v-bind:rules="rules.completeAddress")
        el-input(v-model="formModel.completeAddress")
      el-form-item(label="备注" prop="remarks" v-bind:label-width="labelWidth" v-bind:rules="rules.remarks")
        el-input(v-model="formModel.remarks")
      el-form-item(label="Harris评分" prop="harris" v-bind:label-width="labelWidth" v-bind:rules="rules.harris")
        el-input(v-model="formModel.harris")
      el-form-item(label="HSS评分" prop="hss" v-bind:label-width="labelWidth" v-bind:rules="rules.hss")
        el-input(v-model="formModel.hss")
      div(type="primary" size="large" v-on:click="submitForm") 保存
</template>

<script type="text/ecmascript-6">
  import {JdyypatientsURL} from '../../config.toml'
  import FormModel from './model'
  import {baseURL} from '../../../../config/global.toml'
  import KalixClansmanUpload from '../../../../components/fileUpload/upload'
  import KalixFontCascader from '../../../../components/cascader/ThreeCascader'
  export default {
    name: 'kalix-jdyy-jdyyent',
    components: {KalixFontCascader, KalixClansmanUpload},
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
          brith: [{required: true, message: '请输入出生日期', trigger: 'change'}],
          age: [{required: true, message: '请输入年龄', trigger: 'change'}],
          idCard: [{required: true, message: '请输入身份证号', trigger: 'change'}],
          bedNumber: [{required: true, message: '请输入床位号', trigger: 'change'}],
          hospitalNumber: [{required: true, message: '请输入住院号', trigger: 'change'}],
          directorDoctor: [{required: true, message: '请输入主管医生', trigger: 'change'}],
          dateAdmission: [{required: true, message: '请输入入院日期', trigger: 'change'}],
          dateAischarge: [{required: true, message: '请输入出院日期', trigger: 'change'}],
          stature: [{required: true, message: '请输入身高', trigger: 'change'}],
          weight: [{required: true, message: '请输入体重', trigger: 'change'}],
          bmi: [{required: true, message: '请输入BMI', trigger: 'change'}],
          bloodPressure: [{required: true, message: '请输入血压', trigger: 'change'}],
          specialDisorders: [{required: true, message: '请输入特殊疾患', trigger: 'change'}],
          descriptionSpecialDisease: [{required: true, message: '请输入特殊疾患描述', trigger: 'change'}],
          allergicHistory: [{required: true, message: '请输入过敏史', trigger: 'change'}],
          typeMedicalTreatment: [{required: true, message: '请输入医疗类别', trigger: 'change'}],
          WhetherDischarge: [{required: true, message: '请输入是否出院', trigger: 'change'}],
          telephonePerson: [{required: true, message: '请输入本人联系方式', trigger: 'change'}],
          familyPhone: [{required: true, message: '请输入家属联系方式', trigger: 'change'}],
          province: [{required: true, message: '请输入省', trigger: 'change'}],
          city: [{required: true, message: '请输入市', trigger: 'change'}],
          district: [{required: true, message: '请输入区', trigger: 'change'}],
          completeAddress: [{required: true, message: '请输入家详细地址', trigger: 'change'}],
          remarks: [{required: true, message: '请输入备注', trigger: 'change'}],
          harris: [{required: true, message: '请输入Harris评分', trigger: 'change'}],
          hss: [{required: true, message: '请输入HSS评分', trigger: 'change'}]
        },
        targetURL: JdyypatientsURL
      }
    },
    methods: {
      init(dialogOption) {
        console.log('---------dialogOption------------', dialogOption)
      },
      // getFilePath(filePath, fileName) {
      //   console.log('--getFilePath---', filePath)
      //   console.log('--fileName---', fileName)
      //   this.formModel.photo = filePath
      //   this.formModel.imgName = fileName
      // },
      // setGroup(val) {
      //   this.formModel.downlosd = val
      // },
      getModel(val, flag) { // 三级联动地区参数区分
        if (flag === 'address') {
          this.address_disabled = false
          this.formModel.province = val.toString()
        }
      },
      submitForm() {
        this.$refs['formModel'].validate((valid) => {
          if (valid) {
            this.$http.request({
              method: 'POST',
              url: '/camel/rest/jdyy/patientss',
              data: this.formModel
            }).then(response => {
              console.log(response.data.msg) // 添加成功
              this.$refs['formModel'].resetFields() // 重置信息
            })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">

</style>
