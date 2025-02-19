import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import FormilyPage from './FormilyPage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <Switch>
          <Route path="/formily" component={FormilyPage} />
          <Route path="/" exact>
            <div>
              <h1>Home Page</h1>
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
