<template>
  <div class="dst-ip">
    <div class="ip-item">
      <p>tcp</p>
      <el-radio-group v-model="ports.tcp.option" class="radio">
        <el-radio label="ALL">允许所有端口</el-radio>
        <el-radio label="NONE">阻断所有端口</el-radio>
        <el-radio label="SELECTED">允许以下端口(逗号分隔)</el-radio>
      </el-radio-group>
      <el-input v-if="ports.tcp.option === 'SELECTED'" v-model="ports.tcp.selections" />
    </div>
    <div class="ip-item">
      <p>udp</p>
      <el-radio-group v-model="ports.udp.option" class="radio">
        <el-radio label="ALL">允许所有端口</el-radio>
        <el-radio label="NONE">阻断所有端口</el-radio>
        <el-radio label="SELECTED">允许以下端口(逗号分隔)</el-radio>
      </el-radio-group>
      <el-input v-if="ports.udp.option === 'SELECTED'" v-model="ports.udp.selections" />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'DstIpPortSetting',
  components: {},
  data() {
    return {
      tmp: '',
      ports: {
        tcp: {
          option: '',
          selections: ''
        },
        udp: {
          option: '',
          selections: ''
        }
      },
    }
  },
  computed: {
    dialogVisible() {
      return this.$store.state.sensor.dDosdialogVisible
    }
  },
  watch: {
    dialogVisible(val, oldVal) {
      if (!val) this.$store.commit('sensor/SET_DST_IP_IN_TMP_WHITE_LIST', this.ports)
      if (val) this.initCheckState()
    },
  },
  created() { },
  mounted() {
    this.initCheckState()
  },
  methods: {
    initCheckState() {
      const {
        tcp: {
          option: tcpOption,
          selections: tcpSelections
        },
        udp: {
          option: udpOption,
          selections: udpSelections
        }
      } = this.$store.state.sensor.tmpWhitelist.accessPorts
      this.ports.tcp = {
        option: tcpOption,
        selections: tcpSelections
      }
      this.ports.udp = {
        option: udpOption,
        selections: udpSelections
      }
    }
  },
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.dst-ip {
  .ip-item {
    height 90px
    p {
      font-size 18px
      margin 5px
    }
    .radio {
      margin 5px
    }
  }
}
</style>
