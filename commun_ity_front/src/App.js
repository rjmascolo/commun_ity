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
import CommunitiesBrowse from './pages/browse/CommunitiesBrowse'
import EventsBrowse from './pages/browse/EventsBrowse'
import Event from './pages/individual_pages/Event'
import Community from './pages/individual_pages/Community'

const token = localStorage.getItem("token");

class App extends Component {
  state = {
    events: [],
    communities: [],
    user: {
      id: null,
      firstName: '',
      lastName:'',
      managingCommunities:[],
      memberOf:[],
      tasks:[],
      events:[]
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
      events: user.events
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
    let url = "http://localhost:3000/memberships"
    let object = {
      method: 'post',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({membership: {user_id: user, community_id: community, member_type: "member" }})
      }
    fetch(url,object).then(res => res.json()).then(console.log())
  }

  toggleCompletedTask = (taskId, value) => {
    let url = `http://localhost:3000/tasks/${taskId}`
    let object = {
      method: 'PATCH',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json'
      },
      body: JSON.stringify({task: {completed: value}})
      }
    fetch(url,object).then(res => res.json()).then(console.log())
    let newArray = [...this.state.user.tasks]
    newArray.find(item => item.id === taskId).completed = value
    this.setState({user:{tasks: newArray}})
  }

createEvent = (newEvent) => {
  let url = "http://localhost:3000/events"
  let object = {
    method: 'post',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json'
    },
    body: JSON.stringify({event: {
      name: newEvent.name,
      start_date: newEvent.start_date,
      end_date: newEvent.end_date,
      image: newEvent.image,
      volunteer_num: 0,
      description: newEvent.description,
      location: newEvent.location,
      community_id: newEvent.community_id
      }})
    }
  return fetch(url,object)
}

goingToEvent = (user_id, event_id) => {
  let url = "http://localhost:3000/tasks/"
  let object = {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-type': 'application/json'
    },
    body: JSON.stringify({task: {
      description:"RSVP",
      event_id: event_id,
      user_id: user_id,
      completed: true
      }
    })
    }
  fetch(url,object).then(res => res.json()).then(task => this.setState(prevState => {
    let newTask = [...prevState.user.tasks, task]
    return {user: {...prevState.user, task: newTask}}
  }))
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
            <Route exact path="/your-calendar" render={() => <CalendarPage events={this.state.user.events} tasks={this.state.user.tasks} user={this.state.user}/>} />
            <Route exact path="/your-events" render={() => <EventsPage events={this.state.user.events} user={this.state.user}/>} />
            <Route exact path="/your-tasks" render={() => <TasksPage tasks={this.state.user.tasks} user={this.state.user} toggleCompletedTask={this.toggleCompletedTask} />} />
            {/* browse routes */}
            <Route exact path="/communities" render={() => <CommunitiesBrowse user={this.state.user} joinCommunity={this.joinCommunity}/>} />
            <Route exact path="/events" render={() => <EventsBrowse user={this.state.user} goingToEvent={this.goingToEvent} />} />
            {/* individual pages routes */}
            <Route path="/events/:id" render={(args) => <Event id={args.match.params.id} user={this.state.user} goingToEvent={this.goingToEvent}/> } />
            <Route path="/community/:id" render={(args) => <Community id={args.match.params.id} user={this.state.user} createEvent={this.createEvent} />} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
