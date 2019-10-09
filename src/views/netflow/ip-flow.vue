<template>
  <div>
    <h2>IP流量统计</h2>
    {{ src }}
  </div>
</template>

<script type="text/ecmascript-6">
import NetflowModel from '@/models/netflow'
export default {
  name: 'NetflowIpFlow',
  data() {
    return {
      src: undefined,
      dst: undefined,
    }
  },
  mounted() {
    this.getFlowStat()
  },
  methods: {
    async getFlowStat() {
      // 此处数据已经处理好了, 可以直接用于pieChart 和 表格
      const data = await NetflowModel.statFlow()
      this.src = data.src
      this.dst = data.dst
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
