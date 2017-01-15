import * as types from '../mutation-types'

const state = {
  lastGet: 'RULEZ!'
}

const mutations = {
  [types.RECEIVE_DATA] (state, {
    body
  }) {
    state.lastGet = body
  }
}

export default {
  state,
  mutations
}
