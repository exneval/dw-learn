import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import Home from "./Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav
            style={{
              backgroundColor: "yellow",
              display: "flex",
              justifyContent: "space-between",
              height: "30px"
            }}
          >
            <div>
              <Link to="/home">Home</Link>
            </div>
            <div>
              <Link to="/about">About</Link>
            </div>
            <div>
              <Link to="/contact">Contact</Link>
            </div>
            <div>
              <Link to="/login">Login</Link>
            </div>
          </nav>
          <Switch>
            <Route path="/home">
              <Home>This is Home Page</Home>
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
