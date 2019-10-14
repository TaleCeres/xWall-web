import {
  post,
  get,
  put,
} from '@/utils/request'
import store from '@/store'

const _ = require('lodash')

// 「网络设置」页面
export default class Network {
  // 获取「防火墙管理口」的IP设置(目前只返回一个对象，不是数组)
  static async getSensor() {
    const data = await get('xWall/api/sensor')
    return [{
      'name': data.data[0].name,
      'ip': data.data[0].ip,
      'netmask': data.data[0].netmask,
      'mac': data.data[0].mac || '',
      'serialNumber': data.data[0].serialNumber || '',
    }]
  }

  /**
   * 更新防火墙配置
   * @static
   * @returns
   */
  static async updateSensor() {
    const data = await post('xWall/api/sensor', store.state.sensor.ctx)
    return data
  }
}
