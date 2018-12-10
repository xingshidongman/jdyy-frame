<template lang="pug">
  div
    el-upload(
    ref="uploadClean"
    :action="action"
    :headers="headers"
    :multiple="true"
    :on-success="handleSuccess"
    :on-preview="handlePreview"
    :on-remove="handleRemove"
    :before-remove="beforeRemove"
    :before-upload="beforeUpload"
    :limit="10"
    :on-exceed="handleExceed"
    :file-list="fileListData"
    list-type="picture")
      el-button(size="small" type="primary") {{btnText}}
      div(slot="tip" class="el-upload__tip") {{tipText}}
    el-dialog(:visible.sync="dialogVisible" :append-to-body="true"  fullscreen=true)
      div.img-box
        div.img-height
          img.img-width(v-bind:src="dialogImageUrl" )
          img(src="../../../static/images/prev.png" height="50" width="50" class="prev" @click="cut()" )
          img(src="../../../static/images/next.png" height="50" width="50" class="next" @click="add()" )
</template>
<script type="text/ecmascript-6">
  import Cache from '../../../src/common/cache.js'
  import Vue from 'vue'
  import Message from '../../../src/common/message'
  // import login from '../../api/login'
  export default {
    name: 'kalix-clansman-upload',
    props: {
      action: { // 文件上传路径
        type: String, default: ''
      },
      fileType: {
        type: String
      },
      btnText: {
        type: String, default: '上传图片'
      },
      tipText: {
        type: String, default: ''
      },
      fileList: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data() {
      return {
        // https://jsonplaceholder.typicode.com/posts/
        file: null,
        headers: {'access_token': Cache.get('access_token'), 'jsessionid': Cache.get('user_token')},
        fileListData: this.fileList,
        isUpload: true,
        dialogVisible: false,
        dialogImageUrl: ''
      }
    },
    mounted() {
      this.currentfileList = []
      this.currentIdx = 0
    },
    methods: {
      cut() {
        this.currentIdx -= 1
        if (this.currentIdx < 0) {
          this.currentIdx = this.currentfileList.length - 1
        }
        this.dialogImageUrl = this.currentfileList[this.currentIdx].url
      },
      add() {
        this.currentIdx += 1
        if (this.currentIdx > this.currentfileList.length - 1) {
          this.currentIdx = 0
        }
        this.dialogImageUrl = this.currentfileList[this.currentIdx].url
      },
      uploadClean() {
        this.$refs.uploadClean.clearFiles()
      },
      handleRemove(file, fileList) {
        console.log(123)
        this.currentfileList = fileList
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
            Vue.axios.request({
              method: 'DELETE',
              url: '/camel/rest/couchdb',
              params: {'id': attachmentId, 'rev': rev},
              data: {}
            }).then((response) => {
              console.log(response.data.success)
            })
          }
          this.$emit('filePath', null, null)
        }
      },
      beforeUpload(file) {
        let isJPG = false
        let isLt2M = false
        if (this.fileType === 'img') {
          isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
          isLt2M = file.size / 1024 / 1024 < 2
          if (!isJPG) {
            Message.error('上传图片只能是 JPG 或 PNG 格式!')
            this.fileListData = []
            return
          }
        } else if (this.fileType === 'video') {
          isJPG = file.type === 'video/avi' || file.type === 'video/mp4'
          isLt2M = file.size / 1024 / 1024 < 2
          if (!isJPG) {
            Message.error('上传视频只能是 MP4 或 avi 格式!')
            this.fileListData = []
            return
          }
          if (!isLt2M) {
            Message.error('上传视频大小不能超过 2MB!')
            this.fileListData = []
            return
          }
        } else {
          isJPG = file.type === 'image/jpeg' || file.type === 'image/png'
          isLt2M = file.size / 1024 / 1024 < 2
          if (!isJPG) {
            Message.error('上传音频只能是 JPG 或 PNG 格式!')
            this.fileListData = []
            return
          }
          if (!isLt2M) {
            Message.error('上传音频大小不能超过 2MB!')
            this.fileListData = []
            return
          }
        }
        if (!isJPG || !isLt2M) {
          this.isUpload = false
          this.fileListData = []
        }
        console.log('222222222222222222222', this.fileListData)
        return isJPG && isLt2M
      },
      handleSuccess(response, file, fileList) {
        this.currentfileList = fileList
        console.log('--file-status---', response.attachmentPath, response.attachmentName)
        this.$emit('filePath', response.attachmentPath, response.attachmentName)
        console.log('fileList:', fileList)
      },
      handlePreview(file) {
        this.currentIdx = 0
        // this.dialogVisible = true
        // this.dialogImageUrl = file.url
        console.log('aaaaaaaaaaaa', file.url)
        console.log('aaaaaaaaaaaa file', file)
        this.currentIdx = this.currentfileList.findIndex(e => {
          return e.url === file.url
        })
        if (this.currentIdx > -1) {
          this.dialogImageUrl = this.currentfileList[this.currentIdx].url
          this.dialogVisible = true
        }
      },
      handleExceed(files, fileList) {
        Message.warning(`当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
      },
      beforeRemove(file, fileList) {
        console.log(fileList)
        return this.$confirm(`确定移除 ` + file.name + `？`)
      }
    }
  }
</script>
<style scoped lang="stylus" type="text/stylus">

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
