import rootReducer from '../reducer/index'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

const initialState={}
const middlewares=[thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store=createStore(
  rootReducer,
  initialState,
  composeEnhancers(
    applyMiddleware(...middlewares)
  )
)
console.log(store.getState());

export default store