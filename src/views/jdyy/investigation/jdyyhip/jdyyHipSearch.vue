<template lang="pug">
  kalix-search(:searchFields="searchFields" title="姓名" bizKey="jdyyHip")
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'JdyyHipSearch',
    data() {
      return {
        searchFields: [
          {label: '姓名', prop: 'name'},
          {label: '住院号', prop: 'hospitalNumber'}
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">

</style>
