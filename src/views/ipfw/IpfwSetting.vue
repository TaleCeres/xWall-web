<template>
  <div class="ipfw-setting">
    <el-form ref="form" :model="form" status-icon label-width="180px" class="form">
      <el-form-item label="名称描述">
        <el-input v-model="form.name" class="item" />
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
        <el-checkbox v-model="form.blacklist.autoDeploy" disabled class="item">自动部署</el-checkbox>
      </el-form-item>
      <el-form-item label="访问权限和白名单">
        <el-checkbox v-model="form.whitelist.enabled" class="item">开启 访问权限和白名单</el-checkbox>
      </el-form-item>
      <el-form-item label="支持协议" prop="protocol">
        <el-checkbox-group v-model="form.protocol" class="item">
          <el-checkbox label="MODBUS" name="protocol"></el-checkbox>
          <el-checkbox label="DNP3" name="protocol"></el-checkbox>
          <el-checkbox label="OPC" name="protocol"></el-checkbox>
          <el-checkbox label="IEC104" name="protocol"></el-checkbox>
          <el-checkbox label="CIP" name="protocol"></el-checkbox>
          <el-checkbox label="PROFINET" name="protocol"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
    </el-form>
    <el-tabs v-model="activeName" class="ipfw-tabs" @tab-click="handleClick">
      <el-tab-pane v-if="form.whitelist.enabled" label="源IP端口" name="srcIpPort">用户管理</el-tab-pane>
      <el-tab-pane v-if="form.whitelist.enabled" label="目标IP端口" name="desIpPort">配置管理</el-tab-pane>
      <el-tab-pane v-if="canSetting('MODBUS')" label="MODBUS" name="modbus">
        <ModbusProtoColSetting />
      </el-tab-pane>
      <el-tab-pane v-if="canSetting('DNP3')" label="DNP3" name="dnp3">
        <Dnp3ProtoColSetting />
      </el-tab-pane>
      <el-tab-pane v-if="canSetting('OPC')" label="OPC" name="opc">定时任务补偿</el-tab-pane>
      <el-tab-pane v-if="canSetting('CIP')" label="IEC104" name="iec104">
        <Iec104ProtoColSetting />
      </el-tab-pane>
      <el-tab-pane v-if="canSetting('CIP')" label="CIP" name="cip">
        <CipProtoColSetting />
      </el-tab-pane>
      <el-tab-pane v-if="canSetting('PROFINET')" label="PROFINET" name="profinet">定时任务补偿</el-tab-pane>
    </el-tabs>
  </div>
</template>

<script type="text/ecmascript-6">
import ModbusProtoColSetting from './_tab-pane/ModbusProtoColSetting'
import Dnp3ProtoColSetting from './_tab-pane/Dnp3ProtoColSetting'
import Iec104ProtoColSetting from './_tab-pane/Iec104Setting'
import CipProtoColSetting from './_tab-pane/CipProtoColSetting'
export default {
  name: 'IpfwSetting',
  components: {
    ModbusProtoColSetting,
    Dnp3ProtoColSetting,
    Iec104ProtoColSetting,
    CipProtoColSetting
  },
  data() {
    return {
      form: {
        name: '',
        make: '',
        model: '',
        ip: '',
        netmask: '',
        protocol: [],
        blacklist: {
          autoDeploy: true
        },
        whitelist: {
          enabled: true
        }
      },
      activeName: 'cip'
    }
  },
  computed: {},
  created() { },
  mounted() { },
  methods: {
    handleClick(tab, event) {
      // console.log(tab, event)
    },
    canSetting(protocolName) {
      return this.form.protocol.includes(protocolName)
    },
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
