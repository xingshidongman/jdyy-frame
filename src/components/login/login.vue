<!--
描述：用户登录组件
开发人：桑杨
开发日期：2017年7月14日
-->

<template lang="pug">
  div.login(data-logig)
    div.from-warpper
      div.logo {{msg}}
      div.form
        el-form.loginForm(v-bind:model="loginForm" v-bind:rules="rules" ref="loginForm"
        v-bind:show-message="false")
          div.error-message(v-if="error.flag") {{error.message}}
          el-form-item.kalix-form-item(prop="name")
            div.text 用户名:
            el-input(v-model="loginForm.name" ref="loginFormName" autocomplete="off")
          el-form-item.kalix-form-item(prop="pass")
            div.text.text1 密 码:
            el-input(type="password" v-model="loginForm.pass" ref="loginFormPass"  auto-complete="off")
          el-form-item(label="")
            el-button.btn-submit( v-on:click="onSubmit()" size="large") 登 录
            el-button.btn-submit.btn-reset( v-on:click="reset" size="large") 重 置
</template>

<script type="text/ecmascript-6">
  //  import Router from 'router'
  import Message from '../corelib/common/message'
  // import Eventbus from 'common/eventbus'
  import Cache from '../corelib/common/cache'
  import Login from 'api/login'
  import {logoutUrl, applicationURL, systemApplicationsBaseURL} from 'config/global.toml'

  export default {
    name: 'LoginForm',
    data() {
      return {
        msg: '吉林大学第一医院骨关节外科临床资料登记系统',
        radio: '',
        loginForm: {
          name: '',
          pass: ''
        },
        rules: {
          name: [
            {required: true, message: '请输入用户名', trigger: 'blur'},
            {min: 2, max: 8, message: '用户名长度在 2 到 8 个字符', trigger: 'blur'}
          ],
          pass: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ]
        },
        error: {
          flag: false,
          message: ''
        },
        toolListData: {},
        treeListData: {}
      }
    },
    activated() {
      this.loginForm = {name: '', pass: ''}
      console.log('this.$KalixEventBus', this.$KalixEventBus)
    },
    destroyed() {
      console.log('Login destroyed')
    },
    mounted() {
      console.log('this.loginForm', this.loginForm)
      this.$http.get(logoutUrl)
        .then(res => {
          console.log('res', res)
        })
      this.tabInput()
    },
    methods: {
      onSubmit(formName) {
        if (this._validateForm()) {
          this.login()
        }
      },
      reset() {
        this.loginForm.name = ''
        this.loginForm.pass = ''
        this.radio = ''
      },
      login() {
        //  登录
        let that = this
        Login.remoteLogin({
          'username': that.loginForm.name,
          'password': that.loginForm.pass
        }).then(data => {
          if (data.success) {
            this.loginForm = {
              name: '',
              pass: ''
            }
            Cache.save('id', data.user.id)
            Cache.save('access_token', data.access_token)
            Cache.save('user_token', data.user.token)
            Cache.save('user_name', data.user.name)
            Cache.save('loginname', that.loginForm.name)
            // 在缓存中记录最后登录时间，处理单用户登录需求
            let now = new Date().getTime()
            Cache._saveLocal('lastLoginTime', now)
            Cache.save('lastLoginTime', now)
            this.$nextTick(() => {
              this._initMenu((key) => {
                this.$nextTick(() => {
                  this._initItem(() => {
                    this.$router.push({path: `/${key}`})
                  })
                })
              })
            })
          } else {
            this.$refs.loginFormName.focus()
            Message.error(data.message)
          }
        }).catch(error => {
          console.log('login error ', error)
          this.$refs.loginFormName.focus()
          Message.error(error.message)
        })
      },
      _validateForm() {
        //  验证表单
        for (let key in this.rules) {
          this.error.flag = false
          this.error.message = ''
          this.$refs.loginForm.validateField(key, errorMessage => {
            //  如果错误信息长度 > 0 表示验证不通过
            this.error.flag = errorMessage.length > 0
            this.error.message = errorMessage
          })
          if (this.error.flag) {
            return false
          }
        }
        return true
      },
      tabInput() {
        let ipts = document.getElementsByClassName('el-input__inner')
        for (let i = 0; i < ipts.length; i++) {
          ipts[i].addEventListener('keydown', e => {
            if (e.keyCode === 13) {
              if (ipts[i + 1]) {
                ipts[i + 1].focus()
              } else {
                document.getElementsByClassName('btn-submit')[0].focus()
              }
            }
          })
        }
      },
      listen() {
        this.error.flag = false
      },
      /**
       * 初始化菜单
       */
      _initMenu(callBack) {
        console.log(' ++++++++++ Kalix - Header')
        if (applicationURL.length) {
          this.$http.get(applicationURL, {
            params: this.params
          }).then(response => {
            if (response && response.data) {
              this.toolListData = response.data
              console.log('toolListData', this.toolListData)
              this.$KalixCatch.save('toolListData', JSON.stringify(this.toolListData))
              if (this.toolListData.length > 0) {
                callBack(this.toolListData[0].id)
              }
            }
          })
        } else {
          console.log(' ===== this.reqUrl is Null! ===== ')
        }
      },
      _initItem(callBack) {
        if (this.toolListData.length > 0) {
          this._getTreeData(0, callBack)
        }
      },
      _getTreeData(index, callBack) {
        console.log('index', index)
        let lstItem = this.toolListData[index]
        if (lstItem) {
          let d = new Date()
          let cd = d.getTime()
          let appId = lstItem.id
          this.$http.get(systemApplicationsBaseURL + appId, {
            params: {
              _dc: cd,
              node: 'root'
            }
          }).then(response => {
            if (response.data && response.data.code !== 401) {
              this.treeData = response.data
              this.treeData.map(e => {
                this.$set(e, 'isShow', false)
              })
              this.treeListData[appId] = this.treeData
              this.treeListData.createDate = d.getTime()
              this.$KalixCatch.save('treeListData', JSON.stringify(this.treeListData))
              this._getTreeData(index += 1, callBack)
            }
          })
        } else {
          callBack()
        }
      }
    },
    components: {},
    computed: {},
    watch: {
      loginForm: {
        handler: 'listen',
        // 深度观察
        deep: true
      }
    }
  }
