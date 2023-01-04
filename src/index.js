import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import AppRouter from './routers/AppRouter';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/styles.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
