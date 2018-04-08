import { SET_ACTIVE_ITEMS } from '../actions'
import artConcepts, { flatConcepts } from '../data/artConcepts'

const initialState = {
  activeItems: flatConcepts
}

const artReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_ITEMS : {
      let newList = [...state.activeItems]
      const isActive = newList.indexOf(action.payload) !== -1
      if (isActive) {
        newList = newList.filter(listItem => listItem !== action.payload)
      } else {
        newList.push(action.payload)
      }
      const newState = { ...state }
      newState.activeItems = newList
      return newState
    }
    default:
      return state
  }
}

export default artReducer 