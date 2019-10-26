import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
        <Route exact path="/" component={LandingPage} />
        <Route path="/results" component={ResultsPage} />
        <Route path="/form" component={FormPage} />
        {/* <Route path="/about" component={AboutPage} /> */}
      </div>
    </Router>
  );
}

export default App;