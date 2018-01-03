import React from 'react'
// import UserCard from '../../container_cards/UserCard'
import TasksTable from '../../containers/TasksTable'
import TaskForm from '../../forms/TaskForm'
import MemberCard from '../../container_cards/memberCard'

import { Header, Image, List } from 'semantic-ui-react'


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

  render(){
    const isManager = this.state.event.community ? this.props.user.managingCommunities.map(community => community.id).includes(parseInt(this.state.event.community.id)) : null

    const eventParticipants = this.state.event.tasks ? (this.state.event.tasks.filter(task => task.user).map ((task, i ) =>  <MemberCard member={task.user} isManager={false} key={i} /> )) : null
    // const communityManagers = this.state.event.tasks ? (this.state.community.managers.map ((member, i ) => <MemberCard member={member} isManager={true} key={i} /> )) : null

    return(
        <div id="event-div">
          <Image src={this.state.event.image} size='medium' circular id="event-image" />
          <Header as='h2' icon textAlign='center'>
            <Header.Content>
              {this.state.event.name}
            </Header.Content>
            <Header.Subheader>
              {this.state.event.description}
            </Header.Subheader>
          </Header>
          <List>
            <h4>Members Going</h4>
            {eventParticipants}
          </List>
          <TasksTable tasks={this.state.event.tasks} volunteer={this.props.volunteer} user={this.props.user} getTaskUser={this.getTaskUser}/>
          {isManager ? <TaskForm createTask={this.props.createTask} event_id={this.state.event.id} addTask= {this.addTask} /> : null }
      </div>
    )
  }
}

export default Event
