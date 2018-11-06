
<template lang="pug">
  kalix-dialog.user-add(title='查看' bizKey="jdyyVis" ref="kalixBizDialog" v-bind:formModel.sync="formModel" isView)
    div.el-form(slot="dialogFormSlot")
      el-form-item(label="患者" prop="pname" v-bind:label-width="labelWidth")
        el-input.tests(v-model="formModel.pname" readonly)
      el-form-item(label="诊断" prop="diagnosis" v-bind:label-width="labelWidth")
        el-input.tests(v-model="formModel.diagnosis" readonly)
      el-form-item(label="术式" prop="surgical" v-bind:label-width="labelWidth")
        el-input.tests(v-model="formModel.surgical" readonly)
      el-form-item(label="手术日期" prop="operationDate" v-bind:label-width="labelWidth")
        el-input.tests(v-model="formModel.operationDate" readonly)
      el-form-item(label="分期" prop="periodization" v-bind:label-width="labelWidth")
        el-input.tests(v-model="formModel.periodization" readonly)
      el-form-item(label="分型" prop="parting" v-bind:label-width="labelWidth")
        el-input.tests(v-model="formModel.parting" readonly)
      el-form-item.photo-width(label="图片" prop="photo" v-bind:label-width="labelWidth")
        kalix-img-upload(v-model="formModel.photo" readonly)
</template>

<script type="text/ecmascript-6">
  import FormModel from './model'
  import {visPatUrl} from '../../config.toml'
  import KalixClansmanUpload from '../../../../components/fileUpload/upload'
  import KalixImgUpload from '../../../../components/corelib/components/common/imgUpload'
  import ViewTable from '../../../../components/view/viewtable'
  export default {
    name: 'JdyyVisView',
    components: {ViewTable, KalixImgUpload, KalixClansmanUpload},
    data() {
      return {
        visPatUrl: visPatUrl,
        imgs: [],
        formModel: Object.assign({}, FormModel),
        labelWidth: '120px'
      }
    },
    methods: {
      init(dialogOption) {
        console.log('---------dialogOption------------', dialogOption)
      },
      handleClick(data) {
        console.log('handleClick---data。photo----', data.photo)
        if (data.photo !== null) {
          if (data.photo.indexOf(',')) {
            this.imgs = data.photo.split(',')
          } else {
            this.imgs = data.photo
          }
          this.$refs.mark.style.display = 'block'
        } else {
          alert('无图片')
        }
      },
      markclose() {
        this.$refs.mark.style.display = 'none'
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
  .el-form
    width 80%
    margin auto
    .el-form-item
      width 49%
      display inline-block
    .photo-width
      width 100%
</style>
