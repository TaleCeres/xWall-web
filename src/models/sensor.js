import {
  post,
  get,
} from '@/utils/request'

import store from '@/store'

export default class Sensor {
  static async getSensor() {
    const data = await get('xWall/api/sensor')
    return data
  }

  static async updateSensor() {
    const data = await post('xWall/api/sensor', store.state.sensor.ctx)
    return data
  }
  
  static async updateProtectNode() {
    let protectNode = JSON.parse(JSON.stringify(store.state.sensor.tmpProtectedNode))
    // 数据处理
    let { types: rawTypes, whitelist } = protectNode
    let types = rawTypes.map(item => item.toLowerCase())
    const entireTypes = ['cip', 'dnp3', 'dos', 'iec104', 'modbus', 'opc', 'profinet']
    const lackTypes = entireTypes.filter(item => !types.includes(item))
    lackTypes.forEach(item => {
      if (item in whitelist) {
        if (item === 'iec104') {
          whitelist[item].formats = []
        } else {
          whitelist[item].functionCodes = []
        }
      }
    })
    protectNode.types = types
    protectNode.whitelist = whitelist
    // 发送请求
    await post('xWall/api/protectednode', protectNode)
    let data = await Sensor.getSensor()
    return data
  }
}
