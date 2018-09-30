<template lang="pug">
  kalix-dialog.user-add(title='修改' bizKey="jdyyImg" ref="kalixBizDialog" v-bind:formModel.sync="formModel" v-bind:targetURL="targetURL")
    div.el-form(slot="dialogFormSlot")
      el-form-item(label="药师姓名" prop="name" v-bind:label-width="labelWidth" )
        el-input(v-model="formModel.name")
      el-form-item(label="药师简介" prop="link" v-bind:label-width="labelWidth" )
        el-input(v-model="formModel.link" type="textarea")
      el-form-item(label="药师图片" prop="imgurl" v-bind:label-width="labelWidth" v-bind:rules="rules.imgurl")
        kalix-clansman-upload(:action="action" v-on:filePath="getFilePath"  fileType="img"
        tipText="只能上传jpg/png文件" )
</template>

<script type="text/ecmascript-6">
  import {JdyyimgURL} from '../config.toml'
  import FormModel from './model'
  import {baseURL} from '../../../config/global.toml'
  import KalixClansmanUpload from '../../../components/fileUpload/upload'
  import KalixSelect from '../../../components/corelib/components/common/baseSelect'

  export default {
    name: 'JdyyImgEdit',
    components: {KalixSelect, KalixClansmanUpload},
    data() {
      return {
        downloadURL: JdyyimgURL,
        fileList: [],
        labelWidth: '120px',
        action: baseURL + '/camel/rest/upload',
        columnParam: undefined,
        formModel: Object.assign({}, FormModel),
        rules: {
          name: [{required: true, message: '请输入药师姓名', trigger: 'change'}],
          link: [{required: true, message: '请输入药师简介', trigger: 'change'}]
        },
        targetURL: JdyyimgURL
      }
    },
    methods: {
      init(dialogOption) {
        console.log('---------dialogOption------------', dialogOption)
      },
      getFilePath(filePath, fileName) {
        console.log('--getFilePath---', filePath)
        console.log('--fileName---', fileName)
        this.formModel.imgurl = filePath
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
