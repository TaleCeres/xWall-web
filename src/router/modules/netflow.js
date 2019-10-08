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
      component: _import('net-flow/ip-flow'),
      name: 'IpFlow',
      meta: { title: 'IP流量统计', icon: 'fa fa-cog' },
    },
    {
      path: '/netflow/history',
      component: _import('net-flow/index'),
      name: 'FlowIndex',
      meta: { title: '流量历史统计', icon: 'fa fa-cog' },
    },
  ],
}
