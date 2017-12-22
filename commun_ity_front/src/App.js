import React, { Component } from "react";
import "./App.css";
import NavBar from "./NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import UserHome from "./pages/UserHome";
import LogIn from "./pages/LogIn";

class App extends Component {
  state = {
    user: [],
    community: [],
    user_type: ""
  };

  getUser = () => {
    fetch();
  };

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div id="sidebar">
              <SidebarLeft />
            </div>
            <Route
              exact
              path="/login"
              render={() => <LogIn getUser={this.getUser} />}
            />
            <Route exact path="/" render={() => <UserHome />} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
