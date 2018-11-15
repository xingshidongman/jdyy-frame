<template lang="pug">
  kalix-dialog.user-add(title='修改' bizKey="jdyyQue" ref="kalixBizDialog" v-bind:formModel.sync="formModel1" v-bind:targetURL="targetURL" v-bind:submitBefore="submitBefore")
    div.el-form(slot="dialogFormSlot1")
      <!--div {{modifyStaff}}-->
      div.base-message
        div(style="width:98px;margin:20px auto;font-size: 20px;") 基 本 信 息
        el-form(v-bind:model="formModel1" ref="formModel1")
          el-form-item(label="姓名" prop="name" v-bind:label-width="labelWidth" v-bind:rules="rules.name")
            el-autocomplete(v-model="formModel1.name" :fetch-suggestions="querySearchAsync" placeholder="请输入患者姓名" @select="handleSelect" style="width:100%")
          el-form-item(label="性别" prop="sex" v-bind:label-width="labelWidth" v-bind:rules="rules.sex" )
            el-radio-group(v-model="formModel1.sex")
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
          el-form-item.address(label="修改人员" prop="modifyStaff" v-bind:label-width="labelWidth" v-bind:rules="rules.modifyStaff")
            el-input(v-text="modifyStaff" readonly="readonly")
          el-form-item.address(label="备注" prop="remarks" v-bind:label-width="labelWidth" v-bind:rules="rules.remarks")
            el-input(v-model="formModel1.remarks")
    div.el-form(slot="dialogFormSlot2")
      div.diagnose-message
        div(style="width:98px;margin:20px auto;font-size: 20px;") 诊 断 信 息
        el-form(v-bind:model="formModel2" ref="formModel2" v-bind:submitBefore="submitBefore")
          el-form-item.texttoo(label="诊断" prop="diagnosis" v-bind:label-width="labelWidth" v-bind:rules="rules.diagnosis" )
            el-cascader(v-model="diaCascader" placeholder="请选择诊断信息" :options="options" filterable @change="getDia" :clearable="true" v-bind:show-all-levels="false" change-on-select)
          el-form-item.texttoo(label="术式" prop="surgical" v-bind:label-width="labelWidth" v-bind:rules="rules.surgical"  )
            el-cascader(v-model="surCascader" placeholder="请选择术式信息" :options="items" filterable @change="getSur" :clearable="true" v-bind:show-all-levels="false" change-on-select)
          el-form-item.texttoo(label="手术日期" prop="operationDate" v-bind:label-width="labelWidth" v-bind:rules="rules.operationDate")
            el-date-picker.tst(v-model="formModel2.operationDate" type="date" placeholder="选择日期" value-format="yyyy/M/d" format="yyyy/M/d")
          el-form-item.texttoo(label="分期" prop="periodization" v-bind:label-width="labelWidth" v-bind:rules="rules.periodization")
            el-select(v-model="formModel2.periodization" placeholder="请选择")
              el-option(label="内科" value="内科")
              el-option(label="外科" value="外科")
          el-form-item.texttoo(label="分型" prop="parting" v-bind:label-width="labelWidth" v-bind:rules="rules.parting")
            el-input.tst(v-model="formModel2.parting")
          el-form-item.text(label="图片" prop="photo" v-bind:label-width="labelWidth" v-bind:rules="rules.photo")
            kalix-clansman-upload(:action="action" ref="clearUpload"
            v-on:filePath="getFilePath" v-on:selectChange="setGroup" :fileList="fileList" fileType="img" tipText="只能上传jpg/png文件，且不超过2MB")

</template>

