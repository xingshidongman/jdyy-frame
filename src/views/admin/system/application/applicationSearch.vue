<template lang="pug">
  kalix-search(:searchFields="searchFields" title="应用查询")
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'AdminApplicationSearch',
    data() {
      return {
        searchFields: [
          {label: '应用名称', prop: 'name'}
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">

</style>
