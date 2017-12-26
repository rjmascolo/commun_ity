import React from 'react'
import { Item, Icon } from 'semantic-ui-react'

const UserCard = (props) => {
  return (
    <Item>
      <Item.Image size='tiny' src='/assets/images/avatar/large/jenny.jpg' />

      <Item.Content verticalAlign='middle'>
        <Item.Header>
          <Icon name='like' />
          Veronika Ossi
        </Item.Header>
      </Item.Content>
    </Item>
 )
}

export default UserCard;
