<template lang="pug">
  div.start
    div.left
      div.left-box
        div.left-line
          div.text-box.text 今日数据指标
          div.left-sx
          div.left-zx
          div.block
            el-date-picker.input-time(v-model="chooseDate" v-on:change="getDataByDate" type="date" value-format="yyyy-MM-dd"  placeholder="选择日期")
          div.left-block
            ul(v-for="item in items")
              li.block-box
                span.block-span 原住院人数
                span.block-spantwo {{item.protoNum}}人
              li.block-box
                span.block-span 出院人数
                span.block-spantwo {{item.outNum}}人
              li.block-box
                span.block-span 入院（转）入人数
                span.block-spantwo {{item.inNum}}人
              li.block-box
                span.block-span 手术人数
                span.block-spantwo {{item.surgeryNum}}人
              li.block-box
                span.block-span 死亡人数
                span.block-spantwo {{item.deathNum}}人
              li.block-box
                span.block-span 现住院人数
                span.block-spantwo {{item.nowNum}}人
              li.block-box
                span.block-span 重病人数
                span.block-spantwo {{item.illNum}}人
        div.left-xx
        div.left-xr
</template>

<script>
  export default {
    name: 'kalix-jdyy-welcome',
    data() {
      return {
        chooseDate: '', // 定义今日数据指标时间插件时间
        items: [] // 定义今日数据指标数据集合
      }
    },
    mounted() {
      this.getDate() // 获取系统当前日期方法
    },
    methods: {
      getDate() { // 获取系统当前时间
        /* eslint-disable */
        let date = new Date()
        let year = date.getFullYear()
        let month = date.getMonth() + 1
        let day = date.getDate()
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        let nowDate = year + '-' + month + '-' + day
        console.log('date .toLocaleDateString()==================', date.toLocaleDateString())
        this.getData(nowDate)// 根据当前时间查找今日数据指标相应数据
      },
      getData(nowDate) {// 根据时间查找今日数据指标
        console.log('nowDate==================', nowDate)
        this.$http.request({// 向后台发送请求
          method: 'get',
          url: '/camel/rest/jdyy/statisticss/getAllByDate',
          params: {
            date: nowDate
          }
        }).then(response => {
          console.log('response.data=================', response.data.data)
          if (response.data.totalCount == 0) {// 后台传回的数据为空时，统计数量显示0人
            this.items = [{protoNum: 0, outNum: 0, inNum: 0, surgeryNum: 0, deathNum: 0, nowNum: 0, illNum: 0}]
          } else {// 后台传回的数据不为空时，显示数据为后台传回的数据
            this.items = response.data.data
          }
        })
      },
      getDataByDate() { // 获取当前时间，并根据获取的时间查询今日数据指标
        console.log('getDataByDate========================', this.chooseDate)
        let selectDate = this.chooseDate
        console.log("selectDate============", selectDate)
        if (selectDate === null || selectDate === "") {
          this.getDate()// 当选择的时间为空时，自动显示当前时间的数据
        } else {
          this.getData(selectDate)// 根据当前时间查找相应数据
        }
      },
    },
    components: {},
    computed: {}
  }

</script>
<style scoped lang="stylus" type="text/stylus">
  *
    margin: 0;
    padding: 0;
    list-style: none;
  .start
    width 100%
    height 660px
    padding 80px 5px
    color #2d8ac7
    background-color #02010f
    .left
      width 60%
      margin auto
      .left-box
        width 96%
        margin auto
        min-height 440px
        border 2px solid #23769a
      .left-line
        width 98%
        min-height 420px
        margin 10px auto
        border 0.3px solid #23769a
        border-radius 5px
        box-shadow 0px 0px 10px 5px #23769a inset
        .text-box
          width 30%
          position relative
          background-color rgba(1, 14, 45, 0.8)
          margin -25px 0 0 15%
          text-align center
          font-size 1.2vw
          color #3ac8f3
          font-weight bold
          padding 5px 0
        .left-sx
          width 30px
          height 5px
          background-color #3ac8f3
          position absolute
          margin: -1.5% 0 0 -0.8%
        .left-zx
          width 5px
          height 30px
          background-color #3ac8f3
          position absolute
          margin: -1.2% 0 0 -0.8%
      .left-xr
        width 5px
        height 30px
        position relative
        background-color #3ac8f3
        float right
        margin -25px -33px 0 0
      .left-xx
        width 30px
        height 5px
        background-color #3ac8f3
        float right
        margin 0 -1px 0 0
      .block
        float right
      .input-time
        width 60%
        margin-top 15px
        border 2px solid #23769a
        color #23769a
        background-color black
        .el-input__inner
          padding-left: 30px;
          background-color: black;
          border 1px solid black
          height 30px
      .left-block
        width 90%
        margin auto
        position relative
        margin-top 90px
        height 300px
        .block-box
          width 90%
          height 30px
          line-height 30px
          background-color #373641
          margin 10px auto
          font-size 1vw
          .block-span
            width 75%
            color #23769a
            padding-left 5px
            float left
          .block-spantwo
            width 20%
            color #23769a
            float right
            text-align center
</style>

