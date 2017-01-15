import Vue from 'vue'
const BACKEND = 'http://localhost:8000' // dev

export default {
  echoGetRequest (cb) {
    Vue.http.get(BACKEND + '/get', {
      params: {
        'exampleParam': 'exampleParam'
      }
    }).then(cb)
  }
}
