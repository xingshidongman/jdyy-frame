<template lang="pug">
  kalix-search(:searchFields="searchFields" title="病员资料查询" bizKey="jdyyQue")
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'JdyyQueSearch',
    data() {
      return {
        searchFields: [
          {label: '床位号 :', prop: 'bedNumber'},
          {label: '姓名 :', prop: 'name'},
          {label: '性别 :', prop: 'sex'},
          {label: '年龄 :', prop: 'age'},
          {label: '诊断', prop: 'diagnosis'},
          {label: '术式', prop: 'surgical'},
          {label: '主管医生 :', prop: 'directorDoctor'},
          {label: '病历号 :', prop: 'medicalRecordNumber'},
          {label: '住院日期 :', type: 'date', prop: '%dateAdmission%'},
          {label: '出院日期 :', type: 'date', prop: '%dischargeDate%'},
          {label: '手术日期', type: 'datetime', prop: 'operationDate'},
          {label: '是否出院', prop: 'whetherDischarge'}
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">

</style>
