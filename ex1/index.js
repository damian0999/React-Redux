import Redux from 'redux';
import {render} from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import Example from './components/Example.js';
import store from './redux/store/config.js';

render(
  <Provider store={store}>
    <Example />
  </Provider>,
  document.getElementById('root')
)
