<template>
  <div>
    <el-row style="padding: 20px 10px">
      <el-col :span="12">
        <NetflowPieChart id='src' title="源IP流量TOP10" :chart-data="src"></NetflowPieChart>
      </el-col>
      <el-col :span="12">
        <NetflowPieChart id='dst' title="目的IP流量TOP10" :chart-data="dst"></NetflowPieChart>
      </el-col>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
import NetflowModel from '@/models/netflow'
import NetflowPieChart from './components/NetflowPieChart'
export default {
  name: 'NetflowIpFlow',
  components: {
    NetflowPieChart
  },
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
