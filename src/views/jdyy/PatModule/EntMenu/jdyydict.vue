<!--
描述：我的首页-数据字典组件
开发人：sunlf
开发日期：2017年8月17日
-->

<template lang="pug">
  keep-alive
    kalix-base-dict(ref="baseTableRef" v-bind:bizKey="bizKey" v-bind:bizDialog="bizDialog" v-bind:dictComponent="dictComponent"
    v-bind:targetURL="targetURL" v-bind:dialogOptions="dialogOptions")
</template>

<script type="text/ecmascript-6">
  import {JdyyDictURL, JdyyDictComponent, JdyyDictsTypesListURL} from '../../config.toml'

  export default {
    name: 'kalix-jdyy-jdyydict',
    data() {
      return {
        dialogOptions: {
          targetURL: JdyyDictURL,
          dictTypesListURL: JdyyDictsTypesListURL,
          bizKey: 'dict'
        },
        bizKey: 'dict',
        dictComponent: JdyyDictComponent,
        targetURL: JdyyDictURL,
        bizDialog: [
          {id: 'view', dialog: 'basedictView'},
          {id: 'edit', dialog: 'basedictAdd'},
          {id: 'add', dialog: 'basedictAdd'}
        ]
      }
    },
    created() {
    },
    methods: {}
  }
</script>

<style scoped lang="stylus">

</style>
