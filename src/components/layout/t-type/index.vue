<template>
  <div style="height:100%;">
    <el-container>
      <el-header class="header">
        <NavBar />
      </el-header>
      <el-container>
        <el-aside :width="sidebarWidth" class="aside">
          <SideBar />
        </el-aside>
        <div class="icon-font side-btn" :style="{left: sidebarWidth}" @click="toggleSlidebarState">
          <i class="el-icon-caret-left" :class="{rotate: foldState}"></i>
        </div>
        <el-main class="main" :style="{marginLeft: sidebarWidth}">
          <HistoryTag />
          <AppMain />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script type="text/ecmascript-6">
import SensorModel from '@/models/sensor'
import { mapGetters } from 'vuex'
import UserModel from '@/models/user'
import HistoryTag from 'comps/base/HistoryTag'
import ResizeMixin from '../mixin/resize'
import AppMain from './components/AppMain'
import SideBar from './components/SideBar'
import NavBar from './components/NavBar'
export default {
  name: 'TTypeLayout',
  components: {
    AppMain,
    SideBar,
    NavBar,
    HistoryTag,
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapGetters([
      'sidebar',
    ]),
    foldState() {
      return this.sidebar.closed
    },
    // 左侧菜单栏是否折叠
    isCollapse() {
      return this.sidebar.closed
    },
    // 左侧菜单栏展开的宽度
    sidebarWidth() {
      return this.isCollapse === false ? '170px' : '64px'
    },
  },
  async created() {
    await SensorModel.getSensor()
    // const user = await UserModel.getToken('support@gushenxing.com', 'gushenxing123')
    // this.$store.dispatch('user/setUser', user)
  },
  methods: {
    toggleSlidebarState() {
      this.$store.commit('app/TOGGLE_SIDEBAR')
    },
  },
}

</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
.aside {
  position fixed
  top 60px
  height 100%
  border 1px solid red
  overflow-x hidden
  // position relative
  &::-webkit-scrollbar {
    width 0px
    height 0px
  }
}
.header {
  display flex
  z-index 101
  position fixed
  align-items center
  width 100%
  padding 0
  box-shadow 0px 2px 6px 0px rgba(190, 204, 216, 0.4)
  background-color #3D444E
}
.do-slide {
  position absolute
  bottom 100px
  right 20px
}
.side-btn {
  position absolute
  top 150px
  background-color #eaeaea
  padding 12px 0
  border-top-right-radius 5px
  border-bottom-right-radius 5px
  cursor pointer
  z-index 100
}
.icon-font {
  margin 10px 0
  font-size 15px
  font-weight 500
  transform rotate(0deg)
  transition all 0.3s linear
  &:hover {
    color #3963bc
  }
}
.rotate {
  transform rotate(180deg)
  transition all 0.3s linear
}
.main {
  margin 60px 0 0 2px // 避免过于紧凑
  transition all 0.3s linear
}
</style>
