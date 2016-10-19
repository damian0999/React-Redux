import Redux from 'redux';
import {render} from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import Example from './components/Example.js';
import store from './redux/store/config.js';
import Links from './components/Links.js';
import Example02 from './components/Example02.js'

const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Links}>
        <IndexRoute component={Example}/>
        <Route path='example02' component={Example02}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
