import React from 'react'
import UserCard from '../../container_cards/UserCard'
import TaskTableRows from '../../container_cards/TaskTableRows'
import TasksTable from '../../containers/TasksTable'


import { Header, Image, Item } from 'semantic-ui-react'

class Event extends React.Component{
  state = {
    event:[]
  }
  componentDidMount(){
    fetch(`http://localhost:3000/events/${this.props.id}`).then(res => res.json()).then(event => this.setState({event}))
  }

  render(){

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
          <h4>Members Going</h4>
          <TasksTable tasks={this.state.event.tasks}/>
      </div>
    )
  }
}

export default Event
