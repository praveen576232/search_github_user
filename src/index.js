import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import reducer, { intialState } from './StateProvider/Reducer/reducer';
import { StateProvider } from './StateProvider/StateProvider';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={intialState} reducer={reducer}>
    <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
