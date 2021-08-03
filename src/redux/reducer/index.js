import {combineReducers} from 'redux'
import experience from './experienceReducer'
import project from './projectReducer'

export default combineReducers({
  experience,
  project
})