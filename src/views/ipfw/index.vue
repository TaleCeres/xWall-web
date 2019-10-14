<template>
  <div class="ipfw">
    <div class="title">DDOS</div>
    <div class="table-box">
      <el-table border size="medium" header-row-class-nam="table-title" cell-class-name='table-cell' :data="list" style="width: 100%">
        <el-table-column label="名称" prop="name" />
        <el-table-column label="源地址" prop="srcIP" />
        <el-table-column label="目的地址" prop="dstIP" />
        <el-table-column label="工控协议" prop="types" />
        <el-table-column align="center">
          <template slot="header">
            <el-button size="mini" type="success" @click="handleAdd">新增 +
            </el-button>
          </template>
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="编辑IP规则" :visible.sync="dialogVisible" width="800px">
      <IpfwSetting />
      <span slot="footer" class="dialog-footer">
        <el-button size="mini" @click="handleCancelEdit">取 消</el-button>
        <el-button size="mini" type="primary" @click="handleSaveEdit">保存</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import IpfwSetting from './ipfwSetting'
export default {
  name: 'IpfwIndex',
  components: {
    IpfwSetting
  },
  data() {
    return {
      dialogVisible: false,
      index: 0
    }
  },
  computed: {
    ...mapState({
      sensor: state => state.sensor.ctx
    }),
    protectedNodes() {
      if (this.sensor && this.sensor.protectedNodes) return this.sensor.protectedNodes
      return []
    },
    list() {
      return this.protectedNodes.map(item => {
        let {
          name,
          whitelist: {
            accessList
          },
          ip: dstIP,
          types
        } = item

        return {
          name,
          srcIP: accessList.map(el => el.ip).join(', '),
          dstIP,
          types: types.join(', ')
        }
      })
    }
  },
  watch: {
    dialogVisible(val, oldVal) {
      this.$store.commit('sensor/SET_DDOS_DIALOG_VISIBLE', val)
    },
    index(val, oldVal) {
      this.$store.commit('sensor/INIT_TMP_WHITE_LIST', val) 
    }
  },
  methods: {
    handleAdd() {

    },
    handleEdit(index, row) {
      this.dialogVisible = true
      this.index = index
      // console.log('data', this.$store.state.sensor.tmpWhitelist)
      // 弹出框取消，则再执行 sensor/INIT_TMP_WHITE_LIST
    },
    handleCancelEdit() {
      this.dialogVisible = false
    },
    handleSaveEdit() {
      this.$store.commit('sensor/SET_IP_RULE', this.index)
      this.dialogVisible = false
    }
  }
}
</script>

<style scoped lang="stylus">
.table-box {
  padding 50px
  max-width 1300px
}
</style>
