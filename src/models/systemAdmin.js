import {
  post,
  get,
  put,
} from '@/utils/request'

export default class SystemAdmin {
  // 重启设备
  static async rebootDevice() {
    const data = await post('xWall/api/sensor/reboot')
    // return data
    return {
      "data": "success"
    }
  }
}