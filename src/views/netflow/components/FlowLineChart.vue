<template>
  <div :id="id" style="height: 400px"></div>
</template>

<script>
import resize from '@/mixins/resize'

export default {
  name: 'FlowLineChart',
  mixins: [resize],
  props: {
    id: {
      type: String,
      default: 'FlowLineChart'
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
          data: this.dateList
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '流量',
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
  }
}
</script>

<style scoped lang="stylus">

</style>
