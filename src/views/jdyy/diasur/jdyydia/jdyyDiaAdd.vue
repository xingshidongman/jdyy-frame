<!--
描述：留言应用-回复管理-添加
开发人：sunli
开发日期：2018年06月01日
-->
<template lang="pug">
  kalix-dialog.user-add(bizKey="jdyyDia" ref="kalixBizDialog"
    v-bind:formModel.sync="formModel" v-bind:targetURL="targetURL" v-bind:submitBefore="getCodeByPid")
    div.el-form(slot="dialogFormSlot" style=" width:60%;margin:auto;")
      input(v-model="formModel.parentId" type="hidden")
      input(v-model="formModel.isLeaf" type="hidden")
      el-form-item(label="添加诊断名称" prop="content" label-width="120px" v-bind:rules="rules.content")
        el-input(v-model="formModel.content" style="width:80%")
</template>

<script type="text/ecmascript-6">
  import FormModel from './model'
  // import Dialog from '../../../components/custom/baseDialog.vue'
  import {JdyydiaURL} from '../../config.toml'
  export default {
    name: 'jdyyDiaAdd',
    data() {
      return {
        formModel: Object.assign({}, FormModel),
        rules: {
          // forumTitle: [{message: '所属帖子标题不能为空', trigger: 'blur'}],
          // parentName: [{required: true, message: '上级功能不能为空', trigger: 'blur'}],
          // username: [{required: true, message: '请输入回复人姓名', trigger: 'blur'}],
          content: [{required: true, message: '请输入内容', trigger: 'blur'}]
        },
        targetURL: JdyydiaURL,
        // username: this.$KalixCatch.get('user_name'),
        labelWidth: '110px'
      }
    },
    components: {
      // KalixDialog: Dialog
    },
    computed: {
    },
    created() {
    },
    methods: {
      getCodeByPid(baseDialog, callBack) { // 获取诊断代码（code）并赋值
        this.axios.request({
          method: 'GET',
          url: JdyydiaURL + '/getCodeByPid',
          params: {
            parentId: this.formModel.parentId
          }
        }).then(res => {
          console.log('res.data.data.data=================', res.data)
          baseDialog.formModel.code = res.data
          callBack()
        })
      }
      // init(dialogOption) {
      //  this.forumTitle = dialogOption.forumTitle
      //  this.formModel.postId = dialogOption.postId
      // }
      // submitBefore(baseDialog, callBack) {
      //   let code = baseDialog.formModel.code
      //   baseDialog.formModel.permission = baseDialog.formModel.permission + code
      //   callBack()
      // }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
</style>
