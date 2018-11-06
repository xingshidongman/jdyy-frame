<template lang="pug">
  div.start
    div.left
      div.left-box
        div.left-line
          div.text-box.text 今日数据指标
          div.left-sx
          div.left-zx
          div.block
            el-date-picker.input-time(v-model="chooseDate" v-on:change="getDataByDate" type="date" value-format="yyyy/M/d" format="yyyy/M/d" placeholder="选择日期")
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
      div.lefttwo
        div.left-box
          div.left-line
            div.text-box.text 月份数据对比
            div.left-sx
            div.left-zx
            div.block
              el-date-picker.input-time(v-model="chooseYear" v-on:change="getDataByMonth" type="year" value-format="yyyy" placeholder="选择年份")
            div( id="histogram" style="width: 98%; margin:50px 1% 0 1%;height: 260px;")
          div.left-xx
          div.left-xr
    div.rights
      div.left-box
        div.left-line
          div.text-box.text 术式分析
          div.left-sx
          div.left-zx
          div.block
            el-date-picker.input-time(v-model="surDate" type="year" value-format="yyyy" placeholder="选择年份" )
            span(style=" margin-left: 1%;") 年龄段
            input.block-input(type="number" v-model="surStartAge" placeholder="起始年龄")
            span(style=" margin-left: 1%;") ~
            input.block-input(type="number" v-model="surEndAge" placeholder="结束年龄")
            el-radio(v-model="surRadio"  label="男") 男
            el-radio(v-model="surRadio"  label="女") 女
          div(id="sur" style="width: 98%;min-height: 260px;margin:auto;")
        div.left-xx
        div.left-xr
      div.lefttwo
        div.left-box
          div.left-line
            div.text-box.text 五年比手术量
            div.left-sx
            div.left-zx
            div(id="diagram" style="width: 98%;height: 260px;margin:auto;")
          div.left-xx
          div.left-xr
      div.lefttwo
        div.left-box
          div.left-line
            div.text-box.text 诊断分析
            div.left-sx
            div.left-zx
            div.block
              el-date-picker.input-time(v-model="diaDate" type="year" value-format="yyyy" placeholder="选择年份")
              span(style=" margin-left: 0.5%;")  年龄段
              input.block-input(type="number" v-model="diaStartAge" placeholder="起始年龄")
              span(style=" margin-left: 1%;") ~
              input.block-input(type="number" v-model="diaEndAge" placeholder="结束年龄")
              el-radio(v-model="diaRadio"  label="男") 男
              el-radio(v-model="diaRadio"  label="女") 女
            div(id="dia" style="width: 98%;height: 260px;margin:auto;")
          div.left-xx
          div.left-xr
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
    data() {
      return {
        datevalue4: '',
        radio: '',
        charts: '',
        charts2: '',
        charts3: '',
        chooseDate: '', // 定义今日数据指标时间插件时间
        items: [], // 定义今日数据指标数据集合
        chooseYear: '', // 定义月份数据对比柱状图时间插件时间
        columnar: [], // 定义柱状图数据
        firstYear: new Date().getFullYear() + '', // 获取今年年份
        secondYear: new Date().getFullYear() - 1 + '', // 获取近两年年份
        threeYear: new Date().getFullYear() - 2 + '', // 获取近三年年份
        fourYear: new Date().getFullYear() - 3 + '', // 获取进四年年份
        fiveYear: new Date().getFullYear() - 4 + '', // 获取近五年年份
        firstLine: [], // 定义线性图Y轴数据（今年）
        secondLine: [], // 定义线性图Y轴数据（近两年）
        threeLine: [], // 定义线性图Y轴数据（近三年）
        fourLine: [], // 定义线性图Y轴数据（近四年）
        fiveLine: [], // 定义线性图Y轴数据（近五年）
        diaColumn: [], // 诊断饼状图数据列表
        surColumn: [], // 术式饼状图数据列表
        diaData: [], // 诊断饼状图数据
        surData: [], // 术式饼状图数据
        surColumnSelected: {}, // 选中的术式信息
        diaColumnSelected: {}, // 选中的诊断信息
        surDate: null, // 术式饼状图时间插件
        surStartAge: null, // 术式饼状年龄段开始年龄
        surEndAge: null, // 术式饼状图结束年龄
        surRadio: null, // 术式饼状图男女单选按钮
        diaDate: null, // 诊断饼状图时间插件
        diaStartAge: null, // 诊断饼状年龄段开始年龄
        diaEndAge: null, // 诊断饼状图结束年龄
        diaRadio: null // 诊断饼状图男女单选按钮
      }
    },
    methods: {
      open() {
        this.$alert('该年份没有数据 ', '温馨提示', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: $ { action } `
            })
          }
        })
      },
      surPie(id) {
        this.charts = echarts.init(document.getElementById(id))
        this.charts.setOption({
          tooltip: {
            formatter: '{a}<br/>{b}:{c} ({d}%)'
          },
          legend: {
            type: 'scroll',
            orient: 'vertical',
            x: 'left',
            data: this.surColumn,
            textStyle: {
              color: '#'
            },
            selected: this.surColumnSelected,
            formatter: function (name) {
              return (name.length > 6 ? (name.slice(0, 4) + '...') : name)
            }
          },
          labelLine: {
            show: false
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          series: [
            {
              name: '手术分析',
              type: 'pie',
              radius: '45%',
              center: ['55%', '55%'],
              data: this.surData,
              color: ['#f49f42', '#00BFFF', '#FF0000', '#3CB371', '#9370DB', '#808080', '#00FFFF', '#FF33FF', '#33CC00', '#DB7093'],
              label: {
                align: 'left',
                normal: {
                  formatter(v) {
                    let text = Math.round(v.percent) + '%' + '' + v.name
                    if (text.length <= 8) {
                      return text
                    } else if (text.length > 8 && text.length <= 16) {
                      text = `${text.slice(0, 8)}\n${text.slice(8)}`
                      return text
                    } else if (text.length > 16 && text.length <= 24) {
                      text = `${text.slice(0, 8)}\n${text.slice(8, 16)}\n${text.slice(16)}`
                      return text
                    } else if (text.length > 24 && text.length <= 30) {
                      text = `${text.slice(0, 8)}\n${text.slice(8, 16)}\n${text.slice(16, 24)}\n${text.slice(24)}`
                      return text
                    } else if (text.length > 30) {
                      text = `${text.slice(0, 8)}\n${text.slice(8, 16)}\n${text.slice(16, 24)}\n${text.slice(24, 30)}\n${text.slice(30)}`
                      return text
                    }
                  },
                  textStyle: {
                    fontSize: 12
                  }
                }
              }
            }
          ]
        })
      },
      diaPie(id) {
        this.charts = echarts.init(document.getElementById(id))
        this.charts.setOption({
          tooltip: {
            formatter: '{a}<br/>{b}:{c} ({d}%)'
          },
          legend: {
            type: 'scroll',
            orient: 'vertical',
            x: 'left',
            width: '48px',
            overflow: 'hidden',
            data: this.diaColumn,
            textStyle: {
              color: '#'
            },
            selected: this.diaColumnSelected,
            formatter: function (name) {
              return (name.length > 8 ? (name.slice(0, 8) + '...') : name)
            }
          },
          labelLine: {
            show: false
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
          },
          series: [
            {
              name: '诊断分析',
              type: 'pie',
              radius: '45%',
              center: ['60%', '55%'],
              data: this.diaData,
              color: ['#f49f42', '#00BFFF', '#FF0000', '#3CB371', '#9370DB', '#808080', '#00FFFF', '#FF33FF', '#33CC00', '#DB7093'],
              label: {
                align: 'left',
                normal: {
                  formatter(v) {
                    let text = Math.round(v.percent) + '%' + '' + v.name
                    if (text.length <= 6) {
                      return text
                    } else if (text.length > 6 && text.length <= 16) {
                      text = `${text.slice(0, 6)}\n${text.slice(8)}`
                      return text
                    } else if (text.length > 16 && text.length <= 24) {
                      text = `${text.slice(0, 6)}\n${text.slice(6, 16)}\n${text.slice(16)}`
                      return text
                    } else if (text.length > 24 && text.length <= 30) {
                      text = `${text.slice(0, 6)}\n${text.slice(6, 16)}\n${text.slice(16, 24)}\n${text.slice(24)}`
                      return text
                    } else if (text.length > 30) {
                      text = `${text.slice(0, 6)}\n${text.slice(6, 16)}\n${text.slice(16, 24)}\n${text.slice(24, 30)}\n${text.slice(30)}`
                      return text
                    }
                  },
                  textStyle: {
                    fontSize: 12
                  }
                }
              }
            }
          ]
        })
      },
      histogram(id) {
        this.charts2 = echarts.init(document.getElementById(id))
        this.charts2.setOption({
          tooltip: {
            trigger: 'axis'
          },
          legend: {
            data: ['手术人数'],
            textStyle: {
              color: '#000'
            }
          },
          grid: {
            left: '2%',
            right: '2%',
            bottom: '3%',
            containLabel: true
          },
          toolbox: {
            feature: {
              saveAsImage: {}
            }
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
      diagram(id) {
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
        // if (month >= 1 && month <= 9) {
        //   month = "0" + month;
        // }
        let nowDate = year + '/' + month + '/' + day
        console.log('date .toLocaleDateString()==================', date.toLocaleDateString())
        this.getData(nowDate)// 根据当前时间查找今日数据指标相应数据
        this.getColumnar(year) // 获取月份数据对比柱状图数据方法
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
      getDataByMonth() {
        console.log('getDataByMonth================', this.chooseYear)
        let year = this.chooseYear
        if (year === null || year === "") {
          this.getColumnar(new Date().getFullYear())
        } else {
          this.getColumnar(year)
        }
      },
      getColumnar(year) { // 根据获取柱状图月份数据对比数据
        this.$http.request({// 向后台发送请求
          method: 'get',
          url: '/camel/rest/jdyy/statisticss/getAllByYear',
          params: {
            date: year
          }
        }).then(response => {
          console.log('getColumnar:response.data=================', response.data)
          this.columnar = response.data
          console.log('9999999999999999999999999999', this.columnar)
          this.histogram('histogram')
        })
      },
      getLine() { // 获取近五年比手术量数据
        this.$http.request({// 向后台发送请求
          method: 'get',
          url: '/camel/rest/jdyy/statisticss/getAllByYear',
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
          url: '/camel/rest/jdyy/statisticss/getAllByYear',
          params: {
            date: this.secondYear
          }
        }).then(response => {
          this.secondLine = response.data
          this.diagram('diagram')
        })
        this.$http.request({// 向后台发送请求
          method: 'get',
          url: '/camel/rest/jdyy/statisticss/getAllByYear',
          params: {
            date: this.threeYear
          }
        }).then(response => {
          this.threeLine = response.data
          this.diagram('diagram')
        })
        this.$http.request({// 向后台发送请求
          method: 'get',
          url: '/camel/rest/jdyy/statisticss/getAllByYear',
          params: {
            date: this.fourYear
          }
        }).then(response => {
          this.fourLine = response.data
          this.diagram('diagram')
        })
        this.$http.request({// 向后台发送请求
          method: 'get',
          url: '/camel/rest/jdyy/statisticss/getAllByYear',
          params: {
            date: this.fiveYear
          }
        }).then(response => {
          this.fiveLine = response.data
          this.diagram('diagram')
        })
      },
      getDiaData() { // 获取诊断统计数据
        console.log('getDiaData=========================in')
        this.axios.request({
          method: 'GET',
          url: '/camel/rest/jdyy/visits/getDiaData',
          params: {
            diaDate: this.diaDate,
            diaStartAge: this.diaStartAge,
            diaEndAge: this.diaEndAge,
            diaRadio: this.diaRadio
          }
        }).then(res => {
          console.log('getDiaData==============', res.data.data)
          if (res.data.data.length == 0) {
            this.open()
            this.diaDate = null
            this.getDiaData()
          }
          let diaColumn = ''
          for (let i = 0; i < res.data.data.length; i++) {
            diaColumn += res.data.data[i].name + ","
          }
          console.log('diaColumn===========================', diaColumn)
          let strs = diaColumn.substring(0, diaColumn.length - 1).split(',')
          for (let i = 0; i < strs.length; i++) {
            this.diaColumn[i] = strs[i]
          }
          console.log('this.diaColumn========================', this.diaColumn)
          this.diaData = res.data.data
          if (this.diaData){
            this.diaData.map(e => {
              if (e.value == 0) {
                this.$set(this.diaColumnSelected, e.name, false)
                this.$set(e, 'label', {show: false})
                this.$set(e, 'labelLine', {show: false})
              } else {
                this.$set(this.diaColumnSelected, e.name, true)
              }
            })
          }
          this.diaPie('dia')
        })
      },
      getSurData() { // 获取术式统计数据
        console.log('getSurData=========================in')
        this.axios.request({
          method: 'GET',
          url: '/camel/rest/jdyy/visits/getSurData',
          params: {
            surDate: this.surDate,
            surStartAge: this.surStartAge,
            surEndAge: this.surEndAge,
            surRadio: this.surRadio
          }
        }).then(res => {
          console.log('getSurData==============', res.data.data)
          if (res.data.data.length == 0) {
            this.open()
            this.surDate = null
            this.getSurData()
          }
          let surColumn = ''
          for (let i = 0; i < res.data.data.length; i++) {
            surColumn += res.data.data[i].name + ","
          }
          console.log('surColumn===========================', surColumn)
          let strs = surColumn.substring(0, surColumn.length - 1).split(',')
          for (let i = 0; i < strs.length; i++) {
            this.surColumn[i] = strs[i]
          }
          console.log('this.surColumn========================', this.surColumn)
          this.surData = res.data.data
          if (this.surData) {
            this.surData.map(e => {
              if (e.value == 0) {
                this.$set(this.surColumnSelected, e.name, false)
                this.$set(e, 'label', {show: false})
                this.$set(e, 'labelLine', {show: false})
              } else {
                this.$set(this.surColumnSelected, e.name, true)
              }
            })
          }
          this.surPie('sur')
        })
      }
    },
    // 调用
    mounted() {
      this.$nextTick(function () {
        this.getDate() // 获取系统当前日期方法
        this.getDataByMonth() // 获取月份数据对比柱状图数据方法
        this.getLine() // 获取五年比手术量线性图数据方法
        this.getDiaData() // 获取诊断饼状图数据方法
        this.getSurData() // 获取术式饼状图数据方法
      })

    },
    watch:{
      surDate:function () {
        console.log('surDate==================================', this.surDate)
        this.getSurData()
      },
      surStartAge:function () {
        let i = this.surEndAge - this.surStartAge
        if(i > 0){
          console.log('surStartAge==================================', this.surStartAge)
          this.getSurData()
        }
      },
      surEndAge:function () {
        let i = this.surEndAge - this.surStartAge
        if(i > 0){
          console.log('surEndAge==================================', this.surEndAge)
          this.getSurData()
        }
      },
      surRadio:function () {
        console.log('surRadio==================================', this.surRadio)
        this.getSurData()
      },
      diaDate:function () {
        console.log('surDate==================================', this.diaDate)
        this.getDiaData()
      },
      diaStartAge:function () {
        let i = this.diaEndAge - this.diaStartAge
        if (i > 0){
          console.log('surStartAge==================================', this.diaStartAge)
          this.getDiaData()
        }
      },
      diaEndAge:function () {
        let i = this.diaEndAge - this.diaStartAge
        if (i > 0){
          console.log('surEndAge==================================', this.diaEndAge)
          this.getDiaData()
        }
      },
      diaRadio:function () {
        console.log('surRadio==================================', this.diaRadio)
        this.getDiaData()
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
    height 1000px
    padding 80px 5px
    color #2d8ac7
    .left
      width 50%
      float left
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
        background-color rgba(77,109,177,0.8)
        margin -25px 0 0 15%
        text-align center
        font-size 1.2vw
        color #ffffff
        font-weight bold
        padding 5px 0
      .left-sx
        width 30px
        height 5px
        background-color #3ac8f3
        position absolute
        margin: -1.3% 0 0 -0.8%
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
        .el-input__inner
          padding-left: 30px;
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
          background-color #cccccc
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
      .lefttwo
        margin-top 120px
    .rights
      width 50%
      float right
      .left-box
        width 90%
        margin auto
        min-height 300px
        border 2px solid #23769a
        .left-line
          width 98%
          min-height 280px
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
            font-size 1.2vw
            color #FFFFFF
            font-weight bold
            padding 5px 0
          .left-sx
            width 30px
            height 5px
            background-color #3ac8f3
            position absolute
            margin: -1.3% 0 0 -0.8%
          .left-zx
            width 5px
            height 30px
            background-color #3ac8f3
            position absolute
            margin: -1.2% 0 0 -0.8%
          .block
            margin-left 5%
            width 95%
            .input-time
              width 26%
              margin-top 15px
              border 2px solid #23769a
              color #23769a
            .block-input
              width 12%
              height 30px
              margin-top 15px
              padding-left 10px
              margin-left: 2%;
              border 2px solid #23769a
              color #23769a
            .el-radio
              color: #23769a;
              font-weight: 500;
              line-height: 1;
              cursor: pointer;
              white-space: nowrap;
              outline: 0
              margin-left 1%
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
      .lefttwo
        margin-top 20px

  .home
    .container
      .article
        overflow-y scroll !important
</style>
