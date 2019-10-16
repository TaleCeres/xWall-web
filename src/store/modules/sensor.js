/* 防火墙配置 */
/* eslint-disable */
const state = {
  ctx: {
    name: '',
    mode: '',
    ip: '',
    netmask: '',
    mac: '',
    serialNumber: ''
  }, // 防火墙内容对象
  tmpWhitelist: {
    enabled: false,
    dos: undefined,
    accessList: [],
    accessPorts: {},
    modbus: {},
    dnp3: {},
    opc: {},
    cip: {
      // protocolChecking: true,
      // functionCodes: [
      //   '0x01',
      //   '0x04',
      //   '0x06',
      //   '0x0A',
      //   '0x0E'
      // ]
    },
    iec104: {
      // protocolChecking: true,
      // formats: [
      //   '0x04',
      //   '0x0E'
      // ]
    },
    profinet: {}
  },
  tmpProtectedNode: {
    name: '',
    make: '',
    model: '',
    ip: '',
    netmask: '',
    types: [],
    blacklist: {
      autoDeploy: true
    },
    whitelist: []
  },
  dDosdialogVisible: false
}

const getters = {

}

const mutations = {
  INIT_CTX(state, ctx) {
    state.ctx = ctx
  },
  // 抗DDOS设置，用于「/ddos/index」页面
  SET_DDOS(state, commonAttacksPrevention) {
    state.ctx.commonAttacksPrevention = commonAttacksPrevention
  },
  SET_DDOS_DIALOG_VISIBLE(state, bool) {
    state.dDosdialogVisible = bool
  },
  SET_MODE(state, mode) {
    state.ctx.mode = mode
  },
  // 初始化IP配置
  INIT_TMP_WHITE_LIST(state, index) {
    if (state.ctx && state.ctx.protectedNodes.length > 0 && state.ctx.protectedNodes[index].whitelist) {
      state.tmpWhitelist = state.ctx.protectedNodes[index].whitelist
      state.tmpProtectedNode = state.ctx.protectedNodes[index]
    }
  },
  // 设置协议
  SET_SRC_IP_IN_TMP_WHITE_LIST(state, obj) {
    state.tmpWhitelist.accessList = obj
    // console.log('vuex', state.tmpWhitelist.accessList)
  },
  SET_DST_IP_IN_TMP_WHITE_LIST(state, obj) {
    state.tmpWhitelist.accessPorts = obj
  },
  SET_MODBUS_IN_TMP_WHITE_LIST(state, obj) {
    state.tmpWhitelist.modbus = obj
  },
  SET_DNP3_IN_TMP_WHITE_LIST(state, obj) {
    state.tmpWhitelist.dnp3 = obj
  },
  SET_OPC_IN_TMP_WHITE_LIST(state, obj) {
    state.tmpWhitelist.opc = obj
  },
  SET_IEC104_IN_TMP_WHITE_LIST(state, obj) {
    state.tmpWhitelist.iec104 = obj
  },
  SET_CIP_IN_TMP_WHITE_LIST(state, obj) {
    state.tmpWhitelist.cip = obj
  },
  SET_PROFINET_IN_TMP_WHITE_LIST(state, obj) {
    state.tmpWhitelist.profinet = obj
  },
  // 「ipfw/index」保存时，修改ctx.protectedNodes数组
  SET_IP_RULE(state, index) {
    if (state.ctx && state.ctx.protectedNodes.length > 0 && state.ctx.protectedNodes[index].whitelist) {
      state.ctx.protectedNodes[index].whitelist = state.tmpWhitelist
      state.ctx.tmpProtectedNode = state.ctx.protectedNodes[index]
    }
  },
}

const actions = {

}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
