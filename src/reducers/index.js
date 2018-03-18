import {combineReducers} from 'redux'
import artReducer from './artReducer'
import techReducer from './techReducer'
import writingReducer from './writingReducer'
import persist from './persist'

const rootReducer = combineReducers({
  art:artReducer,
  // tech:techReducer,
  // writing:writingReducer,
  persist:persist
})

export default rootReducer
