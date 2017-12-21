import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const EventCard = () => (
  <Card>
    <Image src='http://www.turnbacktogod.com/wp-content/uploads/2009/04/the-last-supper-03.jpg' />
    <Card.Content>
      <Card.Header>
        Potluck Dinner Party
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          6:30 on Sunday Febuary 31st
        </span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='user' />
        22 People Going
      </a>
    </Card.Content>
  </Card>
)

export default EventCard
