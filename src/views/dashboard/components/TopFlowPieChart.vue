<template>
  <div :id="id" style="height: 90%"></div>
</template>

<script>
import resize from '@/mixins/resize'
export default {
  name: 'TopFlowPieChart',
  mixins: [resize],
  props: {
    id: {
      type: String,
      default: 'TopFlowPieChart'
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
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          x: 'left',
        },
        series: [
          {
            name: '事件',
            data: this.chartData,
            type: 'pie',
            radius: [0, '50%'],
            label: {
              normal: {
                show: true,
                textStyle: {
                  fontSize: 15
                }
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontWeight: 'bold',
                  fontSize: 20
                }
              }
            }
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
  }
}
</script>

<style scoped lang="stylus">

</style>
