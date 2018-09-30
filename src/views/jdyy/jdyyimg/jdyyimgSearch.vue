<template lang="pug">
  kalix-search(:searchFields="searchFields" title="药师姓名" bizKey="jdyyimg")
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'JdyyImgSearch',
    data() {
      return {
        searchFields: [
          {label: '药师姓名', prop: 'name'},
          {label: '药师描述', prop: 'link'}
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">

</style>
