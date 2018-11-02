<template lang="pug">
  keep-alive
    kalix-table(bizKey="jdyyStat" title='统计信息' ref="kalixTable"
    v-bind:tableFields="tableFields"
    v-bind:targetURL="jdyystatURL"
    v-bind:bizDialog="jdyyStatDialog"
    v-bind:btnList="jdyyStatBtnList"
    v-bind:toolbarBtnList="toolbarBtnList"
    bizSearch="jdyyStatSearch")
</template>

<script type="text/ecmascript-6">
  import {JdyystatURL} from '../../config.toml'
  import {jdyyStatConfigBtnList} from './config'
  import KalixTable from '../../../../components/corelib/components/common/baseTable'

  export default {
    name: 'kalix-jdyy-jdyytentry',
    components: {KalixTable},
    data() {
      return {
        jdyystatURL: JdyystatURL,
        tableFields: [
          {prop: 'protoNum', label: '原住院人数'},
          {prop: 'outNum', label: '出院人数'},
          {prop: 'inNum', label: '入院（转）入人数'},
          {prop: 'surgeryNum', label: '手术人数'},
          {prop: 'deathNum', label: '死亡人数'},
          {prop: 'nowNum', label: '现住院人数'},
          {prop: 'illNum', label: '重病人数'},
          {prop: 'doctor', label: '坐班医生'},
          {prop: 'date', type: 'date', label: '坐班日期'}
        ],
        jdyyStatDialog: [
          {id: 'add', dialog: 'JdyyStatAdd'},
          {id: 'edit', dialog: 'JdyyStatEdit'},
          {id: 'delete', dialog: 'JdyyStatDelete'}
        ],
        jdyyStatBtnList: jdyyStatConfigBtnList,
        toolbarBtnList: [
          {id: 'add', isShow: true, title: '添加', icon: 'icon-pinleizengjia', isPermission: true}
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">

</style>
