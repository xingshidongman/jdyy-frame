<!--
描述：baseUpload 上传组件
开发人：hqj
开发日期：2017年9月19日
-->

<template lang="pug">
  div.block
    template(v-if="readonly")
      template(v-if="isImage")
        template
          div.img-cancel(v-for="(imageUrl, index) in fileList" :class="{ 'active':index===mark }" :key="index")
            img.avatars(v-if="imageUrl" v-bind:src="imageUrl" v-bind:ref="imageUrl.key" @click="change(index)")
            img.avatars(v-else src="/static/images/default_attachment.png")
            div
              a.cancel(v-on:click="onImgDel(imageUrl)" href="#") ×
            el-dialog(:visible.sync="dialogVisible" :append-to-body="true"  fullscreen=true)
              div.img-box
                div.img-height
                  img.img-width(v-bind:src="imageUrl" v-for="(imageUrl, index) in fileList" v-show="index===mark" :key="index")
                  img(src="../../../../../static/images/prev.png" height="50" width="50" class="prev" @click="cut()" )
                  img(src="../../../../../static/images/next.png" height="50" width="50" class="next" @click="add()" )
        div.clear
      template(v-else)
        template 空
        <!--template(v-if="this.value")-->
        <!--a(v-bind:href="this.value") {{this.fileName}}-->
        <!--template(v-else) 空-->
    template(v-else)
      el-upload(v-bind:class="{'avatars-uploader':isImage,'upload-demo':!isImage}" v-bind:action="action"
      v-bind:multiple="false" v-bind:show-file-list="true" v-bind:file-list="fileList"
      v-bind:on-change="handleChange" v-bind:before-upload="handleBeforeUpload"
      v-bind:on-success="handleSuccess" v-bind:on-error="handleError"
      v-bind:on-preview="handlePreview" v-bind:on-remove="handleRemove")
        template(v-if="isImage")
          img.avatars(v-if="imageUrl" v-bind:src="imageUrl")
          i.el-icon-plus.avatars-uploader-icon(v-else)
        template(v-else)
          el-button(size="small" type="primary") 点击上传
      <!--el-upload(v-bind:class="{'avatars-uploader':isImage,'upload-demo':!isImage}" v-bind:action="action" v-bind:headers="headers"-->
      <!--v-bind:multiple="false" v-bind:show-file-list="true" v-bind:file-list="fileList"-->
      <!--v-bind:on-change="handleChange" v-bind:before-upload="handleBeforeUpload"-->
      <!--v-bind:on-success="handleSuccess" v-bind:on-error="handleError"-->
      <!--v-bind:on-preview="handlePreview" v-bind:on-remove="handleRemove")-->
      <!--template(v-if="isImage")-->
      <!--img.avatar(v-if="imageUrl" v-bind:src="imageUrl")-->
      <!--i.el-icon-plus.avatar-uploader-icon(v-else)-->
      <!--template(v-else)-->
      <!--el-button(size="small" type="primary") 点击上传-->
</template>

<script type="text/ecmascript-6">
  import {baseURL, uploadURL, couchdbDelURL} from '../../config/global.toml'
  // import Cache from '../../common/cache.js'
  // import Vue from 'vue'
  import Message from '../../common/message'

  let fileCount = 0
  export default {
    name: 'kalix-img-upload',
    props: {
      value: {
        type: String
      },
      isImage: {
        type: Boolean,
        default: true
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        action: baseURL + uploadURL,
        // headers: {'access_token': Cache.get('access_token'), 'jsessionid': Cache.get('user_token')},
        fileList: [],
        fileName: '',
        imageUrl: '',
        mark: '',
        dialogVisible: false
      }
    },
    mounted() {
      this.fentch()
    },
    watch: {
      value(n, o) {
        this.fentch()
      }
    },
    methods: {
      change(i) {
        this.mark = i
        this.dialogVisible = true
        console.log(this.fileList)
        console.log(this.mark)
      },
      cut() {
        this.mark--
        if (this.mark < 0) {
          this.mark = this.fileList.length - 1
          // console.log(this.formModel.tableData[index])
        }
        console.log('=====================', this.mark)
      },
      add() {
        this.mark++
        if (this.mark > this.fileList.length - 1) {
          this.mark = 0
        }
        console.log('=====================', this.mark)
      },
      onImgDel(img) {
        this.$emit('ImgDel', img)
      },
      // 组件初始化
      fentch() {
        if (this.value != null && this.value !== '') {
          // let pathParts = this.value.split('/')
          // let fileName = pathParts[pathParts.length - 1]
          // this.fileName = pathParts.pop()
          // let obj = {'name': this.fileName, 'url': this.value}
          // this.fileList.push(obj)
          this.fileList = this.value.split(',')
          console.log('fileList', this.fileList)
          if (this.isImage) {
            this.imageUrl = this.value
          }
        } else {
          this.fileList = []
        }
      },
      handleChange(file, fileList) {
        fileCount = fileList.length
      },
      handleBeforeUpload(file) {
        if (fileCount > 1) {
          Message.error('只允许上传一个文件且文件已经存在,请先删除原有文件再进行上传！')
          return false
        }

        if (this.isImage) {
          const isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
          const isLt2M = file.size / 1024 / 1024 < 2
          if (!isJPG) {
            Message.error('上传头像图片只能是 JPG 或 PNG 格式!')
          }
          if (!isLt2M) {
            Message.error('上传头像图片大小不能超过 2MB!')
          }
          return isJPG && isLt2M
        }
      },
      handleSuccess(response, file, fileList) {
        if (response.success) {
          if (this.isImage) {
            this.imageUrl = URL.createObjectURL(file.raw)
          }
          // attachmentId = response.attachmentId
          this.$emit('input', response.attachmentPath)
        } else {
          this.$emit('input', this.value)
        }
      },
      handleError(err, file, fileList) {
        console.log(err, file, fileList)
      },
      handlePreview(file) {
        window.open(file.url)
      },
      handleRemove(file, fileList) {
        console.log(file, fileList)
        if (file.status === 'success') {
          let attachmentId = ''
          let rev = ''
          if (file.response) {
            attachmentId = file.response.attachmentId
            rev = file.response.attachmentRev
          } else {
            let pathParts = file.url.split('/')
            pathParts.pop()
            attachmentId = pathParts.pop()
          }
          // 删除couchdb数据库中附件
          if (attachmentId !== '' && rev !== '') {
            // Vue.axios.request({
            this.axios.request({
              method: 'DELETE',
              url: couchdbDelURL,
              params: {'id': attachmentId, 'rev': rev},
              data: {}
            }).then((response) => {
              console.log(response.data.success)
            })
          }

          if (this.isImage) {
            this.imageUrl = ''
          }
          this.$emit('input', '')
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .avatars-uploader
    .el-upload
      border: 1px dashed #d9d9d9
      border-radius: 6px
      cursor: pointer
      position: relative
      overflow: hidden


  .avatars-uploader
    .el-upload:hover
      border-color: #20a0ff;


  .avatars-uploader-icon
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;


  .avatars
    width: 150px;
    height: 150px;
    margin: 5px;


  .img-cancel
    position: relative
    width: 160px
    float: left


  .cancel
    background-color: rgba(255, 255, 255, 0.4)
    position: absolute
    right: 5px
    top: 5px
    z-index: 100
    font-size: 16px


  a
    color: black
    text-decoration: none


  .clear
    clear: both

  .img-width
    max-width 90%
    max-height 650px
    display inline-block
  .img-height
    width 100%
    display table-cell
    height 650px
    vertical-align middle
  .img-box
    width 100%
    display table
    text-align center




</style>
