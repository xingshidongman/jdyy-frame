<!--
描述：table上方工具栏组件的二次封装
开发人：sunlf
开发日期：2017年8月17日
-->

<template lang="pug">
  div.kalix-base-tool-bar
    template(v-for="btn in defaultBtnList")
      el-button.buttons(v-if="btn.isShow" v-on:click="toggle(btn.id)" v-bind:disabled="btn.isDisable")
        i.iconfont(v-bind:class="btn.icon" style="padding-right:3px;")
        |  {{btn.title}}
    div.clear
</template>

<script type="text/ecmascript-6">
  import {ON_TOOLBAR_CLICK} from './event.toml'
  import {GlobalToolBarButtonList} from '../../config/global.toml'
  import {concatArrayObject, getNewObject} from '../../common/util.js'

  export default {
    name: 'kalix-tool-bar',
    props: {
      toolbarBtnList: {
        type: Array
      },
      bizKey: {
        type: String
      }
    },
    data() {
      return {
        defaultBtnList: []
      }
    },
    created() {
      this.initToolBtnList()
    },
    watch: {
      toolbarBtnList(newVal, oldVal) {
        this.initToolBtnList()
      }
    },
    methods: {
      initToolBtnList() {
        let defaultToolBarBtnList = getNewObject(GlobalToolBarButtonList)
        this.defaultBtnList = concatArrayObject(this.toolbarBtnList, defaultToolBarBtnList)
        let items = this.defaultBtnList.filter(item => {
          return item.isShow
        })
        this.$emit('onCheckBtnList', items.length)
      },
      toggle(btnId) {
        this.$emit(ON_TOOLBAR_CLICK, btnId)
      }
    }
  }
</script>
<style scoped lang="stylus" type="text/stylus">
  .buttons
    background-color #f3f3f3 !important
    border-color #dfdfdf !important
    color #3465cb !important
    padding 8px 12px !important
    margin 0 10px !important
    float right
  .buttons:hover
    background-color #3465cb !important
    border-color #e8e8e8 !important
    color #ffffff !important
  .clear
    clear both
</style>
