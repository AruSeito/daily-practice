import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom";
import { registerApplication, start } from "single-spa"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <ul>
            <Link to="/app1">app1</Link>
            <Link to="/app2">app2</Link>
          </ul>
        </p>
      </header>
      <div id="container"></div>
    </div>
  );
}

export default App;

export const createScript = (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = url;
    script.onload = resolve;
    script.onerror = reject;
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode.appendChild(script, firstScript);
  });
};

const loadApp = (url, globalVal) => {
  return async () => {
    console.log("loadApp", globalVal);
    await createScript(url + "/static/js/bundle.js");
    return window[globalVal];
  }
}

const apps = [
  {
    // 子应用名称
    name: "app1",
    // 子应用加载函数
    app: loadApp("http://localhost:3001", "app1"),
    // 当路由满足条件时，挂载子应用
    activeWhen: location => { console.log("app1 ActiveWhen fun"); if (location.pathname.startsWith("/app1")) { console.log("app1 Will Active") } return location.pathname.startsWith("/app1"); },
    // 传给子应用的
    customProps: {}
  },
  {
    name: "app2",
    app: loadApp("http://localhost:3002", "app2"),
    activeWhen: location => { console.log("app2 ActiveWhen fun"); if (location.pathname.startsWith("/app2")) { console.log("app2 Will Active") } return location.pathname.startsWith("/app2"); },
    customProps: {}
  }
]

for (let i = apps.length - 1; i >= 0; i--) {
  registerApplication(apps[i]);
}
start();
