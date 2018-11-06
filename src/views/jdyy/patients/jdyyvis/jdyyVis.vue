<template lang="pug">
  keep-alive
    kalix-table(bizKey="jdyyVis" title='诊断术式信息列表' ref="kalixTable"
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
  import Message from '../../../../common/message'

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
          {id: 'view', dialog: 'JdyyVisView'},
          {id: 'add', dialog: 'JdyyVisAdd'},
          {id: 'edit', dialog: 'JdyyVisEdit'},
          {id: 'editImg', dialog: 'JdyyVisImg'}
        ],
        jdyyVisBtnList: jdyyVisConfigBtnList,
        toolbarBtnList: [
          {id: 'add', isShow: true, title: '添加', icon: 'icon-pinleizengjia', isPermission: true}
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
          case 'deleteOne' : {
            console.log('==deleteOne=====', row)
            this.$confirm('确定要删除吗?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {
              return this.axios.request({
                method: 'DELETE',
                url: JdyyvisitURL + '/' + row.id,
                params: {},
                data: {
                  id: row.id
                }
              })
            }).then(response => {
              // this.getData()
              this.$refs.kalixTable.getData()
              Message.success(response.data.msg)
              // 添加删除后自定义处理事件
              // this.$emit('afterDelete')
            }).catch(() => {
            })
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
