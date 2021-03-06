import React from 'react';
import ReactDOM from 'react-dom';
import {MainRouter} from './routers';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {Provider} from 'react-redux';
import store from './reducers/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <MainRouter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
