<template lang="pug">
  div.kalix-header
    div.s-flex.bd
      div.logo
        div.text {{msg}}
        <!--div.s-flex_item.s-flex.mn-->
         <!--div.s-flex_item-->
        <!--div.s-flex.menu-main(v-bind:class="{'open':menuIsOpen}" v-on:mouseover="onOpenMenu(true)"  v-on:mouseout="onOpenMenu(false)")-->
            <!--ul.menu(ref="ulMenu")-->
              <!--li(v-for="item in menuList")-->
                <!--router-link.link-btn(tag="div" v-bind:to="{path:'/'+item.id}")-->
                  <!--i(:class="bindClass(item.iconCls)")-->
                  <!--| {{item.text}}-->
                    <!--div.aside-btn(v-if="isShowAsideBtn")-->
                      <!--div.line-->
                      <!--div.arrow-->
                        <!--div.arrow-mn-->
                      <!--div.line-->
            <!--ul.aside-->
              <!--li-->
                <!--el-badge(v-if="msgCount > 0" v-bind:value="msgCount")-->
                  <!--el-button(icon="el-icon-message" v-on:click="onMsgClick") 消息-->
                  <!--el-button(v-else icon="el-icon-message" v-on:click="onMsgClick" style="margin-top:10px;") 消息-->
              <!--li-->
                <!--el-dropdown(v-on:command="onFlowCommand" style="margin-top:10px;")-->
                  <!--el-button-->
                    <!--| 待办工作-->
                    <!--i.el-icon-arrow-down.el-icon-->
                  <!--el-dropdown-menu(slot="dropdown")-->
                    <!--el-dropdown-item 待办流程-->
              <!--li-->
        <!--el-dropdown(v-on:command="handleCommand" style="min-width:120px")-->
          <!--div.s-flex.el-dropdown-link-->
            <!--div.avatar-wrapper-->
              <!--div.avatar(v-bind:style="styleObject")-->
                <!--div.user-name {{userName}}-->
                  <!--i.el-icon-caret-bottom.el-icon&#45;&#45;right-->
                    <!--el-dropdown-menu(slot="dropdown")-->
                      <!--el-dropdown-item(command="changeInfo") 修改个人信息-->
                      <!--el-dropdown-item(command="changePwd") 修改密码-->
                      <!--el-dropdown-item(command="logout") 退出-->

        div.s-flex_item.s-flex.mn
          div.s-flex_item
            ul.aside
              li
                el-dropdown(v-on:command="handleCommand")
                  div.s-flex.el-dropdown-link
                    div.avatar-wrapper
                      i.iconfont.icon-user-5.avatar(v-bind:style="styleObject")
                      div.user-name {{userName}}
                    i.el-icon-caret-bottom.el-icon--right
                  el-dropdown-menu(slot="dropdown")
                    el-dropdown-item(command="changeInfo") 修改个人信息
                    el-dropdown-item(command="changePwd") 修改密码
              li
                i.iconfont.icon-tuichu.exit-img
                div.exit(v-on:click="doLogout") 退出
                div.clear
            div.clear
</template>

