import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state:sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')):{
    currentPage:"homePage"
  },
  getters:{
    currentPage: state => state.currentPage
  },
  mutations: {
    SET_CURRENT_PAGE(state, coins) {
      Vue.set(state, 'currentPage', coins)
    }
  },
  actions: {
    updateCurrentPage: ({
      commit
    }, pairs) => commit('SET_CURRENT_PAGE', pairs)
  },
  modules: {
  }
})
