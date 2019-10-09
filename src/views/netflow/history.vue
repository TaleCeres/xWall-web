<template>
  <div>
    流量历史统计
  </div>
</template>

<script type="text/ecmascript-6">
import NetflowModel from '@/models/netflow'
export default {
  name: 'NetflowHistory',
  data() {
    return {
      start: 1567322100000, // 起始时间 (转化成毫秒)
      end: 1570605300000, // 结束时间 (转化成毫秒)
      port: 'br0', // 接口 (默认为br0, 不允许修改)
      direction: 'in', // 流入 or 流出: in为流入流量, out为流出流量
      ip: '192.168.1.1', // IP
      protocolL4: 'UDP', // 协议
    }
  },
  mounted() {
    this.getHistoryFlowStat()
  },
  methods: {
    async getHistoryFlowStat() {
      const {
        start,
        end,
        port,
        direction,
        ip,
        protocolL4
      } = this
      // 获取「时间列表」&「数据列表」
      const { dateList, valueList } = await NetflowModel.statHistoryFlow({
        start,
        end,
        port,
        direction,
        ip,
        protocolL4
      })
    }
  }
}
</script>

<style scoped lang="stylus"></style>
