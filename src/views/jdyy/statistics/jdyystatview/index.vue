<template lang="pug">
  div.start
    div.left
      div.left-sx
      div.left-zx
      div.left-box
        div.left-line
          div.text-box.text 今日数据指标
          div.block
            el-date-picker.input-time(v-model="chooseDate" type="date" v-on:change="getDataByDate" value-format="yyyy/M/d" format="yyyy/M/d"  placeholder="选择日期")
          el-radio-group.radio(v-model="duty")
            el-radio(label="白班")
            el-radio(label="夜班")
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
  import {JdyystatURL} from '../../config.toml'
  export default {
    name: 'kalix-jdyy-jdyystatview',
    data() {
      return {
        chooseDate: '', // 定义今日数据指标时间插件时间
        items: [], // 定义今日数据指标数据集合
        duty: '白班'
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
        let day = date.getDate() - 1
        // if (month >= 1 && month <= 9) {
        //   month = "0" + month;
        // }
        let nowDate = year + '/' + month + '/' + day
        console.log('date .toLocaleDateString()==================', date.toLocaleDateString())
        this.chooseDate = nowDate
        this.getData()// 根据当前时间查找今日数据指标相应数据
      },
      getData() {// 根据时间查找今日数据指标
        let searchData = {'%date%': this.chooseDate, '%duty%': this.duty}
        console.log('searchData====================', searchData)
        this.$http.request({// 向后台发送请求
          method: 'GET',
          url: JdyystatURL + '/getAllByDate',
          params: {
            date: this.chooseDate,
            duty: this.duty
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
          this.getData()// 根据当前时间查找相应数据
        }
      },
    },
    components: {},
    computed: {},
    watch:{
      duty: function () {
        console.log('duty============', this.duty)
        if (this.chooseDate === null || this.chooseDate === "") {
          this.$alert('请选择日期！')
        }else {
          this.getData()
        }
      }
    }
  }

</script>
<style scoped lang="stylus" type="text/stylus">
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .start
    width 100%
    padding 20px 5px
    color #2d8ac7
    .left
      width 65%
      position absolute
      height 555px
      top: 0
      left 0
      right 0
      bottom 0
      margin auto
      .left-box
        width 100%
        margin auto
        min-height 390px
        border 2px solid #23769a
      .left-line
        width 98%
        min-height 530px
        margin 10px auto
        border 0.3px solid #23769a
        border-radius 5px
        box-shadow 0px 0px 10px 5px #23769a inset
      .text-box
        width 30%
        position relative
        background-color rgba(77,109,177,0.8)
        margin -25px 0 0 15%
        text-align center
        font-size 16px
        color #ffffff
        font-weight bold
        padding 12px 0
      .left-sx
        width 30px
        height 5px
        background-color #3ac8f3
        position absolute
        margin: -2px 0 0 0;
      .left-zx
        width 5px
        height 30px
        background-color #3ac8f3
        position absolute
        margin: 0 0 0 -1px;
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
        margin-right: 100px
      .radio
        position absolute
        right 30px
        top 48px
        .el-radio
          font-weight bold
          font-size 14px
      .input-time
        width 70%
        margin-top 5px
        border 1px solid #dfdfdf
        color #23769a
        .el-input__inner
          padding-left: 30px;
          height 30px
      .left-block
        width 90%
        margin auto
        position relative
        margin-top 50px
        height 280px
        .block-box
          width 90%
          height 50px
          line-height 50px
          background-color #f2f2f2
          margin 15px auto
          font-size 3vw
          .block-span
            width 70%
            color rgb(77,109,177)
            padding-left 8%
            float left
          .block-spantwo
            width 20%
            color rgb(77,109,177)
            float right
            text-align center
</style>

