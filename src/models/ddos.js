import {
  post,
  get
} from '@/utils/request'

export default class User {
  /**
   * 获取「抗DDOS规则」信息
   * @static
   * @returns {*} 
   *  {
        name: 'Sensor',
        commonAttacksPrevention: [
            'land', // Land 攻击防护, 开启则写入数组
            'syn', // Syn Flood 攻击防护, 开启则写入数组
            'udp', // UDP Flood 攻击防护, 开启则写入数组
            'icmp', // ICMP Flood 攻击防护, 开启则写入数组
            'portscan', // 端口扫描攻击防护, 开启则写入数组
            'pingofdeath', // Ping of Death 攻击防护, 开启则写入数组
            'teardrop' // Teardrop 攻击防护, 开启则写入数组
        ]
      }
   */
  static async getDDOS() {
    const { data } = await get('xWall/api/sensor')
    return data.map(item => {
      const { name, commonAttacksPrevention } = item
      return {
        name,
        commonAttacksPrevention
      }
    })
  }

  /**
   * 修改「抗DDOS规则」配置
   * @static
   * @param {*} ctx
   * {
      // 其他参数无需修改, 一并传回
      "commonAttacksPrevention": [
      "land",  // Land 攻击防护, 开启则写入数组
      "syn",  // Syn Flood 攻击防护, 开启则写入数组
      "udp",  // UDP Flood 攻击防护, 开启则写入数组
      "icmp",  // ICMP Flood 攻击防护, 开启则写入数组
      "portscan",  // 端口扫描攻击防护, 开启则写入数组
      "pingofdeath",  // Ping of Death 攻击防护, 开启则写入数组
      "teardrop"  // Teardrop 攻击防护, 开启则写入数组
      ]
      }
   */
  static async setDDOS(ctx) {
    const data = await post('xWall/api/sensor', ctx)
    return data
  }
}
