<template lang="pug">
  keep-alive
    kalix-table(bizKey="jdyyPos" title='术后调查' ref="kalixTable"
    v-bind:tableFields="tableFields"
    v-bind:targetURL="jdyypatientsURL"
    v-bind:bizDialog="jdyyPosDialog"
    v-bind:btnList="jdyyPosBtnList"
    v-bind:toolbarBtnList="toolbarBtnList"
    bizSearch="jdyyPosSearch")
  // v-bind:buttonPermissionPrefix="buttonjdyyPosPrefix"
</template>

<script type="text/ecmascript-6">
  import {JdyypatientsURL} from '../../config.toml'
  import {jdyyPosConfigBtnList} from './config'
  import KalixTable from '../../../../components/corelib/components/common/baseTable'

  export default {
    name: 'kalix-jdyy-jdyypos',
    components: {KalixTable},
    data() {
      return {
        jdyypatientsURL: JdyypatientsURL,
        tableFields: [
          {prop: 'name', label: '姓名'},
          {prop: 'sex', label: '性别'},
          {prop: 'age', label: '年龄'},
          {prop: 'telephonePerson', label: '联系方式'},
          // {prop: 'buckling', label: '屈曲'},
          // {prop: 'abduction', label: '外展'},
          // {prop: 'adduction', label: '内收'},
          // {prop: 'dateOperation', type: 'datetime', label: '手术日期'},
          {prop: 'directorDoctor', label: '主管医生'}
        ],
        jdyyPosDialog: [
          {id: 'edit', dialog: 'jdyyInv'},
          {id: 'view', dialog: 'jdyyInv2'},
          {id: 'delete', dialog: 'JdyyPosDelete'}
        ],
        jdyyPosBtnList: jdyyPosConfigBtnList,
        toolbarBtnList: [
          {id: 'add', isShow: false, title: '添加', isPermission: true}
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">

</style>
