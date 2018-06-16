import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import user from './user.jsx'

const reducer = combineReducers({
	user,
 })

const middlewareArray = [thunkMiddleware];

const isLocal = ~location.href.indexOf('://localhost');
if (isLocal !== 0) {
  middlewareArray.push(createLogger({collapsed: true}));
}
const middleware = applyMiddleware.apply(null, middlewareArray)

const store = createStore(reducer, middleware)

export default store
export * from './user.jsx'
