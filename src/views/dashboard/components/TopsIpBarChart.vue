<template>
  <div :id="id" style="height: 90%"></div>
</template>

<script>
import resize from '@/mixins/resize'

export default {
  name: 'TopsIpBarChart',
  mixins: [resize],
  props: {
    id: {
      type: String,
      default: 'TopsIpBarChart'
    },
    dataset: {
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
        },
        yAxis: {
        },
        dataset: {
          source: this.dataset
        },
        series: [
          { type: 'bar' },
          { type: 'bar' }
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
