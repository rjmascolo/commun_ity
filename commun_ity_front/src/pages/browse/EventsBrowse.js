import React from 'react'
import TasksTable from '../../containers/TasksTable'


class TasksPage extends React.Component{

  capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render(){
    return(
    <div id="user-home-div" >
      <h1 id="user-home-welcome">Welcome back {this.capitalizeFirstLetter(this.props.user.first_name)}!</h1>
      <p id="user-home-welcome">Check out your upcoming events and tasks below.</p>
      <TasksTable tasks={this.props.tasks}/>
    </div>
    )
  }
}

export default TasksPage
