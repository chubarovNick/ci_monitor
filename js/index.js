import React from 'react';
import { Router, Route, Link } from 'react-router';
import {Provider} from 'react-redux';

import App from './containers/App';
import Settings from './containers/Settings';
import Projects from './containers/Projects';

import configureStore from './store/configureStore';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {renderDevTools} from './utils/devTools';

const store = configureStore();
const history = createBrowserHistory();


React.render(
  <div className="ci-monitor">
    <Provider store={store}>
      {
        ()=>
          <Router history={history}>
            <Route path="/" component={App}>
              <Route path="settings" component={Settings}/>
              <Route path="projects" component={Projects}/>
            </Route>
          </Router>
      }

    </Provider>
    {/* only renders when running in DEV mode */
      renderDevTools(store)
    }
  </div>

, document.getElementById('main'));
