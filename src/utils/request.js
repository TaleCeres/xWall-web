/* eslint-disable */
import axios from 'axios'
import store from '@/store'
import { Notification } from 'element-ui'
import { getToken } from './cookie'

// 创建请求实例
const _axios = axios.create({
  // baseURL: 'http://192.168.1.124:3001',
  baseURL: 'http://192.168.3.89:8081',
  timeout: 5000 // request timeout
})

// request 拦截
_axios.interceptors.request.use(
  config => {
    config.headers['token'] = getToken()
    return config
  },
  error => {
    Promise.reject(error)
  },
)

// request 拦截
_axios.interceptors.response.use(response => {
  const {
    status,
    message,
    data,
    error
  } = response
  handleRes(response, data)

  if (status > 200) {
    if (error) message = error
    Notification({
      message: message || '服务端异常',
      type: 'warning',
      duration: 5 * 1000
    })
    // return Promise.reject(response.message || '服务端异常')
    return message || '服务端异常'
  }
  return data
  }, error => {
    let message = undefined
    if (error.response) {
      message = error.response.data
    }
    Notification({
      message: message || '服务端异常',
      type: 'warning',
      duration: 5 * 1000
    })
    // return Promise.reject(message)
    return message || '服务端异常'
  },
)

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export function post(url, data = {}, params = {}) {
  return _axios({
    method: 'post',
    url,
    data,
    params,
  })
}

/**
 * @param {string} url
 * @param {object} params
 */
export function get(url, params = {}) {
  return _axios({
    method: 'get',
    url,
    params,
  })
}

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export function put(url, data = {}, params = {}) {
  return _axios({
    method: 'put',
    url,
    params,
    data,
  })
}

/**
 * @param {string} url
 * @param {object} params
 */
export function _delete(url, params = {}) {
  return _axios({
    method: 'delete',
    url,
    params,
  })
}

function handleRes(res, data) {
  const {
    baseURL,
    url: intactURL,
    method,
    headers: {
      token
    }
  } = res.config
  if (intactURL.split(baseURL)[1] === '/login' && method === 'post') data.token = token
  if (intactURL.split(baseURL)[1] === '/xWall/api/sensor' && method === 'get') {
    const ctx = data.data[0]
    store.commit('sensor/INIT_CTX', ctx)
  }
  if (intactURL.split(baseURL)[1] === '/xWall/api/sensor' && method === 'post') {
    const ctx = data.data
    store.commit('sensor/INIT_CTX', ctx)
  }
}

export default _axios
