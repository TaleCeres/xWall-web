import {
  post,
  get,
  _delete
} from '@/utils/request'

export default class Ipfw {
  // 获取IP规则列表(通过获取sensor)
  static async getIpfw() {
    const data = await get('xWall/api/sensor')
    return data
  }

  /**
   * 添加IP层规则
   * @static
   * @param {*} protectednode
   * {
   *   "sensorIp": "192.168.1.149",
        "deploy": "SUCCESS"
   * }

   */
  static async addProtectedNode(protectednode) {
    // const data = await post('xWall/api/protectednode')
    // return data
    return {
      'data': {
        'sensorIp': '192.168.1.149',
        'deploy': 'SUCCESS'
      }
    }
  }

  /**
   * 修改IP层规则
   * @static
   * @param {*} protectednode
   * {
  "data": {
    "sensor": "5d89b25cb83368602ba727a8",  // sensorID, 获取sensor信息, 返回值中"_id"
    "blacklist": {
      "autoDeploy": true  // 黑名单, 是否自动部署
    },
    "whitelist": {
      "enabled": true,  // 白名单, 开启访问权限和白名单保护, false则以下参数不生效
      "dos": {
        "enabled": false,  // 暂时不清楚作用
        "threshold": 5  // 暂时不清楚作用
      },
      "accessList": [  // 可访问外来节点
        {
          "ip": "1.1.1.1",  // 配置的外部端口
          "icmp": {  // ICMP协议端口设置
            "option": "ALLOW_ALL" // ALLOW_ALL允许所有, BLOCK_ALL拒绝所有
          },
          "tcpPorts": {  // 可访问外来节点, TCP协议端口设置
            "option": "SELECTED",  // 为ALL时, 允许所有端口(selections不生效); 为NONE时, 拒绝所有端口(selections不生效); 为SELECTED时, 只允许选择端口(selections生效)
            "optionTmp": "SELECTED",  // 暂时不清楚作用
            "selections": "1,2,3"  // option为ALL|NONE时不生效, 为SELECTED时,生效, 以逗号隔开的数字序列
          },
          "udpPorts": {  // 可访问外来节点, UDP协议端口设置, 参数同上
            "option": "NONE",
            "optionTmp": "NONE"
          }
        }
      ],  // 可访问外来节点
      "accessPorts": {
        "tcp": {  // 开放端口, TCP协议
          "option": "ALL",  // 为ALL时, 允许所有端口(selections不生效); 为NONE时, 拒绝所有端口(selections不生效); 为SELECTED时, 只允许选择端口(selections生效)
          "selections": ""  // option为ALL|NONE时不生效, 为SELECTED时,生效, 以逗号隔开的数字序列
        },
        "udp": {  // 开放端口, UDP协议, 参数同上
          "option": "ALL"
        }
      },
      "modbus": {
        "protocolChecking": true,  // modbus协议完整性检查, "支持协议"中勾选"modbus"后默认开启, 不支持修改
        "discreteInputs": {  // 只读布尔
          "addressRange": "",  // 起始地址范围, 格式为 下限,上限, 数值范围0-65280
          "quantityRange": ""  // 数量范围, 格式为 下限,上限, 数值范围0-65280
        },
        "inputRegisters": {  // 只读寄存器
          "addressRange": "",  // 起始地址范围, 格式 下限,上限, 数值范围0-65280
          "quantityRange": ""  // 数量范围, 格式为 下限,上限, 数值范围0-65280
        },
        "coils": {  // 读写布尔
          "addressRange": "",  // 起始地址范围, 格式 下限,上限, 数值范围0-65280
          "quantityRange": "",  // 数量范围, 格式 下限,上限, 数值范围0-65280
          "valueRange": ""  // 数值选相关, 格式 逗号隔开, 数值范围0或65280
        },
        "holdingRegisters": {  // 读写寄存器
          "addressRange": "",  // 起始地址范围, 格式 下限,上限, 数值范围0-65280
          "quantityRange": "",  // 数量范围, 格式 下限,上限, 数值范围0-65280
          "valueRange": ""  // 数值选相关, 格式 逗号隔开, 数值范围0-65280
        },
        "functionCodes": []  // 功能码, 勾选相应的功能码, 将其写入改数组
      },
      "dnp3": {
        "protocolChecking": true,  // dnp3协议完整性检查, "支持协议"中勾选"dnp3"后默认开启, 不支持修改
        "functionCodes": [  // 功能码, 勾选相应的功能码, 将其写入改数组
          "0x00"
        ]
      },
      "opc": {
        "protocolChecking": true,  // opc协议完整性检查, "支持协议"中勾选"opc"后默认开启, 不支持修改
        "dynamicPort": true  // 动态端口检查, "支持协议"中勾选"opc"后默认开启, 不支持修改
      },
      "cip": {
        "protocolChecking": true,  // cip协议完整性检查, "支持协议"中勾选"cip"后默认开启, 不支持修改
        "functionCodes": []  // 功能码, 勾选乡音功能吗, 将其写入数组
      },
      "iec104": {
        "protocolChecking": true,  // IEC104协议完整性检查, "支持协议"中勾选"IEC104"后默认开启, 不支持修改
        "formats": [  // 功能码, 勾选相应的功能码, 将其写入改数组
          "0x01",
          "0x04",
          "0x06",
          "0x0A",
          "0x0E"
        ]
      },
      "profinet": {
        "protocolChecking": true  // profinet协议完整性检查, "支持协议"中勾选"profinet"后默认开启, 不支持修改
      }
    },
    "sensorIp": "192.168.1.149",  // 暂时不清楚作用
    "name": "Allen7D",  // 名称描述
    "make": "143241",  // 制造商
    "model": "31241324",  // 型号
    "ip": "192.168.1.111",  // 源IP
    "netmask": "255.255.0.255",  // 掩码
    "types": [
      "DNP3",
      "IEC104"
    ],
    "_id": "5d90296d059ef44a07a1257f",  // 被保护节点IP(对应规则)mongoID
    "selected": true
  }
}

   */
  static async setProtectedNode(protectednode) {
    // const data = await post('xWall/api/protectednode')
    // return data
    return {
      'data': {
        'sensor': '5d89b25cb83368602ba727a8', // sensorID, 获取sensor信息, 返回值中"_id"
        'blacklist': {
          'autoDeploy': true // 黑名单, 是否自动部署
        },
        'whitelist': {
          'enabled': true, // 白名单, 开启访问权限和白名单保护, false则以下参数不生效
          'dos': {
            'enabled': false, // 暂时不清楚作用
            'threshold': 5 // 暂时不清楚作用
          },
          'accessList': [ // 可访问外来节点
            {
              'ip': '1.1.1.1', // 配置的外部端口
              'icmp': { // ICMP协议端口设置
                'option': 'ALLOW_ALL' // ALLOW_ALL允许所有, BLOCK_ALL拒绝所有
              },
              'tcpPorts': { // 可访问外来节点, TCP协议端口设置
                'option': 'SELECTED', // 为ALL时, 允许所有端口(selections不生效); 为NONE时, 拒绝所有端口(selections不生效); 为SELECTED时, 只允许选择端口(selections生效)
                'optionTmp': 'SELECTED', // 暂时不清楚作用
                'selections': '1,2,3' // option为ALL|NONE时不生效, 为SELECTED时,生效, 以逗号隔开的数字序列
              },
              'udpPorts': { // 可访问外来节点, UDP协议端口设置, 参数同上
                'option': 'NONE',
                'optionTmp': 'NONE'
              }
            }
          ], // 可访问外来节点
          'accessPorts': {
            'tcp': { // 开放端口, TCP协议
              'option': 'ALL', // 为ALL时, 允许所有端口(selections不生效); 为NONE时, 拒绝所有端口(selections不生效); 为SELECTED时, 只允许选择端口(selections生效)
              'selections': '' // option为ALL|NONE时不生效, 为SELECTED时,生效, 以逗号隔开的数字序列
            },
            'udp': { // 开放端口, UDP协议, 参数同上
              'option': 'ALL'
            }
          },
          'modbus': {
            'protocolChecking': true, // modbus协议完整性检查, "支持协议"中勾选"modbus"后默认开启, 不支持修改
            'discreteInputs': { // 只读布尔
              'addressRange': '', // 起始地址范围, 格式为 下限,上限, 数值范围0-65280
              'quantityRange': '' // 数量范围, 格式为 下限,上限, 数值范围0-65280
            },
            'inputRegisters': { // 只读寄存器
              'addressRange': '', // 起始地址范围, 格式 下限,上限, 数值范围0-65280
              'quantityRange': '' // 数量范围, 格式为 下限,上限, 数值范围0-65280
            },
            'coils': { // 读写布尔
              'addressRange': '', // 起始地址范围, 格式 下限,上限, 数值范围0-65280
              'quantityRange': '', // 数量范围, 格式 下限,上限, 数值范围0-65280
              'valueRange': '' // 数值选相关, 格式 逗号隔开, 数值范围0或65280
            },
            'holdingRegisters': { // 读写寄存器
              'addressRange': '', // 起始地址范围, 格式 下限,上限, 数值范围0-65280
              'quantityRange': '', // 数量范围, 格式 下限,上限, 数值范围0-65280
              'valueRange': '' // 数值选相关, 格式 逗号隔开, 数值范围0-65280
            },
            'functionCodes': [] // 功能码, 勾选相应的功能码, 将其写入改数组
          },
          'dnp3': {
            'protocolChecking': true, // dnp3协议完整性检查, "支持协议"中勾选"dnp3"后默认开启, 不支持修改
            'functionCodes': [ // 功能码, 勾选相应的功能码, 将其写入改数组
              '0x00'
            ]
          },
          'opc': {
            'protocolChecking': true, // opc协议完整性检查, "支持协议"中勾选"opc"后默认开启, 不支持修改
            'dynamicPort': true // 动态端口检查, "支持协议"中勾选"opc"后默认开启, 不支持修改
          },
          'cip': {
            'protocolChecking': true, // cip协议完整性检查, "支持协议"中勾选"cip"后默认开启, 不支持修改
            'functionCodes': [] // 功能码, 勾选乡音功能吗, 将其写入数组
          },
          'iec104': {
            'protocolChecking': true, // IEC104协议完整性检查, "支持协议"中勾选"IEC104"后默认开启, 不支持修改
            'formats': [ // 功能码, 勾选相应的功能码, 将其写入改数组
              '0x01',
              '0x04',
              '0x06',
              '0x0A',
              '0x0E'
            ]
          },
          'profinet': {
            'protocolChecking': true // profinet协议完整性检查, "支持协议"中勾选"profinet"后默认开启, 不支持修改
          }
        },
        'sensorIp': '192.168.1.149', // 暂时不清楚作用
        'name': 'Allen7D', // 名称描述
        'make': '143241', // 制造商
        'model': '31241324', // 型号
        'ip': '192.168.1.111', // 源IP
        'netmask': '255.255.0.255', // 掩码
        'types': [
          'DNP3',
          'IEC104'
        ],
        '_id': '5d90296d059ef44a07a1257f', // 被保护节点IP(对应规则)mongoID
        'selected': true
      }
    }
  }

  /**
   * 删除IP层规则
   * @static
   * @param {*} id 规则ID
   */
  static async deleteProtectedNode(id) {
    // const data = await _delete(`xWall/api/protectednode/${id}`)
    // return data
    return {
      'data': {
        'sensorIp': '192.168.1.149',
        'deploy': 'SUCCESS'
      }
    }
  }
}
