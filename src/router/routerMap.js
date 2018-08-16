/**
 * Mapping and routing app
 * Author: viethoavnm
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import * as PATH from './constants';

const RouterMap = () =>
  (<Switch>
    <Route path={PATH.HOME} exact />
  </Switch>);

export default RouterMap;