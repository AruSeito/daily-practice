import logo from './logo.svg';
import './App.css';
import {Link} from "react-router-dom";

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
      <div id="container">
        <div id="root"></div>
      </div>
    </div>
  );
}

export default App;
