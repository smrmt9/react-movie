import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import "./styles.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <div style={{height:"100px"}}></div>
    <App />
  </div>
);

