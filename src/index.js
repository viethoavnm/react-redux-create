/**
 * Starting react app from here
 * Author: viethoavnm
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Redux from './redux';
import registerServiceWorker from './utils/serviceworker/registerServiceWorker';

/**
 * Starting app
 * Render
 */
(function starting() {
  const ROOT = document.getElementById('root');
  const App = () =>
    (<Redux>

    </Redux>);
  ReactDOM.render(<App />, ROOT);
  registerServiceWorker();
})();