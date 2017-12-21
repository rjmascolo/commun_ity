import React from 'react'
import EventsContainer from '../containers/EventsContainer'
import TaskTable from '../containers/TasksTable'
import { Tab, Header, Segment } from 'semantic-ui-react'

const panes = [
  { menuItem: 'Your Events', render: () => <Tab.Pane attached={false}><EventsContainer /></Tab.Pane> },
  { menuItem: 'Your Tasks', render: () => <Tab.Pane attached={false}><TaskTable /></Tab.Pane> }
]

class UserHome extends React.Component{

  render(){

    return(
    <div>
      <h1>Welcome back Ryan!</h1>
      <p>Check out your upcoming events and tasks below.</p>
      <Tab panes={panes} />
    </div>
    )
  }
}

export default UserHome
