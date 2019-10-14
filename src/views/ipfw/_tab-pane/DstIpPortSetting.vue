<template>
  <div class="dst-ip">
    <div class="tcp">
      <p>tcp</p>
      <el-radio-group v-model="tcpRadio">
        <el-radio label="ALL">允许所有端口</el-radio>
        <el-radio label="NONE">阻断所有端口</el-radio>
        <el-radio label="SELECTED">允许以下端口(逗号分隔)</el-radio>
      </el-radio-group>
    </div>
    <div class="udp">
      <p>udp</p>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'DstIpPortSetting',
  components: {},
  data() {
    return {
      tcpRadio: '',
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
  computed: {},
  watch: {
    dialogVisible(val, oldVal) {
      if (val) this.initCheckState()
    }
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

<style scoped lang="stylus" rel="stylesheet/stylus"></style>
