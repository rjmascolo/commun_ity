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
    console.log(community)
  return (
    <Item>
      <Item.Image src={community.image_url} />

      <Item.Content>
        <Item.Header as='a'>{community.name}</Item.Header>
        <Item.Meta>
          <span className='cinema'>{community.location}</span>
        </Item.Meta>
        <Item.Description>{community.description}</Item.Description>
        <Item.Extra>
          {this.state.notJoined && !(this.props.alreadyJoined || this.props.isManager) ?
            (<Button primary floated='right' onClick={this.handleClick}>
            Join Community
            <Icon name='right chevron' />
          </Button>) :
          (<Button primary basic floated='right'>
          {this.props.isManager ? "You're a manager" : "You're a member!"}
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
