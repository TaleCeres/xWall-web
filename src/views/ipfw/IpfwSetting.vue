<template>
  <div class="ipfw-setting">
    <el-form ref="form" :model="form" status-icon label-width="180px" class="form">
      <el-form-item label="名称描述">
        <el-input v-model="form.name" class="item"  style="width: 570px"/>
      </el-form-item>
      <el-form :inline="true" label-width="180px">
        <el-form-item label="制造商">
          <el-input v-model="form.make" class="item" />
        </el-form-item>
        <el-form-item label="型号" style="padding-left: 2px">
          <el-input v-model="form.model" class="item" />
        </el-form-item>
      </el-form>
      <el-form :inline="true" label-width="180px">
        <el-form-item label="目标IP">
          <el-input v-model="form.ip" class="item" />
        </el-form-item>
        <el-form-item label="掩码" style="padding-left: 2px">
          <el-input v-model="form.netmask" class="item" />
        </el-form-item>
      </el-form>
      <el-form-item label="黑名单">
        <el-checkbox v-model="blacklist.autoDeploy" disabled class="item">自动部署</el-checkbox>
      </el-form-item>
      <el-form-item label="访问权限和白名单">
        <el-checkbox v-model="whitelist.enabled" class="item">开启 访问权限和白名单</el-checkbox>
      </el-form-item>
      <el-form-item label="支持协议">
        <el-checkbox-group v-model="form.types" class="item">
          <el-checkbox label="modbus" name="types"></el-checkbox>
          <el-checkbox label="dnp3" name="types"></el-checkbox>
          <el-checkbox label="opc" name="types"></el-checkbox>
          <el-checkbox label="iec104" name="types"></el-checkbox>
          <el-checkbox label="cip" name="types"></el-checkbox>
          <el-checkbox label="profinet" name="types"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-form>
    <el-tabs v-model="activeName" class="ipfw-tabs" @tab-click="handleClick">
      <el-tab-pane v-if="whitelist.enabled" label="源IP端口" name="srcIpPort">
        <SrcIpPortSetting />
      </el-tab-pane>
      <el-tab-pane v-if="whitelist.enabled" label="目标IP端口" name="desIpPort">
        <DstIpPortSetting />
      </el-tab-pane>
      <el-tab-pane v-if="canSetting('modbus')" key="tab-modbus" label="modbus" name="modbus">
        <ModbusProtoColSetting />
      </el-tab-pane>
      <el-tab-pane v-if="canSetting('dnp3')" key="tab-dnp3" label="dnp3" name="dnp3">
        <Dnp3ProtoColSetting />
      </el-tab-pane>
      <el-tab-pane v-if="canSetting('opc')" key="tab-opc" label="opc" name="opc">
        <OpcProtocolSetting />
      </el-tab-pane>
      <el-tab-pane v-if="canSetting('iec104')" key="tab-iec104" label="iec104" name="iec104">
        <Iec104ProtoColSetting />
      </el-tab-pane>
      <el-tab-pane v-if="canSetting('cip')" key="tab-cip" label="cip" name="cip">
        <CipProtoColSetting />
      </el-tab-pane>
      <el-tab-pane v-if="canSetting('profinet')" key="tab-profinet" label="profinet" name="profinet">
        <ProfinetProtocolSetting />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
import SrcIpPortSetting from './_tab-pane/SrcIpPortSetting'
import DstIpPortSetting from './_tab-pane/DstIpPortSetting'
import ModbusProtoColSetting from './_tab-pane/ModbusProtoColSetting'
import Dnp3ProtoColSetting from './_tab-pane/Dnp3ProtoColSetting'
import OpcProtocolSetting from './_tab-pane/OpcProtocolSetting'
import Iec104ProtoColSetting from './_tab-pane/Iec104Setting'
import CipProtoColSetting from './_tab-pane/CipProtoColSetting'
import ProfinetProtocolSetting from './_tab-pane/ProfinetProtocolSetting'
export default {
  name: 'IpfwSetting',
  components: {
    SrcIpPortSetting,
    DstIpPortSetting,
    ModbusProtoColSetting,
    Dnp3ProtoColSetting,
    OpcProtocolSetting,
    Iec104ProtoColSetting,
    CipProtoColSetting,
    ProfinetProtocolSetting
  },
  data() {
    return {
      form: {
        name: '',
        make: '',
        model: '',
        ip: '',
        netmask: '',
        types: [],
      },
      blacklist: {
        autoDeploy: true,
      },
      whitelist: {
        enabled: true
      },
      activeName: 'cip'
    }
  },
  computed: {
    dialogVisible() {
      return this.$store.state.sensor.dDosdialogVisible
    }
  },
  watch: {
    dialogVisible() {
      this.initCheckState()
    }
  },
  created() { },
  mounted() {
    this.initCheckState()
  },
  methods: {
    handleClick(tab, event) {
    },
    canSetting(typeName) {
      return this.form.types.includes(typeName)
    },
    initCheckState() {
      this.whitelist = this.$store.state.sensor.tmpWhitelist
      this.form = this.$store.state.sensor.tmpProtectedNode
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.ipfw-setting {
  .form {
    .el-form-item {
      margin-bottom 5px
      .el-form-item__label {
        text-align center
        border-radius 4px
        background-color #FBFBFB
        border 1px solid #DCDFE6
      }
    }
    .item {
      margin-left 10px
    }
  }
}
</style>
