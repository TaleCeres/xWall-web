<template>
  <div class="user-card">
    <el-dropdown>
      <div class="el-dropdown-link">
        <img class="avatar" :src="defaultAvatar" alt="头像">
      </div>
      <el-dropdown-menu slot="dropdown" class="detail">
        <el-dropdown-item divided icon="el-icon-switch-button" @click.native="handleLogout">
          注销
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapActions } from 'vuex'
import defaultAvatar from 'assets/images/company/logo.png'
import UserModel from '@/models/user'
export default {
  name: 'UserCard',
  components: {},
  data() {
    return {
      defaultAvatar,
    }
  },
  computed: {},
  created() { },
  mounted() {
  },
  methods: {
    ...mapActions({
      logout: 'user/logout',
    }),
    async handleLogout() {
      const res = await UserModel.logout()
      if (res.message === 'logout success') {
        this.logout()
        window.location.reload(true)
      }
    },
  },
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.user-card {
  .el-dropdown-link {
    .avatar {
      width 37px
      height 37px
      border-radius 50%
    }
  }
  .detail {
    width 326px
    margin-bottom 0
    padding-bottom 0
    border 1px solid blue
  }
}
</style>
