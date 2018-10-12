<template lang="pug">
  el-date-picker(v-model="currentValue"
  v-bind:type="type"
  v-bind:placeholder="placeholder"
  v-bind:format="format")
</template>
<script type="text/ecmascript-6">
  //  const dateFormat = require('date-fns/format')

  export default {
    name: 'kalix-datepicker-simple',
    props: ['value', 'type', 'placeholder', 'format'],
    data() {
      return {
        currentValue: this.value
      }
    },
    watch: {
      currentValue(nv) {
        let val = nv
        if (nv) {
          let month = nv.getMonth() + 1
          let date = nv.getDate()
          let hours = nv.getHours()
          let minutes = nv.getMinutes()
          let seconds = nv.getSeconds()
          val = nv.getFullYear() + '-' +
            (month > 9 ? month : '0' + month) + '-' +
            (date > 9 ? date : '0' + date) + ' ' +
            (hours > 9 ? hours : '0' + hours) + ':' +
            (minutes > 9 ? minutes : '0' + minutes) + ':' +
            (seconds > 9 ? seconds : '0' + seconds)
        }
        this.$emit('input', val)
      }
    }
  }
</script>
<style scoped lang="stylus" type="text/stylus">
</style>
