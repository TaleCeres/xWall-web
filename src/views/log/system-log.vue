<template>
  <div class='log-container'>
    <div class='top-child'>
      <el-date-picker v-model="time" 
        value-format="yyyy/MM/dd" format="yyyy/MM/dd" type="datetimerange" 
        start-placeholder="起始时间" end-placeholder="结束时间" :default-time="['12:00:00']">
      </el-date-picker>
      <el-button class='btn-search' icon="el-icon-search" @click="getSystemLog">查找</el-button>
      <el-button class='btn-copy' icon="el-icon-copy" @click="backupSystemLog">备份</el-button>
      <el-button class='btn-clear' icon="el-icon-clear" @click="clearSystemLog">清空</el-button>
    </div>
    <div class='middle-child'>
      <el-table :data="tableData" style="width: 100%" border :default-sort="{prop: 'date', order: 'descending'}" :header-cell-style="{'background-color':'#F2F2F2'}">
        <el-table-column prop="time" label="时间" width="180">
        </el-table-column>
        <el-table-column prop="event" label="事件">
        </el-table-column>
      </el-table>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
import LogModel from '@/models/log'
export default {
  name: 'SystemLog',
  data() {
    return {
      value: '',
      time: '',
      tableData: [],
      from: 0,
      end: 0
    }
  },
  methods: {
    // 获取「系统日志」的数据列表
    async getSystemLog(from, end) {
      const systemLogList = await LogModel.getSystemLog({
        from: this.time[0],
        end: this.time[1]
      })
      this.tableData = systemLogList
    },
    // 备份「系统日志」，前端发送指令，服务器自动完成
    async backupSystemLog() {
      await LogModel.backupSystemLog()
    },
    clearSystemLog() {
      this.$confirm('此操作将永久清空系统日志, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        LogModel.clearSystemLog()
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
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
  background-color #3FADFC
  color #ffffff
  font-size 15px
}
.btn-search:hover,
.btn-search:active,
.btn-search:focus {
  color #ffffff
  background-color #3FADFC
}
.btn-search:active {
  color #ffffff
  background-color #3FADFC
}
.btn-copy {
  background-color #16964B
  color #ffffff
  font-size 15px
}
.btn-copy:hover,
.btn-copy:active,
.btn-copy:focus {
  color #ffffff
  background-color #289E00
}
.btn-copy:active {
  color #ffffff
  background-color #289E00
}
.btn-clear {
  background-color #9B0a0d
  color #ffffff
  font-size 15px
}
.btn-clear:hover,
.btn-clear:active,
.btn-clear:focus {
  color #ffffff
  background-color #9B0a0d
}
.btn-clear:active {
  color #ffffff
  background-color #9B0a0d
}
</style>
