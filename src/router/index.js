/**
 * Routing and handler hash change
 * Author: viethoavnm
 */

import React from 'react';
import { HashRouter } from 'react-router-dom';
import Handler from './handler';
import RouterMap from './routerMap';

const Router = () =>
  (<HashRouter>
    <React.Fragment>
      <Handler />
      <RouterMap />
    </React.Fragment>
  </HashRouter>);
export default Router;