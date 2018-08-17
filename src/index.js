/**
 * Starting react app from here
 * Author: viethoavnm
 */

import React from 'react';
import ReactDOM from 'react-dom';
import ReduxProvider from './redux';
import Router from './router';
import IntlProvider from './utils/locales';
import registerServiceWorker from './utils/serviceworker/registerServiceWorker';

/**
 * Starting app
 * Render
 */
(function starting() {
  const ROOT = document.getElementById('root');
  const App = () =>
    (<ReduxProvider>
      <IntlProvider>
        <Router />
      </IntlProvider>
    </ReduxProvider>);
  ReactDOM.render(<App />, ROOT);
  registerServiceWorker();
})();