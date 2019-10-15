<template>
  <div class='user-container'>
    <div class='text-child'>
      重启之前请确保配置已经保存生效，重启后未生效配置将全部丢失，并且需要重新登录</div>
    <el-button class="btn-reboot" icon="el-icon-refresh-left" @click="handleReboot()">重启设备
    </el-button>
  </div>
</template>

<script>
import SystemAdmin from '@/models/systemAdmin'

export default {
  name: 'Reboot',
  data() {
    return {
    }
  },
  methods: {
    async handleReboot() {
      const res = await SystemAdmin.rebootDevice({
        ip: this.$store.state.sensor.ctx.ip
      })

      if (res.data === 'success') {
        this.$notify({
          title: '成功',
          message: '重启成功',
          type: 'success'
        })
      }
    }
  }
}
</script>

<style lang="stylus">
.user-container {
  margin 30px
}
.btn-reboot {
  background-color #289E90
  color #ffffff
  font-size 15px
}
.btn-reboot:hover,
.btn-reboot:active,
.btn-reboot:focus {
  background-color #289E90
  color #ffffff
  font-size 15px
}
.btn-reboot:active {
  background-color #289E90
  color #ffffff
  font-size 15px
}
.text-child {
  width 100%
  height 32px
  background-color #f4f4f5
  align-content center
  padding 18px 9px 0px 21px
  border-left 5px solid #2274bb
  margin 10px 0
}
</style>
