const _import = file => () => import(`@/views/${file}.vue`)

export default {
  path: '/netflow',
  name: 'NetFlow',
  component: undefined,
  meta: {
    title: '网络状态',
    icon: 'el-icon-connection'
  },
  children: [
    {
      path: '/netflow/ipflow',
      component: _import('netflow/ip-flow'),
      name: 'NetflowIpFlow',
      meta: { title: 'IP流量统计', icon: 'fa fa-cog' },
    },
    {
      path: '/netflow/history',
      component: _import('netflow/history'),
      name: 'NetflowHistory',
      meta: { title: '流量历史统计', icon: 'fa fa-cog' },
    },
  ],
}
