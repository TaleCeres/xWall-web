const _import = file => () => import(`@/views/${file}.vue`)

export default {
  path: '/ddos',
  name: 'DDOS',
  redirect: '/ddos/index',
  component: undefined,
  meta: {
    title: '抗DDOS设置',
    icon: 'fa fa-sliders'
  },
  children: [
    {
      path: '/ddos/index',
      component: _import('ddos/index'),
      name: 'DDOSIndex',
      meta: { title: '抗DDOS设置', icon: 'fa fa-sliders' },
    },
  ],
}
