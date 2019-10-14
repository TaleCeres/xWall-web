<template>
  <el-tabs v-model="activeName" class="ipfw-tabs" @tab-click="handleClick">
    <el-tab-pane label="源IP端口" name="srcIpPort">用户管理</el-tab-pane>
    <el-tab-pane label="目标IP端口" name="desIpPort">配置管理</el-tab-pane>
    <el-tab-pane label="MODBUS" name="modbus">
      <ModbusProtoColSetting />
    </el-tab-pane>
    <el-tab-pane label="DNP3" name="dnp3">
      <Dnp3ProtoColSetting />
    </el-tab-pane>
    <el-tab-pane label="OPC" name="opc">定时任务补偿</el-tab-pane>
    <el-tab-pane label="IEC104" name="iec104">
      <Iec104ProtoColSetting />
    </el-tab-pane>
    <el-tab-pane label="CIP" name="cip">
      <CipProtoColSetting />
    </el-tab-pane>
    <el-tab-pane label="PROFINET" name="profinet">定时任务补偿</el-tab-pane>
  </el-tabs>
</template>

<script type="text/ecmascript-6">
import ModbusProtoColSetting from './_tab-pane/ModbusProtoColSetting'
import Dnp3ProtoColSetting from './_tab-pane/Dnp3ProtoColSetting'
import Iec104ProtoColSetting from './_tab-pane/Iec104Setting'
import CipProtoColSetting from './_tab-pane/CipProtoColSetting'
export default {
  name: 'ipfwSetting',
  components: {
    ModbusProtoColSetting,
    Dnp3ProtoColSetting,
    Iec104ProtoColSetting,
    CipProtoColSetting
  },
  data() {
    return {
      activeName: 'cip'
    }
  },
  computed: {},
  created() { },
  mounted() { },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event)
    }
  },
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus"></style>
