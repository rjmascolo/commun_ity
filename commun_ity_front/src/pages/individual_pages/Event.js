import React from 'react'
// import UserCard from '../../container_cards/UserCard'
import TasksTable from '../../containers/TasksTable'
import TaskForm from '../../forms/TaskForm'
import MemberCard from '../../container_cards/memberCard'
import '../../css/member-container.css'
import '../../css/individual-page-headers.css'

import { Header, Image, List, Button } from 'semantic-ui-react'


class Event extends React.Component{
  state = {
    event:[]
  }
  componentDidMount(){
    fetch(`http://localhost:3000/events/${this.props.id}`).then(res => res.json()).then(event => this.setState({event}))
  }

  addTask = (newTask) => {
    const eventTasks = this.state.event.task
    this.setState(prevState => {
      let event = prevState.event
      event.tasks.push(newTask)
      return {event: event}
    })
  }
  onlyUnique(data) {
    let prevIds = []
    let newArray = []

    for (let i = 0; i < data.length; i++) {
      prevIds.includes(data[i].id) ? null : newArray.push(data[i]) ; prevIds.push(data[i].id)
    }
    return newArray
  }

  render(){
    const isManager = this.state.event.community ? this.props.user.managingCommunities.map(community => community.id).includes(parseInt(this.state.event.community.id)) : null

    const ridOfRepeatUsers = this.state.event.tasks ? this.onlyUnique(this.state.event.tasks.filter(task => task.user).map(task => task.user)):null
    const eventParticipants = this.state.event.tasks ? ridOfRepeatUsers.map ((user, i ) => {
      return <MemberCard member={user} isManager={false} key={i} />
    } ) : null
    const communityName = this.state.event.community ? this.state.event.community.name: null
    const communityId = this.state.event.community ? this.state.event.community.id: null

    return(
        <div id="individual-page">
          <div id="header">
            <div id="header-content">
              <Image src={this.state.event.image} size='large' rounded id="event-image" />
              <div id="title-description">
                <h2 id="header-title">{this.state.event.name}</h2>
                <p>with <a href={"/community/" + communityId}>{communityName}</a></p>
                <b><p>Location</p></b>
                <p>{this.state.event.location}</p>
                <b><p>Description</p></b>
                <p>{this.state.event.description}</p>
                <Button content='Join Us' primary />
              </div>
            </div>
          </div>
        <div id="body">

            <div id="members-list">
              <div id="member-list-top">
                <h2>Members Going</h2>
              </div>
              <List divided id="member-list-body" size="large">
              {eventParticipants}
              </List>
            </div>
          <div id="task-table-width">
            <h3 id="event-header" >Tasks Needed</h3>
            <TasksTable tasks={this.state.event.tasks} volunteer={this.props.volunteer} user={this.props.user} getTaskUser={this.getTaskUser}/>
            {isManager ? <TaskForm createTask={this.props.createTask} event_id={this.state.event.id} addTask= {this.addTask} /> : null }
          </div>
        </div>
      </div>
    )
  }
}

export default Event
