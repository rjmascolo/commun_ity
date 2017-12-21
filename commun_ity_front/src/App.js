import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import UserHome from './pages/UserHome'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Route exact path="/" render={() => <UserHome /> } />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
