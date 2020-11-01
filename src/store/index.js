import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    problems: []
  },
  mutations: {
    addProblem(state, problem) {
      state.problems.push({ problem });
      console.log(state.problems)
    }
  },
  actions: {
    addProblem({ commit }, payload) {
      commit('addProblem', payload)
    }
  },
  modules: {
  },
  getters: {
    getProblems (state) {
      console.log(state.problems)
      return state.problems
    }
  }
})
