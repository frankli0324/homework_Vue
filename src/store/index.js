import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseUrl: "/api/v1",
    afterUrl_1: "/student",
    afterUrl_2: "/student/score",
    afterUrl_3: "/student/teacher",
    afterUrl_4: "/student/firing",
    afterUrl_5: "/data",
    afterUrl_6: "/student/fired",
    registerStep: 0,
    studentMsg:{},
    getMsgAgain: false
  },
  mutations: {
    commitBase(state,payload) {
      state.baseUrl = payload.base
    },
    commitAfter(state,payload) {
      let temp = 'afterUrl_' + payload.index
      state[temp] = payload.afterUrl
    },
    commitStep(state,payload) {
      state.registerStep = payload.step
    },
    clearStep(state) {
      state.registerStep = 0
    },
    commitMessage(state,payload) {
      state.studentMsg = {...state.studentMsg,...payload.values}
    }
  },
  actions: {
  },
  modules: {
  }
})
