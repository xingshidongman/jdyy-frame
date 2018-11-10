<template lang="pug">
  keep-alive
    div(class="back")
      div.base-message
        div(style="width:98px;margin:20px auto;font-size: 20px;") 基 本 信 息
        el-form(v-bind:model="formModel1" ref="formModel1")
          el-form-item(label="姓名" prop="name" v-bind:label-width="labelWidth" v-bind:rules="rules.name")
            el-input(v-model="formModel1.name")
          el-form-item(label="性别" prop="sex" v-bind:label-width="labelWidth" v-bind:rules="rules.sex" )
            el-radio-group(v-model="formModel1.sex" )
              el-radio(label="男")
              el-radio(label="女")
          el-form-item(label="年龄" prop="age" v-bind:label-width="labelWidth" v-bind:rules="rules.age")
            el-input(v-model="formModel1.age" type="number")
          el-form-item(label="出生日期" prop="brith" v-bind:label-width="labelWidth" v-bind:rules="rules.brith")
            el-date-picker(v-model="formModel1.brith" type="date" placeholder="选择日期" format="yyyy/M/d" value-format="yyyy/M/d" style="width: 100%;")
          el-form-item(label="身份证号" prop="idCard" v-bind:label-width="labelWidth" v-bind:rules="rules.idCard")
            el-input(v-model="formModel1.idCard" type="number")
          el-form-item(label="本人联系方式" prop="telephonePerson" v-bind:label-width="labelWidth" v-bind:rules="rules.telephonePerson")
            el-input(v-model="formModel1.telephonePerson")
          el-form-item(label="身高" prop="stature" v-bind:label-width="labelWidth" v-bind:rules="rules.stature")
            el-input(v-model="formModel1.stature" type="number")
          el-form-item(label="体重" prop="weight" v-bind:label-width="labelWidth" v-bind:rules="rules.weight")
            el-input(v-model="formModel1.weight" type="number")
          el-form-item(label="入院日期" prop="dateAdmission" v-bind:label-width="labelWidth" v-bind:rules="rules.dateAdmission")
            el-date-picker(v-model="formModel1.dateAdmission" type="date" placeholder="选择日期" format="yyyy/M/d" value-format="yyyy/M/d" style="width: 100%;")
          el-form-item(label="出院日期" prop="dischargeDate" v-bind:label-width="labelWidth" v-bind:rules="rules.dischargeDate")
            el-date-picker(v-model="formModel1.dischargeDate" type="date" placeholder="选择日期" format="yyyy/M/d" value-format="yyyy/M/d" style="width: 100%;")
          el-form-item(label="主管医生" prop="directorDoctor" v-bind:label-width="labelWidth" v-bind:rules="rules.directorDoctor")
            el-input(v-model="formModel1.directorDoctor")
          el-form-item(label="病历" prop="medicalRecords" v-bind:label-width="labelWidth" v-bind:rules="rules.medicalRecords")
            el-input(v-model="formModel1.medicalRecords")
          el-form-item(label="病历号" prop="medicalRecordNumber" v-bind:label-width="labelWidth" v-bind:rules="rules.medicalRecordNumber")
            el-input(v-model="formModel1.medicalRecordNumber")
          el-form-item(label="住院号" prop="hospitalNumber" v-bind:label-width="labelWidth" v-bind:rules="rules.hospitalNumber")
            el-input(v-model="formModel1.hospitalNumber" type="number")
          el-form-item(label="床位号" prop="bedNumber" v-bind:label-width="labelWidth" v-bind:rules="rules.bedNumber")
            el-input(v-model="formModel1.bedNumber")
          el-form-item(label="现况" prop="currentSituation" v-bind:label-width="labelWidth" v-bind:rules="rules.currentSituation")
            el-input(v-model="formModel1.currentSituation")
          el-form-item(label="重患时间" prop="heavyTime" v-bind:label-width="labelWidth" v-bind:rules="rules.heavyTime")
            el-date-picker(v-model="formModel1.heavyTime" type="date" placeholder="选择日期" format="yyyy/M/d" value-format="yyyy/M/d" style="width: 100%;")
          el-form-item(label="家属联系方式" prop="familyPhone" v-bind:label-width="labelWidth" v-bind:rules="rules.familyPhone")
            el-input(v-model="formModel1.familyPhone")
          el-form-item(label="省市区" prop="address" v-bind:label-width="labelWidth" v-bind:rules="rules.address")
            kalix-font-cascader.Border(v-on:change="getModel")
          el-form-item.address(label="通讯地址" prop="completeAddress" v-bind:label-width="labelWidth" v-bind:rules="rules.completeAddress")
            el-input(v-model="formModel1.completeAddress")
          el-form-item(label="BMI" prop="bmi" v-bind:label-width="labelWidth" v-bind:rules="rules.bmi")
            el-input(v-model="formModel1.bmi" type="number")
          el-form-item(label="血压" prop="bloodPressure" v-bind:label-width="labelWidth" v-bind:rules="rules.bloodPressure")
            el-input(v-model="formModel1.bloodPressure" type="number")
          el-form-item(label="特殊疾患" prop="specialDisorders" v-bind:label-width="labelWidth" v-bind:rules="rules.specialDisorders")
            el-input(v-model="formModel1.specialDisorders")
          el-form-item(label="特殊疾患描述" prop="descriptionSpecialDisease" v-bind:label-width="labelWidth" v-bind:rules="rules.descriptionSpecialDisease")
            el-input(v-model="formModel1.descriptionSpecialDisease")
          el-form-item(label="过敏史" prop="allergicHistory" v-bind:label-width="labelWidth" v-bind:rules="rules.allergicHistory")
            el-input(v-model="formModel1.allergicHistory")
          el-form-item(label="医疗类别" prop="medicalCategory" v-bind:label-width="labelWidth" v-bind:rules="rules.medicalCategory")
            el-input(v-model="formModel1.medicalCategory")
          el-form-item(label="Harris评分" prop="harris" v-bind:label-width="labelWidth" v-bind:rules="rules.harris")
            el-input(v-model="formModel1.harris" type="number")
          el-form-item(label="HSS评分" prop="hss" v-bind:label-width="labelWidth" v-bind:rules="rules.hss")
            el-input(v-model="formModel1.hss" type="number")
          el-form-item(label="是否出院" prop="whetherDischarge" v-bind:label-width="labelWidth" v-bind:rules="rules.whetherDischarge")
            el-radio-group(v-model="formModel1.whetherDischarge" )
              el-radio(label="是")
              el-radio(label="否")
          el-form-item.address(label="备注" prop="remarks" v-bind:label-width="labelWidth" v-bind:rules="rules.remarks")
            el-input(v-model="formModel1.remarks")
          div.box
            ul.right_ul
              li.right_li
                el-button.btn-submit(v-on:click="reset" :disabled="forbidden" size="large") 保存
                el-button.btn-submit.btn-reset(v-on:click="showMessage" :disabled="forbidden"  size="large") 保存并继续
          div.clear
        <!--el-form-item.address(label="修改人员" prop="modifyStaff" v-bind:label-width="labelWidth" v-bind:rules="rules.modifyStaff")-->
        <!--el-input(v-model="formModel.modifyStaff")-->
        <!--el-form-item(label="患者" prop="pname" v-bind:rules="rules.pid" v-bind:label-width="labelWidth")-->
          <!--el-autocomplete(v-model="formModel.pname" :fetch-suggestions="querySearchAsync" placeholder="请输入患者姓名" @select="handleSelect")-->
      div.diagnose-message(v-if="show")
        div(style="width:98px;margin:20px auto;font-size: 20px;") 诊 断 信 息
        el-form(v-bind:model="formModel2" ref="formModel2")
          el-form-item.texttoo(label="诊断" prop="diagnosis" v-bind:label-width="labelWidth" v-bind:rules="rules.diagnosis" )
            el-cascader(placeholder="请选择诊断信息" :options="options" filterable @change="getDia"  v-bind:show-all-levels="false" change-on-select)
          el-form-item.texttoo(label="术式" prop="surgical" v-bind:label-width="labelWidth" v-bind:rules="rules.surgical" )
            el-cascader(placeholder="请选择术式信息" :options="items" filterable @change="getSur" v-bind:show-all-levels="false" change-on-select)
          el-form-item.texttoo(label="手术日期" prop="operationDate" v-bind:label-width="labelWidth" v-bind:rules="rules.operationDate")
            el-date-picker(v-model="formModel2.operationDate" type="date" placeholder="选择日期" value-format="yyyy/M/d" format="yyyy/M/d")
          el-form-item.texttoo(label="分期" prop="periodization" v-bind:label-width="labelWidth" v-bind:rules="rules.periodization")
            el-select(v-model="formModel2.periodization" placeholder="请选择")
              el-option(label="内科" value="内科")
              el-option(label="外科" value="外科")
          el-form-item.texttoo(label="分型" prop="parting" v-bind:label-width="labelWidth" v-bind:rules="rules.parting")
            el-input(v-model="formModel2.parting")
          el-form-item.text(label="图片" prop="photo" v-bind:label-width="labelWidth" v-bind:rules="rules.photo")
            kalix-clansman-upload(:action="action" v-on:filePath="getFilePath" v-on:selectChange="setGroup" :fileList="fileList" fileType="img" tipText="只能上传jpg/png文件，且不超过2MB")
            kalix-img-upload(v-model="formModel2.photo" v-bind:isImage="isImage" style="width:100%" v-bind:readonly="true")
        div.box
          ul.right_ul
            li.right_li
              el-button.btn-submit(v-on:click="onSubmit()" size="large") 保存
              el-button.btn-submit.btn-reset( v-on:click="resetAll('formModel2')" size="large") 重置
        div.clear

