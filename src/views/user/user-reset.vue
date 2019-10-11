<template>
  <div class='user-container'>
    <el-form ref="ruleForm" :model="ruleForm" status-icon :rules="rules" label-width="200px" class="user-ruleForm">
      <el-form-item label="用户名" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="新密码" prop="pass">
        <el-input v-model="ruleForm.pass" type='password' autocomplete='off' placeholder='密码最小长度8位 字母+数字'></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input v-model="ruleForm.checkPass" type='password' autocomplete='off'></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="btn-edit" @click="submitForm('ruleForm')">修改密码</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import User from '@/models/user'
import { mapGetters } from 'vuex'
export default {
  name: 'UserReset',
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        callback()
      }
    }
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        name: this.username,
        pass: '',
        checkPass: ''
      },
      rules: {
        name: [{
          required: true,
          message: '请输入用户名',
          trigger: 'blur'
        }],
        pass: [{
          required: true,
          validator: validatePass,
          trigger: 'blur'
        }],
        checkPass: [{
          required: true,
          validator: validatePass2,
          trigger: 'blur'
        }]
      }
    }
  },
  computed: {
    ...mapGetters([
      'username'
    ])
  },
  mounted() {
    // this.ruleForm.name = this.$store.state.user.username
    this.ruleForm.name = this.username
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert('submit!')
          console.log('submit')
          User.updateUser(this.ruleForm.name, this.ruleForm.pass).then(res => {
            console.log(res)
            if (res.error) {
              this.$notify({
                title: '失败',
                message: res.error,
                type: 'error'
              })
            } else {
              this.$notify({
                title: '成功',
                message: '添加用户成功',
                type: 'success'
              })
            }
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style lang="stylus">
.user-container {
  margin 30px
}
.el-form-item__label {
  text-align center
  border-radius 4px
  background-color #FBFBFB
  border 1px solid #DCDFE6
}
.el-input__inner {
  margin-left 10px
}
.el-select {
  width 100%
}
.btn-edit {
  background-color #289E90
  color #ffffff
  font-size 15px
  margin-left -201px
}
.btn-edit:hover,
.btn-edit:active,
.btn-edit:focus {
  background-color #289E90
  color #ffffff
  font-size 15px
  margin-left -201px
}
.btn-edit:active {
  background-color #289E90
  color #ffffff
  font-size 15px
  margin-left -201px
}
</style>
