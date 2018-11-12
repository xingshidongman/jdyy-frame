<template lang="pug">
  el-table(v-bind:data="tableData" border)
    el-table-column(prop="diagnosis" label="诊断" width="170")
    el-table-column(prop="surgical" label="术式" width="170")
    el-table-column(prop="operationDate" label="手术日期" width="170")
    el-table-column(prop="periodization" label="分期" width="170")
    el-table-column(label="图片" width="360")
      template(slot-scope="scope")
        div.picture(v-for="img in imgs")
          img(v-bind:src="img" ref="image" width="100px")
    <!--el-table-column(label="图片" width="360")-->
      <!--template(slot-scope="scope")-->
        <!--kalix-img-upload(v-model="scope.row.photo" readonly)-->
    <!--el-table-column(label="操作" width="115")-->
      <!--template(slot-scope="scope")-->
        <!--el-button(@click="handleClick(scope.row)" type="text" size="small") 查看图片-->
</template>

<script type="text/ecmascript-6">
    import KalixImgUpload from '../corelib/components/common/imgUpload'
    export default {
      name: 'view-table',
      components: {KalixImgUpload},
      props: {
        targetURL: {
          type: String
        },
        userId: {
          type: Number
        },
        imgSrc: {
          type: String
        }
      },
      data() {
        return {
          tableData: [],
          imgs: []
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
            params: {
              userId: this.userId
            }
          }).then(res => {
            this.tableData = res.data.data
            // this.imgs = res.data.data[0].photo.split(',')
            if (res.data.data[0].photo.indexOf(',')) {
              this.imgs = res.data.data[0].photo.split(',')
            } else {
              this.imgs = res.data.data[0].photo
            }
          })
        },
        handleClick(row) {
          this.$emit('handleClick', row)
        }
      }
    }
</script>

<style scoped lang="stylus" type="text/stylus">
  .el-table
    width 90%
    margin auto
  .picture
    margin-left 5px
    display inline-block
</style>
