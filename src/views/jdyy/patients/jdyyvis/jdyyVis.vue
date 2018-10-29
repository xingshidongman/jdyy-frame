<template lang="pug">
  keep-alive
    kalix-table(bizKey="jdyyVis" title='诊断术式信息' ref="kalixTable"
    v-bind:tableFields="tableFields"
    v-bind:targetURL="targetURL"
    v-bind:bizDialog="jdyyVisDialog"
    v-bind:btnList="jdyyVisBtnList"
    v-bind:toolbarBtnList="toolbarBtnList"
    v-bind:customTableTool="customTableTool"
    bizSearch="jdyyVisSearch")
    // v-bind:buttonPermissionPrefix="buttonjdyyManPrefix"
</template>

<script type="text/ecmascript-6">
  import {JdyyvisitURL} from '../../config.toml'
  import {jdyyVisConfigBtnList} from './config'
  import KalixTable from '../../../../components/corelib/components/common/baseTable'
  // import KalixTableVisit from '../../../../components/corelib/components/common/baseTableVisit'

  export default {
    name: 'kalix-jdyy-jdyyvis',
    components: {KalixTable},
    data() {
      return {
        targetURL: JdyyvisitURL + '/getPnameByPid',
        tableFields: [
          {prop: 'pname', label: '患者'},
          {prop: 'diagnosis', label: '诊断'},
          {prop: 'surgical', label: '术式'},
          {prop: 'operationDate', label: '手术日期'},
          {prop: 'periodization', label: '分期'}
        ],
        jdyyVisDialog: [
          {id: 'add', dialog: 'JdyyVisAdd'},
          {id: 'edit', dialog: 'JdyyVisEdit'},
          {id: 'delete', dialog: 'JdyyVisDelete'},
          {id: 'editImg', dialog: 'JdyyVisImg'}
        ],
        jdyyVisBtnList: jdyyVisConfigBtnList,
        toolbarBtnList: [
          {id: 'add', isShow: true, title: '添加', isPermission: true}
        ]
      }
    },
    methods: {
      customTableTool(row, btnId, that) {
        switch (btnId) {
          case 'editImg' : { // 图片上传
            that.whichBizDialog = ''
            let dig =
              that.bizDialog.filter((item) => {
                return item.id === 'editImg'
              })
            that.whichBizDialog = dig[0].dialog
            console.log('dig[0].dialog------------', dig[0].dialog)
            setTimeout(() => {
              that.$refs.kalixDialog.$refs.kalixBizDialog.open('图片', false, row)
            }, 20)
            break
          }
        }
      },
      getPnameByPid () {
        console.log('getPnameByPid=====================', this.tableFields[0].pid)
      }
    },
    mounted() {
      this.getPnameByPid()
    }
  }
</script>

<style scoped lang="stylus">

</style>
