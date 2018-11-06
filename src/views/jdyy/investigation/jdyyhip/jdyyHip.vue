<template lang="pug">
  keep-alive
    kalix-table(bizKey="jdyyHip" title='术后调查列表' ref="kalixTable"
    v-bind:tableFields="tableFields"
    v-bind:targetURL="jdyyhipURL"
    v-bind:bizDialog="jdyyHipDialog"
    v-bind:btnList="jdyyHipBtnList"
    v-bind:toolbarBtnList="toolbarBtnList"
    bizSearch="jdyyHipSearch")
</template>

<script type="text/ecmascript-6">
  import {JdyyhipURL} from '../../config.toml'
  import {jdyyHipConfigBtnList} from './config'
  import KalixTable from '../../../../components/corelib/components/common/baseTable'

  export default {
    name: 'kalix-jdyy-jdyyhip',
    components: {KalixTable},
    data() {
      return {
        jdyyhipURL: JdyyhipURL,
        tableFields: [
          {prop: 'name', label: '姓名'},
          {prop: 'sex', label: '性别'},
          {prop: 'age', label: '年龄'},
          {prop: 'telephonePerson', label: '联系方式'},
          {prop: 'hospitalNumber', label: '住院号'}
        ],
        jdyyHipDialog: [
          {id: 'add', dialog: 'jdyyHipAdd'},
          {id: 'edit', dialog: 'jdyyHipEdit'},
          {id: 'view', dialog: 'jdyyHipView'},
          {id: 'delete', dialog: 'JdyyHipDelete'}
        ],
        jdyyHipBtnList: jdyyHipConfigBtnList,
        toolbarBtnList: [
          {id: 'add', isShow: true, title: '添加', icon: 'icon-pinleizengjia', isPermission: true}
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">

</style>