</template>

<script type="text/ecmascript-6">
  import {JdyypatientsURL} from '../../config.toml'
  import FormModel1 from './model1'
  import FormModel2 from './model2'
  import {baseURL} from '../../../../config/global.toml'
  import KalixClansmanUpload from '../../../../components/fileUpload/upload'
  import KalixDatepickerSimple from '../../../../components/corelib/components/common/baseDatepicker'
  import KalixFontCascader from '../../../../components/cascader/ThreeCascader'
  export default {
    name: 'kalix-jdyy-jdyyman',
    components: {KalixDatepickerSimple, KalixClansmanUpload, KalixFontCascader},
    data() {
      return {
        downloadURL: JdyypatientsURL,
        formModel1: Object.assign({}, FormModel1),
        formModel2: Object.assign({}, FormModel2),
        labelWidth: '120px',
        show: false,
        forbidden: false,
        action: baseURL + '/camel/rest/upload',
        columnParam: undefined,
        // options: [],
        rules: {
          name: [{required: true, message: '请输入姓名', trigger: 'change'}],
          sex: [{required: true, message: '请输入性别', trigger: 'change'}],
          age: [{required: true, message: '请输入年龄', trigger: 'change'}]
          // brith: [{required: true, message: '请输入出生日期', trigger: 'change'}],
          // idCard: [{required: true, message: '请输入身份证号', trigger: 'change'}],
          // bedNumber: [{required: true, message: '请输入床位号', trigger: 'change'}],
          // hospitalNumber: [{required: true, message: '请输入住院号', trigger: 'change'}],
          // directorDoctor: [{required: true, message: '请输入主管医生', trigger: 'change'}],
          // dateAdmission: [{required: true, message: '请输入入院日期', trigger: 'change'}],
          // dateAischarge: [{required: true, message: '请输入出院日期', trigger: 'change'}],
          // stature: [{required: true, message: '请输入身高', trigger: 'change'}],
          // weight: [{required: true, message: '请输入体重', trigger: 'change'}],
          // bmi: [{required: true, message: '请输入BMI', trigger: 'change'}],
          // bloodPressure: [{required: true, message: '请输入血压', trigger: 'change'}],
          // specialDisorders: [{required: true, message: '请输入特殊疾患', trigger: 'change'}],
          // descriptionSpecialDisease: [{required: true, message: '请输入特殊疾患描述', trigger: 'change'}],
          // allergicHistory: [{required: true, message: '请输入过敏史', trigger: 'change'}],
          // typeMedicalTreatment: [{required: true, message: '请输入医疗类别', trigger: 'change'}],
          // WhetherDischarge: [{required: true, message: '请输入是否出院', trigger: 'change'}],
          // telephonePerson: [{required: true, message: '请输入本人联系方式', trigger: 'change'}],
          // familyPhone: [{required: true, message: '请输入家属联系方式', trigger: 'change'}],
          // // address: [{required: true, message: '请输入省市区', trigger: 'change'}],
          // completeAddress: [{required: true, message: '请输入家详细地址', trigger: 'change'}],
          // remarks: [{required: true, message: '请输入备注', trigger: 'change'}],
          // harris: [{required: true, message: '请输入Harris评分', trigger: 'change'}],
        },
        targetURL: JdyypatientsURL
      }
    },
    methods: {
      reset() {
        this.$refs.formModel1.resetFields()
        // this.formModel.name = ''
        // this.formModel.dateAdmission = ''
      },
      resetAll() {
        this.$refs.formModel1.resetFields()
        this.$refs.formModel2.resetFields()
      },
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
        this.formModel.completeAddress = val.join('')
        console.log('address=========', this.formModel.completeAddress)
      },
      showMessage() {
        this.show = true
        this.forbidden = true
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
  .clear
    clear both
  .el-form
    width 100%
    margin auto
    .el-form-item
      width 50%
      display inline-block
    .text
      width 100%
    .texttoo
      width 33%
      display inline-block
    .address
      width 100%
    .el-input__inner
      border-radius 1px
  .box
    float right
  .back
    width 80%
    margin 0 auto
    padding-bottom 50px
</style>
