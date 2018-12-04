<template lang="pug">
  kalix-dialog.user-add(bizKey="jdyyQue" ref="kalixBizDialog" v-bind:formModel.sync="formModel" v-bind:targetURL="targetURL" v-bind:submitBefore='submitBefore' v-bind:isNoView="true")
    div.el-form(slot="dialogFormSlot" style="width:80%;margin:auto;")
      div(style="margin:20px auto;font-size: 20px;text-align:center;") 基 本 信 息
      el-form(v-bind:model="formModel" ref="formModel")
        el-form-item(label="姓名" prop="name" v-bind:label-width="labelWidth" v-bind:rules="rules.name")
          el-autocomplete(v-model="formModel.name" :fetch-suggestions="querySearchAsync" placeholder="请输入患者姓名" @select="handleSelect" style="width:100%")
        el-form-item(label="身份证号" prop="idCard" v-bind:label-width="labelWidth" v-bind:rules="rules.idCard")
          el-input(v-model="formModel.idCard")
        el-form-item(label="性别" prop="sex" v-bind:label-width="labelWidth" v-bind:rules="rules.sex" )
          el-radio-group(v-model="formModel.sex")
            el-radio(label="男")
            el-radio(label="女")
        el-form-item(label="年龄" prop="age" v-bind:label-width="labelWidth" v-bind:rules="rules.age")
          el-input(v-model="formModel.age")
        el-form-item(label="出生日期" prop="brith" v-bind:label-width="labelWidth" v-bind:rules="rules.brith")
          el-date-picker(v-model="formModel.brith" type="date" placeholder="选择日期" format="yyyy/M/d" value-format="yyyy/M/d" style="width: 100%;")
        el-form-item(label="本人联系方式" prop="telephonePerson" v-bind:label-width="labelWidth" v-bind:rules="rules.telephonePerson")
          el-input(v-model="formModel.telephonePerson")
        el-form-item(label="身高" prop="stature" v-bind:label-width="labelWidth" v-bind:rules="rules.stature")
          el-input(v-model="formModel.stature" )
        el-form-item(label="体重" prop="weight" v-bind:label-width="labelWidth" v-bind:rules="rules.weight")
          el-input(v-model="formModel.weight")
        el-form-item(label="入院日期" prop="dateAdmission" v-bind:label-width="labelWidth" v-bind:rules="rules.dateAdmission")
          el-date-picker(v-model="formModel.dateAdmission" type="date" placeholder="选择日期" format="yyyy/M/d" value-format="yyyy/M/d" style="width: 100%;")
        el-form-item(label="出院日期" prop="dischargeDate" v-bind:label-width="labelWidth" v-bind:rules="rules.dischargeDate")
          el-date-picker(v-model="formModel.dischargeDate" type="date" placeholder="选择日期" format="yyyy/M/d" value-format="yyyy/M/d" style="width: 100%;")
        el-form-item(label="主管医生" prop="directorDoctor" v-bind:label-width="labelWidth" v-bind:rules="rules.directorDoctor")
          <!--el-input(v-model="formModel.directorDoctor")-->
          el-autocomplete(v-model="formModel.directorDoctor" :fetch-suggestions="querySearchAsyncDoc" @select="handleSelectDoc" style="width:100%")
        el-form-item(label="病历" prop="medicalRecords" v-bind:label-width="labelWidth" v-bind:rules="rules.medicalRecords")
          el-input(v-model="formModel.medicalRecords")
        el-form-item(label="病历号" prop="medicalRecordNumber" v-bind:label-width="labelWidth" v-bind:rules="rules.medicalRecordNumber")
          el-input(v-model="formModel.medicalRecordNumber")
        el-form-item(label="住院号" prop="hospitalNumber" v-bind:label-width="labelWidth" v-bind:rules="rules.hospitalNumber")
          el-input(v-model="formModel.hospitalNumber")
        el-form-item(label="床位号" prop="bedNumber" v-bind:label-width="labelWidth" v-bind:rules="rules.bedNumber")
          el-input(v-model="formModel.bedNumber")
        el-form-item.tst(label="现况" prop="currentSituation" v-bind:label-width="labelWidth" v-bind:rules="rules.currentSituation")
          el-input(v-model="formModel.currentSituation" type="textarea" resize="none" rows="4")
        el-form-item(label="重患时间" prop="heavyTime" v-bind:label-width="labelWidth" v-bind:rules="rules.heavyTime")
          el-date-picker(v-model="formModel.heavyTime" type="date" placeholder="选择日期" format="yyyy/M/d" value-format="yyyy/M/d" style="width: 100%;")
        el-form-item(label="家属联系方式" prop="familyPhone" v-bind:label-width="labelWidth" v-bind:rules="rules.familyPhone")
          el-input(v-model="formModel.familyPhone")
        el-form-item(label="省市区" prop="address" v-bind:label-width="labelWidth" v-bind:rules="rules.address")
          kalix-font-cascader.Border(v-on:change="getModel")
        el-form-item.address(label="通讯地址" prop="completeAddress" v-bind:label-width="labelWidth" v-bind:rules="rules.completeAddress")
          el-input(v-model="formModel.completeAddress")
        el-form-item(label="BMI" prop="bmi" v-bind:label-width="labelWidth" v-bind:rules="rules.bmi")
          el-input(v-model="formModel.bmi")
        el-form-item(label="血压" prop="bloodPressure" v-bind:label-width="labelWidth" v-bind:rules="rules.bloodPressure")
          el-input(v-model="formModel.bloodPressure")
        el-form-item.tst(label="特殊疾患" prop="specialDisorders" v-bind:label-width="labelWidth" v-bind:rules="rules.specialDisorders")
          el-input(v-model="formModel.specialDisorders" type="textarea" resize="none" rows="4")
        el-form-item.tst(label="特殊疾患描述" prop="descriptionSpecialDisease" v-bind:label-width="labelWidth" v-bind:rules="rules.descriptionSpecialDisease")
          el-input(v-model="formModel.descriptionSpecialDisease" type="textarea" resize="none" rows="4")
        el-form-item(label="过敏史" prop="allergicHistory" v-bind:label-width="labelWidth" v-bind:rules="rules.allergicHistory")
          el-input(v-model="formModel.allergicHistory")
        el-form-item(label="医疗类别" prop="medicalCategory" v-bind:label-width="labelWidth" v-bind:rules="rules.medicalCategory")
          el-input(v-model="formModel.medicalCategory")
        el-form-item(label="Harris评分" prop="harris" v-bind:label-width="labelWidth" v-bind:rules="rules.harris")
          el-input(v-model="formModel.harris")
        el-form-item(label="HSS评分" prop="hss" v-bind:label-width="labelWidth" v-bind:rules="rules.hss")
          el-input(v-model="formModel.hss")
        el-form-item(label="是否出院" prop="whetherDischarge" v-bind:label-width="labelWidth" v-bind:rules="rules.whetherDischarge")
          el-radio-group(v-model="formModel.whetherDischarge")
            el-radio(label="是")
            el-radio(label="否")
        el-form-item.address(label="修改人员" prop="modifyStaff" v-bind:label-width="labelWidth" v-bind:rules="rules.modifyStaff")
          el-input(v-text="modifyStaff" readonly="readonly")
        el-form-item.address(label="备注" prop="remarks" v-bind:label-width="labelWidth" v-bind:rules="rules.remarks")
          el-input(v-model="formModel.remarks" type="textarea" resize="none" rows="6")
      div(style="width:98px;margin:20px auto;font-size: 20px;") 诊 断 信 息
      el-form(v-bind:model="formModel" ref="formModel" )
        el-form-item.texttoo(label="诊断" prop="diagnosis" v-bind:label-width="labelWidth" v-bind:rules="rules.diagnosis" )
          el-cascader(v-model="diaCascader" placeholder="请选择诊断信息" :options="options" filterable @change="getDia" :clearable="true" v-bind:show-all-levels="false" change-on-select)
        el-form-item.texttoo(label="术式" prop="surgical" v-bind:label-width="labelWidth" v-bind:rules="rules.surgical"  )
          el-cascader(v-model="surCascader" placeholder="请选择术式信息" :options="items" filterable @change="getSur" :clearable="true" v-bind:show-all-levels="false" change-on-select)
        el-form-item.texttoo(label="手术日期" prop="operationDate" v-bind:label-width="labelWidth" v-bind:rules="rules.operationDate")
          el-date-picker.tst(v-model="formModel.operationDate" type="date" placeholder="选择日期" value-format="yyyy/M/d" format="yyyy/M/d")
        el-form-item.texttoo(label="分期" prop="periodization" v-bind:label-width="labelWidth" v-bind:rules="rules.periodization")
          el-select(v-model="formModel.periodization" placeholder="请选择")
            el-option(label="内科" value="内科")
            el-option(label="外科" value="外科")
        el-form-item.texttoo(label="分型" prop="parting" v-bind:label-width="labelWidth" v-bind:rules="rules.parting")
          el-input.tst(v-model="formModel.parting")
        el-form-item.text(label="图片" prop="photo" v-bind:label-width="labelWidth" v-bind:rules="rules.photo")
          kalix-clansman-upload(:action="action" ref="clearUpload"
          v-on:filePath="getFilePath" v-on:selectChange="setGroup" :fileList="fileList" fileType="img" tipText="只能上传jpg/png文件，且不超过2MB")
        <!--el-form-item.text(label="图片" prop="photo" v-bind:label-width="labelWidth" v-bind:rules="rules.photo")-->
        <!--kalix-clansman-upload(:action="action" ref="clearUpload" v-on:filePath="getFilePath" v-on:selectChange="setGroup" :fileList="fileList" fileType="img" tipText="只能上传jpg/png文件，且不超过2MB")-->
        kalix-img-upload(v-model="formModel.photo" readonly="readonly" v-on:ImgDel="ImgDel")
        div.btn
          el-button(v-on:click="CancelClick") 取 消
          el-button(type="primary" v-on:click="onSubmitClick") 提 交
