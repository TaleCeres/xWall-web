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
    console.log('data', data)
    // return data
    return [{
      'name': 'Sensor',
      'ip': '192.168.1.149',
      'netmask': '255.255.255.0',
      'mac': '40:8d:5c:aa:b5:60',
      'serialNumber': 'AA000000000400019073',
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
