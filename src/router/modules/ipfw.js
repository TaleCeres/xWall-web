const _import = file => () => import(`@/views/${file}.vue`)

export default {
  path: '/ipfw',
  name: 'ipfw',
  redirect: '/ipfw/index',
  component: undefined,
  meta: {
    title: 'IP层规则',
    icon: 'el-icon-set-up'
  },
  children: [
    {
      path: '/ipfw/index',
      component: _import('ipfw/index'),
      name: 'ipfwIndex',
      meta: { title: 'IP层规则', icon: 'fa fa-cog' },
    },
  ],
}
