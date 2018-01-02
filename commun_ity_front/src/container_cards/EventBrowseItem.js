import React from 'react'
import { Button, Icon, Item } from 'semantic-ui-react'

class EventsBrowseItem extends React.Component {
  href = `/events/${this.props.event.id}`

  render() {
    console.log(this.props.event.tasks.length)
    return (
    <Item>
      <Item.Image src={this.props.event.image} />

      <Item.Content>
        <Item.Header as='a'>{this.props.event.name}</Item.Header>
        <Item.Meta>
          <span className='cinema'>{this.props.event.location}</span>
        </Item.Meta>
        <Item.Description>{this.props.event.description}</Item.Description>
        <Item.Extra>
          <Button primary floated='right' href={this.href}>
            Get Details
            <Icon name='right chevron' />
          </Button>
          { this.props.isGoing ?
            (<Button
            floated='right'
            basic
            color='grey'
            content="You're Going"
            icon='calendar'
            label={{ as: 'a', basic: true, color: 'blue', pointing: 'left', content: `${this.props.event.tasks.length} People Going` }}
          />)
          :
          (<Button
          floated='right'
          basic
          color='blue'
          content='RSVP'
          icon='calendar'
          onClick={() => {
            this.setState({isGoing: true});
            this.props.goingToEvent(this.props.user_id, this.props.event.id);
          }}
          label={{ as: 'a', basic: true, color: 'blue', pointing: 'left', content: `x People Going` }}
        />)
        }
        </Item.Extra>
      </Item.Content>
    </Item>
  )}
}

export default EventsBrowseItem
