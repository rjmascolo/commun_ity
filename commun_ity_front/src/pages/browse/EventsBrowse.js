import React from 'react'
import {Item} from 'semantic-ui-react'
import EventsBrowserItem from '../../container_cards/EventBrowseItem'


let URL = "http://localhost:3000/events"

class EventsBrowse extends React.Component{

  state = {
    events:[]
  }

  componentDidMount(){
    fetch(URL).then(res => res.json()).then( events => this.setState({events: events}))
  }

  render(){
    const eventDets = this.state.events.map((event, id) => <EventsBrowserItem event={event} key={id} /> )
    return(
    <div id="user-home-div" >
      <h1 id="user-home-welcome">Events In Your Communities</h1>
      <p id="user-home-welcome">Check out your upcoming events in your communities below.</p>
      <Item.Group divided>
        {eventDets}
      </Item.Group>
    </div>
    )
  }
}

export default EventsBrowse
