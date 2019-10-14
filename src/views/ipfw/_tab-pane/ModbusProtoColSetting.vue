
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
      <el-form ref="form" :model="protocol" status-icon label-width="180px" class="form">
        <el-form-item label="只读布尔">
          <el-row :gutter="10">
            <el-col :span="7">
              <el-input v-model="protocol.discreteInputs.addressRange" placeholder="其实地址范围(下限, 上限)" class="item" />
            </el-col>
            <el-col :span="7">
              <el-input v-model="protocol.discreteInputs.quantityRange" class="item" />
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="只读寄存器">
          <el-row :gutter="10">
            <el-col :span="7">
              <el-input v-model="protocol.inputRegisters.addressRange" class="item" />
            </el-col>
            <el-col :span="7">
              <el-input v-model="protocol.inputRegisters.quantityRange" class="item" />
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="读写布尔">
          <el-row :gutter="10">
            <el-col :span="7">
              <el-input v-model="protocol.coils.addressRange" class="item" />
            </el-col>
            <el-col :span="7">
              <el-input v-model="protocol.coils.quantityRange" class="item" />
            </el-col>
            <el-col :span="7">
              <el-input v-model="protocol.coils.valueRange" class="item" />
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="读写寄存器">
          <el-row :gutter="10">
            <el-col :span="7">
              <el-input v-model="protocol.holdingRegisters.addressRange" class="item" />
            </el-col>
            <el-col :span="7">
              <el-input v-model="protocol.holdingRegisters.quantityRange" class="item" />
            </el-col>
            <el-col :span="7">
              <el-input v-model="protocol.holdingRegisters.valueRange" class="item" />
            </el-col>
          </el-row>
        </el-form-item>
      </el-form>
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
      protocol: {
        protocolChecking: true,
        discreteInputs: { // 只读布尔
          addressRange: '',
          quantityRange: ''
        },
        inputRegisters: { // 只读寄存器
          addressRange: '',
          quantityRange: ''
        },
        coils: { // 读写布尔
          addressRange: '',
          quantityRange: '',
          valueRange: ''
        },
        holdingRegisters: { // 读写寄存器
          addressRange: '',
          quantityRange: '',
          valueRange: ''
        },
        functionCodes: []
      },
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
      this.protocol.functionCodes = val
      this.$store.commit('sensor/SET_MODBUS_IN_TMP_WHITE_LIST', this.protocol)
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
      this.protocol = this.$store.state.sensor.tmpWhitelist.modbus
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
    margin 10px 0
  }
  .advanced {
    .form {
      margin 10px 0
    }
  }
}
</style>
