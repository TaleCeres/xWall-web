<template>
  <div></div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'redirect',
  components: {},
  data() {
    return {}
  },
  computed: {},
  created() {
    this.$router.push({
      path: '/ipfw/index'
    })
  },
  mounted() { },
  methods: {},
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus"></style>
