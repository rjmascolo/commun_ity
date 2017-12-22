import React from 'react'
import EventsContainer from '../containers/EventsContainer'
import TaskTable from '../containers/TasksTable'
import MyCalendar from '../containers/calendar'
import { Tab } from 'semantic-ui-react'

let URL = "http://localhost:3000/users/10"


class UserHome extends React.Component{

  state = {
    tasks:[],
    events:[],
    communities:[]
  }

  componentDidMount(){
    fetch(URL).then(res => res.json()).then(userData => {
      this.setState({tasks: userData.tasks, events: userData.events, communities: userData.communities})
    })
  }

  render(){
    let panes = [
      { menuItem: 'Your Events', render: () => <Tab.Pane attached={false}><EventsContainer events= {this.state.events} /></Tab.Pane> },
      { menuItem: 'Your Tasks', render: () => <Tab.Pane attached={false}><TaskTable task= {this.state.tasks} /></Tab.Pane> }
    ]
    return(
    <div id="user-home-div" >
      <h1 id="user-home-welcome">Welcome back Ryan!</h1>
      <p id="user-home-welcome">Check out your upcoming events and tasks below.</p>
      {/* <div id="user-home-tab">
        <Tab panes={panes} data={this.state} />
      </div> */}
      <MyCalendar />
    </div>
    )
  }
}

export default UserHome
