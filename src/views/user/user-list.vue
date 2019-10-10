<template>
  <div class='user-container'>
    <el-table :data='dataList' border :header-cell-style="{'background-color':'#F2F2F2'}">
      <el-table-column prop='username' label='用户名' />
      <el-table-column prop='role' label='权限' />
      <el-table-column label='操作'>
        <template slot-scope="scope">
          <el-button @click.native.prevent="deleteRow(scope.$index, dataList)"
            class='el-icon-delete'></el-button>
        </template></el-table-column>
    </el-table>
  </div>
</template>

<script>
  import User from '@/models/user'
  export default {
    name: 'UserList',
    data() {
      return {
        dataList: [{
          username: 'admin',
          role: '管理员'
        }, {
          username: 'auditor',
          role: '用户'
        }]
      }
    },
    created() {
      this.getUser()
    },
    methods: {
      getUser() {
        User.getUserList().then(res => {
          this.dataList = res
        })
      },
      deleteRow(index, rows) {
        // console.log(rows[index].username)
        User.deleteUser(rows[index].username).then(res => {
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
              message: '删除用户成功',
              type: 'success'
            })
          }
        })
      }
    },
  }
</script>

<style scoped lang="stylus">
.user-container {
  margin 30px
}
.el-icon-delete {
  background-color #6F060b
  color #ffffff
  padding 2px
}
</style>
