<template>
  <div>
    <h2>系统日志</h2>
    <el-date-picker v-model="value" 
      type="daterange"
      range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期"
      format="yyyy/MM/dd" value-format="yyyy/MM/dd" 
      @change="handleSelectedDate"
    >
    </el-date-picker>
  </div>
</template>

<script type="text/ecmascript-6">
import LogModel from '@/models/log'
export default {
  name: 'SystemLog',
  data() {
    return {
      value: ''
    }
  },
  methods: {
    // 设置「时间区间」
    handleSelectedDate(val) {
      console.log('val', val)
      const from = val[0] // 开始日期
      const end = val[1] // 结束日期
      console.log(from, end)
      this.getSystemLog(from, end)
    },
    // 获取「系统日志」的数据列表
    async getSystemLog(from, end) {
      const systemLogList = await LogModel.getSystemLog(from, end)
    },
    // 备份「系统日志」，前端发送指令，服务器自动完成
    async backupSystemLog() {

    }
  }
}
</script>

<style scoped lang="stylus"></style>
