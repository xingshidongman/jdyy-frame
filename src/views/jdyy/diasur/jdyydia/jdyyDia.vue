<!--
描述：系统应用-功能管理
开发人：sunli
开发日期：2018年06月01日
-->

<template lang="pug">
  div.kalix-article
    keep-alive
      kalix-tree-grid-1.duty-wrapper(bizKey="jdyyDia" title="诊断录入"
        style="padding-top:0"
        ref="kalixTreeGrid"
        v-bind:targetURL="treeUrl"
        v-bind:isToolBarSelf="true"
        v-bind:toolbarBtnList="treeToolbarBtnList"
        v-bind:onToolBarSelfClick="onToolBarClick"
        v-bind:bizDialog="bizDialog"
        v-bind:columns='columns'
        v-bind:customRender="showCheckText"
        v-on:selectedRow="getSelectRow"
        v-bind:isRowButtonSelf="true"
        v-bind:jsonStr="jsonStr"
        v-bind:noSearchParam:sync="noSearchParam"
        v-bind:isColumnfixed="false"
        v-bind:btnList="btnList"
      )
      <!--template(slot="tableColumnSlot") v-bind:btnSelfClick="btnClick"-->
        <!--el-table-column(prop="username"  label="回复人姓名") v-bind:buttonPermissionPrefix="buttonPermissionPrefix"-->
        <!--el-table-column(label="回复内容")  v-bind:optActions="optActions"-->
          <!--template(slot-scope="scope")-->
            <!--div.table-content(v-html="scope.row.content")-->
        <!--el-table-column(prop="creationDate"  label="回复时间")-->
        <!--el-table-column(prop="categoryName"  label="审核状态")-->
</template>

