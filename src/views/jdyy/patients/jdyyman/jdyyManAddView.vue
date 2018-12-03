<template lang="pug">
  keep-alive
    div(class="back")
      div.base-message
        div(style="width:110px;margin:20px auto;font-size: 20px;") 基 本 信 息
        el-form(v-bind:model="formModel1" ref="formModel1")
          el-form-item(label="姓名" prop="name" v-bind:label-width="labelWidth" v-bind:rules="rules.name")
            el-autocomplete(v-model="formModel1.name" :fetch-suggestions="querySearchAsync" @select="handleSelect" style="width:100%")
          el-form-item(label="身份证号" prop="idCard" v-bind:label-width="labelWidth" v-bind:rules="rules.idCard")
            el-input(v-model="formModel1.idCard" )
          el-form-item(label="性别" prop="sex" v-bind:label-width="labelWidth" v-bind:rules="rules.sex" )
            el-radio-group(v-model="formModel1.sex" )
              el-radio(label="男")
              el-radio(label="女")
          el-form-item(label="年龄" prop="age" v-bind:label-width="labelWidth" v-bind:rules="rules.age")
            el-input(v-model="formModel1.age")
          el-form-item(label="出生日期" prop="brith" v-bind:label-width="labelWidth" v-bind:rules="rules.brith")
            el-date-picker(v-model="formModel1.brith" type="date" placeholder="选择日期" format="yyyy/M/d" value-format="yyyy/M/d" style="width: 100%;" )
          el-form-item(label="本人联系方式" prop="telephonePerson" v-bind:label-width="labelWidth" v-bind:rules="rules.telephonePerson")
            el-input(v-model="formModel1.telephonePerson")
          el-form-item(label="身高" prop="stature" v-bind:label-width="labelWidth" v-bind:rules="rules.stature")
            el-input(v-model="formModel1.stature"  placeholder="单位 : cm")
          el-form-item(label="体重" prop="weight" v-bind:label-width="labelWidth" v-bind:rules="rules.weight")
            el-input(v-model="formModel1.weight" placeholder="单位 : kg")
          el-form-item(label="入院日期" prop="dateAdmission" v-bind:label-width="labelWidth" v-bind:rules="rules.dateAdmission")
            el-date-picker(v-model="formModel1.dateAdmission" type="date" placeholder="选择日期" format="yyyy/M/d" value-format="yyyy/M/d" style="width: 100%;")
          el-form-item(label="出院日期" prop="dischargeDate" v-bind:label-width="labelWidth" v-bind:rules="rules.dischargeDate")
            el-date-picker(v-model="formModel1.dischargeDate" type="date" placeholder="选择日期" format="yyyy/M/d" value-format="yyyy/M/d" style="width: 100%;")
          el-form-item(label="主管医生" prop="directorDoctor" v-bind:label-width="labelWidth" v-on:blur="validDoctor(value)" v-bind:rules="rules.directorDoctor")
            <!--el-input(v-model="formModel1.directorDoctor" @change="validDoctor($event)")-->
            el-autocomplete(v-model="formModel1.directorDoctor" :fetch-suggestions="querySearchAsyncDoc" @select="handleSelectDoc" style="width:100%")
          el-form-item(label="病历" prop="medicalRecords" v-bind:label-width="labelWidth" v-bind:rules="rules.medicalRecords")
            el-input(v-model="formModel1.medicalRecords")
          el-form-item(label="病历号" prop="medicalRecordNumber" v-bind:label-width="labelWidth" v-bind:rules="rules.medicalRecordNumber")
            el-input(v-model="formModel1.medicalRecordNumber")
          el-form-item(label="住院号" prop="hospitalNumber" v-bind:label-width="labelWidth" v-bind:rules="rules.hospitalNumber")
            el-input(v-model="formModel1.hospitalNumber" )
          el-form-item(label="床位号" prop="bedNumber" v-bind:label-width="labelWidth" v-bind:rules="rules.bedNumber")
            el-input(v-model="formModel1.bedNumber")
          el-form-item(label="重患时间" prop="heavyTime" v-bind:label-width="labelWidth" v-bind:rules="rules.heavyTime")
            el-date-picker(v-model="formModel1.heavyTime" type="date" placeholder="选择日期" format="yyyy/M/d" value-format="yyyy/M/d" style="width: 100%;")
          el-form-item.long(label="现况" prop="currentSituation" v-bind:label-width="labelWidth" v-bind:rules="rules.currentSituation")
            el-input(v-model="formModel1.currentSituation" type="textarea" resize="none" rows="4")
          el-form-item(label="家属联系方式" prop="familyPhone" v-bind:label-width="labelWidth" v-bind:rules="rules.familyPhone")
            el-input(v-model="formModel1.familyPhone")
          el-form-item(label="省市区" prop="address" v-bind:label-width="labelWidth" v-bind:rules="rules.address")
            kalix-font-cascader.Border(v-on:change="getModel")
          el-form-item.address(label="通讯地址" prop="completeAddress" v-bind:label-width="labelWidth" v-bind:rules="rules.completeAddress")
            el-input(v-model="formModel1.completeAddress" )
          el-form-item(label="BMI" prop="bmi" v-bind:label-width="labelWidth" v-bind:rules="rules.bmi")
            el-input(v-model="formModel1.bmi" )
          el-form-item(label="血压" prop="bloodPressure" v-bind:label-width="labelWidth" v-bind:rules="rules.bloodPressure")
            el-input(v-model="formModel1.bloodPressure" )
          el-form-item.long(label="特殊疾患" prop="specialDisorders" v-bind:label-width="labelWidth" v-bind:rules="rules.specialDisorders")
            el-input(v-model="formModel1.specialDisorders" type="textarea" resize="none" rows="4")
          el-form-item.long(label="特殊疾患描述" prop="descriptionSpecialDisease" v-bind:label-width="labelWidth" v-bind:rules="rules.descriptionSpecialDisease")
            el-input(v-model="formModel1.descriptionSpecialDisease" type="textarea" resize="none" rows="4")
          el-form-item(label="过敏史" prop="allergicHistory" v-bind:label-width="labelWidth" v-bind:rules="rules.allergicHistory")
            el-input(v-model="formModel1.allergicHistory")
          el-form-item(label="医疗类别" prop="medicalCategory" v-bind:label-width="labelWidth" v-bind:rules="rules.medicalCategory")
            el-input(v-model="formModel1.medicalCategory")
          el-form-item(label="Harris评分" prop="harris" v-bind:label-width="labelWidth" v-bind:rules="rules.harris")
            el-input(v-model="formModel1.harris" )
          el-form-item(label="HSS评分" prop="hss" v-bind:label-width="labelWidth" v-bind:rules="rules.hss")
            el-input(v-model="formModel1.hss" )
          el-form-item(label="是否出院" prop="whetherDischarge" v-bind:label-width="labelWidth" v-bind:rules="rules.whetherDischarge")
            el-radio-group(v-model="formModel1.whetherDischarge" )
              el-radio(label="是")
              el-radio(label="否")
          el-form-item.address(label="备注" prop="remarks" v-bind:label-width="labelWidth" v-bind:rules="rules.remarks")
            el-input(v-model="formModel1.remarks" type="textarea" resize="none" rows="6")
          div.clear
      div.diagnose-message
        div(style="width:98px;margin:20px auto;font-size: 20px;") 诊 断 信 息
        el-form(v-bind:model="formModel2" ref="formModel2" v-bind:submitBefore="submitBefore")
          el-form-item.texttoo(label="诊断" prop="diagnosis" v-bind:label-width="labelWidth" v-bind:rules="rules.diagnosis" )
            el-cascader(ref="cascader1" placeholder="请选择诊断信息" :options="options" filterable @change="getDia" :clearable="true" v-bind:show-all-levels="false" change-on-select)
          el-form-item.texttoo(label="术式" prop="surgical" v-bind:label-width="labelWidth" v-bind:rules="rules.surgical"  )
            el-cascader(ref="cascader2" placeholder="请选择术式信息" :options="items" filterable @change="getSur" :clearable="true" v-bind:show-all-levels="false" change-on-select)
          el-form-item.texttoo(label="手术日期" prop="operationDate" v-bind:label-width="labelWidth" v-bind:rules="rules.operationDate")
            el-date-picker.tst(v-model="formModel2.operationDate" type="date" placeholder="选择日期" value-format="yyyy/M/d" format="yyyy/M/d")
          el-form-item.texttoo(label="分期" prop="periodization" v-bind:label-width="labelWidth" v-bind:rules="rules.periodization")
            el-select(v-model="formModel2.periodization" placeholder="请选择分期")
              el-option(label="内科" value="内科")
              el-option(label="外科" value="外科")
          el-form-item.texttoo(label="分型" prop="parting" v-bind:label-width="labelWidth" v-bind:rules="rules.parting")
            el-input.tst(v-model="formModel2.parting")
          el-form-item.text(label="图片" prop="photo" v-bind:label-width="labelWidth" v-bind:rules="rules.photo")
            kalix-clansman-upload(:action="action" ref="clearUpload"
            v-on:filePath="getFilePath" v-on:selectChange="setGroup" :fileList="fileList" fileType="img" tipText="只能上传jpg/png文件，且不超过2MB")
        div.box
          ul.right_ul
            li.right_li
              el-button.btn-submit(v-on:click="submitAction()" size="large") 保存
              el-button.btn-submit.btn-reset( v-on:click="resetAll()" size="large") 重置
        div.clear

