/* eslint no-param-reassign: 0 */
// 获取侧边栏配置
// export const sidebar = state => state.sidebar
// export const sidebarList = state => {
//   const { sidebarLevel } = state
// }

const getters = {
  sidebar: state => state.app.sidebar,
  sidebarList: state => { },
  auth: state => state.user.auth,
  username: state => state.user.username
}
export default getters
