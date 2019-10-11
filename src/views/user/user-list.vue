<template>
  <div class='user-container'>
    <el-table v-if='dataList.length>0' :data='dataList' border :header-cell-style="{'background-color':'#F2F2F2'}">
      <el-table-column prop='username' label='用户名' />
      <el-table-column prop='role' label='权限'>
      <template slot-scope="scope">
{{scope.row.role|roleChinese}}     
      </template>
      </el-table-column>
      <el-table-column label='操作'>
        <template slot-scope="scope">
          <el-button @click.native.prevent="deleteRow(scope.$index, dataList)"
            class='el-icon-delete'></el-button>
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
    data() {
      return {
        dataList: []
      }
    },
    filters: {
  roleChinese: function (value) {
     if(value==='admin'){
        return     '管理员'
            }else{
         return   '普通用户'

            }
  }
},
    created() {
      this.getUser()
    },
    computed: {
      ...mapGetters([
        'auth'
      ])
    },
    methods: {
      getUser() {
        User.getUserList().then(res => {
          if(this.auth==='user'){
          this.dataList= []         
          }else{
            this.dataList=res
          }
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
          this.getUser()
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
