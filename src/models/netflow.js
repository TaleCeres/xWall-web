import {
  post,
  get,
  put,
} from '@/utils/request'

// 处理 IP流量统计，用于饼状图
function processNetflowStat(data) {
  const {
    in: { buckets: srcFlow },
    out: { buckets: dstFlow }
  } = data.aggregations

  const srcFlowStat = srcFlow.map(item => ({
    name: item.key,
    value: item.total_bytes.value
  }
  ))

  const dstFlowStat = dstFlow.map(item => ({
    name: item.key,
    value: item.total_bytes.value
  }
  ))

  return {
    src: srcFlowStat,
    dst: dstFlowStat
  }
}

export default class Netflow {
  // IP流量统计(基于「资产通信量」接口)
  static async statFlow() {
    const { data } = await get('configCentre/api/flow/topsIP')
    return processNetflowStat(data) 
  }

  static async statHistoryFlow(queryArgs) {
    const {
      start, // 起始时间 (转化成毫秒)
      end, // 结束时间 (转化成毫秒)
      port, // 接口 (默认为br0, 不允许修改)
      direction, // 流入 or 流出: in为流入流量, out为流出流量
      ip, // IP
      protocolL4 // 协议
    } = queryArgs
    const { data } = await post('configCentre/api/flow/filter', {
      'time_from': start,
      'time_to': end,
      'interface': port,
      direction,
      ip,
      'protocol_l4': protocolL4
    })
    // 数据加工
    const dateList = []
    const valueList = []
    data.aggregations.by_time.buckets.forEach(item => {
      dateList.push(item.key_as_string)
      valueList.push(item['l4-l7'].value)
    })
    return {
      dateList,
      valueList
    }
  }
}
