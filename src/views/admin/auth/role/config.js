/**
 * 角色操作按钮定义
 * @type {[null,null,null,null,null]}
 */
const roleBtnList = [
  {
    id: 'view',
    title: '查看',
    icon: 'icon-chakan',
    isShow: true, // 是否显示
    isPermission: true // 是否进行权限认证
  },
  {
    id: 'edit',
    title: '编辑',
    icon: 'icon-bianji',
    isShow: true, // 是否显示
    isPermission: true // 是否进行权限认证
  },
  {
    id: 'delete',
    title: '删除',
    icon: 'icon-shanchu',
    isShow: true, // 是否显示
    isPermission: true // 是否进行权限认证
  },
  {
    id: 'addUser',
    title: '用户',
    icon: 'icon-yonghuguanli',
    toolTipTitle: '添加用户',
    isShow: true, // 是否显示
    isPermission: true // 是否进行权限认证
  },
  {
    id: 'auth',
    title: '权限',
    icon: 'icon-quanxian',
    toolTipTitle: '权限分配',
    isShow: true, // 是否显示
    isPermission: true // 是否进行权限认证
  }
]

export {roleBtnList}
