import React from 'react'
import { Router, Route } from 'react-router'
import { Provider } from 'react-redux'
import ReactDom from 'react-dom'
import 'normalize.css'

import App from './containers/App'
import Settings from './containers/Settings'
import Projects from './containers/Projects'
import Project from './containers/Project'
import Home from './containers/Home'

import configureStore from './store/configureStore'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import { renderDevTools } from './utils/devTools'

const previousState = JSON.parse(localStorage.getItem('state'))
const store = configureStore(previousState)
const history = createBrowserHistory()

history.pushState({},'/')

const appDom = (
  <div className="ci-monitor">
    <Provider store={store}>
          <Router history={history}>
            <Route path="/" component={App}>
              <Route path="home" name="home" component={Home}/>
              <Route path="settings" name="settings" component={Settings}/>
              <Route path="projects" name="projects" component={Projects}>
                <Route path="/projects/:projectId"  component={Project}/>
              </Route>
            </Route>
          </Router>
    </Provider>
    {/* only renders when running in DEV mode */
      renderDevTools(store)
    }
  </div>
)
ReactDom.render(appDom, document.getElementById('main'))
