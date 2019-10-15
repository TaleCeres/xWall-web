import {
  post,
  get,
  put,
} from '@/utils/request'

export default class SystemAdmin {
  // 管理中心IP设置
  static async setIpOfCenter(ctx) {
    const data = await post('xWall/api/sensor', ctx)
    return data
  }


  // 重启设备
  static async rebootDevice(ip) {
    const data = await post('xWall/api/sensor/reboot', ip)
    return data
  }
}
