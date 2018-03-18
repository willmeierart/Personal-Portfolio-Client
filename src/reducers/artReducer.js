import { SET_ACTIVE_TAG_FILTERS, TOGGLE_WORD } from '../actions'
import artConcepts from '../data/artConcepts'

const flattenConcepts = concepts => {
  return Object.keys(concepts).reduce((list, name) => {
    const isTrue = concepts[name] === true
    if (isTrue) { list.push(name) }
  }, [])
}

const toggleWord = (word, origList) => {
  const list = { ...origList }  
  if (word !== null) {
    Object.keys(list).forEach((item, i) => {
      if (list[item][word] !== undefined) {
        list[item][word] = !list[item][word]
      }
    })
  }
  return list
} 

const initialState = {
  // activeTags: artConcepts
  activeTags: flattenConcepts(artConcepts), // returns array,
  activeTagsObject: toggleWord(null, artConcepts)
}

const artReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAG_FILTERS : {
      const newState = { ...state }
      return newState
    }
    case TOGGLE_WORD : {
      const newState = { ...state }
      newState.activeTagsObject = toggleWord(state.activeObject)
      return newState
    }
    default : return state
  }
}

export default artReducer 