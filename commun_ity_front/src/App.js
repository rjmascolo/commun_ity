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
import CommunitiesBrowse from './pages/browse/CommunitiesBrowse'
import EventsBrowse from './pages/browse/EventsBrowse'
import Event from './pages/individual_pages/Event'
import Community from './pages/individual_pages/Community'


let URL = "http://localhost:3000/users/2"

class App extends Component {
  state = {
    events:[],
    communities:[],
    user_type: "",
    user: {
      id: null,
      first_name: '',
      last_name:'',
      communities:[],
      tasks:[],
      events:[]
    }
  }

  componentDidMount(){
    fetch(URL).then(res => res.json()).then(userData => {
      this.setState(
        {
          user: {
            id: userData.id,
            first_name: userData.first_name,
            last_name: userData.last_name,
            tasks: userData.tasks,
            events: userData.user_events,
            communities: userData.member_of,
          }
        }
      )
    })
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

  render() {
    console.log()
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
            {/* Dashboard routes */}
            <Route exact path="/your-calendar" render={() => <CalendarPage events={this.state.user.events} tasks={this.state.user.tasks} user={this.state.user}/>} />
            <Route exact path="/your-events" render={() => <EventsPage events={this.state.user.events} user={this.state.user}/>} />
            <Route exact path="/your-tasks" render={() => <TasksPage tasks={this.state.user.tasks} user={this.state.user}/>} />
            {/* browse routes */}
            <Route exact path="/communities" render={() => <CommunitiesBrowse user={this.state.user} joinCommunity={this.joinCommunity}/>} />
            <Route exact path="/events" render={() => <EventsBrowse user={this.state.user} addEvent={this.joinCommunity} />} />
            {/* individual pages routes */}
            <Route path="/events/:id" render={(args) => <Event id={args.match.params.id} /> } />
            <Route path="/community/:id" render={(args) => <Community id={args.match.params.id} />} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
