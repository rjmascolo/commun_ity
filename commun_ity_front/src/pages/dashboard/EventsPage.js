import React from 'react'
import EventsContainer from '../../containers/EventsContainer'


class EventsPage extends React.Component{

  render(){
    return(
    <div id="user-home-div" >
      <h1 id="user-home-welcome">Welcome back Ryan!</h1>
      <p id="user-home-welcome">Check out your upcoming events and tasks below.</p>
      <EventsContainer events={this.props.events} />
    </div>
    )
  }
}

export default EventsPage
