<template lang="pug">
  kalix-dialog.user-add(title='添加' bizKey="jdyyVis" ref="kalixBizDialog" v-bind:formModel.sync="formModel"
  v-bind:targetURL="targetURL" v-bind:submitBefore="submitBefore")
    div.el-form(slot="dialogFormSlot")
      <!--el-form-item(label="图片" prop="photo" v-bind:label-width="labelWidth")-->
        <!--kalix-select(v-model="formModel.photo" v-bind:requestUrl="photoURL" appName="photoColumn"  placeholder="请选择相册"-->
        <!--v-bind:paramObj="photoParam" v-bind:defaultSelect="true" v-on:selectChange="setGroup" label="text")-->
      <!--el-form-item(label="图片" prop="photo" v-bind:label-width="labelWidth" v-bind:rules="rules.photo")-->
        <!--el-input(v-model="formModel.photo")-->
      el-form-item(label="图片" prop="photo" v-bind:label-width="labelWidth" v-bind:rules="rules.photo")
        kalix-clansman-upload(:action="action" v-on:filePath="getFilePath" v-on:selectChange="setGroup" :fileList="fileList" fileType="img" tipText="只能上传jpg/png文件，且不超过2MB" title="点击文字图片放大")
        kalix-img-upload(v-model="formModel.photo" v-bind:isImage="isImage" style="width:100%" v-bind:readonly="true")
      <!--div.bottom-->
        <!--div.bottom-box-->
          <!--ul.right_ul-->
            <!--li.right_li-->
              <!--el-button.button-save( size="large" v-on:click="submitForm") 保存-->
            <!--li.right_li-->
              <!--el-button.button-save( size="large" v-on:click="resetForm") 重置-->
</template>

<script type="text/ecmascript-6">
  import {JdyyvisitURL, JdyysurURL} from '../../config.toml'
  import FormModel from './model'
  import {baseURL} from '../../../../config/global.toml'
  import KalixClansmanUpload from '../../../../components/fileUpload/upload'
  import KalixFontCascader from '../../../../components/cascader/ThreeCascader'
  import KalixDatepickerSimple from '../../../../components/corelib/components/common/baseDatepicker'
  import KalixFontSurcascader from '../../../../components/cascader/SurThreeCascader'
  import KalixFontDiacascader from '../../../../components/cascader/DiaThreeCascader'
  import KalixImgUpload from '../../../../components/corelib/components/common/imgUpload'
  export default {
    name: 'JdyyVisImg',
    components: {
      KalixImgUpload, KalixFontSurcascader, KalixFontDiacascader, KalixDatepickerSimple, KalixFontCascader, KalixClansmanUpload},
    data() {
      return {
        downloadURL: JdyyvisitURL,
        formModel: Object.assign({}, FormModel),
        labelWidth: '120px',
        fileList: [],
        isImage: true,
        action: baseURL + '/camel/rest/upload',
        columnParam: undefined,
        albumname: '',
        options: [],
        filePathArr: [],
        fileNameArr: [],
        rules: {
          // diagnosis: [{required: true, message: '请输入诊断', trigger: 'change'}],
          // surgical: [{required: true, message: '请输入术式', trigger: 'change'}],
          // dateOperation: [{required: true, message: '请输入手术日期', trigger: 'change'}],
          // periodization: [{required: true, message: '请输入分期', trigger: 'change'}]
        },
        targetURL: JdyyvisitURL
      }
    },
    methods: {
      init(dialogOption) {
        console.log('---------dialogOption------------', dialogOption)
        console.log('qqqqqqq-===ddddddddddddddddd======')
      },
      open() { // 添加术式成功提示
        this.$alert(JdyysurURL, '术式', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action:`
            })
          }
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
        callBack()
      },
      setGroup(item) {
        this.formModel.downlosd = item.albumname
      },
      getModelDia(val) { // 诊断三级联动
        this.formModel.diagnosis = val.toString()
        console.log('diagnosis=========', this.formModel.diagnosis)
      },
      getModelSur(val) { // 术式三级联动
        this.formModel.surgical = val.toString()
        console.log('surgical=========', this.formModel.surgical)
      },
      submitForm() { // 保存按钮点击事件
        if (this.submitCustom && typeof (this.submitCustom) === 'function') {
          this.submitCustom(this)
        } else if (this.submitBefore && typeof (this.submitBefore) === 'function') {
          this.submitBefore(this, () => {
            this.$refs['formModel'].validate((valid) => {
              if (valid) {
                this.$http.request({
                  method: 'POST',
                  url: '/camel/rest/jdyy/patientss',
                  data: this.formModel
                }).then(response => {
                  alert('添加成功')
                  console.log(response.data.msg) // 添加成功
                  // this.$refs['formModel'].resetFields() // 重置信息
                })
              } else {
                console.log('error submit!!')
                return false
              }
            })
          })
        } else {
          this.submitAction()
        }
      },
      resetForm() { // 重置按钮
        this.$refs['formModel'].resetFields() // 重置信息
      }
    }
  }
</script>
<style scoped lang="stylus" type="text/stylus">
  .el-form
    width 60%
    margin auto
</style>
