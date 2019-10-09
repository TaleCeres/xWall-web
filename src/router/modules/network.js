const _import = file => () => import(`@/views/${file}.vue`)

export default {
  path: '/network',
  name: 'Network',
  redirect: '/network/index',
  component: undefined,
  meta: {
    title: '网络设置',
    icon: 'fa fa-link'
  },
  children: [
    {
      path: '/network/index',
      component: _import('network/index'),
      name: 'NetworkIndex',
      meta: { title: '网络设置', icon: 'fa fa-link' },
    },
  ],
}