<script type="text/ecmascript-6">
  // import Message from '../../../../common/message'
  import {JdyypatientsURL, JdyyvisitURL, JdyysurURL, JdyydiaURL} from '../../config.toml'
  import FormModel from './model'
  import FormModel1 from './model1'
  import FormModel2 from './model2'
  import {baseURL} from '../../../../config/global.toml'
  import KalixClansmanUpload from '../../../../components/fileUpload/upload'
  import KalixSelect from '../../../../components/corelib/components/common/baseSelect'
  import KalixFontCascader from '../../../../components/cascader/ThreeCascader'
  import KalixDatepickerSimple from '../../../../components/corelib/components/common/baseDatepicker'
  import KalixImgUpload from '../../../../components/corelib/components/common/imgUpload'

  export default {
    name: 'JdyyQueEdit',
    components: {
      KalixImgUpload,
      JdyyvisitURL,
      JdyysurURL,
      JdyypatientsURL,
      JdyydiaURL,
      KalixDatepickerSimple,
      KalixSelect,
      KalixClansmanUpload,
      KalixFontCascader
    },
    data() {
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
        formModel1: Object.assign({}, FormModel1),
        formModel2: Object.assign({}, FormModel2),
        rules: {
          name: [{required: true, message: '请输入姓名', trigger: 'change'}],
          sex: [{required: true, message: '请输入性别', trigger: 'change'}],
          age: [{required: true, message: '请输入年龄', trigger: 'change'}]
        },
        targetURL: JdyypatientsURL,
        JdyyvisitURL: JdyyvisitURL,
        diaCascader: [],
        surCascader: [],
        filePathArr: [],
        fileNameArr: []
      }
    },
    mounted() {
      this.modifyStaff = this.$KalixCatch.get('user_name')
      this.getDiaCascader() // 获取诊断信息并以级联形式显示
      this.getSurCascader() // 获取术式信息并以级联形式显示
      // this.getUserName() // 获取当前登陆用户
      this.loadAll() // 获取病员信息
      // this.formModel1.modifyStaff = this.modifyStaff
    },
    methods: {
      init(dialogOption) {
        console.log('---------dialogOption------------', dialogOption)
        console.log('---------this.formModel------------', this.formModel1)
        console.log('---------this.formMode2------------', this.formModel2)
        this.formModel2.diagnosis = this.formModel1.diagnosis
        this.formModel2.surgical = this.formModel1.surgical
        this.formModel2.operationDate = this.formModel1.operationDate
        this.formModel2.periodization = this.formModel1.periodization
        this.formModel2.parting = this.formModel1.parting
        this.formModel2.photo = this.formModel1.photo
        let diaCode = this.formModel1.diagnosisCode // 诊断级联回显
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
        let surCode = this.formModel1.surgicalCode // 术式级联回显
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
      // submitAction() {
      //   console.log('onSubmit-formModel1===========================', this.formModel1)
      //   this.$refs.formModel1.validate((valid) => {
      //     console.log('valid---------------------', valid)
      //     if (valid) {
      //       this.axios.request({
      //         method: 'POST',
      //         url: JdyypatientsURL,
      //         data: this.formModel1
      //       }).then(res => {
      //         console.log('res======================', res.data.tag)
      //         if (res.data.success) {
      //           Message.success(res.data.msg)
      //           if (this.formModel2.diagnosis !== null) {
      //             this.formModel2.pid = res.data.tag
      //             this.subMitFormModel2()
      //           }
      //         } else {
      //           Message.error(res.data.msg)
      //         }
      //         this.$refs.formModel1.resetFields()
      //       })
      //     } else {
      //       Message.error('请检查输入项！')
      //       this.submitComplete(false)
      //       return false
      //     }
      //   })
      // },
      // subMitFormModel2() {
      //   console.log('onSubmit-formModel2===========================', this.formModel2)
      //   this.axios.request({
      //     method: 'POST',
      //     url: JdyyvisitURL,
      //     data: this.formModel2
      //   }).then(res => {
      //     console.log('subMitFormModel2-success==================', res.data.msg)
      //     this.$refs.formModel2.resetFields()
      //   })
      // },
      // onSubmitClick() {
      //   if (this.submitCustom && typeof (this.submitCustom) === 'function') {
      //     this.submitCustom(this)
      //   } else if (this.submitBefore && typeof (this.submitBefore) === 'function') {
      //     this.submitBefore(this, () => {
      //       this.submitAction()
      //     })
      //   } else {
      //     this.submitAction()
      //   }
      // },
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

        let photoStr = (this.formModel2.photo !== null ? this.formModel2.photo + ',' : '')
        baseDialog.formModel2.photo = photoStr + filePath
        baseDialog.formModel2.imgName = fileName
        this.formModel1.modifyStaff = this.$KalixCatch.get('user_name')
        callBack()
      },
      setGroup(item) {
        this.formModel2.downlosd = item.albumname
      },
      getModel(val) { // 三级联动地区参数区分
        this.formModel1.completeAddress = val.join('')
        console.log('address=========', this.formModel1.completeAddress)
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
          console.log('formModel2.diagnosisCode==============================', res.data.data)
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

        clearTimeout(this.timeout)
        this.timeout = setTimeout(() => {
          cb(results)
        }, 3000 * Math.random())
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
      }
      // getUserName() {
      //   this.modifyStaff = this.$KalixCatch.get('user_name')
      //   console.log('this.this.formModel.modifyStaff========', this.modifyStaff)
      // }
      // // submitBefore(baseDialog, callBack) {
      //   this.formModel.modifyStaff = this.$KalixCatch.get('user_name')
      //   callBack()
      // }
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
    max-width: 104%
</style>
