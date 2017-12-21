import React from 'react'
import EventsContainer from '../containers/EventsContainer'
import TaskTable from '../containers/TasksTable'

class UserHome extends React.Component{

  render(){
    console.log("hello")
    return(
      <div>
        <EventsContainer />

        <TaskTable />
      </div>
    )
  }
}

export default UserHome
