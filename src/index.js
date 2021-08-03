import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, HashRouter } from "react-router-dom";
import { registerNav } from './modules/navigation'
import {Provider} from 'react-redux'
import store from './redux/store'

const appElement = document.getElementById('app');

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter  ref={registerNav}>
      <HashRouter>
      <React.StrictMode>
        <App />
        </React.StrictMode>{" "}
      </HashRouter>
    </BrowserRouter>
    </Provider>
, appElement);