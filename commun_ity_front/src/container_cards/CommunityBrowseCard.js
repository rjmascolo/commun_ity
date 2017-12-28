import React from 'react'
import { Button, Icon, Item, Label } from 'semantic-ui-react'


class CommunityBrowseCard extends React.Component {
  state = {
    notJoined: true
  }
  handleClick = () => {
    this.props.joinCommunity(this.props.userId, this.props.community.id);
    this.setState({notJoined: false})
    this.props.community.members.push("")
  }

  render() {
    const community = this.props.community
    const members = community.members.length
  return (
    <Item>
      <Item.Image src="http://cdn2us.denofgeek.com/sites/denofgeekus/files/kinopoisk-ru-big-lebowski_2c-the-588419.jpg" />

      <Item.Content>
        <Item.Header as='a'>{community.name}</Item.Header>
        <Item.Meta>
          <span className='cinema'>Brooklyn, NY (need to add a location value for events)</span>
        </Item.Meta>
        <Item.Description>{community.description}</Item.Description>
        <Item.Extra>
          {this.state.notJoined && !this.props.alreadyJoined ?
            (<Button primary floated='right' onClick={this.handleClick}>
            Join Community
            <Icon name='right chevron' />
          </Button>) :
          (<Button primary basic floated='right'>
          You're a member!
        </Button>)
         }
          <Label><Icon name='group' /> {members} People Belong</Label>
        </Item.Extra>
      </Item.Content>
    </Item>
  )
  }
}

export default CommunityBrowseCard
