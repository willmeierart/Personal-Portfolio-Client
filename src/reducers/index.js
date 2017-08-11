import {combineReducers} from 'redux'
import artReducer from './art-reducer'
import techReducer from './tech-reducer'
import writingReducer from './writing-reducer'
import persist from './persist'

const rootReducer = combineReducers({
  art:artReducer,
  tech:techReducer,
  writing:writingReducer,
  persist:persist
})
