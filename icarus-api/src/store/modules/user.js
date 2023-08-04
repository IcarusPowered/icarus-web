import { getInfo, setInfo } from '@/utils/storage.js'
const state = {
  // 个人权证相关
  userInfo: getInfo()
}
const getters = {
  // 分模块后，state指代子模块的state
}
const mutations = {
  setUserInfo (state, obj) {
    state.userInfo = obj
    setInfo(obj)
  }
}
const actions = {
  logout (context) {
    // 个人信息要重置
    context.commit('setUserInfo', {})
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
