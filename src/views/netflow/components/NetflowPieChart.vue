<template>
  <div :id="id" style="height: 400px"></div>
</template>

<script>
import resize from '@/mixins/resize'

export default {
  name: 'NetflowPieChart',
  mixins: [resize],
  props: {
    id: {
      type: String,
      default: 'NetflowPieChart'
    },
    chartData: {
      type: Array,
      default: () => []
    },
    title: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      chart: null,
    }
  },
  computed: {
    option() {
      return {
        title: {
          text: this.title,
        },
        series: [
          {
            name: '流量',
            data: this.chartData,
            type: 'pie',
            radius: [0, '50%'],
            label: {
              normal: {
                show: true,
                formatter(params) {
                  return `${params.name}:${params.value}KB`
                },
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
