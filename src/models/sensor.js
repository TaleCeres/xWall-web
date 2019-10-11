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
}
