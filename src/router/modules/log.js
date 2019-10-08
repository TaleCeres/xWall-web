const _import = file => () => import(`@/views/${file}.vue`)

export default {
  path: '/log',
  name: 'Log',
  component: undefined,
  meta: {
    title: '日志审计',
    icon: 'fa fa-folder'
  },
  children: [
    {
      path: '/log/system',
      component: _import('log/system-log'),
      name: 'SystemLog',
      meta: { title: '系统日志', icon: 'fa fa-cog' },
    },
    {
      path: '/log/firewall',
      component: _import('log/firewall-log'),
      name: 'FirewallLog',
      meta: { title: '防火墙日志' },
    },
  ],
}
