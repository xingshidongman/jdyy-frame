<template lang="pug">
  el-table(v-bind:data="tableData" border)
    // el-table-column(fixed prop="id" label="id" type="hidden")
    el-table-column(prop="diagnosis" label="诊断" width="200")
    el-table-column(prop="surgical" label="术式" width="200")
    el-table-column(prop="operationDate" label="手术日期" width="200")
    el-table-column(prop="periodization" label="分期" width="150")
    el-table-column(label="操作" width="100")
      template(slot-scope="scope")
        el-button(@click="handleClick(scope.row)" type="text" size="small") 查看图片
</template>

<script type="text/ecmascript-6">
    export default {
      name: 'view-table',
      props: {
        targetURL: {
          type: String
        },
        userId: {
          type: Number
        }
      },
      data() {
        return {
          tableData: []
        }
      },
      mounted() {
        this.getDate()
        console.log('this.targetURL=================', this.targetURL)
        console.log('this.userId=================', this.userId)
      },
      methods: {
        getDate() {
          // this.$http.get(this.targetURL + `/${this.userId}`, {
          this.$http.get(this.targetURL, {
            params: ''
          }).then(res => {
            this.tableData = res.data.data
            console.log('viewtable _res===========', this.tableData)
          })
        },
        handleClick(row) {
          this.$emit('handleClick', row)
        }
      }
    }
</script>

<style scoped lang="stylus" type="text/stylus">

</style>
