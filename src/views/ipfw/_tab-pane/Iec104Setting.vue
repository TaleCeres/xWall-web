<template>
  <div class="iec104">
    <div class="checked">
      <p class="note">协议完整性检查</p>
      <p>V 已开启</p>
      {{ protocolSetting }}
      {{ checkList }}
    </div>
    <div class="func-code">
      <p class="note">功能码</p>
      <div class="content">
        <el-checkbox-group v-model="checkList">
          <el-checkbox v-for="item in funcCodeList" :key="item.value" :label="item.name" />
        </el-checkbox-group>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { iec104Data as funcCodeList } from 'assets/data/funcCode'
import { transfromValue2Name, transfromName2Value } from '@/utils/libs'
export default {
  name: 'Iec104ProtoColSetting',
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
        formats: transfromName2Value(this.checkList, funcCodeList)
      }
    },
    dialogVisible() {
      return this.$store.state.sensor.dDosdialogVisible
    }
  },
  watch: {
    protocolSetting(val, oldVal) {
      this.$store.commit('sensor/SET_IEC104_IN_TMP_WHITE_LIST', val)
    },
    // 打开则重新勾选
    dialogVisible(val, oldVal) {
      if (val) this.initCheckState()
    }
  },
  mounted() {
    this.initCheckState()
  },
  methods: {
    initCheckState() {
      const { formats: functionCodes } = this.$store.state.sensor.tmpWhitelist.iec104
      this.checkList = transfromValue2Name(functionCodes, funcCodeList)
    }
  },
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.iec104 {
  .note {
  }
  .checked {
    margin 10px 0
  }
  .func-code {
  }
}
</style>
