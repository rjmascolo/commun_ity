import React from 'react'
import {Item} from 'semantic-ui-react'

let URL = "http://localhost:3000/communities"

class CommunitiesBrowse extends React.Component{
  state = {
    communitities:[]
  }

  componentDidMount(){
    fetch(URL).then(res => res.json()).then( communities => this.setState({communities}))
  }

  render(){
    // const communitiesDets = this.state.communities.map(communities => console.log(communities))
    console.log(this.state.communities)
    return(
    <div id="user-home-div" >
      <h1 id="user-home-welcome">Communities Around You</h1>
      <p id="user-home-welcome">Take a look through the communities in your area</p>

      <br/>
      <div id="browse-event-card-container">
        <Item.Group divided>

        </Item.Group>
      </div>
    </div>
    )
  }
}

export default CommunitiesBrowse
