<template>
  <div class="bg">
    <div class="login">
      <div class="form-box">
        <div class="title">
          <img src="@/assets/images/company/logo&name_h.png"/>
          <span>xWall 工业防火墙</span>
        </div>
        <div class="login-form">
          <el-form :model="form">
            <el-form-item>
              <el-input v-model="form.username" placeholder="用户名">
                <template slot="prepend">
                  <fa-icon icon-name="user-circle-o"> </fa-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-input v-model="form.password" placeholder="密码" show-password>
                <template slot="prepend">
                  <fa-icon icon-name="key" />
                </template>
              </el-input>
            </el-form-item>
          </el-form>

          <el-button style="width: 100%" type="primary">登录</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import UserModel from '@/models/user'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'LoginIndex',
  components: {},
  data() {
    return {
      loading: false, // 加载动画
      form: {
        username: '999@qq.com',
        password: '123456',
      },
    }
  },
  computed: {
    ...mapState({
      logined: state => state.user.logined,
    }),
  },
  methods: {
    ...mapActions({
      setUser: 'user/setUser',
    }),
    async handleLogin() {
      const { username: account, password: secret } = this.form
      this.loading = true
      try {
        await UserModel.getToken(account, secret)
        await this.assignUserInfo()
        this.loading = false
        this.$router.push('/admin')
        // this.$message.success('登录成功')
      } catch (e) {
        this.loading = false
      }
    },
    async assignUserInfo() {
      const user = await UserModel.getInfo()
      this.setUser(user)
    },
  },
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .bg {
    height 100%
    background url("./images/login-bg.jpg")
    .login {
      padding 180px 0
      .form-box {
        padding 10px 20px
        width 350px
        margin 0 auto
        z-index 100
        background-color #fff
        border-radius 4px
        box-shadow 0 0 25px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24)
        .title {
          padding-top 10px
          text-align center
          color: #FF5722
          font-size 24px
          img {
            margin 20px auto
            width auto
            height 35px
            max-width: 100%;
            max-height: 100%;
          }
        }
        .login-form {
          margin 20px 0
        }
      }
    }
  }
</style>
