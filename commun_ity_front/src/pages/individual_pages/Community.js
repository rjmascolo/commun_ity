import React from 'react'

import MemberCard from '../../container_cards/memberCard'
import TasksTable from '../../containers/TasksTable'
import { Header, Image, List } from 'semantic-ui-react'
import EventsContainer from '../../containers/EventsContainer'
import EventForm from '../../forms/EventForm'

class Community extends React.Component{
  state = {
    community:[]
  }
  componentDidMount(){
    fetch(`http://localhost:3000/communities/${this.props.id}`).then(res => res.json()).then(community => this.setState({community}))
  }

  addEvent = (data) => {
    this.setState(prevState => {
      let community = prevState.community
      community.events.push(data)
      return {community: community}
    })
  }

  render(){
    const communityMembers = this.state.community.members ? (this.state.community.members.map ((member, i ) => <MemberCard member={member} isManager={false} key={i} /> )) : null
    const communityManagers = this.state.community.managers ? (this.state.community.managers.map ((member, i ) => <MemberCard member={member} isManager={true} key={i} /> )) : null
    const isManager = this.props.user.managingCommunities ? this.props.user.managingCommunities.map(community => community.id).includes(parseInt(this.props.id)) : null

    return(
        <div id="community-div">
          <Image src={this.state.community.image_url} size='medium' circular id="event-image" />
          <Header as='h2' icon textAlign='center'>
            <Header.Content>
              {this.state.community.name}
            </Header.Content>
            <Header.Subheader>
              {this.state.community.description}
            </Header.Subheader>
          </Header>
          <List>
            {communityManagers}
            {communityMembers}
          </List>
          <EventsContainer events={this.state.community.events} />
          {isManager ? <EventForm createEvent={this.props.createEvent} community_id={this.state.community.id} addEvent={this.addEvent}/> : null }
      </div>
    )
  }
}

export default Community
