import React from 'react'

import MemberCard from '../../container_cards/memberCard'
import TasksTable from '../../containers/TasksTable'
import { Header, Image, List } from 'semantic-ui-react'

class Community extends React.Component{
  state = {
    community:[]
  }
  componentDidMount(){
    fetch(`http://localhost:3000/communities/${this.props.id}`).then(res => res.json()).then(community => this.setState({community}))
  }

  render(){
    const communityMembers = this.state.community.members ? (this.state.community.members.map (member => <MemberCard member={member} /> )) : null
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
            {communityMembers}
          </List>
      </div>
    )
  }
}

export default Community
