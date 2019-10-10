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
    <el-row :gutter="20">
      <el-col :span="12">
        <el-table
          border
          :data="src.slice((srcPage-1)*5,srcPage*5)">
          <el-table-column
            type="index">
          </el-table-column>
          <el-table-column
            prop="name"
            label="源IP地址">
          </el-table-column>
          <el-table-column
            prop="value"
            label="发送字节">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.value }}KB</span>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          layout="prev, pager, next"
          :page-size="5"
          :total="10"
          @current-change="handleSrcChange">
        </el-pagination>
      </el-col>

      <el-col :span="12">
        <el-table
          border
          :data="dst.slice((dstPage-1)*5,dstPage*5)">
          <el-table-column
            type="index">
          </el-table-column>
          <el-table-column
            prop="name"
            label="目的IP地址">
          </el-table-column>
          <el-table-column
            prop="value"
            label="接收字节">
            <template slot-scope="scope">
              <span style="margin-left: 10px">{{ scope.row.value }}KB</span>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination
          layout="prev, pager, next"
          :page-size="5"
          :total="10"
          @current-change="handleDstChange">
        </el-pagination>
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
      src: [],
      dst: [],
      srcPage: 1,
      dstPage: 1
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
    },
    handleSrcChange(page) {
      this.srcPage = page
    },
    handleDstChange(page) {
      this.dstPage = page
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
