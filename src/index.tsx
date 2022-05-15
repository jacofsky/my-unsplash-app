import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux'


import MyUnsplashApp from './MyUnsplashApp';
import './index.css'
import { store } from './redux/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <MyUnsplashApp />
    </Provider>
  </React.StrictMode>
);