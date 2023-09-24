import { produce } from 'immer'
const FETCHING = 'signup/fetching'
const RESOLVED = 'signup/resolved'
const REJECTED = 'signup/rejected'
const LOGOUT = 'logout'

const Fetching = () => ({ type: FETCHING })
const Resolved = (data) => ({ type: RESOLVED, payload: data })
const Rejected = (error) => ({ type: REJECTED, payload: error })
export const Logout = () => ({ type: LOGOUT })

// import { Link, useNavigate } from 'react-router-dom';

const initialState = {
  status: 'void',
  data: null,
  error: null,
  isAuthenticated: false,
}

export const fetchLogin = (data, store) => {
  store.dispatch(Fetching())
  fetch('http://localhost:3000/api/login', {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      store.dispatch(Resolved(data))
      // localStorage.setItem('bet_token', data.token)
    })
    .catch((err) => {
      store.dispatch(Rejected(err.message))
    })
}

const loginReducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case FETCHING: {
        if (draft.status === 'void') {
          draft.status = 'pending'
          draft.isAuthenticated = false
          // console.log(draft)
          return
        }
        if (draft.status === 'rejected') {
          draft.err = null
          draft.status = 'pending'
          draft.isAuthenticated = false
          return
        }
        if (draft.status === 'resolved') {
          draft.status = 'updating'
          return
        }
        return
      }

      case RESOLVED: {
        if (draft.status === 'pending' || draft.status === 'updating') {
          draft.data = action.payload
          draft.status = 'resolved'
          draft.isAuthenticated = true
          localStorage.setItem('bet_token', action.payload.token)
          return
        }
        return
      }

      case REJECTED: {
        if (draft.status === 'pending' || draft.status === 'updating') {
          draft.error = action.payload
          draft.data = null
          draft.isAuthenticated = false
          draft.status = 'rejected'
          return
        }
        return
      }

      case LOGOUT: {
        // Reset the state to its initial values when the user logs out
        draft.status = 'logout'
        draft.isAuthenticated = false
        localStorage.removeItem('bet_token')
      }

      default:
        return
    }
  })
}

export const LogoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT: {
      // Reset the state to its initial values when the user logs out
      return {
        ...initialState,
        isAuthenticated: false,
      }
    }

    default:
      return state
  }
}
export default loginReducer
