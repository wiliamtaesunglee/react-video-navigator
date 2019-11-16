'use strict'

const initialState = {
  counter: 0
}

const reducer = (store = initialState, action) => {
  return action.type === 'INC' ? {...store, counter: store.counter + 1 } :store
  }

  export default reducer
