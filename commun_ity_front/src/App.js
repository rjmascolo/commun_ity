// libraries
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
// pages
import SidebarLeft from "./Sidebar";
// import CalendarPage from "./pages/dashboard/CalendarPage";
import LogIn from "./pages/LogIn";
import EventsPage from "./pages/dashboard/EventsPage";
import TasksPage from "./pages/dashboard/TasksPage";
import CommunitiesBrowse from "./pages/browse/CommunitiesBrowse";
import EventsBrowse from "./pages/browse/EventsBrowse";
import Event from "./pages/individual_pages/Event";
import Community from "./pages/individual_pages/Community";

const token = localStorage.getItem("token");

class App extends Component {
  state = {
    user: {
      id: null,
      firstName: "",
      lastName: "",
      managingCommunities: [],
      memberOf: [],
      tasks: [],
      events: [],
      uniqueEventTasks: []
    }
  };

  handleLogIn = user => {
    const newUser = {
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
      managingCommunities: user.managing_communities,
      memberOf: user.member_of,
      tasks: user.tasks,
      events: user.events,
      uniqueEventTasks: user.unique_tasks_by_event
    };
    this.setState({
      user: newUser
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
  }

  joinCommunity = (user, community) => {
    let url = "http://localhost:3000/memberships";
    let object = {
      method: "post",
      headers: {
        accept: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        membership: {
          user_id: user,
          community_id: community,
          member_type: "member"
        }
      })
    };
    fetch(url, object)
      .then(res => res.json())
      .then(console.log());
  };

  toggleCompletedTask = (taskId, value) => {
    let url = `http://localhost:3000/tasks/${taskId}`;
    let object = {
      method: "PATCH",
      headers: {
        accept: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({ task: { completed: value } })
    };
    fetch(url, object)
      .then(res => res.json())
      .then(console.log());
    let newArray = [...this.state.user.tasks];
    newArray.find(item => item.id === taskId).completed = value;
    this.setState({ user: { tasks: newArray } });
  };

  createEvent = newEvent => {
    let url = "http://localhost:3000/events";
    let object = {
      method: "post",
      headers: {
        accept: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        event: {
          name: newEvent.name,
          start_date: newEvent.start_date,
          end_date: newEvent.end_date,
          image: newEvent.image,
          volunteer_num: 0,
          description: newEvent.description,
          location: newEvent.location,
          community_id: newEvent.community_id
        }
      })
    };
    return fetch(url, object);
  };

  goingToEvent = (user_id, event_id) => {
    let url = "http://localhost:3000/tasks/";
    let object = {
      method: "post",
      headers: {
        Accept: "application/json",
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        task: {
          description: "RSVP",
          event_id: event_id,
          user_id: user_id,
          completed: true
        }
      })
    };
    fetch(url, object)
      .then(res => res.json())
      .then(task =>
        this.setState(prevState => {
          let newTask = [...prevState.user.tasks, task];
          return { user: { ...prevState.user, task: newTask } };
        })
      );
  };

  createTask = (description, event_id) => {
    let url = "http://localhost:3000/tasks";
    let object = {
      method: "post",
      headers: {
        accept: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({
        task: {
          description: description,
          event_id: event_id
        }
      })
    };
    return fetch(url, object).then(res => res.json());
  };

  volunteer = (userId, taskId) => {
    let url = `http://localhost:3000/tasks/${taskId}`;
    let object = {
      method: "PATCH",
      headers: {
        accept: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({ task: { user_id: userId } })
    };
    fetch(url, object).then(res => res.json())
    .then(task => this.setState(prevState => {
      let newTask = [...prevState.user.tasks, task];
      debugger;
      return { user: { ...prevState.user, task: newTask } };
      })
    );
  };

  render() {
    const token = localStorage.getItem("token");
    return (
      <div className="App">
        <Router>
          <div>
            <div id="sidebar">
              <SidebarLeft />
            </div>
            <Route
              exact
              path="/"
              render={() => {
                return token ? (
                  <Redirect to="/events" />
                ) : (
                  <Redirect to="/login" />
                );
              }}
            />
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
            {/* <Route
              exact
              path="/your-calendar"
              render={() => {
                return localStorage.getItem("token") ? (
                  <CalendarPage
                    events={this.state.user.events}
                    tasks={this.state.user.tasks}
                    user={this.state.user}
                  />
                ) : (
                  <Redirect to="/login" />
                );
              }}
            /> */}
            <Route
              exact
              path="/your-events"
              render={() => {
                return token ? (
                  <EventsPage
                    events={this.state.user.uniqueEventTasks}
                    user={this.state.user}
                  />
                ) : (
                  <Redirect to="/login" />
                );
              }}
            />
            <Route
              exact
              path="/your-tasks"
              render={routerProps => {
                return token ? (
                  <TasksPage
                    {...routerProps}
                    tasks={this.state.user.tasks}
                    user={this.state.user}
                    toggleCompletedTask={this.toggleCompletedTask}
                  />
                ) : (
                  <Redirect to="/login" />
                );
              }}
            />
            {/* browse routes */}
            <Route
              exact
              path="/communities"
              render={() => {
                return token ? (
                  <CommunitiesBrowse
                    user={this.state.user}
                    joinCommunity={this.joinCommunity}
                  />
                ) : (
                  <Redirect to="/login" />
                );
              }}
            />
            <Route
              exact
              path="/events"
              render={() => {
                return token ? (
                  <EventsBrowse
                    user={this.state.user}
                    goingToEvent={this.goingToEvent}
                  />
                ) : (
                  <Redirect to="/login" />
                );
              }}
            />
            {/* individual pages routes */}
            <Route
              path="/events/:id"
              render={args => {
                return token ? (
                  <Event
                    id={args.match.params.id}
                    user={this.state.user}
                    goingToEvent={this.goingToEvent}
                    createTask={this.createTask}
                    volunteer={this.volunteer}
                  />
                ) : (
                  <Redirect to="/login" />
                );
              }}
            />
            <Route
              path="/community/:id"
              render={args => {
                return token ? (
                  <Community
                    id={args.match.params.id}
                    user={this.state.user}
                    createEvent={this.createEvent}
                  />
                ) : (
                  <Redirect to="/login" />
                );
              }}
            />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
