import Vue from 'vue'
import Vuex from 'vuex'
import fileTree from './modules/fileTree'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    token (state) {
      return state.user.userInfo.token
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    fileTree,
    user
  }
})
