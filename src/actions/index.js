import axios from 'axios'

export const FETCH_ALL_IMAGES = 'fetch_all_images'
export const FETCH_IMAGE = 'fetch_image'
export const SELECT_IMAGE = 'select_image'
export const FETCH_MEDIUM = 'fetch_medium'

export const SET_ACTIVE_ITEMS = 'set_active_items'

export const setActiveItems = item => {
  return {
    type: SET_ACTIVE_ITEMS,
    payload: item
  }
}


