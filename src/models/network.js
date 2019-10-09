import {
  post,
  get,
  put,
} from '@/utils/request'
import { saveToken } from '../utils/cookie'

//「网络设置」页面
export default class NetWork {
  
  // 获取「防火墙管理口」的IP设置(目前只返回一个对象，不是数组)
  static async getSensor() {
    const data = await get('api/sensor')
    // return data
    return {
      "name": "Sensor",
      "ip": "192.168.1.149",
      "netmask": "255.255.255.0",
      "mac": "40:8d:5c:aa:b5:60",
      "serialNumber": "AA000000000400019073",
    }
  }

  /**
   * 修改「防火墙管理口」的IP设置
   *
   * @static
   * @param {*} sensor
            {
              "name": "Sensor",
              "ip": "192.168.1.149",
              "netmask": "255.255.255.0",
              "mac": "40:8d:5c:aa:b5:60",
              "serialNumber": "AA000000000400019073",
            }
   * @returns
   */
  static async updateSensor(sensor) {
    const data = await post('api/sensor', sensor)
    // return data
    return {
      "name": "NewSensor",
      "ip": "192.168.1.149",
      "netmask": "255.255.255.0",
      "mac": "40:8d:5c:aa:b5:60",
      "serialNumber": "AA000000000400019073",
    }
  }

}