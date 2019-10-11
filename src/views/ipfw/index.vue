<template>
  <div class="ipfw">
    <div class="title">DDOS</div>
    <div class="table-box">
      <el-table border size="medium" header-row-class-nam="table-title" cell-class-name='table-cell' :data="list" style="width: 100%">
        <el-table-column label="名称">
          <template>
            eth0,brg0
          </template>
        </el-table-column>
        <el-table-column label="源地址" prop="land" />
        <el-table-column label="目的地址" prop="land" />
        <el-table-column label="工控协议" prop="land" />
        <el-table-column align="center">
          <template slot="header" slot-scope="scope">
            <el-button size="mini" type="success" @click="handleEdit(scope.$index, scope.row)">新增 +
            </el-button>
          </template>
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import SensorModel from '@/models/sensor'
export default {
  name: 'IpfwIndex',
  data() {
    return {
      list: []
    }
  },
  async created() {
    await SensorModel.getSensor()
    const { protectedNodes } = this.$store.state.sensor.ctx
    console.log('protectedNodes', protectedNodes)
    this.list = [...protectedNodes].map(item => {
      let {
        name, 
        whitelist: {
          accessList
        }, 
        ip: dstIP
      } = item
      return {
        name,
        srcIP: accessList.map(el => el.ip).join(','),
        dstIP
      }
    })
  }
}
</script>

<style scoped lang="stylus">
.table-box {
  padding 50px
  max-width 1300px
}
</style>
