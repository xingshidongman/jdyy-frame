<template lang="pug">
  div.wrap
    div(id="message-box")
      div(id="marquee") {{text}}{{text}}
    div(id="node") {{text}}
</template>

<script>
  import {JdyystatURL} from '../../../../views/jdyy/config.toml'
  import EventBus from '../../common/eventbus'

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
          this.text = ''
          this.lists = []
          console.log('res+++++++++++++', res.data.data)
          if (res.data.data.length > 0) {
            for (let i = 0; i < res.data.data.length; i++) {
              if (res.data.data[i].columnY === '0') {
                this.lists.push(res.data.data[i].columnX)
              }
            }
          }
          console.log('数据', this.lists)
          for (let i = 0; i < 5; i++) {
            for (let j = 0; j < this.lists.length; j++) {
              this.text += ' ' + this.lists[j] + '日值班记录未录入，请到值班记录中录入信息'
            }
          }
          console.log('this.text', this.text)
          this.$nextTick(() => {
            this.move()
          })
        })
      },
      move() {
        clearInterval(this.moveMt)
        // 获取文字text 的计算后宽度  （由于overflow的存在，直接获取不到，需要独立的node计算）
        let width = document.getElementById('node').getBoundingClientRect().width
        let box = document.getElementById('marquee')
        let distance = 0 // 位移距离
        this.moveMt = setInterval(function () {
          distance -= 1
          box.style.transform = 'translateX(' + distance + 'px)'
          if (Math.abs(distance) >= width) {
            distance = 0
          }
        }, 10)
      }
    },
    mounted() {
      EventBus.$on('mess', this.getBedData)
      this.getBedData()
    }
    // ,
    // 更新的时候运动
    // updated: function () {
    //   this.move()
    // }
  }
</script>

<style scoped lang="stylus">
  .wrap
    width 100%
    margin 0 auto
    overflow: hidden;
    z-index 9998
    position fixed
    font-size 30px
    font-weight bold
    color red

  // 移动框宽度设置
  #message-box
    width: 80000%
    height 30px

  // 文字一行显示
  #message-box
    div
      float left

  // 设置前后间隔

  // 获取宽度的节点，隐藏掉
  #node
    position absolute;
    z-index -999;
    top -999999px;
    white-space nowrap
</style>
