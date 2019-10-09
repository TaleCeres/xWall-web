<template>
  <div style="padding: 20px 50px">
    <el-form ref="form" label-width="80px">
      <el-form-item label="起始时间">
        <el-date-picker
          v-model="start"
          type="datetime"
          placeholder="选择日期时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="结束时间">
        <el-date-picker
          v-model="end"
          type="datetime"
          placeholder="选择日期时间">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="接口">
        <el-input v-model="port" disabled style="width: 217px"></el-input>
      </el-form-item>
      <el-form-item label="流入/流出">
        <el-select v-model="direction">
          <el-option label="流入" value="in"></el-option>
          <el-option label="流出" value="out"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="IP">
        <el-input v-model="ip" style="width: 217px"></el-input>
      </el-form-item>
      <el-form-item label="协议">
        <el-input v-model="protocolL4" style="width: 217px; margin-right: 20px"></el-input>
        <el-button icon="el-icon-search" type="primary" @click="getHistoryFlowStat"></el-button>
      </el-form-item>
    </el-form>

    <FlowLineChart :date-list="dateList" :value-list="valueList"></FlowLineChart>
  </div>
</template>

<script type="text/ecmascript-6">
import NetflowModel from '@/models/netflow'
import FlowLineChart from './components/FlowLineChart'
export default {
  name: 'NetflowHistory',
  components: {
    FlowLineChart
  },
  data() {
    return {
      start: 1567322100000, // 起始时间 (转化成毫秒)
      end: 1570605300000, // 结束时间 (转化成毫秒)
      port: 'br0', // 接口 (默认为br0, 不允许修改)
      direction: 'in', // 流入 or 流出: in为流入流量, out为流出流量
      ip: '192.168.1.1', // IP
      protocolL4: 'UDP', // 协议,
      dateList: [],
      valueList: []
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
      this.dateList = dateList
      this.valueList = valueList
    }
  }
}
</script>

<style scoped lang="stylus"></style>
