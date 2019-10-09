import {
  post,
  get,
  put,
} from '@/utils/request'
import { saveToken } from '../utils/cookie'

export default class User {
  /**
   * 登录
   * @static
   * @param {*} username 用户账号
   * @param {*} password 密码
   */
  static async getToken(username, password) {
    const data = await post('login', {
      username,
      password
    })
    saveToken(data.token)
    return data
  }

  static async login(username, password) {
    const data = await post('login', {
      username,
      password
    })
    saveToken(data.token)
    return data
  }

  // 登出
  static async logout() {
    const data = await get('logout')
    return data
  }

  // 创建用户
  static async createUser(username, password, role) {
    const data = await post('api/user', {
      username, password, role
    })
    return data
  }

  // 删除用户
  static async deleteUser(username) {
    const data = await post('api/userdelete', {
    })
    return data
  }

  // 修改用户(目前只能修改密码)
  static async updateUser(username, password) {
    const data = await post('api/user/password', {
      username, 
      password
    })
    return data
  }
}
