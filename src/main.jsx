import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css';
import './assets/css/style.css'
import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <App />
  </Provider>
)