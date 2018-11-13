<template lang="pug">
  kalix-dialog.user-add(title='修改' bizKey="jdyyque" ref="kalixBizDialog" v-bind:formModel.sync="formModel" v-bind:targetURL="targetURL" v-bind:submitBefore="submitBefore")
    div.el-form(slot="dialogFormSlot" v-bind:submitBefore="submitBefore")
      <!--div {{modifyStaff}}-->
      el-form-item(label="姓名" prop="name" v-bind:label-width="labelWidth" v-bind:rules="rules.name" )
        el-input(v-model="formModel.name")
      el-form-item(label="性别" prop="sex" v-bind:label-width="labelWidth" v-bind:rules="rules.sex" style="")
        el-radio-group(v-model="formModel.sex" )
          el-radio(label="男")
          el-radio(label="女")
      el-form-item(label="年龄" prop="age" v-bind:label-width="labelWidth" v-bind:rules="rules.age")
        el-input(v-model="formModel.age" type="number")
      el-form-item(label="出生日期" prop="brith" v-bind:label-width="labelWidth" v-bind:rules="rules.brith")
        el-date-picker(v-model="formModel.brith" type="date" placeholder="选择日期" format="yyyy/M/d" value-format="yyyy/M/d" style="width: 100%;")
      el-form-item(label="身份证号" prop="idCard" v-bind:label-width="labelWidth" v-bind:rules="rules.idCard")
        el-input(v-model="formModel.idCard" type="number")
      el-form-item(label="本人联系方式" prop="telephonePerson" v-bind:label-width="labelWidth" v-bind:rules="rules.telephonePerson")
        el-input(v-model="formModel.telephonePerson")
      el-form-item(label="身高" prop="stature" v-bind:label-width="labelWidth" v-bind:rules="rules.stature")
        el-input(v-model="formModel.stature" type="number")
      el-form-item(label="体重" prop="weight" v-bind:label-width="labelWidth" v-bind:rules="rules.weight")
        el-input(v-model="formModel.weight" type="number")
      el-form-item(label="入院日期" prop="dateAdmission" v-bind:label-width="labelWidth" v-bind:rules="rules.dateAdmission")
        el-date-picker(v-model="formModel.dateAdmission" type="date" placeholder="选择日期" format="yyyy/M/d" value-format="yyyy/M/d" style="width: 100%;")
      el-form-item(label="出院日期" prop="dischargeDate" v-bind:label-width="labelWidth" v-bind:rules="rules.dischargeDate")
        el-date-picker(v-model="formModel.dischargeDate" type="date" placeholder="选择日期" format="yyyy/M/d" value-format="yyyy/M/d" style="width: 100%;")
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
        el-date-picker(v-model="formModel.heavyTime" type="date" placeholder="选择日期" format="yyyy/M/d" value-format="yyyy/M/d" style="width: 100%;")
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
      el-form-item(label="是否出院" prop="whetherDischarge" v-bind:label-width="labelWidth" v-bind:rules="rules.whetherDischarge")
        el-radio-group(v-model="formModel.whetherDischarge" )
          el-radio(label="是")
          el-radio(label="否")
      el-form-item(label="修改人员" prop="modifyStaff" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.modifyStaff" v-text="modifyStaff" readonly="readonly")
      el-form-item.address(label="备注" prop="remarks" v-bind:label-width="labelWidth" v-bind:rules="rules.remarks")
        el-input(v-model="formModel.remarks")
      el-form-item(label="诊断" prop="diagnosis" v-bind:label-width="labelWidth" v-bind:rules="rules.diagnosis" )
        el-cascader.tests(placeholder="请选择诊断信息" :options="options" filterable @change="getDia"  v-bind:show-all-levels="false" change-on-select)
      el-form-item(label="术式" prop="surgical" v-bind:label-width="labelWidth" v-bind:rules="rules.surgical" )
        el-cascader.tests(placeholder="请选择术式信息" :options="items" filterable @change="getSur" v-bind:show-all-levels="false" change-on-select)
      el-form-item(label="手术日期" prop="operationDate" v-bind:label-width="labelWidth" v-bind:rules="rules.operationDate")
        el-date-picker(v-model="formModel.operationDate" type="date" placeholder="选择日期" value-format="yyyy/M/d" format="yyyy/M/d" style="width: 78%;")
      el-form-item(label="分期" prop="periodization" v-bind:label-width="labelWidth" v-bind:rules="rules.periodization")
        el-select.tests(v-model="formModel.periodization" placeholder="请选择")
          el-option(label="内科" value="内科")
          el-option(label="外科" value="外科")
      el-form-item(label="分型" prop="parting" v-bind:label-width="labelWidth" v-bind:rules="rules.parting")
        el-input.tests(v-model="formModel.parting")
      el-form-item(label="图片" prop="photo" v-bind:label-width="labelWidth" v-bind:rules="rules.photo")
        kalix-clansman-upload(:action="action" v-on:filePath="getFilePath" v-on:selectChange="setGroup" :fileList="fileList" fileType="img" tipText="只能上传jpg/png文件，且不超过2MB" title="点击文字图片放大")
        kalix-img-upload(v-model="formModel.photo" v-bind:isImage="isImage" style="width:100%" v-bind:readonly="true")

</template>

<script type="text/ecmascript-6">
  import {JdyypatientsURL, JdyyvisitURL, JdyysurURL, JdyydiaURL} from '../../config.toml'
  import FormModel from './model'
  import {baseURL} from '../../../../config/global.toml'
  import KalixClansmanUpload from '../../../../components/fileUpload/upload'
  import KalixSelect from '../../../../components/corelib/components/common/baseSelect'
  import KalixFontCascader from '../../../../components/cascader/ThreeCascader'
  import KalixDatepickerSimple from '../../../../components/corelib/components/common/baseDatepicker'
  import KalixImgUpload from '../../../../components/corelib/components/common/imgUpload'

  export default {
    name: 'JdyyQueEdit',
    components: {
      KalixImgUpload, JdyyvisitURL, JdyysurURL, JdyypatientsURL, JdyydiaURL, KalixDatepickerSimple, KalixSelect, KalixClansmanUpload, KalixFontCascader},
    data() {
      return {
        downloadURL: JdyypatientsURL,
        fileList: [],
        options: [],
        items: [],
        isImage: true,
        labelWidth: '150px',
        action: baseURL + '/camel/rest/upload',
        columnParam: undefined,
        formModel: Object.assign({}, FormModel),
        rules: {
          name: [{required: true, message: '请输入姓名', trigger: 'change'}],
          sex: [{required: true, message: '请输入性别', trigger: 'change'}],
          age: [{required: true, message: '请输入年龄', trigger: 'change'}]
        },
        targetURL: JdyypatientsURL,
        JdyyvisitURL: JdyyvisitURL,
        modifyStaff: this.$KalixCatch.get('user_name'),
        diaCascader: [],
        surCascader: []
      }
    },
    mounted() {
      this.getDiaCascader() // 获取诊断信息并以级联形式显示
      this.getSurCascader() // 获取术式信息并以级联形式显示
      this.getUserName()
    },
    methods: {
      init(dialogOption) {
        console.log('---------dialogOption------------', dialogOption)
      },
      getDiaCascader() { // 获取诊断信息并以级联形式显示
        console.log('getDiaCascader========================')
        this.axios.request({
          method: 'GET',
          url: JdyydiaURL + '/getDiaCascader'
        }).then(res => {
          console.log('Request-Cascader-Success==============', res.data.data)
          this.options = res.data.data
        })
      },
      getSurCascader() { // 获取术式信息并以级联形式显示
        console.log('getSurCascader========================')
        this.axios.request({
          method: 'GET',
          url: JdyysurURL + '/getSurCascader'
        }).then(res => {
          console.log('Request-getSurCascader-Success==============', res.data.data)
          this.items = res.data.data
        })
      },
      getDia(val) { // 通过级联获取数据后转成字符串
        console.log('val===========================', val.toString().substring(val.toString().lastIndexOf(',') + 1, val.toString().length))
        this.formModel.diagnosisCode = val.toString().substring(val.toString().lastIndexOf(',') + 1, val.toString().length)
        this.axios.request({
          method: 'GET',
          url: JdyydiaURL + '/getCodeByContent',
          params: {
            code: this.formModel.diagnosisCode
          }
        }).then(res => {
          console.log('formModel.diagnosis==============================', res.data.data)
          this.formModel.diagnosis = res.data.data[0].content
        })
      },
      getSur(val) { // 通过级联获取数据后转成字符串
        this.formModel.surgicalCode = val.toString().substring(val.toString().lastIndexOf(',') + 1, val.toString().length)
        this.axios.request({
          method: 'GET',
          url: JdyysurURL + '/getCodeByContent',
          params: {
            code: this.formModel.surgicalCode
          }
        }).then(res => {
          console.log('formModel.diagnosisCode==============================', res.data.data)
          this.formModel.surgical = res.data.data[0].content
        })
      },
      getFilePath(filePath, fileName) { // 图片上传路径
        console.log('--getFilePath---', filePath)
        console.log('--fileName---', fileName)
        this.filePathArr.push(filePath)
        this.fileNameArr.push(fileName)
      },
      submitBefore(baseDialog, callBack) { // 多张图片拼路径
        console.log('===FilePath=================', this.filePathArr)
        let filePath = ''
        if (this.filePathArr.length) {
          this.filePathArr.forEach(e => {
            filePath += e + ','
          })
          filePath = filePath.substr(0, filePath.length - 1)
        }
        let fileName = ''
        if (this.fileNameArr.length) {
          this.fileNameArr.forEach(e => {
            fileName += e + ','
          })
          fileName = fileName.substr(0, fileName.length - 1)
        }
        let photoStr = (this.formModel.photo !== null ? this.formModel.photo + ',' : '')
        baseDialog.formModel.photo = photoStr + filePath
        baseDialog.formModel.imgName = fileName
        this.formModel.modifyStaff = this.$KalixCatch.get('user_name')
        callBack()
      },
      setGroup(item) {
        this.formModel.downlosd = item.albumname
      },
      getModel(val) { // 三级联动地区参数区分
        this.formModel.completeAddress = val.join('')
        console.log('address=========', this.formModel.completeAddress)
      },
      getUserName() {
        this.formModel.modifyStaff = this.$KalixCatch.get('user_name')
        console.log('this.this.formModel.modifyStaff========', this.formModel.modifyStaff)
      }
      // submitBefore(baseDialog, callBack) {
      //   this.formModel.modifyStaff = this.$KalixCatch.get('user_name')
      //   callBack()
      // }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
  .el-form
    width 80%
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
    .tests
      width 78%
    .el-input__inner
      border-radius 1px
</style>
