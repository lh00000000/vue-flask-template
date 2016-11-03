// use this as a simple one-file store
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  lastGet: 'RULEZ!'
}

const BACKEND = 'http://localhost:8000'
const actions = {
  exampleAction: ({commit, state}) => {
    Vue.http.get(BACKEND + '/get', {
      params: {
        'exampleParam': 'poop'
      }
    }).then(res => {
      commit('RECEIVE_DATA', { body: res.body })
    })
  }
}

const getters = {
  exampleGetter: state => state.lastGet
}

const mutations = {
  RECEIVE_DATA (state, {body}) {
    state.lastGet = body
  }
}

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations
})

