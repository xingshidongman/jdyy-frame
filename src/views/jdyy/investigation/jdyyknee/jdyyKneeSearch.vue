<template lang="pug">
  kalix-search(:searchFields="searchFields" title="姓名" bizKey="jdyyKnee")
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'JdyyKneeSearch',
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
