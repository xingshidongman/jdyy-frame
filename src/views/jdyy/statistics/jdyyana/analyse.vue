<template lang="pug">
  div.start
    div.left
      div.left_box
        div.left_line
          div.text_box.text 今日数据指标
          div.left_sx
          div.left_zx
          div.left_xx
          div.left_xr
          div.block
            input.input_time(v-model="chooseDate" v-on:change="getDataByDate" type="date"  placeholder="2018")
          div.left_block
            ul(v-for="item in items")
              li.block_box
                span.block_span 原住院人数
                span.block_spantwo {{item.protoNum}}人
              li.block_box
                span.block_span 出院人数
                span.block_spantwo {{item.outNum}}人
              li.block_box
                span.block_span 入院（转）入人数
                span.block_spantwo {{item.inNum}}人
              li.block_box
                span.block_span 手术人数
                span.block_spantwo {{item.surgeryNum}}人
              li.block_box
                span.block_span 死亡人数
                span.block_spantwo {{item.deathNum}}人
              li.block_box
                span.block_span 现住院人数
                span.block_spantwo {{item.nowNum}}人
              li.block_box
                span.block_span 重病人数
                span.block_spantwo {{item.illNum}}人
      div.lefttwo
        div.left_box
          div.left_line
            div.text_box.text 月份数据对比
            div.left_sx
            div.left_zx
            div.left_xx
            div.left_xr
            div.block
              input.input_time(v-model="datevalue2"  type="date"  placeholder="2018")
            div( id="zhuzhuang" style="width: 90%;height: 260px;left:5%;")
    div.right
      div.left_box
        div.left_line
          div.text_box.text 术式分析
          div.left_sx
          div.left_zx
          div.left_xx
          div.left_xr
          div.block
            input.input_time(v-model="datevalue3"  type="date"  placeholder="2018")
            span  年龄段
            input.block_input
            span ~
            input.block_input
            el-radio(v-model="radio"  label="1") 男
            el-radio(v-model="radio"  label="2") 女
          div(id="main" style="width: 90%;height: 260px;left:5%;")
      div.lefttwo
        div.left_box
          div.left_line
            div.text_box.text 五年比手术量
            div.left_sx
            div.left_zx
            div.left_xx
            div.left_xr
            div(id="diagram" style="width: 90%;height: 260px;left:5%;")
      div.lefttwo
        div.left_box
          div.left_line
            div.text_box.text 诊断分析
            div.left_sx
            div.left_zx
            div.left_xx
            div.left_xr
            div.block
              input.input_time(v-model="datevalue4"  type="date"  placeholder="2018")
              span  年龄段
              input.block_input
              span ~
              input.block_input
              el-radio(v-model="radio"  label="1") 男
              el-radio(v-model="radio"  label="2") 女
            div(id="main1" style="width: 90%;height: 260px;left:5%;")
</template>

