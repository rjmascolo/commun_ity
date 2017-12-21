import React from 'react'
import { Grid, Icon, Header, Image } from 'semantic-ui-react'
import EventCard from '../container_cards/EventCard'

const EventsContainer = () => (
  <div>
  <div>
    <Header as='h2' icon textAlign='center'>
      <Header.Content>
         Your Events
      </Header.Content>
    </Header>
  </div>

  <Grid stackable columns={5}>
    <Grid.Column>
      <EventCard />
    </Grid.Column>
    <Grid.Column>
      <EventCard />
    </Grid.Column>
  </Grid>
  </div>
)

export default EventsContainer;
