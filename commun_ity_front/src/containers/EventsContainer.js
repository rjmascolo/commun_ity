import React from 'react'
import { Grid, Icon, Header, Image } from 'semantic-ui-react'
import EventCard from '../container_cards/EventCard'

const EventsContainer = () => (
  <div>
  <div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>
        Events
      </Header.Content>
    </Header>
  </div>

  <Grid stackable columns={3}>
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
