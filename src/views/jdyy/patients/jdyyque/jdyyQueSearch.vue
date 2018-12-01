<template lang="pug">
  kalix-search(:searchFields="searchFields" title="病员资料查询" bizKey="jdyyQue"
  v-bind:submitBefore="baseSearchSubmitBefore")
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'JdyyQueSearch',
    data() {
      return {
        searchFields: [
          {label: '姓名:', prop: 'name'},
          {label: '性别:', prop: 'sex', type: 'select', options: [{value: '男', label: '男'}, {value: '女', label: '女'}]},
          {label: '年龄段:', prop: 'age', type: 'age'},
          {label: '', prop: 'ages', type: 'ages'},
          {label: '床位号:', prop: 'bedNumber'},
          {label: '诊断:', prop: 'diagnosis'},
          {label: '术式:', prop: 'surgical'},
          {label: '主管医生:', prop: 'directorDoctor'},
          {label: '病历号:', prop: 'medicalRecordNumber'},
          {label: '日期:', type: 'select', prop: 'date', options: [{value: '住院日期', label: '住院日期'}, {value: '出院日期', label: '出院日期'}, {value: '手术日期', label: '手术日期'}]},
          {label: '开始日期', type: 'date', prop: '%dateAdmission%'},
          {label: '结束日期', type: 'date', prop: '%dischargeDate%'},
          // {label: '手术日期', type: 'date', prop: 'operationDate'},
          {label: '是否出院', type: 'select', prop: 'whetherDischarge', options: [{value: '是', label: '是'}, {value: '否', label: '否'}]}
        ]
      }
    },
    methods: {
      baseSearchSubmitBefore(_baseSearch, callBack) {
        console.log(' ==== baseSearchSubmitBefore ==== ', _baseSearch)
        let dataStr = _baseSearch.form['date']
        let dateAdmissionStr = _baseSearch.form['%dateAdmission%']
        let dateDischargeDateStr = _baseSearch.form['%dischargeDate%']
        console.log(' ==== baseSearchSubmitBefore ==== dataStr:', dataStr)
        console.log(' ==== baseSearchSubmitBefore ==== dateAdmissionStr:', dateAdmissionStr)
        if ((dateDischargeDateStr != null || dateAdmissionStr != null) && dataStr === null) {
          this.$message.error('日期必填')
        } else {
          callBack()
        }
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">

</style>
