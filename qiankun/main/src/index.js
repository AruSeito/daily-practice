import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import appsConfig from "./micro_app";
import { registerMicroApps, start } from 'qiankun';
import { BrowserRouter } from "react-router-dom";




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

registerMicroApps(appsConfig, {
  beforeLoad: app => {
    console.log("beforeLoad", app.name);
  },
  beforeMount: app => {
    console.log("beforeMount", app.name);
  },
  afterMount: app => {
    console.log("afterMount", app.name);
  },
  afterUnmount: app => {
    console.log("afterUnmount", app.name);
  }
});

start();


