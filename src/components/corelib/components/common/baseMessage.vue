<template lang="pug">
  div.wrap
    div(id="message-box")
      div(id="marquee") {{text}}
      div(id="copy") {{text}}
    div(id="node") {{text}}
</template>

<script>
  import {JdyystatURL} from '../../../../views/jdyy/config.toml'

  export default {
    name: 'kalix-message',
    data() {
      return {
        lists: [], // 消息列表对应的数组
        text: '',
        bedStartDate: '', // 定义床位使用率查询条件-开始日期
        bedEndDate: '' // 定义床位使用率查询条件-结束日期
      }
    },
    methods: {
      getBedData() {
        let startDate = new Date()
        startDate.setDate(startDate.getDate() - 10)
        let startYear = startDate.getFullYear()
        let startMonth = startDate.getMonth() + 1
        let startDay = startDate.getDate()
        this.bedStartDate = startYear + '/' + startMonth + '/' + startDay
        let endDate = new Date()
        endDate.setDate(endDate.getDate() - 1)
        let endYear = endDate.getFullYear()
        let endMonth = endDate.getMonth() + 1
        let endDay = endDate.getDate()
        this.bedEndDate = endYear + '/' + endMonth + '/' + endDay
        console.log('开始日期', this.bedStartDate)
        console.log('结束', this.bedEndDate)
        console.log('11111111111111111')
        this.axios.request({
          method: 'GET',
          url: JdyystatURL + '/getBedData',
          params: {
            bedStartDate: this.bedStartDate,
            bedEndDate: this.bedEndDate
          }
        }).then(res => {
          console.log('res+++++++++++++', res.data.data)
          if (res.data.data.length > 0) {
            // this.lists = []
            for (let i = 0; i < res.data.data.length; i++) {
              if (res.data.data[i].columnY === '0') {
                this.lists.push(res.data.data[i].columnX)
              }
            }
          }
          console.log('数据', this.lists)
          for (let i = 0; i < this.lists.length; i++) {
            console.log('list++++++++++++++', this.lists[i])
            this.text += ' ' + this.lists[i] + '日数据未录入'
          }
        })
      },
      move() {
        // 获取文字text 的计算后宽度  （由于overflow的存在，直接获取不到，需要独立的node计算）
        let width = document.getElementById('node').getBoundingClientRect().width
        let box = document.getElementById('message-box')
        let copy = document.getElementById('copy')
        copy.innerText = this.text
        let bodyWith = document.body.clientWidth
        let distance = bodyWith // 位移距离
        // 设置位移
        setInterval(function () {
          distance = distance - 1
          // 如果位移超过文字宽度，则回到起点
          if (-distance >= width + bodyWith) {
            distance = bodyWith
          }
          box.style.transform = 'translateX(' + distance + 'px)'
        }, 10)
      }
    },
    // 把父组件传入的arr转化成字符串
    mounted() {
      this.getBedData()
    },

    // 更新的时候运动
    updated: function () {
      this.move()
    }
  }
</script>

<style scoped lang="stylus">
  .wrap
    width 100%
    margin 0 auto
    overflow: hidden;
    z-index 9999
    position fixed
    font-size 30px
    font-weight bold
    color red

  // 移动框宽度设置
  #message-box
    width: 80000%

  // 文字一行显示
  #message-box
    div
      float: left;

  // 设置前后间隔
  #marquee
    margin 0 16px 0 0;
    z-index 9999

  // 获取宽度的节点，隐藏掉
  #node
    position: absolute;
    z-index: -999;
    top: -999999px;

</style>
