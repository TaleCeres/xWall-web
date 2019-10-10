const _import = file => () => import(`@/views/${file}.vue`)

export default {
  path: '/srcip',
  name: 'SrcIP',
  redirect: '/srcip/index',
  component: undefined,
  meta: {
    title: '源IP设置',
    icon: 'fa fa-sliders'
  },
  children: [
    {
      path: '/srcip/index',
      component: _import('src-ip/index'),
      name: 'SrcIndex',
      meta: { title: '源IP设置', icon: 'fa fa-cog' },
    },
  ],
}
