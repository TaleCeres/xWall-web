
<template>
  <div class="modbus">
    <div class="checked">
      <p class="note">协议完整性检查</p>
      <p class="is-open"><i class="el-icon-check"></i> 已开启</p>
    </div>
    <div class="func-code">
      <p class="note">功能码</p>
      <div class="content">
        <el-checkbox-group v-model="checkList">
          <el-checkbox v-for="item in funcCodeList" :key="item.value" :label="item.name" />
        </el-checkbox-group>
      </div>
    </div>
    <div class="advanced">
      <p class="note">高级设置</p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { modbusData as funcCodeList } from 'assets/data/funcCode'
import { transfromValue2Name, transfromName2Value } from '@/utils/libs'
export default {
  name: 'ModbusProtoColSetting',
  components: {},
  data() {
    return {
      funcCodeList,
      checkList: []
    }
  },
  computed: {
    protocolSetting() {
      return {
        protocolChecking: true,
        functionCodes: transfromName2Value(this.checkList, funcCodeList)
      }
    },
    dialogVisible() {
      return this.$store.state.sensor.dDosdialogVisible
    }
  },
  watch: {
    protocolSetting(val, oldVal) {
      this.$store.commit('sensor/SET_MODBUS_IN_TMP_WHITE_LIST', val)
    },
    dialogVisible(val, oldVal) {
      // 关闭不清零, 重新打开则清零
      if (val) this.initCheckState()
    }
  },
  mounted() {
    this.initCheckState()
  },
  methods: {
    initCheckState() {
      const { functionCodes } = this.$store.state.sensor.tmpWhitelist.modbus
      this.checkList = transfromValue2Name(functionCodes, funcCodeList)
    }
  },
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.modbus {
  .note {
  }
  .checked {
    margin 10px 0
  }
  .func-code {
  }
}
</style>
