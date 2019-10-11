/* 用户配置 */
/* eslint-disable */

import { removeToken } from '@/utils/cookie'

const state = {
  logined: true, // 是否登录
  username: 'test', // 当前用户
  auth: 'admin', // 普通用户和管理员(admin)
}

const getters = {}

const mutations = {
  SET_LOGINED(state, isLogined) {
    state.logined = isLogined
  },
  SET_USERNAME(state, username) {
    state.username = username
  },
  SET_USER_AUTH(state, auth) {
    state.auth = auth
  }
}

const actions = {
  setUser({ commit }, user) {
    commit('SET_LOGINED', true)

    let { username, role: auth } = user
    commit('SET_USERNAME', username)
    commit('SET_USER_AUTH', auth)
  },
  logout({ commit }) {
    removeToken()
    commit('SET_LOGINED', false)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