</script>

<style lang="stylus">
  // .el-form-item.is-error .el-input__inner
  .login[data-logig]
    .btn-submit
      /*background url("./button-bg.png") 50% 50% no-repeat;*/
      border 1px solid #093046
      color white
      height 42px
      width 100px
      margin-left 5%
      margin-top 15px
      font-size 1vw
      background-color #1c6086
    .btn-reset
      margin-left 40%
    .icon-user,
    .icon-lock
      display block
      width 21px
      height 100%
      background 50% 50% no-repeat
    .icon-user
      background-image url("./icon-user.png")
    .icon-lock
      background-image url("./icon-lock.png")
    .el-form-item
      margin-bottom 0px
      &:last-child
        margin-top 16px
    .kalix-form-item
      & + .kalix-form-item
        margin-top 13px
      .text
        position absolute
        color white
        font-size 1.2vw
      .tit
        color white
        font-size 1.2vw
        margin-left 80px

      .text1
        letter-spacing 3px
      .el-input__inner
        height 46px
        width 300px
        margin-left 80px
        box-shadow 0px 0px 6px rgba(188, 168, 120, 0.46)
        /*border-color #d8dce5 !important*/
        border 2px solid #535353
      &.is-success
        .el-input__inner
          border-color #d8dce5 !important
      &.is-error
        .el-input__inner
          border-color #bca878 !important
          box-shadow 0px 0px 6px rgba(188, 168, 120, 0.46)
        .el-form-item__error
          padding 0 0 0 22px
          line-height: 32px;
          background url("./icon-warning.png") 0 50% no-repeat
          color: #fe00000
    .error-message
      background url("./icon-warning.png") 0 50% no-repeat
      position absolute
      top 6px
      left 0
      line-height 18px
      color #fe0000
      font-size 14px
      padding-left: 24px;
</style>
<style scoped lang="stylus">
  @import "./login.styl"
</style>
