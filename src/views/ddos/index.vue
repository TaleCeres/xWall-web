<template>
  <div class="network">
    <div class="title">DDOS</div>
    <div class="table-box">
      <el-table border size="medium" header-row-class-nam="table-title" cell-class-name='table-cell' :data="list" style="width: 100%">
        <el-table-column label="网口">
          <template>
            eth0,brg0
          </template>
        </el-table-column>
        <el-table-column label="Land" prop="land">
        </el-table-column>
        <el-table-column prop="syn" label="Syn Flood" width="150">
        </el-table-column>
        <el-table-column prop="udp" label="UDP Flood" width="150">
        </el-table-column>
        <el-table-column prop="icmp" label="ICMP Flood" width="150">
        </el-table-column>
        <el-table-column prop="portscan" label="端口扫描" width="150">
        </el-table-column>
        <el-table-column prop="pingofdeath" label="Ping of Death" width="150">
        </el-table-column>
        <el-table-column prop="teardrop" label="Teardrop" width="150">
        </el-table-column>
        <el-table-column label="操作">
          <template>
            <el-button size="mini" @click="dialogFormVisible = true">编辑
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog v-loading="loading" title="编辑" :visible.sync="dialogFormVisible">
      <el-form :model="ddos">
        <el-form-item label="Land" label-width="200px">
          <el-switch v-model="ddos.land"></el-switch>
        </el-form-item>
        <el-form-item label="Syn Flood" label-width="200px">
          <el-switch v-model="ddos.syn"></el-switch>
        </el-form-item>
        <el-form-item label="UDP Flood" label-width="200px">
          <el-switch v-model="ddos.udp"></el-switch>
        </el-form-item>
        <el-form-item label="ICMP Flood" label-width="200px">
          <el-switch v-model="ddos.icmp"></el-switch>
        </el-form-item>
        <el-form-item label="端口扫描" label-width="200px">
          <el-switch v-model="ddos.portscan"></el-switch>
        </el-form-item>
        <el-form-item label="Ping of Death" label-width="200px">
          <el-switch v-model="ddos.pingofdeath"></el-switch>
        </el-form-item>
        <el-form-item label="Teardrop" label-width="200px">
          <el-switch v-model="ddos.teardrop"></el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleUpdate">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import ddosModel from '@/models/ddos'
import SensorModel from '@/models/sensor'
import { mapState } from 'vuex'
export default {
  name: 'ddos',
  data() {
    return {
      list: [],
      dialogFormVisible: false,
      commonAttacksPreventions: ['land', 'syn', 'udp', 'icmp', 'portscan', 'pingofdeath', 'teardrop'],
      ddos: {
        land: false,
        syn: false,
        udp: false,
        icmp: false,
        portscan: false,
        pingofdeath: false,
        teardrop: false
      },
      loading: false,
    }
  },
  computed: {
    ...mapState({
      ctx: state => state.sensor.ctx,
    }),
    commonAttacksPrevention() {
      if (this.ctx && this.ctx.commonAttacksPrevention) {
        return this.ctx.commonAttacksPrevention
      }
      return []
    }
  },
  watch: {
    commonAttacksPrevention() {
      this.getData()
    }
  },
  mounted() {},
  methods: {
    async getData() {
      this.list = []
      let { list, ddos } = this
      let arr = this.commonAttacksPrevention
      let info = {}
      this.commonAttacksPreventions.forEach(item => {
        if (arr.includes(item)) {
          ddos[item] = true
          info[item] = '开启'
        } else {
          ddos[item] = false
          info[item] = '关闭'
        }
      })
      list.push(info)
      this.list = list
      this.ddos = ddos
    },
    async handleUpdate() {
      // 处理数据
      let { ddos, commonAttacksPreventions } = this
      let arr = []
      commonAttacksPreventions.forEach(item => {
        if (ddos[item] === true) { arr.push(item) }
      })
      // 1. 更改「抗DDOS」配置（会在vuex中修改整个sensor）; 2. 更新整个sensor
      this.$store.commit('sensor/SET_DDOS', arr)
      this.loading = true
      SensorModel.updateSensor().then(res => {
        this.loading = false
        this.dialogFormVisible = false
      })
    }
  }
}
</script>

<style scoped lang="stylus">
.table-box {
  padding 50px
  width 1300px
  .table-title {
    font-size 20px
    text-align center
    font-weight bold
    background #f4f4f7
  }
  .table-cell {
    font-size 18px
  }
}
</style>