</template>

<script type="text/ecmascript-6">
  import {JdyypatientsURL, JdyysurURL, JdyydiaURL} from '../../config.toml'
  import {usersURL} from '../../../admin/config.toml'
  import FormModel from './model'
  import {baseURL} from '../../../../config/global.toml'
  import KalixClansmanUpload from '../../../../components/fileUpload/upload'
  import KalixSelect from '../../../../components/corelib/components/common/baseSelect'
  import KalixFontCascader from '../../../../components/cascader/ThreeCascader'
  import KalixDatepickerSimple from '../../../../components/corelib/components/common/baseDatepicker'
  import KalixImgUpload from '../../../../components/corelib/components/common/imgUpload'
  import EventBus from '../../../../components/corelib/common/eventbus'
  import {ON_REFRESH_DATA} from '../../../../components/corelib/components/common/event.toml'
  import Message from '../../../../components/corelib/common/message'
  export default {
    name: 'JdyyQueEdit',
    components: {
      KalixImgUpload,
      JdyysurURL,
      JdyypatientsURL,
      JdyydiaURL,
      KalixDatepickerSimple,
      KalixSelect,
      KalixClansmanUpload,
      KalixFontCascader
    },
    data() {
      var validatename = (rule, value, callback) => {
        if (value !== undefined && value !== null && value !== '') {
          let valTrim = value.replace(/^\s+|\s+$/g, '')
          let reg = /^([\u4e00-\u9fa5]){2,7}$/
          if (reg.test(valTrim)) {
            callback()
          } else {
            callback(new Error('请输入正确姓名'))
          }
        } else {
          // callback()
          callback(new Error('请输姓名'))
        }
      }
      var validateidCard = (rule, value, callback) => {
        if (value !== undefined && value !== null && value !== '') {
          // let idCard = require('idcard') // 身份证号码验证  加载身份验证插件命令： yarn add idcard
          // this.formModel.idCard = ''
          let valTrim = value.replace(/^\s+|\s+$/g, '')
          let reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/
          if (reg.test(valTrim)) {
            var myDate = new Date()
            var data = myDate.getFullYear()
            var age = data - value.substr(6, 4)
            this.formModel.age = age + ''
            this.formModel.brith = value.substr(6, 4) + '-' + value.substr(10, 2) + '-' + value.substr(12, 2)
            this.formModel.sex = parseInt(value.substr(16, 1)) % 2 === 0 ? '女' : '男'
            callback()
          } else {
            callback(new Error('请输入正确身份证号码'))
          }
        } else {
          callback()
          // callback(new Error('请输入身份证号码'))
        }
      }
      var validatedirectorDoctor = (rule, value, callback) => {
        if (value !== undefined && value !== null && value !== '') {
          let valTrim = value.replace(/^\s+|\s+$/g, '')
          let reg = /^([\u4e00-\u9fa5]){2,7}$/
          if (reg.test(valTrim)) {
            callback()
          } else {
            callback(new Error('请输入正确姓名'))
          }
        } else {
          callback()
          // callback(new Error('请输姓名'))
        }
      }
      var validatetelephone = (rule, value, callback) => {
        if (value !== undefined && value !== null && value !== '') {
          let valTrim = value.replace(/^\s+|\s+$/g, '')
          let reg1 = /^(0|86|17951)?(13[0-9]|15[012356789]|17[01678]|18[0-9]|14[57])[0-9]{8}$/
          let reg2 = /^([0-9]{3,4}-)?[0-9]{7,8}$/
          // let reg = /^1[3|4|5|6|7|8|9][0-9]\d{4,8}$/  && valTrim.length === 11
          if (reg1.test(valTrim) || reg2.test(valTrim)) {
            this.phoneNumberInfo = true
            callback()
          } else {
            this.phoneNumberInfo = false
            callback(new Error('联系电话格式不正确，请输入正确的固定电话或手机号'))
          }
        } else {
          this.phoneNumberInfo = false
          callback()
          // callback(new Error('请输入手机号码'))
        }
      }
      var validateage = (rule, value, callback) => {
        if (value !== undefined && value !== null && value !== '') {
          let valTrim = value.replace(/^\s+|\s+$/g, '')
          let reg = /^(?:[1-9][0-9]?|1[01][0-9]|120)$/
          if (reg.test(valTrim)) {
            this.phoneNumberInfo = true
            callback()
          } else {
            this.phoneNumberInfo = false
            callback(new Error('请输入正确年龄'))
          }
        } else {
          this.phoneNumberInfo = false
          callback(new Error('请输入年龄'))
        }
      }
      // var validatestature = (rule, value, callback) => {
      //   if (value !== undefined && value !== null && value !== '') {
      //     let valTrim = value.replace(/^\s+|\s+$/g, '')
      //     let reg = /^(?:[1-9]{1,2}\d|300)$/
      //     if (reg.test(valTrim)) {
      //       this.phoneNumberInfo = true
      //       callback()
      //     } else {
      //       this.phoneNumberInfo = false
      //       callback(new Error('请输入正确身高'))
      //     }
      //   } else {
      //     this.phoneNumberInfo = false
      //     callback()
      //     // callback(new Error('请输入身高'))
      //   }
      // }
      // var validatexinxi = (rule, value, callback) => {
      //   if (value !== undefined && value !== null && value !== '') {
      //     let valTrim = value.replace(/^\s+|\s+$/g, '')
      //     let reg = /^([\u4e00-\u9fa5]){1,50}$/
      //     if (reg.test(valTrim)) {
      //       callback()
      //     } else {
      //       callback(new Error('请输入正确信息'))
      //     }
      //   } else {
      //     callback()
      //   }
      // }
      return {
        modifyStaff: '',
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
          name: [{required: true, validator: validatename, trigger: 'blur'}],
          sex: [{trigger: 'blur'}],
          age: [{validator: validateage, trigger: 'blur'}], // validator: validateage,
          idCard: [{required: false, validator: validateidCard, trigger: 'change'}],
          directorDoctor: [{required: false, validator: validatedirectorDoctor, trigger: 'change'}],
          telephonePerson: [{validator: validatetelephone, trigger: 'change'}],
          familyPhone: [{validator: validatetelephone, trigger: 'change'}]
          // medicalRecords: [{validator: validatexinxi, trigger: 'change'}],
          // currentSituation: [{validator: validatexinxi, trigger: 'change'}],
          // specialDisorders: [{validator: validatexinxi, trigger: 'change'}],
          // descriptionSpecialDisease: [{validator: validatexinxi, trigger: 'change'}],
          // allergicHistory: [{validator: validatexinxi, trigger: 'change'}],
          // typeMedicalTreatment: [{validator: validatexinxi, trigger: 'change'}],
          // stature: [{validator: validatestature, trigger: 'change'}]
        },
        targetURL: JdyypatientsURL,
        diaCascader: [],
        surCascader: [],
        filePathArr: [],
        fileNameArr: []
      }
    },
    created() {
    },
    mounted() {
      this.modifyStaff = this.$KalixCatch.get('user_name')
      this.getDiaCascader() // 获取诊断信息并以级联形式显示
      this.getSurCascader() // 获取术式信息并以级联形式显示
      this.loadAll() // 获取病员信息
      this.loadAllDoc() // 获取医生信息
    },
    methods: {
      ImgDel(imgUrl) {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning',
          center: true
        }).then(() => {
          let arrImg = this.formModel.photo.split(',')
          let idx = arrImg.indexOf(imgUrl)
          arrImg.splice(idx, 1)
          this.formModel.photo = arrImg.join(',')
          this.message({
            type: 'success',
            message: '删除成功!'
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
      },
      init(dialogOption) {
        if (!this.formModel.sex) {
          this.formModel.sex = ''
        }
        if (!this.formModel.idCard) {
          this.formModel.idCard = ''
        }
        if (!this.formModel.age) {
          this.formModel.age = ''
        }
        if (!this.formModel.stature) {
          this.formModel.stature = ''
        }
        if (!this.formModel.weight) {
          this.formModel.weight = ''
        }
        if (!this.formModel.brith) {
          this.formModel.brith = ''
        }
        if (!this.formModel.dateAdmission) {
          this.formModel.dateAdmission = ''
        }
        if (!this.formModel.dischargeDate) {
          this.formModel.dischargeDate = ''
        }
        if (!this.formModel.directorDoctor) {
          this.formModel.directorDoctor = ''
        }
        if (!this.formModel.bedNumber) {
          this.formModel.bedNumber = ''
        }
        if (!this.formModel.hospitalNumber) {
          this.formModel.hospitalNumber = ''
        }
        if (!this.formModel.medicalRecordNumber) {
          this.formModel.medicalRecordNumber = ''
        }
        if (!this.formModel.medicalRecords) {
          this.formModel.medicalRecords = ''
        }
        if (!this.formModel.currentSituation) {
          this.formModel.currentSituation = ''
        }
        if (!this.formModel.telephonePerson) {
          this.formModel.telephonePerson = ''
        }
        if (!this.formModel.familyPhone) {
          this.formModel.familyPhone = ''
        }
        if (!this.formModel.completeAddress) {
          this.formModel.completeAddress = ''
        }
        if (!this.formModel.bmi) {
          this.formModel.bmi = ''
        }
        if (!this.formModel.bloodPressure) {
          this.formModel.bloodPressure = ''
        }
        if (!this.formModel.specialDisorders) {
          this.formModel.specialDisorders = ''
        }
        if (!this.formModel.descriptionSpecialDisease) {
          this.formModel.descriptionSpecialDisease = ''
        }
        if (!this.formModel.allergicHistory) {
          this.formModel.allergicHistory = ''
        }
        if (!this.formModel.medicalCategory) {
          this.formModel.medicalCategory = ''
        }
        if (!this.formModel.whetherDischarge) {
          this.formModel.whetherDischarge = ''
        }
        if (!this.formModel.remarks) {
          this.formModel.remarks = ''
        }
        if (!this.formModel.harris) {
          this.formModel.harris = ''
        }
        if (!this.formModel.hss) {
          this.formModel.hss = ''
        }
        if (!this.formModel.modifyStaff) {
          this.formModel.modifyStaff = ''
        }
        if (!this.formModel.heavyTime) {
          this.formModel.heavyTime = ''
        }
        if (!this.formModel.diagnosis) {
          this.formModel.diagnosis = ''
        }
        if (!this.formModel.surgical) {
          this.formModel.surgical = ''
        }
        if (!this.formModel.operationDate) {
          this.formModel.operationDate = ''
        }
        if (!this.formModel.periodization) {
          this.formModel.periodization = ''
        }
        if (!this.formModel.parting) {
          this.formModel.parting = ''
        }
        if (!this.formModel.photo) {
          this.formModel.photo = ''
        }
        console.log('---------0000000000000000------------', this.formModel)
        console.log('---------dialogOption------------', dialogOption)
        delete this.formModel.rowNumber
        delete this.formModel.tableData
        let diaCode = this.formModel.diagnosisCode // 诊断级联回显
        console.log('diaCode+++++', diaCode)
        for (let i = 1; i <= diaCode.length / 2; i++) {
          if (diaCode.substring((i - 1) * 2, i * 2) !== '00') {
            let a = ''
            for (let j = 0; j < (diaCode.length - i * 2); j++) {
              a += '0'
            }
            this.diaCascader.push(diaCode.substring(0, i * 2) + a)
          }
        }
        console.log('diaCascader+++++++++++++++++++++++', this.diaCascader)
        let surCode = this.formModel.surgicalCode // 术式级联回显
        for (let i = 1; i <= surCode.length / 2; i++) {
          if (surCode.substring((i - 1) * 2, i * 2) !== '00') {
            let a = ''
            for (let j = 0; j < (surCode.length - i * 2); j++) {
              a += '0'
            }
            this.surCascader.push(surCode.substring(0, i * 2) + a)
          }
        }
      },
      getFilePath(filePath, fileName) { // 图片上传路径
        this.filePathArr.push(filePath)
        this.fileNameArr.push(fileName)
      },
      submitBefore(baseDialog, callBack) { // 多张图片拼路径
        if (this.formModel.start) {
          delete this.formModel['start']
        }
        let filePath = ''
        if (this.filePathArr.length > 0) {
          this.filePathArr.forEach(e => {
            filePath += e + ','
          })
          filePath = filePath.substr(0, filePath.length - 1)
        }
        let fileName = ''
        if (this.fileNameArr.length > 0) {
          this.fileNameArr.forEach(e => {
            fileName += e + ','
          })
          fileName = fileName.substr(0, fileName.length - 1)
        }
        if (fileName.length > 0) {
          let photoStr = this.formModel.photo !== '' ? this.formModel.photo + ',' : ''
          baseDialog.formModel.photo = photoStr + filePath
          baseDialog.imgName = fileName
          this.formModel.modifyStaff = this.$KalixCatch.get('user_name')
        }
        callBack()
      },
      setGroup(item) {
        this.formModel.downlosd = item.albumname
      },
      loadAll() { // 获取病员信息
        this.axios.request({
          method: 'GET',
          url: JdyypatientsURL + '/getPatientsByAutocomplete'
        }).then(res => {
          console.log('getPatientsByAutocomplete======================', res.data.data)
          this.restaurants = res.data.data
        })
      },
      querySearchAsync(queryString, cb) {
        var restaurants = this.restaurants
        var results = queryString ? restaurants.filter(this.createStateFilter(queryString)) : restaurants
        cb(results)
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
        }
      },
      handleSelect(item) {
        console.log('item===========================', item)
        this.axios.request({
          method: 'GET',
          url: JdyypatientsURL + '/' + item.pid
        }).then(res => {
          console.log('handleSelect========================', res.data)
          this.formModel = res.data
        })
      },
      loadAllDoc() { // 获取医生信息
        this.axios.request({
          method: 'GET',
          url: usersURL + '/getDocsByAutocomplete'
        }).then(res => {
          console.log('getDocsByAutocomplete======================', res.data.data)
          this.restaurantDocs = res.data.data
        })
      },
      querySearchAsyncDoc(queryString, cb) {
        var restaurants = this.restaurantDocs
        var results = queryString ? restaurants.filter(this.createStateFilterDoc(queryString)) : restaurants
        cb(results)
      },
      createStateFilterDoc(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0)
        }
      },
      handleSelectDoc(item) {
        console.log('item===========================', item)
        this.formModel1.directorDoctor = item.value
      },
      getModel(val) { // 三级联动地区参数区分
        this.formModel.completeAddress = val.join('')
        console.log('address=========', this.formModel.completeAddress)
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
        console.log('ccccccccccccccccc', this.formModel.diagnosisCode)
        console.log('val===========================', val.toString().substring(val.toString().lastIndexOf(',') + 1, val.toString().length))
        this.formModel.diagnosisCode = val.toString().substring(val.toString().lastIndexOf(',') + 1, val.toString().length)
        this.axios.request({
          method: 'GET',
          url: JdyydiaURL + '/getCodeByContent',
          params: {
            code: this.formModel.diagnosisCode
          }
        }).then(res => {
          console.log('formModel.diagnosisCode==============================', res.data.data)
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
      CancelClick() {
        this.$refs.kalixBizDialog.onCancelClick()
        // EventBus.$emit(ON_REFRESH_DATA, this.bizKey, this.formModel) // 页面刷新
      },
      onSubmitClick() { // 重写多张图片上传方法
        if (this.submitCustom && typeof (this.submitCustom) === 'function') {
          this.submitCustom(this)
        } else if (this.submitBefore && typeof (this.submitBefore) === 'function') {
          this.submitBefore(this, () => {
            this.SubmitClick() // 执行提交方法
          })
        } else {
          this.SubmitClick()
        }
      },
      SubmitClick() {
        console.log('9999999999999999999999999999999999999999', this.formModel)
        this.$refs.formModel.validate((valid) => {
          console.log('submitAction---------------------', valid)
          if (valid) {
            this.axios.request({
              method: 'PUT',
              url: JdyypatientsURL + '/id',
              // ${' + this.formModel.id + '}
              data: this.formModel
            }).then(res => {
              console.log('res======================', res.data.msg)
              if (res.data.success) {
                Message.success(res.data.msg)
                this.visible = false
                this.$refs.kalixBizDialog.onCancelClick()
                EventBus.$emit(ON_REFRESH_DATA, this.bizKey, this.formModel) // 页面刷新
                // 关闭对话框
              } else {
                Message.error(res.data.msg)
                this.$refs.kalixBizDialog.onCancelClick()
                EventBus.$emit(ON_REFRESH_DATA, this.bizKey, this.formModel) // 页面刷新
              }
            })
          }
        })
      }
    }
  }
</script>


<style scoped lang="stylus" type="text/stylus">
  .el-form
    width 95%
    margin auto
    .el-form-item
      width 50%
      display inline-block
    .text
      width 100%
    .texttoo
      width 50%
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

  .tst
    width: 100% !important

  .btn
    text-align: right

</style>
