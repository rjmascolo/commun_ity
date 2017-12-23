import React from 'react'
import { Button, Icon, Image as ImageComponent, Item, Label } from 'semantic-ui-react'

const EventsBrowseItem = ({event}) => {
  return (
    <Item>
      <Item.Image src={event.image} />

      <Item.Content>
        <Item.Header as='a'></Item.Header>
        <Item.Meta>
          <span className='cinema'>{event.name}</span>
        </Item.Meta>
        <Item.Description>{event.description}</Item.Description>
        <Item.Extra>
          <Label>IMAX</Label>
          <Label icon='globe' content='Additional Languages' />
        </Item.Extra>
      </Item.Content>
    </Item>
  )
}

export default EventsBrowseItem
