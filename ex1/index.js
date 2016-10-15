import Redux from 'redux';
import ReactDOM from 'react-dom';
import React from 'react';
import Example from './components/Example.js';
import store from './redux/store/config.js';
import {decrement, getSum, getRandomImage} from './redux/action/index.js';

function render(){
  ReactDOM.render(
    <Example
      value={store.getState()}
      onDecrement={() => store.dispatch(decrement())}
      onSum={(a,b) => store.dispatch(getSum(a,b))}
      onRandomImages={() => store.dispatch(getRandomImage)}
      />,
    document.getElementById('root')
  );
}

render();
store.subscribe(render);
