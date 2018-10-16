<template lang="pug">
  keep-alive
    kalix-table(bizKey="jdyyVis" title='诊断术式信息' ref="kalixTable"
    v-bind:tableFields="tableFields"
    v-bind:targetURL="jdyyvisitURL"
    v-bind:bizDialog="jdyyVisDialog"
    v-bind:btnList="jdyyVisBtnList"
    v-bind:toolbarBtnList="toolbarBtnList"
    bizSearch="jdyyVisSearch")
    // v-bind:buttonPermissionPrefix="buttonjdyyManPrefix"
</template>

<script type="text/ecmascript-6">
  import {JdyyvisitURL} from '../../config.toml'
  import {jdyyVisConfigBtnList} from './config'
  import KalixTable from '../../../../components/corelib/components/common/baseTable'

  export default {
    name: 'kalix-jdyy-jdyyvis',
    components: {KalixTable},
    data() {
      return {
        jdyyvisitURL: JdyyvisitURL,
        tableFields: [
          {prop: 'pid', label: '患者'},
          {prop: 'diagnosis', label: '诊断'},
          {prop: 'surgical', label: '术式'},
          {prop: 'operationDate', label: '手术日期'},
          {prop: 'periodization', label: '分期'}
        ],
        jdyyVisDialog: [
          {id: 'add', dialog: 'JdyyVisAdd'},
          {id: 'edit', dialog: 'JdyyVisEdit'},
          {id: 'delete', dialog: 'JdyyVisDelete'},
          {id: 'view', dialog: 'JdyyVisImg'}
        ],
        jdyyVisBtnList: jdyyVisConfigBtnList,
        toolbarBtnList: [
          {id: 'add', isShow: true, title: '添加', isPermission: true}
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">

</style>