<script type="text/ecmascript-6">
  import FormModel from './model'
  import {jdyyDiaConfigBtnList} from './config'
  import Message from '../../../../common/message'
  import {JdyydiaURL} from '../../config.toml'
  // import KalixReplyTree from '../../../../components/cascader/replyTree'
  import KalixTreeGrid from '../../../../components/forum/treeGrid'

  export default {
    name: 'kalix-jdyy-jdyydia',
    data() {
      return {
        btnList: jdyyDiaConfigBtnList,
        name: '',
        noSearchParam: true,
        // toolbarBtnList: [
        //   // {id: 'add', isShow: false},
        //   {id: 'add', isShow: true, title: '添加', isPermission: true},
        //   {id: 'refresh', isShow: true, icon: 'icon-refresh', title: '刷新'}
        // ],
        treeToolbarBtnList: [
          {id: 'add', isShow: true, title: '添加', icon: 'icon-pinleizengjia', isPermission: true},
          {id: 'edit', isShow: true, icon: 'icon-bianji', title: '编辑', isPermission: true},
          {id: 'delete', isShow: true, icon: 'icon-shanchu', title: '删除'}
        ],
        // targetUrl: replyMenuURL,
        treeUrl: JdyydiaURL + '/getAllDiaByParentId?parentId=-1',
        // QiaoReplyURL: QiaoReplyURL,
        menuItems: [],
        addFormModel: Object.assign({}, FormModel),
        editFormModel: Object.assign({}, FormModel),
        auditingFormModel: Object.assign({}, FormModel),
        // postId: undefined,
        // froumTitle: undefined,
        parentId: undefined,
        kalixDialog: undefined,
        currentRow: undefined,
        isIconSelf: true,
        jsonStr: '',
        bizDialog: [
          {id: 'add', dialog: 'jdyyDiaAdd'},
          {id: 'edit', dialog: 'jdyyDiaEdit'}
        ],
        optActions: {
          title: '操作',
          type: 'action',
          actions: [{
            type: 'edit',
            text: '编辑',
            icon: 'el-icon-edit'
          }, {
            type: 'delete',
            text: '删除',
            icon: 'el-icon-delete'
          }],
          width: '150'
        },
        columns: [{
          type: 'hidden',
          key: 'id',
          width: '0'
        }, {
          type: 'hidden',
          key: 'parentId',
          width: '0'
        }, {
          title: '诊断名称',
          key: 'content',
          width: '120'
        }]
      }
    },
    components: {
      // KalixReplyTree,
      KalixTreeGrid1: KalixTreeGrid
    },
    computed: {},
    mounted() {
      // this.jsonStr = `{ '%username%': ''}`
    },
    methods: {
      // onReplyTreeClick(data) {
      //   this.postId = data.value
      //   this.forumTitle = data.label
      //   this.parentContent = data.content
      //   this.jsonStr = `{'%username%': ''}`
      //   this.treeUrl = JdyydiaURL + '/getReplyByPostId?postId=' + data.value
      //   this.dialogOptions = {
      //     postId: data.value,
      //     forumTitle: data.label
      //   }
      // },
      showCheckText(_data) {
        // this.showCheck(_data)
      },
      // showCheck(_data) {
      //   if (_data) {
      //     _data.forEach((e) => {
      //       e.categoryName = e.category === '0' ? '未审核' : '已审核'
      //       if (e.children) {
      //         this.showCheck(e.children)
      //       }
      //     })
      //   }
      // },
      onToolBarClick(btnId) {
        if (btnId === 'add') {
          console.log('addBtnId==========')
          this.onAddClick()
        }
        if (btnId === 'edit') {
          console.log('edit==========')
          this.onEditClick()
        }
        if (btnId === 'delete') {
          console.log('delete==========')
          this.onDeleteClick()
        }
      },
      // btnClick(row, btnId) {
      //   if (btnId === 'edit') {
      //     this.onEditClick(row)
      //   }
      //   if (btnId === 'delete') {
      //     this.onDeleteClick(row)
      //   }
      //   if (btnId === 'auditing') {
      //     this.onAuditingClick(row)
      //   }
      // },
      onRefreshClick() {
        if (this.treeUrl !== undefined) {
          this.$refs.kalixTreeGrid.getData()
        }
      },
      onAddClick() { // 添加按钮点击事件
        if (this.currentRow === undefined) {
          let that = this
          this.$refs.kalixTreeGrid.getKalixDialog('add', (_kalixDialog) => {
            this.kalixDialog = _kalixDialog
            setTimeout(() => {
              this.addFormModel.parentId = '-1'
              this.addFormModel.parentContent = '根目录'
              this.addFormModel.isLeaf = '0'
              this.kalixDialog.$refs.kalixBizDialog.open('添加', false, this.addFormModel)
              if (typeof (that.kalixDialog.init) === 'function') {
                console.log('this.dialogOptions============', this.dialogOptions)
                that.kalixDialog.init(this.dialogOptions) //  需要传参数，就在dialog里面定义init方法
              }
            }, 20)
          })
          return
        }
        let that = this
        this.$refs.kalixTreeGrid.getKalixDialog('add', (_kalixDialog) => {
          this.kalixDialog = _kalixDialog
          setTimeout(() => {
            this.addFormModel.parentId = this.currentRow.id
            this.addFormModel.parentContent = this.currentRow.content
            this.addFormModel.isLeaf = '0'
            this.kalixDialog.$refs.kalixBizDialog.open('添加', false, this.addFormModel)
            if (typeof (that.kalixDialog.init) === 'function') {
              console.log('this.dialogOptions============', this.dialogOptions)
              that.kalixDialog.init(this.dialogOptions) //  需要传参数，就在dialog里面定义init方法
            }
          }, 20)
        })
      },
      onEditClick() { // 修改按钮点击事件
        if (this.currentRow === undefined) {
          Message.error('请选择要操作的记录！')
          return
        }
        let that = this
        this.$refs.kalixTreeGrid.getKalixDialog('edit', (_kalixDialog) => {
          this.kalixDialog = _kalixDialog
          setTimeout(() => {
            this.editFormModel = this.currentRow
            this.editFormModel.parentContent = this.editFormModel.content
            if (this.currentRow.dataPermission !== true) {
              this.currentRow.dataPermission = false
            }
            this.editFormModel.dataPermission = this.currentRow.dataPermission + ''
            console.log('this.editFormModel==============', this.editFormModel)
            this.kalixDialog.$refs.kalixBizDialog.open('编辑', true, this.editFormModel)
            if (typeof (that.kalixDialog.init) === 'function') {
              that.kalixDialog.init(this.dialogOptions) // 需要传参数，就在dialog里面定义init方法
            }
          }, 20)
        })
      },
      onDeleteClick() { // 删除按钮点击事件
        if (this.currentRow === undefined) {
          Message.error('请选择要操作的记录！')
          return
        }
        this.$confirm('确定要删除此诊断以及诊断下的所有诊断吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          return this.axios.request({
            method: 'DELETE',
            url: JdyydiaURL + '/' + this.currentRow.id,
            params: {},
            data: {
              id: this.currentRow.id
            }
          })
        }).then(response => {
          this.$refs.kalixTreeGrid.getData()
          Message.success(response.data.msg)
        }).catch(() => {
        })
      },
      getSelectRow(val) {
        console.log('getSelectRow========', val)
        this.currentRow = val
      }
    }
  }
</script>

<style scoped lang="stylus" type="text/stylus">
  @import "../../../../assets/stylus/baseTable.styl"
  @import "../../../../assets/stylus/color.styl"
  .kalix-article
    position relative
    height 100%
    overflow hidden
    box-sizing border-box

    .duty-row
      height 100%
      .duty-col
        height 100%
        box-sizing border-box

    .duty-wrapper
      margin 9px 0
      .kalix-wrapper
        bottom 0 !important
      label
        overflow hidden
        height 28px
        text-overflow ellipsis
        white-space nowrap
</style>
