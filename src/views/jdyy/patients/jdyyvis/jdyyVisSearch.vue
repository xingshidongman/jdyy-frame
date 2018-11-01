<template lang="pug">
  kalix-search(title="病院就诊查询" :searchFields="searchFields")
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'JdyyVisSearch',
    data() {
      return {
        searchFields: [
          {label: '患者姓名:', prop: 'name'}
        ]
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">

</style>
