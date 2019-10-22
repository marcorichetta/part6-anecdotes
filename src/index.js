import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";

import App from './App'
import store from './store'


ReactDOM.render(
  /* We have to define our application as the child of
      the Provider component and pass it our Redux store */
  <Provider store={store}>
    <App />
  </Provider>,
    document.getElementById('root')
)