<script type="text/ecmascript-6">
  export default {
    name: 'KalixHeader',
    data() {
      return {
        userName: '',
        menuList: [],
        singleLogin: true,
        headerMenuChk: this.menuChk,
        themeValue: '',
        msgCount: 0,
        menuIsOpen: false,
        isShowAsideBtn: false,
        isShowMessage: false,
        isFlowCommand: false,
        msg: '吉林大学第一医院骨关节外科医疗数据分析管理系统'
      }
    },
    props: {
      reqUrl: {
        type: String,
        default: ''
      },
      params: {
        type: Object,
        default() {
          return {
            _dc: (new Date()).getTime(),
            page: 1,
            start: 0,
            limit: 25
          }
        }
      },
      logoutUrl: {
        type: String,
        default: ''
      }
    },
    mounted() {
      console.log('KalixHeader mounted')
      // this.initMenu()
      window.onresize = () => {
        this._setAsideBtn()
      }
    },
    activated() {
      this.userName = this.$KalixCatch.get('user_name')
      // this.initMenu()
      if (this.singleLogi1n) {
        this.checkLogin()
      }
    },
    methods: {
      initMenu() {
        console.log(' ++++++++++ Kalix - Header')
        let toolListData = {}
        if (this.$KalixCatch.get('toolListData')) {
          toolListData = JSON.parse(this.$KalixCatch.get('toolListData'))
        }
        console.log('KalixSecondPage toolListData', toolListData)
        if (!this.$M_IsEmptyObject(toolListData)) {
          this.menuList = toolListData
          this._urlTransmit(toolListData)
          this._setAsideBtn()
        } else {
          if (this.reqUrl.length) {
            this.$http.get(this.reqUrl, {
              params: this.params
            }).then(response => {
              if (response && response.data) {
                console.log('[toolListData] data:', response.data)
                toolListData = response.data
                this.menuList = toolListData
                this.$KalixCatch.save('toolListData', JSON.stringify(toolListData))
                this._setAsideBtn()
                this._urlTransmit(toolListData)
              }
            })
          } else {
            console.log(' ===== this.reqUrl is Null! ===== ')
          }
        }
      },
      _urlTransmit(data) {
        console.log('data.length:', data.length)
        console.log('data[0].id:', data[0].id)
        if (data.length && data[0].id) {
          this.$router.push({
            path: `/${data[0].id}/`
          })
        }
      },
      bindClass(e) {
        return e
      },
      setTheme(theme) {
        if (theme) {
          this.themeValue = theme
        }
      },
      onFlowCommand(command) {
        console.log(' ===== 代办流程 ===== ')
        // 代办流程
        this.$router.push({path: `/oa/Task`})
      },
      onMsgClick() {
        this.$router.push({path: `/common/receiver`})
      },
      doLogout() {
        this.$http.get(this.logoutUrl, {})
          .then(response => {
            this.$KalixCatch.clear()
            this.$KalixCatch._clearLocal()
            this.$router.push({path: '/login'})
          })
          .catch(err => {
            console.log(' ===== err ===== ', err)
            this.$KalixCatch.clear()
            this.$KalixCatch._clearLocal()
            this.$router.push({path: '/login'})
          })
      },
      handleCommand(command) {
        switch (command) {
          case 'changeInfo' :
            this.$emit('onClickUpdateUserInfo')
            break
          case 'changePwd':
            this.$emit('onClickChangePwd', '')
            break
        }
      },
      checkLogin() {
        clearInterval(this.islogin)
        this.islogin = setInterval(() => {
          let lastLoginTime = this.$KalixCatch._getLocal('lastLoginTime')
          let sessionLatLoginTime = this.$KalixCatch.get('lastLoginTime')
          if (lastLoginTime !== null && sessionLatLoginTime !== lastLoginTime) {
            clearInterval(this.islogin)
            this.doLogout()
          }
        }, 3000)
      },
      styleObject() {
        console.log('this.formModel1', this.icon)
        let style = {}
        if (this.icon) {
          style = {
            backgroundImage: `url('${this.icon}')`
          }
        }
        return style
      },
      menuChkChange() {
        this.$KalixEventBus.$emit('HeaderOnSmall', this.headerMenuChk)
      },
      // 展开导航按钮
      onOpenMenu(flag) {
        this.isShowAsideBtn && (this.menuIsOpen = flag)
      },
      // 计算 ulMenu 高度，决定 menu 是否带有展开功能
      _setAsideBtn() {
        // setTimeout(() => {
        //   console.log(' ===== this.$refs.ulMenu.clientHeight ===== ', this.$refs.ulMenu.clientHeight)
        //   this.isShowAsideBtn = (this.$refs.ulMenu.clientHeight > 64)
        // }, 20)
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
  .kalix-header
    position fixed
    top 0
    left 0
    width 100%
    z-index 9
    background-color #ffffff
    .bd
      height 120px
      .logo
        width 100%
        height 120px
        overflow hidden
        transition width .2s
        background url('/static/images/top.png') no-repeat center
        background-size 100% 100%
      .text
          font-size 2.5vw
          padding: 45px 0;
          margin-left 15%
          color white
          float left
        &.small
          width 20%
      .s-check__label
        display block
        cursor pointer
        line-height 32px
        height 32px
        padding 0 12px
        margin-top 16px
        margin-left 20px
      .mn
        .menu-main
          position relative
          background-color #FFFFFF
          border 1px solid #FFFFFF
          border-top 0
          box-sizing border-box
          height 65px
          overflow hidden
          flex-flow column
          transition all .2s
          .aside-btn
            position absolute
            bottom 0
            left 0
            width 100%
            text-align center
            font-size 0
            line-height 0
            height 10px
            display flex
            .line
              flex 1
              background-color #d8dce5
              height 1px
            .arrow
              margin-top -1px
              height 7px
              overflow hidden
              .arrow-mn
                width 9px
                height 9px
                margin-top -4px
                &:after
                  content ''
                  display block
                  width 9px
                  height 9px
                  transform rotate(45deg)
                  border 1px solid #d8dce5
                  box-sizing border-box

          &.open
            height min-content
            border-color #352420
            border-radius 0 0 5px 5px
            box-shadow 1px 1px 5px rgba(0, 0, 0, .5)
            .aside-btn
              height 6px
              background-color #ebebeb
              .arrow
                margin-top: -5px
                transform: rotate(180deg)
                .arrow-mn
                  &:after
                    background-color #ebebeb
                    border-color #CDD1DA
        ul
          text-align left
          li
            display inline-block
            margin 0 5px
            cursor pointer
          &.menu
            flex 1
            box-sizing border-box
            padding-bottom 16px
            height min-content
            min-width 150px
            li
              margin-top 16px
              .link-btn
                line-height 32px
                padding 0 12px
                color: #000000
                &hover
                  background-color #efefef
                &.router-link-active
                  color: #000000
          &.aside
            margin-right 100px
            float right
            margin-top -15px
            li
              vertical-align middle
              .el-badge
                margin-top 10px
            .el-dropdown-link
              align-items center
              margin-top 100px
              color #ffffff
            .el-select
              margin-top 10px
              .el-icon-caret-bottom
                &.el-icon--right
                  color #5d6266
  .avatar-wrapper
    /*height 36px*/
    /*line-height 36px*/
    .avatar
      float left
      font-size 2.5vm
      border-radius 50%
      background-color transparent
      margin-right 10px
      box-sizing border-box
    .user-name
      float left
      font-size 16px
      margin-right 7px
      color #ffffff

  .exit
    color white
    float left
    font-size 2.5vm
    margin-top 100px
  .exit-img
    float left
    margin-top 100px
    margin-right 5px
    color white
  .clear
    clear both
</style>
