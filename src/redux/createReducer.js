/**
 * Create reducer from actionHandlers
 * Author: viethoavnm
 * 
 * @param {Object} initState 
 * @param {Object} handlers 
 */
export default function createReducer({ initState, handlers }) {
  return function reducer(state = initState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}
