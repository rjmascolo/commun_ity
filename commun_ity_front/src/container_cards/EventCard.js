import React from 'react'
import { Card, Icon, Image } from 'semantic-ui-react'

const EventCard = ({name, date, image}) => (
  <Card>
    <Image src={image} />
    <Card.Content>
      <Card.Header>
        {name}
      </Card.Header>
      <Card.Meta>
        <span className='date'>
          {date}
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
