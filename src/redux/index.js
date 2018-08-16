/**
 * Index of redux module
 * Author: viethoavnm
 */

import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './configureStore';

export const store = configureStore();

const Redux = ({ children }) => (
  <Provider store={store}>
    {React.Children.only(children)}
  </Provider>
);

export default Redux;