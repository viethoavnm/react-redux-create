/**
 * Common reducer 
 *  - Switch locale
 */
import { ActionTypes, DEFAULT_LANG } from './constants';

const initState = {
  locale: DEFAULT_LANG,
}

const handlers = {
  [ActionTypes.SWITCH_LOCALE]: (state, action) => ({ ...state, locale: action.payload }),
}

export default {
  initState,
  handlers
}