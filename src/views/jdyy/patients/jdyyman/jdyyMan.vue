<template lang="pug">
  keep-alive
    kalix-table(bizKey="jdyyMan" title='病员信息' ref="kalixTable"
    v-bind:tableFields="tableFields"
    v-bind:targetURL="jdyypatientsURL"
    v-bind:bizDialog="jdyyManDialog"
    v-bind:btnList="jdyyManBtnList"
    v-bind:toolbarBtnList="toolbarBtnList"
    bizSearch="jdyyManSearch")
    // v-bind:buttonPermissionPrefix="buttonjdyyManPrefix"
</template>

<script type="text/ecmascript-6">
  import {JdyypatientsURL} from '../../config.toml'
  import {jdyyManConfigBtnList} from './config'
  import KalixTable from '../../../../components/corelib/components/common/baseTable'

  export default {
    name: 'kalix-jdyy-jdyyman',
    components: {KalixTable},
    data() {
      return {
        jdyypatientsURL: JdyypatientsURL,
        tableFields: [
          {prop: 'name', label: '姓名'},
          {prop: 'sex', label: '性别'},
          {prop: 'age', label: '年龄'},
          {prop: 'bedNumber', label: '病历号'},
          {prop: 'dateAdmission', type: 'datetime', label: '住院日期'},
          // {prop: 'diagnosis', label: '诊断'},
          // {prop: 'dateOperation', type: 'datetime', label: '手术日期'},
          {prop: 'directorDoctor', label: '主管医生'}
        ],
        jdyyManDialog: [
          {id: 'add', dialog: 'JdyyManAdd'},
          {id: 'edit', dialog: 'JdyyManEdit'},
          {id: 'delete', dialog: 'JdyyManDelete'}
        ],
        jdyyManBtnList: jdyyManConfigBtnList,
        toolbarBtnList: [
          {id: 'add', isShow: true, title: '添加', icon: 'icon-pinleizengjia', isPermission: true}
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">

</style>
