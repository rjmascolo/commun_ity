import React from 'react'
import {Item} from 'semantic-ui-react'
import CommunityBrowseCard from '../../container_cards/CommunityBrowseCard'

let URL = "http://localhost:3000/communities"

class CommunitiesBrowse extends React.Component{
  state = {
    communitities:[]
  }

  componentDidMount(){
    fetch(URL).then(res => res.json()).then( communities => this.setState({communities}))
  }

  render(){
    const communitiesDets = this.state.communities ? this.state.communities.map(community => {
      return (
        <CommunityBrowseCard
            community={community}
            joinCommunity={this.props.joinCommunity}
            userId={this.props.user.id}
            alreadyJoined={this.props.user.communities.map(community => community.id).includes(community.id)}
          />) } )
      : null

    return(
    <div id="user-home-div">
      <h1 id="user-home-welcome">Communities Around You</h1>
      <p id="user-home-welcome">Take a look through the communities in your area</p>
      <br/>
      <div id="browse-event-card-container">
        <Item.Group divided>
          {communitiesDets}
        </Item.Group>
      </div>
    </div>
    )
  }
}

export default CommunitiesBrowse
