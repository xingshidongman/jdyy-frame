<template lang="pug">
  kalix-dialog.user-add(title='修改' bizKey="jdyyman" ref="kalixBizDialog" v-bind:formModel.sync="formModel" v-bind:targetURL="targetURL")
    div.el-form(slot="dialogFormSlot")
      el-form-item(label="姓名" prop="name" v-bind:label-width="labelWidth" )
        el-input(v-model="formModel.name")
      el-form-item(label="性别" prop="sex" v-bind:label-width="labelWidth" )
        el-input(v-model="formModel.sex")
      el-form-item(label="年龄" prop="age" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.age")
      el-form-item(label="病历号" prop="bedNumber" v-bind:label-width="labelWidth" )
        el-input(v-model="formModel.bedNumber")
      el-form-item(label="住院日期" prop="dateAdmission" v-bind:label-width="labelWidth" )
        kalix-datepicker-simple(v-model="formModel.dateAdmission" type="datetime" placeholder="选择日期" format="yyyy-MM-dd" style="width: 100%;")
        <!--el-input(v-model="formModel.date_admission" )-->
      el-form-item(label="诊断" prop="diagnosis" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.diagnosis")
      el-form-item(label="手术日期" prop="dateOperation" v-bind:label-width="labelWidth" )
        kalix-datepicker-simple(v-model="formModel.date_operation" type="datetime" placeholder="选择日期" format="yyyy-MM-dd" style="width: 100%;")
        <!--el-input(v-model="formModel.date_operation" )-->
      el-form-item(label="主管医生" prop="directorDoctor" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.directorDoctor")
</template>

<script type="text/ecmascript-6">
  import {JdyypatientsURL} from '../../config.toml'
  import FormModel from './model'
  import {baseURL} from '../../../../config/global.toml'
  import KalixClansmanUpload from '../../../../components/fileUpload/upload'
  import KalixSelect from '../../../../components/corelib/components/common/baseSelect'

  export default {
    name: 'JdyyManEdit',
    components: {KalixSelect, KalixClansmanUpload},
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
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">

</style>
