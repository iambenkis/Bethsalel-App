import { combineReducers, applyMiddleware } from 'redux'
import { legacy_createStore as createStore } from 'redux'
import thunk from 'redux-thunk'
import loginReducer from './login'
import { LogoutReducer } from './login'

const reduxDevtools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const rootReducer = combineReducers({
  login: loginReducer,
  logout: LogoutReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk))
