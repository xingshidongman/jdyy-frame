<template lang="pug">
  div.home(v-bind:class="themeValue")
    kalix-header(
    v-bind:reqUrl="applicationURL"
    ref="kalixHeader"
    v-on:onClickChangePwd="changePwd"
    v-on:onClickUpdateUserInfo="updateUserInfo")
    kalix-message
    admin-user-editpwd(ref="userEditpwd")
    admin-user-edit(ref="userEdit")
    div.s-flex.container
      kalix-navigate(v-bind:cacheTime="cacheTime" v-bind:url="systemApplicationsBaseURL")
      div.s-flex_item.article
        component(v-bind:is="which_to_show")
</template>
<script type="text/ecmascript-6">
  import {cacheTime, applicationURL, systemApplicationsBaseURL, userURL} from 'config/global.toml'
  import Welcome from '../welcome/welcome'
  import Cache from '../corelib/common/cache'

  // console.log('cacheTime:', cacheTime)

  // let content = {
  //   adminUser
  // }

  export default {
    name: 'KalixHome',
    data() {
      return {
        isSmall: false,
        which_to_show: null,
        themeValue: 'theme-triton',
        applicationURL: applicationURL,
        cacheTime: cacheTime,
        systemApplicationsBaseURL: systemApplicationsBaseURL
      }
    },
    mounted() {
      this.fetchData()
    },
    watch: {'$route': 'fetchData'},
    methods: {
      initTheme() {
        this.themeValue = Cache.get('styleTheme')
        /**
        if (!this.themeValue) {
          let url = `/camel/rest/system/preferences/${Cache.get('loginname')}`
          this.$http.get(url).then(res => {
            if (res && res.data && res.data.theme) {
              this.themeValue = res.data.theme
              Cache.save('styleTheme', this.themeValue)
              // this.$refs.kalixHeader.setTheme(this.themeValue)
            } else {
              Cache.save('styleTheme', 'theme-triton')
              // this.$refs.kalixHeader.setTheme('theme-triton')
            }
          })
        } else {
          Cache.save('styleTheme', this.themeValue)
          // this.$refs.kalixHeader.setTheme(this.themeValue)
        }
         **/
      },
      setSmall(e) {
        this.isSmall = e
      },
      fetchData() {
        let app = this.$route.params.app // 应用名称
        let fun = this.$route.params.fun // 功能名称
        // let moduleArr = this.$modulePlugins
        console.log('APP：', app)
        console.log('FUN：', fun)
        if (fun !== undefined) {
          /**
           if (moduleArr.length) {
            moduleArr.forEach((item) => {
              if (item.moduleKeyArr) {
                let keyArr = item.moduleKeyArr
                for (let i = 0; i < keyArr.length; i++) {
                  if (keyArr[i] === app + '#' + fun.toLowerCase()) {
                    this.which_to_show = item.moduleResolveArr[app + '#' + fun.toLowerCase()]
                    break
                  }
                }
              }
            })
          }
           **/
          this.which_to_show = 'kalix-' + app + '-' + fun.toLowerCase()
        } else {
          if (app !== undefined) {
            this.which_to_show = `kalix-${app.toLowerCase()}-welcome`
          } else {
            this.which_to_show = 'welcome'
          }
        }
        // this.initTheme()
      },
      changeTheme(value) {
        this.themeValue = value
        this.$http.request({
          method: 'PUT',
          url: `/camel/rest/system/preferences/${Cache.get('loginname')}`,
          params: {
            key: 'theme',
            value: value
          }
        }).then(res => {
        })
        Cache.save('styleTheme', value)
      },
      changePwd(txt) {
        let _data = {
          jsonStr: '{"id":' + JSON.stringify(Cache.get('id')) + '}'
        }
        this.$http.request(userURL, {
          params: _data
        }).then(res => {
          if (res.data.data && res.data.data.length) {
            // 修改密码
            this.$refs.userEditpwd.open(res.data.data[0])
          }
        })
      },
      updateUserInfo(row) {
        // 修改个人信息
        this.$refs.userEdit.open(row)
      }
    },
    components: {
      // adminUser, // 动态显示组件
      'welcome': Welcome
    }
  }
</script>
<style lang="stylus" type="text/stylus">
  @import "./home.styl"
  @import "~@/assets/stylus/theme/theme.styl"
</style>
