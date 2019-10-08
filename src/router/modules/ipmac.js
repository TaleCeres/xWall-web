const _import = file => () => import(`@/views/${file}.vue`)

export default {
  path: '/ipmac',
  name: 'IpMac',
  component: undefined,
  meta: {
    title: '地址绑定',
    icon: 'fa fa-server'
  },
  children: [
    {
      path: '/ipmac/index',
      component: _import('ipmac/index'),
      name: 'IpMacIndex',
      meta: { title: '地址绑定', icon: 'fa fa-cog' },
    },
  ],
}
