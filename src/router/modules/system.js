const _import = file => () => import(`@/views/${file}.vue`)

export default {
  path: '/',
  redirect: '/system/index',
  name: 'System',
  component: undefined,
  meta: {
    title: '全局配置',
    icon: 'el-icon-setting'
  },
  children: [
    {
      path: '/system/index',
      component: _import('system/index'),
      name: 'SystemIndex',
      meta: { title: '全局配置', icon: 'el-icon-setting' },
    },
  ],
}
