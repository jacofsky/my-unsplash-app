import React from 'react';
import ReactDOM from 'react-dom/client';

import MyUnsplashApp from './MyUnsplashApp';
import './index.css'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <MyUnsplashApp />
  </React.StrictMode>
);