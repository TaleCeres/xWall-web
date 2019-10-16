<template>
  <div class="src-ip">
    {{ arrayData }}
    <el-checkbox-group v-model="checkList">
      <div v-for="item in externalNodes" :key="item.ip" class="item">
        <el-checkbox :label="item.name+'('+item.ip+')'" :value="item.value" style="font-size: 17px">
        </el-checkbox>
        <div class="content">
          <p class="title">TCP</p>
          <el-radio-group v-model="item.tcpPorts.option" class="radio">
            <el-radio label="ALL">允许所有端口</el-radio>
            <el-radio label="NONE">阻断所有端口</el-radio>
            <el-radio label="SELECTED">允许以下端口(逗号分隔)</el-radio>
          </el-radio-group>
          <el-input v-show='item.tcpPorts.option === "SELECTED" ' v-model="item.tcpPorts.selections" placeholder="请输入内容"></el-input>
        </div>
        <div class="content">
          <p class="title">UDP</p>
          <el-radio-group v-model="item.udpPorts.option">
            <el-radio label="ALL">允许所有端口</el-radio>
            <el-radio label="NONE">阻断所有端口</el-radio>
            <el-radio label="SELECTED">允许以下端口(逗号分隔)</el-radio>
          </el-radio-group>
          <el-input v-show='item.udpPorts.option === "SELECTED" ' v-model="item.udpPorts.selections" placeholder="请输入内容"></el-input>
        </div>
        <div class="content">
          <p class="title">ICMP</p>
          <el-radio-group v-model="item.icmp.option">
            <el-radio label="ALLOW_ALL">允许所有端口</el-radio>
            <el-radio label="BLOCK_ALL">阻断所有端口</el-radio>
          </el-radio-group>
        </div>
      </div>
    </el-checkbox-group>
    <el-button type="primary" @click="handleSave()" size="mini" style="margin-left: 200px">保存设置</el-button>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'SrcIpPortSetting',
  components: {},
  data() {
    return {
      externalNodes: [],
      accessList: [],
      checkList: [],
      tcpRadio: false,
      udpRadio: false,
    }
  },
  computed: {
    dialogVisible() {
      return this.$store.state.sensor.dDosdialogVisible
    },
    arrayData() {
      let { externalNodes, checkList } = this
      let list = checkList.map(externalNode => externalNode.split('(')[1].slice(0, -1))
      let dataArr = []
      externalNodes.forEach(item => {
        if (list.includes(item.ip)) {
          let data = {
            ip: item.ip,
            name: item.name,
            icmp: item.icmp,
            selected: true
          }
          if (item.tcpPorts.option === 'SELECTED') {
            data.tcpPorts = item.tcpPorts
          } else {
            data.tcpPorts = { option: item.tcpPorts.option }
          }
          if (item.udpPorts.option === 'SELECTED') {
            data.udpPorts = item.udpPorts
          } else {
            data.udpPorts = { option: item.udpPorts.option }
          }
          dataArr.push(data)
        }
      })
      // 提交时候的数据
      // console.log('endData', dataArr)
      return dataArr
    }
  },
  watch: {
    dialogVisible(val, oldVal) {
      if (val) this.initCheckState()
    },
    // externalNodes() {
    //   this.initData()
    // },
    // checkList() {
    //   this.initData()
    // }
  },
  created() {
  },
  mounted() {
    this.initCheckState()
  },
  methods: {
    initCheckState() {
      let { externalNodes } = this.$store.state.sensor.ctx
      let { accessList } = this.$store.state.sensor.tmpWhitelist
      let list = []
      accessList.forEach(item => {
        for (let i = 0; i < externalNodes.length; i += 1) {
          if (item.ip === externalNodes[i].ip) {
            item.name = externalNodes[i].name
          }
        }
        list.push(`${item.name}(${item.ip})`)
      })
      externalNodes.forEach((item, index) => {
        if (accessList[index]) {
          item.udpPorts = accessList[index].udpPorts
          if (typeof item.udpPorts.selections === 'undefined') {
            this.$set(item.udpPorts, 'selections', '')
          }
          item.tcpPorts = accessList[index].tcpPorts
          if (typeof item.tcpPorts.selections === 'undefined') {
            this.$set(item.tcpPorts, 'selections', '')
          }
          item.icmp = accessList[index].icmp
        } else {
          let tcpPorts = {
            option: '',
            selections: ''
          }
          let udpPorts = {
            option: '',
            selections: ''
          }
          let icmp = {
            option: ''
          }
          this.$set(item, 'tcpPorts', tcpPorts)
          this.$set(item, 'udpPorts', udpPorts)
          this.$set(item, 'icmp', icmp)
        }
      })
      this.checkList = list
      this.accessList = accessList
      this.externalNodes = externalNodes
    },
    handleSave() {
      this.$store.commit('sensor/SET_SRC_IP_IN_TMP_WHITE_LIST', this.arrayData)
    }
  },
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .src-ip {
    .item {
      .content {
        padding 5px 10px
        p {
          font-size 14px
          margin 5px
        }
        .radio {
          margin 5px
        }
        .title {
          height 20px
        }
      }
    }
  }
</style>
