<!--
  描述：组织结构树组件的二次封装
  开发人：sunlf
  开发日期：2017年11月08日
-->
<template lang="pug">
  div.kalix-search.org-tree
    div.kalix-search-hd
      i.tit_icon.iconfont.icon-organization
      | {{treeTitle}}
    div.kalix-search-bd.org-tree-bd
      div.ipt-wrapper
        el-input.kalix-search-input(placeholder="输入关键字进行过滤" v-model="filterText")
      div.kalix-tree-wrapper
        el-tree.filter-tree(v-bind:data="treeData"
        v-bind:props="defaultProps" accordion
        node-key="id" highlight-current
        v-bind:filter-node-method="filterNode" v-on:node-click="handleNodeClick"
        ref="orgTree")
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'kalix-body-tree',
    activated() {
      console.log('orgTree component is activated')
      this.$KalixEventBus.$on('refreshData', this.getData)
    },
    deactivated() {
      console.log('orgTree component is deactivated')
      this.$KalixEventBus.$off('refreshData')
    },
    props: {
      treeTitle: {
        type: String,
        default: '身体区域树'
      },
      placeholder: {
        default: '请选择部位'
      },
      value: null,
      bodyId: {
        default: -1
      }
    },
    data() {
      return {
        currentValue: this.value,
        input: '',
        iconCls: '',
        filterText: '',
        treeData: [],
        targetURL: '',
        defaultProps: {
          children: 'children',
          label: 'name'
        },
        jsonStr: {},
        tableHeight: 0 //  列表组件高度
      }
    },
    mounted() {
      this.getData()
    },
    methods: {
      filterNode(value, data) {
        if (!value) return true
        return data.name.indexOf(value) !== -1
      },
      handleNodeClick(data) {
        this.partId = data.id
        this.$emit('bodyTreeClick', data) // 发送事件供外部调用
      },
      getData() {
        let url = '/camel/rest/hospital/guidances/getAllBySex'
        this.axios.request({
          method: 'GET',
          url: url,
          params: {
            parentId: '-1'
          }
        }).then(res => {
          this.treeData = res.data.children
          // 加载数据后自动选中第一个节点
          this.$nextTick(() => {
            const firstNode = document.querySelector('.el-tree-node')
            if (firstNode) {
              firstNode.click()
            }
          })
        })
        const currentTreeListItem = JSON.parse(this.$KalixCatch.get('currentTreeListItem'))
        if (currentTreeListItem) {
          this.iconCls = currentTreeListItem.iconCls
        }
      }
    },
    watch: {
      filterText(val) {
        this.$refs.orgTree.filter(val)
      }
    },
    components: {},
    computed: {}

  }
</script>
<style scoped lang="stylus" type="text/stylus">
  .org-tree
    display flex
    flex-flow column
    .org-tree-bd
      flex 1
      display flex
      flex-flow column
      padding 0
      .ipt-wrapper
        padding 8px 12px
      .kalix-tree-wrapper
        flex 1
        padding 0 12px
        box-sizing border-box
        overflow auto
</style>
