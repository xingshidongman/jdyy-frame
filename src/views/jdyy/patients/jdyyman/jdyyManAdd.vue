<template lang="pug">
  kalix-dialog.user-add(title='添加' bizKey="jdyyMan" ref="kalixBizDialog" v-bind:formModel.sync="formModel" v-bind:targetURL="targetURL")
    div.el-form(slot="dialogFormSlot")
      el-form-item(label="姓名" prop="name" v-bind:label-width="labelWidth" v-bind:rules="rules.name")
        el-input(v-model="formModel.name")
      el-form-item(label="性别" prop="sex" v-bind:label-width="labelWidth" v-bind:rules="rules.sex")
        el-input(v-model="formModel.sex" )
      el-form-item(label="年龄" prop="age" v-bind:label-width="labelWidth" v-bind:rules="rules.age")
        el-input(v-model="formModel.age")
      el-form-item(label="病历号" prop="bedNumber" v-bind:label-width="labelWidth" v-bind:rules="rules.bedNumber")
        el-input(v-model="formModel.bedNumber")
      el-form-item(label="住院日期" prop="dateAdmission" v-bind:label-width="labelWidth" v-bind:rules="rules.dateAdmission")
        kalix-datepicker-simple(v-model="formModel.dateAdmission" type="datetime" placeholder="选择日期" format="yyyy-MM-dd" style="width: 100%;")
        <!--el-input(v-model="formModel.hospital_number" )-->
      el-form-item(label="诊断" prop="diagnosis" v-bind:label-width="labelWidth" v-bind:rules="rules.diagnosis")
        el-input(v-model="formModel.diagnosis")
      el-form-item(label="手术日期" prop="dateOperation" v-bind:label-width="labelWidth" v-bind:rules="rules.dateOperation")
        kalix-datepicker-simple(v-model="formModel.dateOperation" type="datetime" placeholder="选择日期" format="yyyy-MM-dd" style="width: 100%;")
        <!--el-input(v-model="formModel.date_operation" )-->
      el-form-item(label="主管医生" prop="directorDoctor" v-bind:label-width="labelWidth" v-bind:rules="rules.directorDoctor")
        el-input(v-model="formModel.directorDoctor")
</template>

<script type="text/ecmascript-6">
  import {JdyypatientsURL} from '../../config.toml'
  import FormModel from './model'
  import {baseURL} from '../../../../config/global.toml'
  import KalixClansmanUpload from '../../../../components/fileUpload/upload'
  export default {
    name: 'JdyyManAdd',
    components: {KalixClansmanUpload},
    data() {
      return {
        downloadURL: JdyypatientsURL,
        formModel: Object.assign({}, FormModel),
        labelWidth: '120px',
        action: baseURL + '/camel/rest/upload',
        columnParam: undefined,
        options: [],
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
        this.formModel.photo = filePath
        this.formModel.imgName = fileName
      },
      setGroup(val) {
        this.formModel.downlosd = val
      }

    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">

</style>
