<!--
描述：系统应用-用户管理-权限查看组件
开发人：hqj
开发日期：2017年12月12日
-->
<template lang="pug">
  el-row
    el-button(type="text" v-on:click="addTree") 添加
    el-button(type="text" v-on:click="editTree") 修改
    el-button(type="text" v-on:click="deleteTree") 删除
    keep-alive
      el-tree.filter-tree(v-bind:data="treeData" v-bind:props="defaultProps" node-key="id" highlight-current
      show-checkbox check-strictly v-bind:default-checked-keys="checkedKeys"
      ref="baseTree")
</template>

<script type="text/ecmascript-6">
  import FormModel from './model'
  export default {
    name: 'kalix-jdyy-jdyysur',
    data() {
      return {
        formModel: Object.assign({}, FormModel),
        treeData: [],
        defaultProps: {
          children: 'children',
          label: 'content'
        },
        checkedKeys: []
      }
    },
    mounted () {
      this.getData()
    },
    watch: {
      formModel: {
        handler: 'watchFormModel',
        deep: true
      }
    },
    methods: {
      // 获取数据
      getData() {
        this.$http.request({
          method: 'GET',
          url: '/camel/rest/jdyy/sss/getAllByParentId?parentId=-1',
          params: {}
        }).then(res => {
          console.log('res.data.data==============', res.data.data)
          this.treeData = res.data.data
          if (res.data.children) {
            this.treeData = res.data.children
            // 获取选中节点, 并设置所有节点disable=true
            this.getCheckedKeys(this.treeData)
            console.log('this.treeData================', this.treeData)
          }
        })
      },
      getCheckedKeys(array) {
        if (array && array.length > 0) {
          for (let i = 0; i < array.length; i++) {
            if (array[i].children) {
              array[i].disabled = false
              if (array[i].children.length === 0) {
                // delete array[i].children
                if (array[i].checked) {
                  this.checkedKeys.push(array[i].id)
                }
              } else {
                this.getCheckedKeys(array[i].children)
              }
            }
          }
        }
      },
      watchFormModel(newVal) {
        this.getData()
      },
      addTree() {
        console.log('add===========')
        this.$prompt('请输入信息', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(({ value }) => {
          console.log('addddddd==========', value)
          let a = this.$refs.baseTree.getCheckedNodes()
          console.log('getCheckedNodes===========', a[0].id)
          this.formModel.parentId = a[0].id
          this.formModel.content = value
          this.formModel.isLeaf = 0
          this.$http.request({
            url: '/camel/rest/jdyy/sss',
            method: 'POST',
            data: this.formModel
          }).then(({ response }) => {
            console.log('success=================', response.data.data)
            // 重新加载树并且默认选中新添加的节点
          })
        })
      },
      editTree() {
        console.log('edit===========================')
        this.$prompt('请输入信息', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(({ value }) => {
          console.log('editddddd==========', value)
          let a = this.$refs.baseTree.getCheckedNodes()
          console.log('getCheckedNodes===========', a[0].id)
          this.formModel.id = a[0].id
          this.formModel.content = value
          this.formModel.isLeaf = 0
          this.$http.request({
            url: '/camel/rest/jdyy/sss/' + this.formModel.id,
            method: 'PUT',
            data: this.formModel
          }).then(({ response }) => {
            console.log('success=================', response.data.data)
            // 重新加载树并且默认选中新添加的节点
          })
        })
      },
      deleteTree() {
        console.log('delete===========================')
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(({ value }) => {
          console.log('deletetttt==========', value)
          let a = this.$refs.baseTree.getCheckedNodes()
          console.log('getCheckedNodes===========', a[0].id)
          this.formModel.id = a[0].id
          this.$http.request({
            url: '/camel/rest/jdyy/sss' + this.formModel.id,
            method: 'DELETE',
            data: this.formModel
          }).then(({ response }) => {
            console.log('success=================', response.data.data)
            // 重新加载树并且默认选中新添加的节点
          })
        })
      }
    }
  }
</script>
