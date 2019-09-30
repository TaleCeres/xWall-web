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
      path: '/user/new',
      component: _import('user/AddUser'),
      name: 'AddUser',
      meta: { title: '创建新用户', icon: 'fa fa-cog' },
    },
    {
      path: '/user/admin',
      component: _import('user/UserAdmin'),
      name: 'UserAdmin',
      meta: { title: '用户管理', icon: 'fa fa-cog' },
    },
    {
      path: '/user/reset',
      component: _import('user/ResetPassword'),
      name: 'ResetPassword',
      meta: { title: '修改密码', icon: 'fa fa-cog' },
    },
  ],
}
