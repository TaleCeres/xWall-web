/* 防火墙配置 */
/* eslint-disable */
const state = {
  ctx: null, // 防火墙内容对象
}

const getters = {}

const mutations = {
  INIT_CTX(state, ctx) {
    state.ctx = ctx
  },
  // 抗DDOS设置，用于「/ddos/index」页面
  SET_DDOS(state, commonAttacksPrevention) {
    state.ctx.commonAttacksPrevention = commonAttacksPrevention
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