<script>
  // 引入基本模板
  let echarts = require('echarts/lib/echarts')
  // 引入柱状图组件
  require('echarts/lib/chart/bar')
  // 引入提示框和title组件
  require('echarts/lib/component/tooltip')
  require('echarts/lib/component/title')
  export default {
    name: 'kalix-jdyy-jdyyana',
    data () {
      return {
        datevalue1: '',
        datevalue2: '',
        datevalue3: '',
        datevalue4: '',
        radio: '',
        charts: '',
        charts2: '',
        charts3: '',
        opinion: ['骨关节置换', 'MR', 'CR', '髋关节置换', 'CS', 'US', 'ES'],
        opinionData: [
          {value: 351, name: '骨关节置换'},
          {value: 139, name: 'MR'},
          {value: 122, name: 'CR'},
          {value: 122, name: '髋关节置换'},
          {value: 58, name: 'CS'},
          {value: 281, name: 'US'},
          {value: 19, name: 'ES'}
        ],
        chooseDate: '',
        items: [],
        columnar: [],
        firstYear: new Date().getFullYear() + '',
        secondYear: new Date().getFullYear() - 1 + '',
        threeYear: new Date().getFullYear() - 2 + '',
        fourYear: new Date().getFullYear() - 3 + '',
        fiveYear: new Date().getFullYear() - 4 + '',
        firstLine: [],
        secondLine: [],
        threeLine: [],
        fourLine: [],
        fiveLine: []
      }
    },
    methods: {
      drawPie (id) {
        this.charts = echarts.init(document.getElementById(id))
        this.charts.setOption({
          tooltip: {
            trigger: 'item',
            formatter: '{a}<br/>{b}:{c} ({d}%)'
          },
          legend: {
            orient: 'vertical',
            x: 'left',
            data: this.opinion,
            textStyle: {
              color: '#ffffff'
            }
          },
          series: [
            {
              name: '',
              type: 'pie',
              radius: '55%',
              center: ['50%', '50%'],
              avoidLabelOverlap: false,
              data: this.opinionData,
              color: ['#f49f42', '#00BFFF', '#FF0000', '#3CB371', '#9370DB', '#808080', '#00FFFF']
            }
          ]
        })
      },
      zhuzhuang(id) {
        this.charts2 = echarts.init(document.getElementById(id))
        this.charts2.setOption({
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['手术人数'],
            textStyle: {
              color: '#ffffff'
            }
          },
          grid: {
            left: '3%',
            right: '5%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [
            {
              type: 'category',
              data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
              axisLabel: {
                show: true,
                interval: 0,
                textStyle: {
                  color: '#2d8ac7'
                }
              }
            }
          ],
          yAxis: [
            {
              type: 'value',
              axisLabel: {
                interval: 0,
                textStyle: {
                  color: '#2d8ac7'
                }
              }
            }
          ],
          series: [
            {
              name: '手术人数',
              type: 'bar',
              barWidth: '30%',
              data: this.columnar,
              color: '#2d8ac7'
            }
          ]
        })
      },
      diagram (id) {
        this.charts3 = echarts.init(document.getElementById(id))
        this.charts3.setOption({
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: [this.firstYear, this.secondYear, this.threeYear, this.fourYear, this.fiveYear],
            textStyle: {
              color: '#2d8ac7'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            axisLabel: {
              show: true,
              interval: 0,
              textStyle: {
                color: '#2d8ac7'
              }
            }
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              show: true,
              textStyle: {
                color: '#2d8ac7'
              }
            }
          },
          series: [
            {
              name: this.firstYear,
              type: 'line',
              smooth: true,
              data: this.firstLine
            },
            {
              name: this.secondYear,
              type: 'line',
              smooth: true,
              data: this.secondLine
            },
            {
              name: this.threeYear,
              type: 'line',
              smooth: true,
              data: this.threeLine
            },
            {
              name: this.fourYear,
              type: 'line',
              smooth: true,
              data: this.fourLine
            },
            {
              name: this.fiveYear,
              type: 'line',
              smooth: true,
              data: this.fiveLine
            }
          ]
        })
      },
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
        console.log('date .toLocaleDateString()==================', date .toLocaleDateString())
        this.getData(nowDate)// 根据当前时间查找相应数据
      },
      getData(nowDate) {// 根据时间查找今日数据指标
        console.log('nowDate==================', nowDate)
        this.$http.request({// 向后台发送请求
          method: 'get',
          url: '/camel/rest/jdyy/stats/getAllByDate',
          params: {
            date: nowDate
          }
        }).then(response => {
          console.log('response.data=================', response.data.data)
          if(response.data.totalCount==0) {// 后台传回的数据为空时，统计数量显示0人
            this.items = [{protoNum: 0, outNum: 0, inNum: 0, surgeryNum: 0, deathNum: 0, nowNum: 0, illNum: 0}]
          }else{// 后台传回的数据不为空时，显示数据为后台传回的数据
            this.items = response.data.data
          }
        })
      },
      getDataByDate() { // 获取当前时间，并根据获取的时间查询今日数据指标
        let selectDate = this.chooseDate
        console.log("selectDate============", selectDate)
        if (selectDate === null || selectDate === "") {
          this.getDate()// 当选择的时间为空时，自动显示当前时间的数据
        }else {
          this.getData(selectDate)// 根据当前时间查找相应数据
        }
      },
      getColumnar() { // 获取当前年份，并获取柱状图月份数据对比数据
        /* eslint-disable */
        let year = new Date().getFullYear()
        this.$http.request({// 向后台发送请求
          method: 'get',
          url: '/camel/rest/jdyy/stats/getAllByYear',
          params: {
            date: year
          }
        }).then(response => {
          console.log('getColumnar:response.data=================', response.data)
          this.columnar = response.data
          console.log('9999999999999999999999999999', this.columnar)
          this.zhuzhuang('zhuzhuang')
        })
      },
      getLine() { // 获取近五年比手术量数据
        this.$http.request({// 向后台发送请求
          method: 'get',
          url: '/camel/rest/jdyy/stats/getAllByYear',
          params: {
            date: this.firstYear
          }
        }).then(response => {
          console.log("firstYear================", response.data)
          this.firstLine = response.data
          this.diagram('diagram')
        })
        this.$http.request({// 向后台发送请求
          method: 'get',
          url: '/camel/rest/jdyy/stats/getAllByYear',
          params: {
            date: this.secondYear
          }
        }).then(response => {
          this.secondLine = response.data
          this.diagram('diagram')
        })
        this.$http.request({// 向后台发送请求
          method: 'get',
          url: '/camel/rest/jdyy/stats/getAllByYear',
          params: {
            date: this.threeYear
          }
        }).then(response => {
          this.threeLine = response.data
          this.diagram('diagram')
        })
        this.$http.request({// 向后台发送请求
          method: 'get',
          url: '/camel/rest/jdyy/stats/getAllByYear',
          params: {
            date: this.fourYear
          }
        }).then(response => {
          this.fourLine = response.data
          this.diagram('diagram')
        })
        this.$http.request({// 向后台发送请求
          method: 'get',
          url: '/camel/rest/jdyy/stats/getAllByYear',
          params: {
            date: this.fiveYear
          }
        }).then(response => {
          // this.firstLine = response.data
          // this.secondLine = response.data
          // this.threeLine = response.data
          // this.fourLine = response.data
          this.fiveLine = response.data
          this.diagram('diagram')
        })
      }
    },
    // 调用
    mounted () {
      this.$nextTick(function() {
        this.drawPie('main')
        this.drawPie('main1')
      })
      this.getDate()
      this.getColumnar()
      this.getLine()
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
    width 98%
    height 1000px
    padding 40px 10px
    color #2d8ac7
    background-color #02010f
    .left
      width 49%
      float left
      .left_box
          width 98%
          margin auto
          height 440px
          border 2px solid #23769a
        .left_line
            width 98%
            height 420px
            margin 10px auto
            border 0.3px solid #23769a
            border-radius 5px
            box-shadow 0px 0px  10px 5px #23769a inset
          .text_box
              width 30%
              position relative
              background-color rgba(1,14,45,0.8)
              margin -25px 0 0 15%
              text-align center
              font-size 1.2vw
              color #3ac8f3
              font-weight bold
              padding 5px 0
          .left_sx
            width 30px
            height 5px
            background-color #3ac8f3
            position absolute
            margin -23px 0 0 -14px
          .left_zx
            width 5px
            height 30px
            background-color #3ac8f3
            position absolute
            margin -18px 0 0 -14px
          .left_xr
            width 5px
            height 30px
            background-color #3ac8f3
            float right
            margin 398px -33px 0 0
          .left_xx
            width 30px
            height 5px
            background-color #3ac8f3
            float right
            margin 423px -12px 0 0
          .block
            width 10%
            float right
            margin-right 60px
          .input_time
            width 120px
            margin-top 15px
            border 2px solid #23769a
            color #23769a
            background-color black
          .left_block
            width 90%
            margin auto
            position relative
            margin-top 90px
            height 300px
            .block_box
              width 90%
              height 30px
              line-height 30px
              background-color #373641
              margin  10px auto
              font-size 1vw
              .block_span
                width 90%
                color #23769a
                padding-left 5px
                float left
              .block_spantwo
                  width 8%
                  color #23769a
                  float right
      .lefttwo
        margin-top 120px
    .right
      width 49%
      float right
      .left_box
        width 90%
        margin auto
        height 320px
        border 2px solid #23769a
        .left_line
          width 98%
          height 300px
          margin 10px auto
          border 0.3px solid #23769a
          border-radius 5px
          box-shadow 0px 0px  10px 5px #23769a inset
          .text_box
            width 30%
            position relative
            background-color rgba(1,14,45,0.8)
            margin -25px 0 0 15%
            text-align center
            font-size 1.2vw
            color #3ac8f3
            font-weight bold
            padding 5px 0
          .left_sx
            width 30px
            height 5px
            background-color #3ac8f3
            position absolute
            margin -22px 0 0 -12px
          .left_zx
            width 5px
            height 30px
            background-color #3ac8f3
            position absolute
            margin -18px 0 0 -12px
          .left_xr
            width 5px
            height 30px
            background-color #3ac8f3
            float right
            margin 278px -31px 0 0
          .left_xx
            width 30px
            height 5px
            background-color #3ac8f3
            float right
            margin 304px -12px 0 0
          .block
            margin-left 30%
            width 70%
          .input_time
            width 120px
            margin-top 15px
            border 2px solid #23769a
            color #23769a
            background-color black
          .block_input
            width 60px
            margin-top 15px
            border 2px solid #23769a
            color #23769a
            background-color black
          .el-radio
            color: #23769a ;
            font-weight: 500;
            line-height: 1;
            cursor: pointer;
            white-space: nowrap;
            outline: 0
            margin-left 2%
            background-color black
      .lefttwo
        margin-top 20px
  .home
    .container
      .article
        overflow-y scroll !important
</style>
