<template lang="pug">
  kalix-dialog.user-add(title='查看' bizKey="jdyyImg" ref="kalixBizDialog" v-bind:formModel.sync="formModel" isView)
    div.el-form(slot="dialogFormSlot")
      el-form-item(label="药师姓名" prop="name" v-bind:label-width="labelWidth" )
        el-input(v-model="formModel.name" readonly)
      el-form-item(label="药师简介" prop="link" v-bind:label-width="labelWidth" )
        el-input(v-model="formModel.link" type="textarea" readonly)
      el-form-item(label="药师图片" prop="imgurl" v-bind:label-width="labelWidth")
        el-input(v-model="formModel.imgurl" readonly)
</template>

<script type="text/ecmascript-6">
  import FormModel from './model'
  export default {
    name: 'JdyyImgView',
    data() {
      return {
        formModel: Object.assign({}, FormModel),
        labelWidth: '120px'
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">

</style>
