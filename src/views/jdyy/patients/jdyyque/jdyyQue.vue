<template lang="pug">
  keep-alive
    kalix-table(bizKey="jdyyQue" title='查询' ref="kalixTable"
    v-bind:tableFields="tableFields"
    v-bind:targetURL="jdyypatientsURL"
    v-bind:bizDialog="jdyyQueDialog"
    v-bind:btnList="btnList"
    v-bind:toolbarBtnList="toolbarBtnList"
    bizSearch="jdyyQueSearch")
</template>

<script type="text/ecmascript-6">
  import {JdyypatientsURL} from '../../config.toml'
  import {jdyyQueConfigBtnList} from './config'
  import KalixTable from '../../../../components/corelib/components/common/baseTable'

  export default {
    name: 'kalix-jdyy-jdyyque',
    components: {KalixTable},
    data() {
      return {
        jdyypatientsURL: JdyypatientsURL,
        tableFields: [
          {prop: 'name', label: '姓名'},
          {prop: 'sex', label: '性别'},
          {prop: 'age', label: '年龄'},
          {prop: 'bedNumber', label: '病历号'},
          {prop: 'dateAdmission', label: '住院日期'},
          {prop: 'DischargeDate', label: '出院日期'},
          {prop: 'diagnosis', label: '诊断'},
          {prop: 'dateOperation', label: '手术日期'},
          {prop: 'directorDoctor', label: '主管医生'}
        ],
        jdyyQueDialog: [
          {id: 'view', dialog: 'JdyyQueView'}
        ],
        btnList: jdyyQueConfigBtnList,
        toolbarBtnList: [
          {id: 'add', isShow: false, title: '添加', isPermission: true}
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">

</style>
