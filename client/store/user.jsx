import axios from 'axios'
import history from '../history'

const GET_USER = 'GET_USER'

const defaultUser = {}

/**
 * ACTION CREATORS
 */
export const getUser = user => ({type: GET_USER, user})

/**
 * THUNK CREATORS
 */

/**
 * REDUCER
 */
export default function (state = defaultUser, action) {
  switch (action.type) {
    case GET_USER:
      return action.user
    default:
      return state
  }
}
