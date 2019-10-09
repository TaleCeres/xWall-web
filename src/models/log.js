import {
  post,
  get,
  put,
} from '@/utils/request'


function processSystemLogList(list) {
  return list.map(item => {
    let [time, event] = item.split('[info]:').map(el => el.trim())
    return {
      time, 
      event
    }
  })
}

export default class Log {
  /**
   * 获取防火墙日志列表
   *
   * @static
   * @param {*} queryArgs
          {
            'start': 1565243345680,  // 查询开始时间戳（转换成毫秒时间）
            'end': 1570427345680,  // 查询结束时间戳（转换成毫秒时间）
            'page': 1,  // 当前页
            'size': 25,  // 分页大小
            'srcIp': '192.168.1.141',
            'dstIp': '192.168.1.55', // 查询条件: 目标IP等于'192.168.1.55', 如果为空, 则删除该项
          }
   * @returns
   */
  static async getFireWallLog(queryArgs) {
    const {
      start, end, page, size, srcIp, dstIp
    } = queryArgs
    const reqBody = {
      start,
      end,
      from: (page - 1) * size, // 跳过数据量(跳过几条数据)
      size,
      esQuery: {
        bool: {
          must: []
        }
      }
    }

    if (srcIp) {
      reqBody.esQuery.bool.must.push({ term: { srcIp } })
    }
    if (dstIp) {
      reqBody.esQuery.bool.must.push({ term: { dstIp } })
    }
    // const data = await post('xFocus/api/history/events', reqBody)
    // return data
    return {
      'data': {
        'total': 399,
        'records': [
          {
            'message': '[SNORTIDS[LOG]: [sensor-eth0] ]', // 时间详细信息
            '@version': '1', // 无
            '@timestamp': '2019-09-16T03:44:44.000Z', // 无
            'type': 'syslog', // 事件类型
            'host': '192.168.1.149', // 无
            'probe': 'sensor', // 无
            'iface': 'eth0', // 无
            'signatureId': '10002', // 无
            'protocolNumber': '6', // 无
            'srcIp': '192.168.1.12', // 源IP
            'dstIp': '192.168.1.182', // 目标IP
            'srcPort': '48524', // 源端口
            'dstPort': '1237', // 目标端口
            'packetLength': '44', // 无
            'payload': '4500002CBFDF00002E0648DAC0A8010CC0A801B6BD8C04D5D0C0B6CB0000000060020C00BE250000020405B4', // 有效载荷
            'receivedAt': '2019-09-20T06:39:53.272Z', // 日志产生时间
            'receivedFrom': '192.168.1.149', // 无
            'protocolName': 'TCP' // 协议名
          }
        ]
      }
    }
  }

  
  /**
   * 获取某个区间段内的系统日志
   * @static
   * @param {*} from 开始时间: "2019/09/01"
   * @param {*} end 结束时间: "2019/09/02"
   * @returns 
            [ 
              {
                time: "2019/9/26 4:19:23 PM",
                event: "Express server listening on port 3001"
              }
            ]
   */
  static async getSystemLog(from, end) {
    // const data = await post('configCentre/api/events', {
    //   from,
    //   end
    // })
    const data = [
      '2019/9/26 4:19:23 PM [info]: Express server listening on port 3001',
      '2019/9/30 1:29:29 PM [info]: Express server listening on port 3001'
    ]
    return processSystemLogList(data)
  }

  static async backupSystemLog() {
    return {
      msg: "remove Log: complete"
    }
  }
}
