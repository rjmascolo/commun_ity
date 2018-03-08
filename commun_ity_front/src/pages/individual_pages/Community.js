import React from 'react'

import MemberCard from '../../container_cards/memberCard'
import { Image, List, Button, Modal } from 'semantic-ui-react'
import EventsContainer from '../../containers/EventsContainer'
import EventForm from '../../forms/EventForm'
import '../../css/member-container.css'
import '../../css/individual-page-headers.css'

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
        <div id="individual-page">
          <div id="header">
          <div id="header-content">
            <Image src={this.state.community.image_url} size='medium' rounded id="event-image" />
            <div id="title-description">
              <h2 id="header-title">{this.state.community.name}</h2>
              <b><p>Location</p></b>
              <p>{this.state.community.location}</p>
              <b><p>Description</p></b>
              <p>{this.state.community.description}</p>
              {isManager ? (<Modal trigger={<Button>Create An Event</Button>}>
              <Modal.Header>Create An Event</Modal.Header>
              <Modal.Content image>
                <EventForm createEvent={this.props.createEvent} community_id={this.state.community.id} addEvent={this.addEvent}/>
              </Modal.Content>
              </Modal>) : <Button content='Join Us' primary />}
            </div>
          </div>
        </div>
        <div id="body">
          <div id="members-list">
            <div id="member-list-top">
              <h2>Current Members</h2>
            </div>
            <List divided id="member-list-body" size="large">
              {communityManagers}
              {communityMembers}
            </List>
          </div>
          <div id="events-container">
            <h3 id="event-header" >Upcoming Events</h3>
            <EventsContainer events={this.state.community.events} />
          </div>
        </div>
      </div>
    )
  }
}

export default Community
