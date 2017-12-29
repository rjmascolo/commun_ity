// libraries
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// pages
import SidebarLeft from "./Sidebar";
import CalendarPage from "./pages/dashboard/CalendarPage";
import LogIn from "./pages/LogIn";
import EventsPage from "./pages/dashboard/EventsPage";
import TasksPage from "./pages/dashboard/TasksPage";
import CommunitiesBrowse from "./pages/browse/CommunitiesBrowse";
import EventsBrowse from "./pages/browse/EventsBrowse";

//let URL = "http://localhost:3000/users/7";
const token = localStorage.getItem("token");

class App extends Component {
  state = {
    tasks: [],
    events: [],
    communities: [],
    managingCommunities: [],
    memberOf: [],
    //user_type: "",
    user: { id: null, first_name: "", last_name: "" }
  };

  handleLogIn = user => {
    const name = {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name
    };
    this.setState({
      tasks: user.tasks,
      events: user.events,
      managingCommunities: user.managing_communities,
      memberOf: user.member_of,
      //user_type: userType,
      user: name
    });
  };

  getCurrentUser = () => {
    fetch("http://localhost:3000/current_user", {
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json",
        Authorization: token
      }
    })
      .then(res => res.json())
      .then(user => this.handleLogIn(user));
  };

  componentDidMount() {
    if (token) {
      this.getCurrentUser();
    }
    /*fetch(URL)
      .then(res => res.json())
      .then(userData => {
        this.setState({
          tasks: userData.tasks,
          events: userData.events,
          communities: userData.member_of,
          user: {
            id: userData.id,
            first_name: userData.first_name,
            last_name: userData.last_name
          }
        });
      });*/
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div id="sidebar">
              <SidebarLeft handleLogOut={this.handleLogOut} />
            </div>
            <Route
              exact
              path="/login"
              render={routerProps => (
                <LogIn
                  {...routerProps}
                  handleLogIn={this.handleLogIn}
                  error={this.state.error}
                />
              )}
            />
            {/* Dashboard routes */}
            <Route
              exact
              path="/your-calendar"
              render={routerProps => (
                <CalendarPage
                  {...routerProps}
                  events={this.state.events}
                  tasks={this.state.tasks}
                  user={this.state.user}
                />
              )}
            />
            <Route
              exact
              path="/your-events"
              render={routerProps => (
                <EventsPage
                  {...routerProps}
                  events={this.state.events}
                  user={this.state.user}
                />
              )}
            />
            <Route
              exact
              path="/your-tasks"
              render={routerProps => (
                <TasksPage
                  {...routerProps}
                  tasks={this.state.tasks}
                  user={this.state.user}
                />
              )}
            />
            {/* browse routes */}
            <Route
              exact
              path="/communities"
              render={routerProps => <CommunitiesBrowse {...routerProps} />}
            />
            <Route
              exact
              path="/events"
              render={routerProps => <EventsBrowse {...routerProps} />}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
