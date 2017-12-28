import React from 'react'
import { Button, Icon, Item, Label } from 'semantic-ui-react'

const EventsBrowseItem = ({event}) => {
  let href = `/events/${event.id}`
  return (
    <Item>
      <Item.Image src={event.image} />

      <Item.Content>
        <Item.Header as='a'>{event.name}</Item.Header>
        <Item.Meta>
          <span className='cinema'>Roco's Bowling Alley(need to add a location value for events)</span>
        </Item.Meta>
        <Item.Description>{event.description}</Item.Description>
        <Item.Extra>
          <Button primary floated='right' href={href}>
            Get Details
            <Icon name='right chevron' />
          </Button>
          <Button
            floated='right'
            basic
            color='blue'
            content='RSVP'
            icon='calendar'
            // onClick={this.props.goingToEvent}
            label={{ as: 'a', basic: true, color: 'blue', pointing: 'left', content: `x People Going` }}
          />
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}

export default EventsBrowseItem
