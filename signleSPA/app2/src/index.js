import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from 'single-spa-react';
import App from './App'
import './index.css';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  domElementGetter: () => document.querySelector('#container'),
  rootComponent: App
});

export const bootstrap = (props) => {
  console.log("app2:bootstrap")
  return reactLifecycles.bootstrap(() => { console.log("app2:reactLifecycles.bootstrap") })
}
export const mount = (props) => {
  console.log("app2:mount");
  return reactLifecycles.mount(() => { console.log("app2:reactLifecycles.mount") })
}
export const unmount = (props) => {
  console.log("app2:unmount");
  return reactLifecycles.unmount(() => { console.log("app2:reactLifecycles.unmount")})
}