<template>
  <div class='log-container'>
    <div class='top-child'>
      <el-date-picker v-model="time" value-format="timestamp" type="datetimerange" start-placeholder="起始时间" end-placeholder="结束时间" :default-time="['12:00:00']">
      </el-date-picker>
      <el-input v-model="srcIp" placeholder="源IP地址"></el-input>
      <el-input v-model="dstIp" placeholder="目的IP地址"></el-input>
      <el-button class='btn-search' icon="el-icon-search" @click="getFireWallLog"></el-button>
    </div>
    <div class='middle-child'>
      <el-table :data="tableData" style="width: 100%" border :default-sort="{prop: 'date', order: 'descending'}" :header-cell-style="{'background-color':'#F2F2F2'}">
        <el-table-column prop="receivedAt" label="事件时间" sortable width="220" />
        <el-table-column prop="message" label="事件描述" sortable width="300" />
        <el-table-column prop="srcIp" label="源IP地址" sortable width="120" />
        <el-table-column prop="srcPort" label="源端口" sortable width="100" />
        <el-table-column prop="dstIp" label="目的IP地址" sortable width="120" />
        <el-table-column prop="dstPort" label="目的端口" sortable width="120" />
        <el-table-column prop="protocolName" label="L4协议" sortable width="100" />
        <el-table-column label='操作'>
          <template slot-scope="scope">
            <div style='border-radius:4px;text-align: center;width:38px;height:24px;background-color:#289E90;color:#ffffff'
              @click="watch(scope.row)" >
              查看
            </div>
          </template>
          </el-table-column>
      </el-table>
    </div>
    <div class='bottom-child'>
      <el-pagination :page-sizes="[10, 20, 30, 40]" :page-size="100" 
      layout="total, sizes, prev, pager, next, jumper" :total="total" :current-page="currentPage"
      @size-change="handleSizeChange" @current-change="handleCurrentChange" 
      >
      </el-pagination>
    </div>
    <el-dialog title="查看详细信息" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="时间" :label-width="formLabelWidth">
          {{this.form.receivedAt}}
        </el-form-item>
        <el-form-item label="源IP" :label-width="formLabelWidth">
          {{this.form.srcIp}}
        </el-form-item>
        <el-form-item label="源端口" :label-width="formLabelWidth">
          {{this.form.srcPort}}
        </el-form-item>
        <el-form-item label="目标IP" :label-width="formLabelWidth">
          {{this.form.dstIp}}
        </el-form-item>
        <el-form-item label="目标端口" :label-width="formLabelWidth">
          {{this.form.dstPort}}
        </el-form-item>
        <el-form-item label="L4协议" :label-width="formLabelWidth">
          {{this.form.protocolName}}
        </el-form-item>
        <el-form-item label="有效荷载" :label-width="formLabelWidth">
          {{this.form.payload}}
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script type="text/ecmascript-6">
import LogModel from '@/models/log'
export default {
  name: 'FirewallLog',
  data() {
    return {
      formLabelWidth: '120px',
      time: '',
      srcIp: '',
      dstIp: '',
      size: 10,
      page: 0,
      value: '',
      tableData: [],
      currentPage: 1,
      total: 0,
      dialogFormVisible: false,
      form: {}
    }
  },
  mounted() {
    // this.getFireWallLog()
  },
  methods: {
    watch(data) {
      this.dialogFormVisible = true
      this.form = data
    },
    formatter(row, column) {
      return row.address
    },
    handleSizeChange(val) {
      this.size = val
      this.getFireWallLog()
    },
    handleCurrentChange(val) {
      this.page = val
      this.getFireWallLog()
    },
    async getFireWallLog() {
      const fireWallLogList = await LogModel.getFireWallLog({
        start: this.time[0],
        end: this.time[1],
        page: this.page,
        size: this.size,
        srcIp: this.srcIp,
        dstIp: this.dstIp
      })
      this.tableData = fireWallLogList.data.records
      this.total = fireWallLogList.data.total
    }
  }
}
</script>

<style lang="stylus">
.log-container {
  margin 30px
}
.top-child {
  display flex
  margin 20px 0
}
.el-date-editor--datetimerange.el-input,
.el-date-editor--datetimerange.el-input__inner {
  width 569px
}
.el-input {
  width 229px
}
.btn-search {
  background-color #289E90
  color #ffffff
  font-size 15px
}
.btn-search:hover,
.btn-search:active,
.btn-search:focus {
  background-color #289E00
}
.btn-search:active {
  background-color #289E00
}
.bottom-child {
  padding 5px
  border 1px solid #EBEEF5
}
</style>
