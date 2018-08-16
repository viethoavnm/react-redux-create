/**
 * Create reducer from actionHandlers
 * Author: viethoavnm
 * 
 * @param {Object} init 
 * @param {Object} handlers 
 */
export function createReducer({ init, handlers }) {
  return function reducer(state = init, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    } else {
      return state
    }
  }
}
