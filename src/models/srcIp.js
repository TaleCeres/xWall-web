import {
  post,
  get,
  _delete
} from '@/utils/request'

export default class User {
  /**
   * 获取源IP设置
   * @static
   * @returns {*}
   *  {
      "externalNodes": [
        {
          "sensor": "5d89b25cb83368602ba727a8",
          "sensorIp": "192.168.1.149",
          "name": "11",  // 名称
          "ip": "1.1.1.1",  // 源IP
          "netmask": "255.255.255.0",  // MAC地址
          "_id": "5d8c2b41059ef44a07a1257e",
          "selected": true,
          "ipMacBinding": false,  // IP/MAC绑定
          "mac": "00:16:EA:AE:3C:40"  // MAC地址(未启用mac绑定时, 无效)
        }
      ]
    }
   */
  static async getExternalNodes() {
    const { data } = await get('xWall/api/sensor')
    return data.map(item => {
      const { externalNodes } = item
      return {
        externalNodes
      }
    })
  }

  /**
   * 添加/设置源IP
   * @static
   * @param {*} externalnode
   * {
      "sensor": "5d89b25cb83368602ba727a8",
      "sensorIp": "192.168.1.149",
      "name": "11",  // 名称
      "ip": "1.1.1.1",  // 源IP
      "netmask": "255.255.255.0",  // MAC地址
      "_id": "5d8c2b41059ef44a07a1257e",
      "selected": true,
      "ipMacBinding": false,  // IP/MAC绑定
      "mac": "00:16:EA:AE:3C:40"  // MAC地址(未启用mac绑定时, 无效)
      }
   */
  static async setExternalNode(externalnode) {
    const data = await post('xWall/api/externalnode', externalnode)
    return data
  }

  /**
   * 删除源IP
   * @static
   * @param {*} id externalnode_id
   */
  static async deleteExternalNode(id) {
    const data = await _delete(`xWall/api/externalnode/${id}`)
    return data
  }
}
