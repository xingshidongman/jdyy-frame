<template lang="pug">
  div.content
    bread-crumbs(v-bind:crumbsItems="crumbsItems")
    div.container
      sidebar(v-bind:title="sidebarTitle" v-bind:items="sidebarItems")
      main-article(v-bind:title="articleTitle")
        div.article(slot="cnt")
          slot(name="article" v-bind:dataItems="dataItems")
          pagination(
          v-if="isPagination"
          v-bind:total="total"
          v-bind:display="display"
          v-bind:current="current"
          v-on:pageChange="onPageChange"
          )
</template>
<script type="text/ecmascript-6">
  import api from 'api'

  export default {
    name: 'BaseContent',
    props: {
      sidebarTitle: {
        type: String,
        default: ''
      },
      navid: {
        type: Number,
        default: 0
      },
      articleTitle: {
        type: String,
        default: ''
      },
      // 是否需要重定向
      isRedirect: {
        type: Boolean,
        default: true
      },
      isPagination: {
        type: Boolean,
        default: true
      },
      targetUrl: {
        type: String,
        default: null
      },
      catchName: {
        type: String,
        default: null
      }
    },
    data() {
      return {
        total: 128,
        display: 20,
        current: 1,
        sidebarItems: [],
        crumbsItems: [],
        dataItems: []
      }
    },
    mounted() {
      this.init()
      this.getData()
    },
    methods: {
      /**
       * 初始化页面数据
       */
      init() {
        this.columnName = this.$route.params.column
        this.cacheMenusKey = `MENUS-${this.columnName}`
        // console.log('---------------------------cacheMenusKey', this.$KalixCatch.get(this.cacheMenusKey))
        this.sidebarItems = JSON.parse(this.$KalixCatch.get(this.cacheMenusKey))
        this.isRedirect && this.redirectUrl()
        this.getBreadCrumbsList()
      },
      /**
       * 设置面包屑
       */
      getBreadCrumbsList() {
        let columns = JSON.parse(this.$KalixCatch.get('COLUMNS'))
        let menu = this.$route.params.menu
        let columnItem = columns.find(item => {
          return item.url === `${this.columnName}`
        })
        let menuItem = this.sidebarItems.find(item => {
          return item.url === `/${this.columnName}/${menu}`
        })
        columnItem.url = '/' + columnItem.url
        this.crumbsItems.push(columnItem)
        this.crumbsItems.push(menuItem)
      },
      /**
       * 页面重定向
       */
      redirectUrl() {
        // 如果有 menu 参数传入，并且 sidebarItems 数量大于 0 个，重定向第一个节点
        if (!this.$route.params.menu && this.sidebarItems.length > 0) {
          this.$router.push({path: `${this.sidebarItems[0].url}`})
        }
      },
      /**
       * 获取数据
       */
      getData() {
        if (this.catchName) {
          this._getMenuId(this.catchName).then(item => {
            if (this.targetUrl) {
              api.Contents.getListByMenuId(this.targetUrl, item.id, this.display, this.current)
                .then(data => {
                  this.dataItems = data.data
                  this.total = data.totalCount
                })
            }
          })
        }
      },
      /**
       * 翻页
       * @param idx
       */
      onPageChange(idx) {
        this.current = idx
        this.getData()
      },
      /**
       * 获取当前 MenuID
       * @param menusCatch
       * @returns {Promise<any>}
       * @private
       */
      _getMenuId(menusCatch) {
        return new Promise((resolve, reject) => {
          const err = {}
          let menus = this.$KalixCatch.get(menusCatch)
          if (menus) {
            let menusNews = JSON.parse(menus)
            let item = menusNews.find(item => {
              return item.url === this.$route.fullPath
            })
            if (item) {
              resolve(item)
            } else {
              reject(err)
            }
          } else {
            reject(err)
          }
        })
      }
    }
  }
</script>
<style scoped lang="stylus" type="text/stylus">
  .content
    margin 0 0 44px
    .article
      margin 12px 45px 33px
      @media screen and (max-width: 749px)
        margin 12px
      .item
        padding 37px 16px 32px
        border-bottom 1px solid #a0a0a0
        .avatar
          margin-right 20px
          img
            width 238px
            height 144px
        .bd
          .t
            font-size 22px
            line-height 1em
            margin-top 25px
          .p
            margin-top 11px
            font-size 18px
            line-height 30px
          .d
            margin-top 15px
            font-size 14px
            line-height 1em
            color #690000
</style>
