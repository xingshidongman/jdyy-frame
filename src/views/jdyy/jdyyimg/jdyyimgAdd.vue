<template lang="pug">
  kalix-dialog.user-add(title='添加' bizKey="jdyyImg" ref="kalixBizDialog" v-bind:formModel.sync="formModel" v-bind:targetURL="targetURL"
    v-bind:submitBefore="submitBefore")
    div.el-form(slot="dialogFormSlot")
      el-form-item(label="药师姓名" prop="name" v-bind:label-width="labelWidth" v-bind:rules="rules.name")
        el-input(v-model="formModel.name")
      el-form-item(label="药师简介" prop="link" v-bind:label-width="labelWidth" v-bind:rules="rules.link")
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
  export default {
    name: 'JdyyImgAdd',
    components: {KalixClansmanUpload},
    data() {
      return {
        downloadURL: JdyyimgURL,
        formModel: Object.assign({}, FormModel),
        labelWidth: '120px',
        action: baseURL + '/camel/rest/upload',
        columnParam: undefined,
        options: [],
        filePathArr: [],
        fileNameArr: [],
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
        this.filePathArr.push(filePath)
        this.fileNameArr.push(fileName)
        // this.formModel.imgurl = filePath
        // this.formModel.imgName = fileName
      },
      submitBefore(baseDialog, callBack) {
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

        baseDialog.formModel.imgurl = filePath
        baseDialog.formModel.imgName = fileName
        callBack()
      },
      setGroup(val) {
        this.formModel.downlosd = val
      }

    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">

</style>
