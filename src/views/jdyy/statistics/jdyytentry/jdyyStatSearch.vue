<template lang="pug">
  kalix-search(:searchFields="searchFields" title="查询" bizKey="jdyyStat")
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'JdyyStatSearch',
    data() {
      return {
        searchFields: [
          {label: '坐班医生 :', prop: 'doctor'},
          {label: '坐班日期 :', type: 'date', prop: '%date%'}
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">

</style>