</template>

<script type="text/ecmascript-6">
  import {JdyypatientsURL, JdyysurURL, JdyydiaURL, JdyyvisitURL} from '../../config.toml'
  import {usersURL} from '../../../admin/config.toml'
  // import {noop} from 'element-ui/src/utils/util'
  import FormModel1 from './model1'
  import FormModel2 from './model2'
  import {baseURL} from '../../../../config/global.toml'
  import KalixClansmanUpload from '../../../../components/fileUpload/upload'
  import KalixDatepickerSimple from '../../../../components/corelib/components/common/baseDatepicker'
  import KalixFontCascader from '../../../../components/cascader/ThreeCascader'
  import Message from '../../../../components/corelib/common/message'
  export default {
    name: 'kalix-jdyy-jdyyman',
    components: {KalixDatepickerSimple, KalixClansmanUpload, KalixFontCascader},
    data() {
      // callback: noop()
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
            this.formModel1.age = age + ''
            this.formModel1.brith = value.substr(6, 4) + '-' + value.substr(10, 2) + '-' + value.substr(12, 2)
            this.formModel1.sex = parseInt(value.substr(16, 1)) % 2 === 0 ? '女' : '男'
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
          callback()
          // callback(new Error('请输入年龄'))
        }
      }
      var validatestature = (rule, value, callback) => {
        if (value !== undefined && value !== null && value !== '') {
          let valTrim = value.replace(/^\s+|\s+$/g, '')
          let reg = /^(?:[1-9]{1,2}\d|300)$/
          if (reg.test(valTrim)) {
            this.phoneNumberInfo = true
            callback()
          } else {
            this.phoneNumberInfo = false
            callback(new Error('请输入正确身高'))
          }
        } else {
          this.phoneNumberInfo = false
          callback()
          // callback(new Error('请输入身高'))
        }
      }
      // var validatecompleteAddress = (rule, value, callback) => {
      //   if (value !== undefined && value !== null && value !== '') {
      //     let valTrim = value.replace(/^\s+|\s+$/g, '')
      //     let reg = /^([\u4e00-\u9fa5]){5,50}$/
      //     if (reg.test(valTrim)) {
      //       callback()
      //     } else {
      //       callback(new Error('请输入正确通讯地址'))
      //     }
      //   } else {
      //     callback()
      //     // callback(new Error('请输通讯地址'))
      //   }
      // }
      var validatexinxi = (rule, value, callback) => {
        if (value !== undefined && value !== null && value !== '') {
          let valTrim = value.replace(/^\s+|\s+$/g, '')
          let reg = /^([\u4e00-\u9fa5]){1,50}$/
          if (reg.test(valTrim)) {
            callback()
          } else {
            callback(new Error('请输入正确信息'))
          }
        } else {
          callback()
          // callback(new Error('请输通讯信息'))
        }
      }
      return {
        downloadURL: JdyypatientsURL,
        formModel1: Object.assign({}, FormModel1),
        formModel2: Object.assign({}, FormModel2),
        labelWidth: '120px',
        fileList: [],
        isImage: true,
        show: false,
        forbidden: false,
        action: baseURL + '/camel/rest/upload',
        columnParam: undefined,
        filePathArr: [],
        fileNameArr: [],
        // options: [],
        rules: {
          name: [{required: true, validator: validatename, trigger: 'blur'}],
          sex: [{trigger: 'blur'}],
          age: [{validator: validateage, trigger: 'blur'}], // validator: validateage,
          idCard: [{required: false, validator: validateidCard, trigger: 'change'}],
          directorDoctor: [{required: false, validator: validatedirectorDoctor, trigger: 'change'}],
          telephonePerson: [{validator: validatetelephone, trigger: 'change'}],
          familyPhone: [{validator: validatetelephone, trigger: 'change'}],
          // completeAddress: [{validator: validatecompleteAddress, trigger: 'change'}],
          medicalRecords: [{validator: validatexinxi, trigger: 'change'}],
          currentSituation: [{validator: validatexinxi, trigger: 'change'}],
          specialDisorders: [{validator: validatexinxi, trigger: 'change'}],
          descriptionSpecialDisease: [{validator: validatexinxi, trigger: 'change'}],
          allergicHistory: [{validator: validatexinxi, trigger: 'change'}],
          typeMedicalTreatment: [{validator: validatexinxi, trigger: 'change'}],
          stature: [{validator: validatestature, trigger: 'change'}]
          // diagnosis: [{required: true, message: '请选择就诊信息', trigger: 'blur'}]
          // bedNumber: [{required: true, message: '请输入床位号', trigger: 'change'}],
          // hospitalNumber: [{required: true, message: '请输入住院号', trigger: 'change'}],
          // dateAdmission: [{required: true, message: '请输入入院日期', trigger: 'change'}],
          // dateAischarge: [{required: true, message: '请输入出院日期', trigger: 'change'}],
          // bmi: [{required: true, message: '请输入BMI', trigger: 'change'}],
          // bloodPressure: [{required: true, message: '请输入血压', trigger: 'change'}],
          // WhetherDischarge: [{required: true, message: '请输入是否出院', trigger: 'change'}],
          // harris: [{required: true, message: '请输入Harris评分', trigger: 'change'}],
        },
        targetURL: JdyypatientsURL,
        options: [],
        items: [],
        dia: ''
      }
    },
    mounted() {
      this.getDiaCascader() // 获取诊断信息并以级联形式显示
      this.getSurCascader() // 获取术式信息并以级联形式显示
      this.loadAll() // 获取病员信息
      this.loadAllDoc() // 获取医生信息
    },
    methods: {
      validDoctor(val, callback) {
        if (val !== undefined && val !== null && val !== '') {
          let valTrim = val.replace(/^\s+|\s+$/g, '')
          let reg = /^([\u4e00-\u9fa5]){2,7}$/
          if (reg.test(valTrim)) {
            // alert('nihao')
            callback()
          } else {
            // alert('two')
            callback(new Error('请输入正确姓名'))
          }
        } else {
          // alert('three')
          callback(new Error('请输姓名'))
        }
      },
      resetAll() {
        this.$refs.formModel1.resetFields() // 表单一重置
        this.$refs.formModel2.resetFields() // 表单二重置
        let obj = {}
        obj.stopPropagation = () => {}
        this.$refs.cascader1.clearValue(obj) // 诊断级联选择器重置
        this.$refs.cascader2.clearValue(obj) // 术式级联选择器重置
        this.$refs.clearUpload.uploadClean() // 上传图片清空
      },
      clearValue(ev) {
        ev.stopPropagation()
        this.handlepick([], true)
      },
      init(dialogOption) {
        console.log('---------dialogOption------------', dialogOption)
      },
      getFilePath(filePath, fileName) { // 图片上传路径
        this.filePathArr.push(filePath)
        this.fileNameArr.push(fileName)
      },
      submitBefore(baseDialog, callBack) {
        console.log('===33333333333333333333333333=================', this.filePathArr)
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
        baseDialog.formModel2.photo = filePath
        baseDialog.formModel2.imgName = fileName
        callBack()
      },
      setGroup(item) {
        this.formModel2.photo = item.photo
      },
      onSubmitClick() { // 重写多张图片上传方法
        if (this.submitCustom && typeof (this.submitCustom) === 'function') {
          this.submitCustom(this)
        } else if (this.submitBefore && typeof (this.submitBefore) === 'function') {
          this.submitBefore(this, () => {
            this.onSubmit() // 执行提交方法
          })
        } else {
          this.onSubmit()
        }
      },
      getModel(val) { // 三级联动地区参数区分
        this.formModel1.completeAddress = val.join('')
        console.log('address=========', this.formModel1.completeAddress)
      },
      showMessage() {
        this.show = true
        this.forbidden = true
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
        console.log('ccccccccccccccccc', this.formModel1.diagnosisCode)
        console.log('val===========================', val.toString().substring(val.toString().lastIndexOf(',') + 1, val.toString().length))
        this.formModel2.diagnosisCode = val.toString().substring(val.toString().lastIndexOf(',') + 1, val.toString().length)
        this.axios.request({
          method: 'GET',
          url: JdyydiaURL + '/getCodeByContent',
          params: {
            code: this.formModel2.diagnosisCode
          }
        }).then(res => {
          console.log('formModel.diagnosisCode==============================', res.data.data)
          this.formModel2.diagnosis = res.data.data[0].content
        })
      },
      getSur(val) { // 通过级联获取数据后转成字符串
        this.formModel2.surgicalCode = val.toString().substring(val.toString().lastIndexOf(',') + 1, val.toString().length)
        this.axios.request({
          method: 'GET',
          url: JdyysurURL + '/getCodeByContent',
          params: {
            code: this.formModel2.surgicalCode
          }
        }).then(res => {
          console.log('formModel.diagnosisCode==============================', res.data.data)
          this.formModel2.surgical = res.data.data[0].content
        })
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
          this.formModel1 = res.data
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
      submitAction() { // 提交方法
        this.onSubmitClick() // 调用重写的图片上传方法
      },
      onSubmit() {
        this.$refs.formModel1.validate((valid) => {
          console.log('valid---------------------', valid)
          if (valid) {
            this.axios.request({
              method: 'POST',
              url: JdyypatientsURL,
              data: this.formModel1
            }).then(res => {
              console.log('res======================', res.data.tag)
              if (res.data.success) {
                Message.success(res.data.msg)
                console.log('this.formModel2.diagnosis...==============', this.formModel2.diagnosis)
                if (this.formModel2.diagnosis != null || this.formModel2.surgical != null ||
                  this.formModel2.operationDate != null || this.formModel2.parting != null ||
                  this.formModel2.periodization != null || this.formModel2.photo !== '') {
                  this.formModel2.pid = res.data.tag
                  this.subMitFormModel2()
                }
              } else {
                Message.error(res.data.msg)
              }
              this.resetAll()
            })
          } else {
            Message.error('请检查输入项！')
            this.submitComplete(false)
            return false
          }
        })
      },
      subMitFormModel2() {
        console.log('onSubmit-formModel2===========================', this.formModel2.diagnosis, this.formModel2.parting)
        console.log('aaaaaaaaaaaaaaa', this.formModel2)
        this.axios.request({
          method: 'POST',
          url: JdyyvisitURL,
          data: {
            id: null,
            pid: this.formModel2.pid,
            diagnosis: this.formModel2.diagnosis,
            diagnosisCode: this.formModel2.diagnosisCode,
            surgical: this.formModel2.surgical,
            surgicalCode: this.formModel2.surgicalCode,
            AOcode: this.formModel2.AOcode,
            operationDate: this.formModel2.operationDate,
            periodization: this.formModel2.periodization,
            parting: this.formModel2.parting,
            xid: this.formModel2.xid,
            photo: this.formModel2.photo
          }
        }).then(res => {
          console.log('subMitFormModel2-success==================', res.data.msg)
          this.$refs.formModel2.resetFields()
        })
      }
    },
    watch: {
      'formModel1.name'() {
        if (this.formModel1.name === '') {
          this.formModel1 = Object.assign({}, FormModel1)
        }
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
  .el-input__inner,.el-input__inner:focus
    border-color #dcdfe6
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
  .tst
    max-width: 217px
  .long
    width 100% !important
</style>
