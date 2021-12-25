import './public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"


function render(props) {
  const { container, routerBase } = props;
  ReactDOM.render(<BrowserRouter basename={window.__POWERED_BY_QIANKUN__ ? routerBase : '/'}><App /></BrowserRouter>, container ? container.querySelector('#root') : document.querySelector('#root'));
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('app1 bootstraped');
}

export async function mount(props) {
  console.log('app1 props from main framework', props);
  props.onGlobalStateChange((state)=>{
    console.log("子类获取",state);
  },true)
  render(props);
}

export async function unmount(props) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(container ? container.querySelector('#root') : document.querySelector('#root'));
}
