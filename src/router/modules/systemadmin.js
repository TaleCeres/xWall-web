const _import = file => () => import(`@/views/${file}.vue`)

export default {
  path: '/system',
  name: 'SystemAdmin',
  component: undefined,
  meta: {
    title: '系统管理',
    icon: 'fa fa-cog'
  },
  children: [
    {
      path: '/system/ip',
      component: _import('system-admin/IpConfig'),
      name: 'ipConfig',
      meta: { title: '管理IP设置', icon: 'fa fa-cog' },
    },
    {
      path: '/system/reboot',
      component: _import('system-admin/Reboot'),
      name: 'Reboot',
      meta: { title: '重启设备', icon: 'fa fa-cog' },
    },
  ],
}
