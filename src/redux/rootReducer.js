/**
 * Create root reducer from module reducer
 * Author: viethoavnm
 */
import { combineReducers } from 'redux';
import create from './createReducer';
import commonReducer from '../modules/common/reducer';

export default combineReducers({
  common: create(commonReducer)
});