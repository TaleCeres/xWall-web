const _import = file => () => import(`@/views/${file}.vue`)

export default {
  path: '/user',
  name: 'User',
  component: undefined,
  meta: {
    title: '用户管理',
    icon: 'fa fa-user'
  },
  children: [
    {
      path: '/user/list',
      component: _import('user/user-list'),
      name: 'UserAdmin',
      meta: { title: '用户管理', icon: 'fa fa-cog' },
    },
    {
      path: '/user/add',
      component: _import('user/user-add'),
      name: 'AddUser',
      meta: { title: '创建新用户', icon: 'fa fa-cog' },
    },
    {
      path: '/user/reset',
      component: _import('user/user-reset'),
      name: 'ResetPassword',
      meta: { title: '修改密码', icon: 'fa fa-cog' },
    },
  ],
}
