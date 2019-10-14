<template>
  <div :id="id" style="height: 90%"></div>
</template>

<script>
import resize from '@/mixins/resize'

export default {
  name: 'TotalBytesLineChart',
  mixins: [resize],
  props: {
    id: {
      type: String,
      default: 'TotalBytesLineChart'
    },
    inByteList: {
      type: Array,
      default: () => []
    },
    outByteList: {
      type: Array,
      default: () => []
    },
    dateList: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      chart: null,
    }
  },
  computed: {
    option() {
      return {
        tooltip: {
          trigger: 'axis'
        },
        legend: {},
        xAxis: {
          type: 'category',
          data: this.dateList
        },
        yAxis: {
          type: 'value',
          name: 'byte'
        },
        dataZoom: [
          {
            show: true,
            realtime: true,
          },
        ],
        series: [
          {
            name: '流入',
            data: this.inByteList,
            type: 'line',
            smooth: true
          },
          {
            name: '流出',
            data: this.outByteList,
            type: 'line',
            smooth: true
          }]
      }
    }
  },
  watch: {
    option(prev, next) {
      this.updateChart()
    }
  },
  mounted() {
  },
  methods: {
  }
}
</script>

<style scoped lang="stylus">

</style>
