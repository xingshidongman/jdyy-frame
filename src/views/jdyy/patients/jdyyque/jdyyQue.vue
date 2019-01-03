<template lang="pug">
  keep-alive.que
    kalix-table(bizKey="jdyyQue" title='查询列表' ref="kalixTable"
    v-bind:tableFields="tableFields"
    v-bind:targetURL="targetURL"
    v-bind:bizDialog="jdyyQueDialog"
    v-bind:btnList="btnList"
    v-bind:toolbarBtnList="toolbarBtnList"
    v-bind:customTableTool="callCustomTableTool"
    bizSearch="jdyyQueSearch"
    v-loading.fullscreen="loading")
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
        loading: false,
        tableFields: [
          {prop: 'name', label: ' 姓名', sortable: true},
          {prop: 'sex', label: ' 性别', sortable: true},
          {prop: 'age', label: ' 年龄', sortable: true},
          // {prop: 'bedNumber', label: '床位号', sortable: true},
          // {prop: 'medicalRecordNumber', label: '病案号', sortable: true},
          {prop: 'dateAdmission', label: '住院日期', sortable: true},
          // {prop: 'dischargeDate', label: '出院日期', sortable: true},
          {prop: 'diagnosis', label: '  诊断   ', sortable: true},
          {prop: 'surgical', label: '  术式   ', sortable: true},
          {prop: 'operationDate', label: '手术日期', sortable: true},
          {prop: 'directorDoctor', label: '主管医生', sortable: true}
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
          {id: 'viewAll', dialog: 'JdyyQueView'},
          {id: 'viewPdf', dialog: 'jdyyQueExport'},
          {id: 'edit', dialog: 'JdyyQueEdit'}
          // {id: 'delPatVis'}
        ],
        btnList: jdyyQueConfigBtnList,
        toolbarBtnList: [
          {id: 'add', isShow: false, title: '添加', icon: 'icon-pinleizengjia', isPermission: true}
        ]
      }
    },
    methods: {
      callCustomTableTool(row, btnId, that) {
        switch (btnId) {
          case 'viewAll': {
            that.whichBizDialog = ''
            let dig =
              that.bizDialog.filter((item) => {
                return item.id === 'viewAll'
              })
            that.whichBizDialog = dig[0].dialog
            console.log('row.photo---------------', row.photo)
            row.imgs = []
            if (row.photo !== undefined && row.photo !== null) {
              if (row.photo.indexOf(',') !== -1) {
                let arr = row.photo.split(',')
                for (let i = 0; i < arr.length; i++) {
                  let imgObj = {}
                  imgObj.val = arr[i]
                  imgObj.key = 'img' + i
                  row.imgs.push(imgObj)
                }
                console.log('this.imgs--------------:', row.imgs)
              } else {
                let imgObj = {}
                imgObj.val = row.photo
                imgObj.key = 'img' + 1
                row.imgs.push(imgObj)
              }
            }
            this.$http.get('/camel/rest/jdyy/visits/getAllByUserId', {
              params: {
                userId: row.id
              }
            }).then(res => {
              this.tableData = res.data.data
              console.log('viewtable _res===========', this.tableData)
              if (this.tableData.length > 0) {
                row.tableData = this.tableData
                this.loading = false
                that.$refs.kalixDialog.$refs.kalixBizDialog.open('查看', false, row)
              } else {
                row.tableData = []
                this.loading = false
                that.$refs.kalixDialog.$refs.kalixBizDialog.open('查看', false, row)
              }
            })
            break
          }
          case 'viewPdf': {
            this.loading = true
            that.whichBizDialog = ''
            let dig =
              that.bizDialog.filter((item) => {
                return item.id === 'viewPdf'
              })
            that.whichBizDialog = dig[0].dialog
            console.log('row.id---------------', row.id)
            setTimeout(() => {
              this.$http.get('/camel/rest/jdyy/visits/getImgsByPhoto', {
                params: {
                  imgs: row.photo
                }
              }).then(res => {
                console.log('base64=========================', res.data)
                row.imgs = []
                // row.imgs = res.data.tag
                if (res.data.tag !== undefined && res.data.tag !== null) {
                  if (res.data.tag.indexOf('&') !== -1) {
                    let arr = res.data.tag.split('&')
                    for (let i = 0; i < arr.length; i++) {
                      let imgObj = {}
                      imgObj.val = arr[i]
                      imgObj.key = 'img' + i
                      row.imgs.push(imgObj)
                      console.log('this.imgs--------------:', row.imgs)
                    }
                  } else {
                    let imgObj = {
                      val: res.data.tag,
                      key: 'img0'
                    }
                    console.log('imgObj--------------:', imgObj)
                    row.imgs.push(imgObj)
                  }
                }
                this.$http.get('/camel/rest/jdyy/visits/getAllByUserId', {
                  params: {
                    userId: row.id
                  }
                }).then(res => {
                  this.tableData = res.data.data
                  console.log('viewtable _res===========', this.tableData)
                  if (this.tableData.length > 0) {
                    row.tableData = this.tableData
                    this.loading = false
                    that.$refs.kalixDialog.$refs.kalixBizDialog.open('查看', false, row)
                  } else {
                    row.tableData = []
                    this.loading = false
                    that.$refs.kalixDialog.$refs.kalixBizDialog.open('查看', false, row)
                  }
                })
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



