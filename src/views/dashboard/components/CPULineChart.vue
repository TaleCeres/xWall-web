<template>
  <div :id="id" style="height: 90%"></div>
</template>

<script>
import resize from '@/mixins/resize'
function formDate(dateForm) {
  if (dateForm === '') { // 解决deteForm为空传1970-01-01 00:00:00
    return ''
  }
  let dateee = new Date(dateForm).toJSON()
  let date = new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
  return date
}

export default {
  name: 'CPULineChart',
  mixins: [resize],
  props: {
    id: {
      type: String,
      default: 'CPULineChart'
    },
    valueList: {
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
          trigger: 'axis',
        },
        xAxis: {
          type: 'category',
          data: this.dateList.map(item => formDate(item)),
          axisLabel: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          min: 0,
          max: 100,
          name: '%'
        },
        series: [
          {
            name: '使用率',
            data: this.valueList,
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
    formDate(dateForm) {
      if (dateForm === '') { // 解决deteForm为空传1970-01-01 00:00:00
        return ''
      }
      let dateee = new Date(dateForm).toJSON()
      let date = new Date(+new Date(dateee) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ').replace(/\.[\d]{3}Z/, '')
      return date
    }
  }
}
</script>

<style scoped lang="stylus">

</style>
