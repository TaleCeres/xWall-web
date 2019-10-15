<template>
  <div v-loading.fullscreen.lock="loading" class='user-container'>
    <el-table v-if='dataList.length>0' :data='dataList' border :header-cell-style="{'background-color':'#F2F2F2'}">
      <el-table-column prop='username' label='用户名' />
      <el-table-column prop='role' label='权限'>
        <template slot-scope="scope">
          {{scope.row.role|roleChinese}}
        </template>
      </el-table-column>
      <el-table-column label='操作'>
        <template slot-scope="scope">
          <el-button class='el-icon-delete' @click.native.prevent="deleteRow(scope.$index, dataList)" />
        </template></el-table-column>
    </el-table>
    <div v-else style="margin:auto 0">您的权限不够</div>
  </div>
</template>

<script>
import User from '@/models/user'
import {
  mapGetters
} from 'vuex'
export default {
  name: 'UserList',
  filters: {
    roleChinese: value => {
      if (value === 'admin') return '管理员'
      return '普通用户'
    }
  },
  data() {
    return {
      dataList: []
    }
  },
  computed: {
    ...mapGetters([
      'auth'
    ])
  },
  created() {
    this.getUser()
  },
  methods: {
    getUser() {
      User.getUserList().then(res => {
        if (this.auth === 'user') {
          this.dataList = []
        } else {
          this.dataList = res
        }
      })
    },
    deleteUser(index, rows) {
      User.deleteUser(rows[index].username).then(res => {
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
        this.getUser()
      })
    },
    deleteRow(index, rows) {
      // console.log(rows[index].username)
      this.$confirm('此操作将永久删除用户, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.deleteUser(index, rows)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
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
