import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import {createStore} from 'redux'
import reducer from './redux/reducer'
import {Provider} from 'react-redux'

const store = createStore(reducer)
// console.log("this is what state is", store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
