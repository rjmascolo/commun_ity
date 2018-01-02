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

    const managedCommunitiesDets = this.state.communities ? this.props.user.managingCommunities.map(community => {
      return (
        <CommunityBrowseCard
            community={community}
            joinCommunity={this.props.joinCommunity}
            userId={this.props.user.id}
            alreadyJoined={true}
            isManager={true}
          />) } )
      : null
    const memberOfCommunitiesDets = this.state.communities ? this.props.user.memberOf.map(community => {
      return (
        <CommunityBrowseCard
            community={community}
            joinCommunity={this.props.joinCommunity}
            userId={this.props.user.id}
            alreadyJoined={true}
            isManager={false}
          />) } )
      : null


    const filteredCommunities = this.state.communities ? this.state.communities.filter( community => {
      let userManagingCommunitiesId = this.props.user.managingCommunities.map(community => community.id)
      let userMemberOfId = this.props.user.memberOf.map(community => community.id)
      return !(userManagingCommunitiesId.includes(community.id) || userMemberOfId.includes(community.id) )
    }) : null

    const communitiesDets = this.state.communities ? filteredCommunities.map(community => {
      return (
        <CommunityBrowseCard
            community={community}
            joinCommunity={this.props.joinCommunity}
            userId={this.props.user.id}
            alreadyJoined={this.props.user.memberOf.map(community => community.id).includes(community.id)}
            isManager={this.props.user.managingCommunities.map(community => community.id).includes(community.id)}
          />) } )
      : null

    return(
    <div id="user-home-div">
      <h1 id="user-home-welcome">Communities Around You</h1>
      <p id="user-home-welcome">Take a look through the communities in your area</p>
      <br/>
      <div id="browse-event-card-container">
        <h1>You manage</h1>
        <Item.Group divided>
          {managedCommunitiesDets}
        </Item.Group>
        <h1>You Belong To</h1>
        <Item.Group divided>
          {memberOfCommunitiesDets}
        </Item.Group>
        <h1>Communities You Can Join</h1>
        <Item.Group divided>
          {communitiesDets}
        </Item.Group>
      </div>
    </div>
    )
  }
}

export default CommunitiesBrowse
