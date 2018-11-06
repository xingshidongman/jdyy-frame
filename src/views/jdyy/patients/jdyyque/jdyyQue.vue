<template lang="pug">
  keep-alive
    kalix-table(bizKey="jdyyQue" title='查询列表' ref="kalixTable"
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
          {prop: 'medicalRecordNumber', label: '病历号'},
          {prop: 'dateAdmission', label: '住院日期'},
          {prop: 'dischargeDate', label: '出院日期'},
          {prop: 'stature', label: '身高'},
          {prop: 'weight', label: '体重'},
          {prop: 'brith', label: '出生日期'},
          {prop: 'idCard', label: '身份证号'},
          {prop: 'directorDoctor', label: '主管医生'},
          {prop: 'bedNumber', label: '床位号'},
          {prop: 'hospitalNumber', label: '住院号'},
          {prop: 'medicalRecords', label: '病历'},
          {prop: 'currentSituation', label: '现况'},
          {prop: 'telephonePerson', label: '本人联系方式'},
          {prop: 'familyPhone', label: '家属联系方式'},
          {prop: 'completeAddress', label: '通讯地址'},
          {prop: 'bmi', label: 'BMI'},
          {prop: 'bloodPressure', label: '血压'},
          {prop: 'specialDisorders', label: '特殊疾病'},
          {prop: 'descriptionSpecialDisease', label: '特殊疾病描述'},
          {prop: 'allergicHistory', label: '过敏史'},
          {prop: 'medicalCategory', label: '医疗类别'},
          {prop: 'whetherDischarge', label: '是否出院'},
          {prop: 'remarks', label: '备注'},
          {prop: 'harris', label: 'harris评分'},
          {prop: 'hss', label: 'hss评分'},
          {prop: 'buckling', label: '屈曲'},
          {prop: 'abduction', label: '外展'},
          {prop: 'adduction', label: '内收'},
          {prop: 'modifyStaff', label: '修改人员'},
          {prop: 'heavyTime', label: '重患时间'}
        ],
        jdyyQueDialog: [
          {id: 'view', dialog: 'JdyyQueView'}],
        btnList: jdyyQueConfigBtnList,
        toolbarBtnList: [
          {id: 'add', isShow: false, title: '添加', icon: 'icon-pinleizengjia', isPermission: true}
        ]
      }
    }
  }
</script>

<style scoped lang="stylus">

</style>
