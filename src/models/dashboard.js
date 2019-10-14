import {
  post,
  get,
  put,
} from '@/utils/request'

function formDate(dateForm) {
  if (dateForm === '') { // 解决deteForm为空传1970-01-01 00:00:00
    return ''
  }
  let dateee = new Date(dateForm).toJSON()
  let date = new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
  return date
}

export default class System {
  /**
   * 资产通信量
   * @static
   * @returns {*}
   * {
  "data": {
    "took": 14, // 无
    "timed_out": false, // 无
    "_shards": {
      "total": 20, // 无
      "successful": 20, // 无
      "failed": 0 // 无
    },
    "hits": { // 无
      "total": 10216, // 无
      "max_score": 0, // 无
      "hits": [] // 无
    }, // 无
    "aggregations": {
      "in": {  // 流入数据
        "doc_count_error_upper_bound": 0, // 无
        "sum_other_doc_count": 9,  // 无
        "buckets": [
          {
            "key": "239.255.255.250",  // 横坐标
            "doc_count": 130,  // 无
            "total_bytes": {
              "value": 123113  // 纵坐标
            }
          }
        ]
      },
      "out": {  // 流出数据
        "doc_count_error_upper_bound": 0, // 无
        "sum_other_doc_count": 67, // 无
        "buckets": [
          {
            "key": "192.168.1.1",  // 横坐标
            "doc_count": 4,
            "total_bytes": {
              "value": 0  // 纵坐标
            }
          }
        ]
      }
    }
  }
}
   */
  static async getTopsIP() {
    const data = await get('configCentre/api/flow/topsIP')
    const { aggregations } = data.data
    let dataset = [
      ['资产通信量', 'in', 'out']
    ]
    aggregations.in.buckets.forEach(item => {
      dataset.push([
        item.key,
        item.total_bytes.value,
        0
      ])
    })
    aggregations.out.buckets.forEach(out => {
      const index = dataset.findIndex(value => value[0] === out.key)
      if (index !== -1) {
        dataset[index][2] = out.total_bytes.value
      } else {
        dataset.push([
          out.key,
          0,
          out.total_bytes.value,
        ])
      }
    })
    return dataset
  }

  // 网络通信统计
  static async getTotalBytes() {
    const data = await get('configCentre/api/flow/totalBytes')
    const { aggregations } = data.data
    const dateList = aggregations.by_time.buckets.map(item => formDate(item.key_as_string))
    const inByteList = aggregations.by_time.buckets.map(item => item.in_bytes.value)
    const outByteList = aggregations.by_time.buckets.map(item => item.out_bytes.value)
    return {
      dateList,
      inByteList,
      outByteList
    }
  }

  // 事件
  static async getEvents() {
    const data = await get('xFocus/api/ui/data?eventId=ui-dashboard-summary')
    return data.data.data[0]
  }

  // 获取协议通信量(L4)
  static async getTopsl4() {
    const data = await get('configCentre/api/flow/topsl4')
    const { aggregations } = data.data
    const buckets = aggregations.by_l4.buckets.map(item => ({
      name: item.key,
      value: item.bytes_sum.value
    }))
    return buckets
  }

  // 获取协议通信量(L7)
  static async getTopsl7() {
    const data = await get('configCentre/api/flow/topsl7')
    const { aggregations } = data.data
    console.log(aggregations)
    const buckets = aggregations.l7proto.buckets.map(item => ({
      name: item.key,
      value: item.bytes_sum.value
    }))
    return buckets
  }
}
