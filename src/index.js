/**
 * Starting react app from here
 * Author: viethoavnm
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Redux from './redux';
import Locale from './locales';
import Router from './router';
import registerServiceWorker from './utils/serviceworker/registerServiceWorker';

/**
 * Starting app
 * Render
 */
(function starting() {
  const ROOT = document.getElementById('root');
  const App = () =>
    (<Redux>
      <Locale>
        <Router />
      </Locale>
    </Redux>);
  ReactDOM.render(<App />, ROOT);
  registerServiceWorker();
})();