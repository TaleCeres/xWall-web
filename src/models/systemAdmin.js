import {
  post,
  get,
  put,
} from '@/utils/request'

export default class SystemAdmin {
  // 管理中心IP设置
  static async setIpOfCenter(ip) {
    const data = await post('xWall/api/sensor', {
      remoteIp: ip
    })
    // return data
    return {
      'data': 'success'
    }
  }


  // 重启设备
  static async rebootDevice() {
    const data = await post('xWall/api/sensor/reboot')
    // return data
    return {
      'data': 'success'
    }
  }
}