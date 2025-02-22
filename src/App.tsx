import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import FormilyPage from './pages/FormilyPage';
import ZustandPage from './pages/ZustandPage';

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
        <Routes>
          <Route path="/formily" element={<FormilyPage />} />
          <Route path="/zustand" element={<ZustandPage />} />
          <Route path="/" element={
            <div>
              <h1>Home Page</h1>
            </div>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
