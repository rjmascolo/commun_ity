import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import EventCard from '../container_cards/EventCard'

const EventsContainer = ({events}) => {
  const eventData = events ? (events.map( (event, i) => {
    return(
      <Grid.Column key={i}>
        <EventCard name={event.name} date={event.date} image={event.image}/>
      </Grid.Column>
    )
  })) : <div>Loading</div>
  return(
    <div>
      <br/>
    <Grid stackable columns={5}>
      {eventData}
    </Grid>
    </div>
  )
}

export default EventsContainer;
