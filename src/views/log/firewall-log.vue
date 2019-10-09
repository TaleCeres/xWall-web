<template>
  <div>防火墙日志</div>
</template>

<script type="text/ecmascript-6">
import LogModel from '@/models/log'
export default {
  name: 'FirewallLog',
  data() {
    return {

    }
  },
  mounted() {
    this.getFireWallLog()
  },
  methods: {
    async getFireWallLog() {
      const fireWallLogList = await LogModel.getFireWallLog(
        {
          start: 1565243345680,
          end: 1570427345680,
          page: 0,
          size: 25,
          srcIp: '192.168.1.141',
          dstIp: '192.168.1.55'
        }
      )
      console.log('fireWallLogList', fireWallLogList)
    }
  }
}
</script>

<style scoped lang="stylus"></style>
