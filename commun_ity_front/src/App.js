// libraries
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// pages
import SidebarLeft  from './Sidebar'
import CalendarPage from "./pages/dashboard/CalendarPage";
import LogIn from "./pages/LogIn";
import EventsPage from "./pages/dashboard/EventsPage";
import TasksPage from "./pages/dashboard/TasksPage";


let URL = "http://localhost:3000/users/2"

class App extends Component {
  state = {
    tasks:[],
    events:[],
    communities:[],
    user_type: "",
    user: { id: null, first_name: '', last_name:''}
  }

  componentDidMount(){
    fetch(URL).then(res => res.json()).then(userData => {
      console.log(userData.member_of)
      this.setState(
        {
          tasks: userData.tasks,
          events: userData.events,
          communities: userData.member_of,
          user: { id: userData.id, first_name: userData.first_name, last_name: userData.last_name}
        }
      )
    })
  }

  render() {
    console.log(this.state)
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
            <Route exact path="/calendar" render={() => <CalendarPage events={this.state.events} tasks={this.state.tasks} user={this.state.user}/>} />
            <Route exact path="/events" render={() => <EventsPage events={this.state.events} user={this.state.user}/>} />
            <Route exact path="/tasks" render={() => <TasksPage tasks={this.state.tasks} user={this.state.user}/>} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
