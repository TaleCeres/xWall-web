<template>
  <div class="dashboard">
    <el-row :gutter="16">
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <GraphContainer title="资产通信量">
          <TopsIpBarChart :dataset="topsIp"></TopsIpBarChart>
        </GraphContainer>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <GraphContainer title="网络流量统计">
          <TotalBytesLineChart
            :date-list="totalBytes.dateList"
            :in-byte-list="totalBytes.inByteList"
            :out-byte-list="totalBytes.outByteList">
          </TotalBytesLineChart>
        </GraphContainer>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="4" :xl="4">
        <GraphContainer title="事件按源IP细分">
          <EventPieChart id="bySrcIp" :chart-data="bySrcIp"></EventPieChart>
        </GraphContainer>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="4" :xl="4">
        <GraphContainer title="CPU使用率">
          <CPULineChart :date-list="cpuDate" :value-list="cpuData"></CPULineChart>
        </GraphContainer>
      </el-col>
    </el-row>
    <el-row :gutter="16">
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <GraphContainer title="协议通信量(L4)">
          <TopFlowPieChart id='topsl4' :chart-data="topsl4"></TopFlowPieChart>
        </GraphContainer>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="8" :xl="8">
        <GraphContainer title="协议通信量(L7)">
          <TopFlowPieChart id='topsl7' :chart-data="topsl7"></TopFlowPieChart>
        </GraphContainer>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="4" :xl="4">
        <GraphContainer title="事件按目标IP细分">
          <EventPieChart id="byDstIp" :chart-data="byDstIp"></EventPieChart>
        </GraphContainer>
      </el-col>
      <el-col :xs="12" :sm="12" :md="12" :lg="4" :xl="4">
        <GraphContainer title="内存使用率">
          <CPULineChart id="mem" :date-list="memDate" :value-list="memData"></CPULineChart>
        </GraphContainer>
      </el-col>
    </el-row>

    <el-row>
      <div style="box-shadow: 0 2px 12px 0 rgba(0,0,0,.1)">
        <el-row :gutter="16">
          <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
            <div>
              <p class="title">最近事件</p>
              <ul class="content">
                <li v-for="record in records" :key="record._id">
                  {{record.src}}<i class="el-icon-right"></i>{{record.dst}}
                </li>
              </ul>
            </div>
          </el-col>
          <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
            <div style="height: 350px">
              <HistogramBarChart :chart-data="histogramData"></HistogramBarChart>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-row>
  </div>
</template>

<script type="text/ecmascript-6">
import GraphContainer from 'comps/base/GraphContainer'
import DashboardRouter from '@/models/dashboard'
import io from 'socket.io-client'
// 图表组件
import TopsIpBarChart from './components/TopsIpBarChart'
import TotalBytesLineChart from './components/TotalBytesLineChart'
import EventPieChart from './components/EventPieChart'
import HistogramBarChart from './components/HistogramBarChart'
import TopFlowPieChart from './components/TopFlowPieChart'
import CPULineChart from './components/CPULineChart'
export default {
  name: 'Dashboard',
  components: {
    GraphContainer,
    TopsIpBarChart,
    TotalBytesLineChart,
    EventPieChart,
    HistogramBarChart,
    TopFlowPieChart,
    CPULineChart
  },
  data() {
    return {
      topsIp: [],
      totalBytes: {
        dateList: [],
        inByteList: [],
        outByteList: []
      },
      bySrcIp: [], // 事件按源IP细分
      byDstIp: [], // 事件按目标IP细分
      records: [], // 最近事件列表
      histogramData: [], // 最近事件分布图
      topsl4: [],
      topsl7: [],
      socket: io('http://192.168.3.89:8081'),
      cpuData: [],
      cpuDate: [],
      memData: [],
      memDate: []
    }
  },
  computed: {},
  created() { },
  mounted() {
    this.getCPU()
    this.getMem()
    this.getTopsIp()
    this.getTotalBytes()
    this.getEvents()
    this.getTopsl4()
    this.getTopsl7()
  },
  // beforeDestroy() {
  //   this.socket.close('cpu')
  // },
  methods: {
    getCPU() {
      this.socket.on('cpu', cpus => {
        this.cpuData = cpus.y.map(item => (item * 100).toFixed(2))
        this.cpuDate = cpus.x
      })
    },

    getMem() {
      this.socket.on('mem', mems => {
        this.memData = mems.y.map(item => (item * 100).toFixed(2))
        this.memDate = mems.x
      })
    },

    async getTopsIp() {
      this.topsIp = await DashboardRouter.getTopsIP()
    },
    async getTotalBytes() {
      this.totalBytes = await DashboardRouter.getTotalBytes()
    },
    async getEvents() {
      const res = await DashboardRouter.getEvents()
      this.bySrcIp = res.bySrcIp.map(item => ({
        name: item.key,
        value: item.y
      }))
      this.byDstIp = res.byDstIp.map(item => ({
        name: item.key,
        value: item.y
      }))
      this.records = res.records.map(item => ({
        src: `${item.srcIp}:${item.srcPort}`,
        dst: `${item.dstIp}:${item.dstPort}`
      }))
      this.histogramData = res.histogramData[0].values
    },
    async getTopsl4() {
      this.topsl4 = await DashboardRouter.getTopsl4()
    },
    async getTopsl7() {
      this.topsl7 = await DashboardRouter.getTopsl7()
    },
  },
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.title {
  padding-left 20px
  line-height 40px
  font-size 18px
  font-weight bolder
  border-bottom 1px solid #f3f3f3
}
.content {
    li {
      line-height 30px
      border-bottom 1px solid  #eaeefb
      padding 5px 20px
    }
}
</style>
