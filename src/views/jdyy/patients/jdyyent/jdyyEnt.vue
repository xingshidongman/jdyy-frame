<template lang="pug">
  keep-alive
    kalix-table(bizKey="jdyyEnt" title='诊断术式信息' ref="kalixTable"
    v-bind:tableFields="tableFields"
    v-bind:targetURL="jdyypatientsURL"
    v-bind:bizDialog="jdyyEntDialog"
    v-bind:btnList="jdyyEntBtnList"
    v-bind:toolbarBtnList="toolbarBtnList"
    bizSearch="jdyyEntSearch")
    // v-bind:buttonPermissionPrefix="buttonjdyyManPrefix"
</template>

<script type="text/ecmascript-6">
  import {JdyypatientsURL} from '../../config.toml'
  import {jdyyEntConfigBtnList} from './config'
  import KalixTable from '../../../../components/corelib/components/common/baseTable'

  export default {
    name: 'kalix-jdyy-jdyyent',
    components: {KalixTable},
    data() {
      return {
        jdyypatientsURL: JdyypatientsURL,
        tableFields: [
          {prop: 'diagnosis', label: '诊断'},
          {prop: 'surgical', label: '术式'},
          {prop: 'dateOperation', label: '手术日期'},
          {prop: 'periodization', label: '分期'}
        ],
        jdyyEntDialog: [
          {id: 'add', dialog: 'JdyyEntAdd'},
          {id: 'edit', dialog: 'JdyyEntEdit'},
          {id: 'delete', dialog: 'JdyyEntDelete'}
        ],
        jdyyEntBtnList: jdyyEntConfigBtnList,
        toolbarBtnList: [
          {id: 'add', isShow: true, title: '添加', isPermission: true}
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">

</style>
