import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Consumer from "./Context"
import "./index.css";
import './bootstrap.min.css'

ReactDOM.render(
  <Consumer>
      <App />
  </Consumer>,
  document.getElementById('root')
);