<template lang="pug">
  kalix-search(:searchFields="searchFields" title="姓名" bizKey="jdyyMan")
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'JdyyManSearch',
    data() {
      return {
        searchFields: [
          {label: '姓名', prop: 'name'},
          {label: '性别', prop: 'sex'},
          {label: '病历号', prop: 'bedNumber'},
          {label: '主管医生', prop: 'directorDoctor'}
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">

</style>
