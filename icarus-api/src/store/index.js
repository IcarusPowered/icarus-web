import Vue from 'vue'
import Vuex from 'vuex'
import fileTree from './modules/fileTree'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    fileTree
  }
})
