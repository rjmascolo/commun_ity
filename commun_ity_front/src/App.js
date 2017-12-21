import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Route exact path="/" render={() => <Home /> } />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
