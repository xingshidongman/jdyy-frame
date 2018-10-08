<template lang="pug">
  kalix-search(:searchFields="searchFields" title="姓名" bizKey="jdyyPos")
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'JdyyPosSearch',
    data() {
      return {
        searchFields: [
          {label: '姓名', prop: 'name'},
          {label: '手术日期', prop: 'dateOperation'},
          {label: '联系方式', prop: 'telephonePerson'}
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">

</style>
