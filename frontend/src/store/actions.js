import * as types from './mutation-types'
import api from '../api/api'

export const exampleAction = ({
  commit,
  state
}) => {
  api.echoGetRequest(res => commit(types.RECEIVE_DATA, {
    body: res.body
  }))
}
