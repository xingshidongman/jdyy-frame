<template lang="pug">
  keep-alive
    kalix-table(bizKey="jdyyimg" title='图片上传' ref="kalixTable"
    v-bind:tableFields="tableFields"
    v-bind:targetURL="jdyyImgURL"
    v-bind:bizDialog="jdyyImgDialog"
    v-bind:btnList="jdyyImgBtnList"
    v-bind:toolbarBtnList="toolbarBtnList"
    bizSearch="JdyyImgSearch")
</template>

<script type="text/ecmascript-6">
  import {JdyyimgURL} from '../config.toml'
  import {jdyyImgConfigBtnList} from './config'

  export default {
    name: 'kalix-jdyy-jdyyimg',
    data() {
      return {
        jdyyImgURL: JdyyimgURL,
        tableFields: [
          {prop: 'name', label: '药师姓名'},
          {prop: 'link', label: '药师简介'},
          {prop: 'imgurl', label: '药师图片'}
        ],
        jdyyImgDialog: [
          {id: 'add', dialog: 'JdyyImgAdd'},
          {id: 'view', dialog: 'JdyyImgView'},
          {id: 'edit', dialog: 'JdyyImgEdit'}
        ],
        jdyyImgBtnList: jdyyImgConfigBtnList,
        toolbarBtnList: [
          {id: 'add', isShow: true, title: '添加', isPermission: true}
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">

</style>
