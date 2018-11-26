<template lang="pug">
  keep-alive
    kalix-table(bizKey="jdyyQue" title='查询列表' ref="kalixTable"
    v-bind:tableFields="tableFields"
    v-bind:targetURL="targetURL"
    v-bind:bizDialog="jdyyQueDialog"
    v-bind:btnList="btnList"
    v-bind:toolbarBtnList="toolbarBtnList"
    v-bind:customTableTool="callCustomTableTool"
    bizSearch="jdyyQueSearch")
</template>

<script type="text/ecmascript-6">
  import {JdyyvisitURL} from '../../config.toml'
  import {jdyyQueConfigBtnList} from './config'
  import KalixTable from '../../../../components/corelib/components/common/baseTable'

  export default {
    name: 'kalix-jdyy-jdyyque',
    components: {KalixTable},
    data() {
      return {
        targetURL: JdyyvisitURL + '/getAllPatVis',
        tableFields: [
          {prop: 'name', label: '姓名'},
          {prop: 'sex', label: '性别'},
          {prop: 'age', label: '年龄'},
          {prop: 'bedNumber', label: '床位号'},
          {prop: 'medicalRecordNumber', label: '病历号'},
          {prop: 'dateAdmission', label: '住院日期'},
          {prop: 'dischargeDate', label: '出院日期'},
          {prop: 'diagnosis', label: '诊断'},
          {prop: 'operationDate', label: '手术日期'},
          {prop: 'directorDoctor', label: '主管医生'}
          // {prop: 'stature', label: '身高'},
          // {prop: 'weight', label: '体重'},
          // {prop: 'brith', label: '出生日期'},
          // {prop: 'idCard', label: '身份证号'},
          // {prop: 'hospitalNumber', label: '住院号'},
          // {prop: 'medicalRecords', label: '病历'},
          // {prop: 'currentSituation', label: '现况'},
          // {prop: 'telephonePerson', label: '本人联系方式'},
          // {prop: 'familyPhone', label: '家属联系方式'},
          // {prop: 'completeAddress', label: '通讯地址'},
          // {prop: 'bmi', label: 'BMI'},
          // {prop: 'bloodPressure', label: '血压'},
          // {prop: 'specialDisorders', label: '特殊疾病'},
          // {prop: 'descriptionSpecialDisease', label: '特殊疾病描述'},
          // {prop: 'allergicHistory', label: '过敏史'},
          // {prop: 'medicalCategory', label: '医疗类别'},
          // {prop: 'whetherDischarge', label: '是否出院'},
          // {prop: 'remarks', label: '备注'},
          // {prop: 'harris', label: 'harris评分'},
          // {prop: 'hss', label: 'hss评分'},
          // {prop: 'buckling', label: '屈曲'},
          // {prop: 'abduction', label: '外展'},
          // {prop: 'adduction', label: '内收'},
          // {prop: 'modifyStaff', label: '修改人员'},
          // {prop: 'heavyTime', label: '重患时间'}
        ],
        jdyyQueDialog: [
          {id: 'viewPdf', dialog: 'JdyyQueView'},
          {id: 'edit', dialog: 'JdyyQueEdit'}
          // {id: 'delPatVis'}
        ],
        btnList: jdyyQueConfigBtnList,
        toolbarBtnList: [
          {id: 'add', isShow: false, title: '添加', icon: 'icon-pinleizengjia', isPermission: true}
        ],
        imgs: []
      }
    },
    methods: {
      callCustomTableTool(row, btnId, that) {
        switch (btnId) {
          case 'viewPdf': {
            that.whichBizDialog = ''
            let dig =
              that.bizDialog.filter((item) => {
                return item.id === 'viewPdf'
              })
            that.whichBizDialog = dig[0].dialog
            console.log('row.id---------------', row.id)
            setTimeout(() => {
              this.$http.get('/camel/rest/jdyy/visits/getAllByUserId', {
                params: {
                  userId: row.id
                }
              }).then(res => {
                this.tableData = res.data.data
                console.log('viewtable _res===========', this.tableData)
                // console.log('this.tableData[0].photo===========', this.tableData[0].photo)
                if (this.tableData.length > 0) {
                  if (this.imgs !== undefined) {
                    this.imgs.splice(0, this.imgs.length)
                  }
                  if (this.tableData[0].photo !== null && this.tableData[0].photo !== '') {
                    if (this.tableData[0].photo.indexOf('&') !== -1) {
                      let arr = this.tableData[0].photo.split('&')
                      for (let i = 0; i < arr.length; i++) {
                        let imgObj = {}
                        imgObj.val = arr[i]
                        imgObj.key = 'img' + i
                        this.imgs.push(imgObj)
                        console.log('this.imgs--------------:', this.imgs)
                      }
                    } else {
                      let imgObj = {
                        val: this.tableData[0].photo,
                        key: 'img0'
                      }
                      console.log('imgObj--------------:', imgObj)
                      this.imgs.push(imgObj)
                    }
                  }
                  row.tableData = this.tableData
                  row.imgs = this.imgs
                  that.$refs.kalixDialog.$refs.kalixBizDialog.open('查看', false, row)
                } else {
                  row.tableData = []
                  that.$refs.kalixDialog.$refs.kalixBizDialog.open('查看', false, row)
                }
              })
            }, 20)
            break
          }
        }
      }
    },
    watch: {
      delPatVis: function () {
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
      }
    }
  }
</script>

<style scoped lang="stylus">

</style>
