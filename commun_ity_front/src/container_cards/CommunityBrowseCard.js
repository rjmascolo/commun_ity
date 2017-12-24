import React from 'react'
import { Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react'

const EventsBrowseItem = () => {
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
          <Button primary floated='right'>
            Get Details
            <Icon name='right chevron' />
          </Button>
          <Label><Icon name='group' /> x People Going</Label>
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}

export default EventsBrowseItem
