<template>
  <div :id="id" style="height: 90%"></div>
</template>

<script>
import resize from '@/mixins/resize'

export default {
  name: 'HistogramBarChart',
  mixins: [resize],
  props: {
    id: {
      type: String,
      default: 'HistogramBarChart'
    },
    chartData: {
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
        legend: {},
        tooltip: {},
        xAxis: {
          type: 'category',
          data: this.chartData.map(item => this.formDate(item[0]))
        },
        yAxis: {
        },
        series: [
          {
            type: 'bar',
            data: this.chartData.map(item => item[1])
          }
        ]
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
