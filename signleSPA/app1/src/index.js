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

export const bootstrap =(props)=>{
  console.log("bootstrap")
  return reactLifecycles.bootstrap(()=>{})
}
export const mount = (props)=>{
  console.log("mount");
  return reactLifecycles.mount(()=>{})
}
export const unmount = (props)=>{
  console.log("unmount");
  return reactLifecycles.unmount(()=>{})
}