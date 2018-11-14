<template lang="pug">
  keep-alive
    kalix-table(bizKey="jdyyKnee" title='术后调查列表' ref="kalixTable"
    v-bind:tableFields="tableFields"
    v-bind:targetURL="jdyykneeURL"
    v-bind:bizDialog="jdyyKneeDialog"
    v-bind:btnList="jdyyKneeBtnList"
    v-bind:buttonPermissionPrefix="buttonPermissionPrefix"
    v-bind:toolbarBtnList="toolbarBtnList"
    bizSearch="jdyyKneeSearch")
</template>

<script type="text/ecmascript-6">
  import {JdyykneeURL, jdyyKneeBtnPermissionPrefix} from '../../config.toml'
  import {jdyyKneeConfigBtnList} from './config'
  import KalixTable from '../../../../components/corelib/components/common/baseTable'

  export default {
    name: 'kalix-jdyy-jdyyknee',
    components: {KalixTable},
    data() {
      return {
        jdyykneeURL: JdyykneeURL,
        tableFields: [
          {prop: 'name', label: '姓名'},
          {prop: 'sex', label: '性别'},
          {prop: 'age', label: '年龄'},
          {prop: 'telephonePerson', label: '联系方式'},
          {prop: 'hospitalNumber', label: '住院号'}
        ],
        jdyyKneeDialog: [
          {id: 'add', dialog: 'jdyyKneeAdd'},
          {id: 'edit', dialog: 'jdyyKneeEdit'},
          {id: 'view', dialog: 'jdyyKneeView'},
          {id: 'delete', dialog: 'JdyyKneeDelete'}
        ],
        jdyyKneeBtnList: jdyyKneeConfigBtnList,
        toolbarBtnList: [
          {id: 'add', isShow: true, title: '添加', icon: 'icon-pinleizengjia', isPermission: true}
        ],
        buttonPermissionPrefix: jdyyKneeBtnPermissionPrefix
      }
    }
  }
</script>

<style scoped lang="stylus">

</style>
