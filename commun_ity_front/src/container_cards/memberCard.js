import React from 'react'
import { List } from 'semantic-ui-react'

const MemberCard = ({member, isManager}) => {
  return (
    <List.Item>
      <List.Content>
        <List.Header>{member.first_name + " " + member.last_name}</List.Header>
        <List.Description>{isManager ? "Manager" : "Member"}</List.Description>
      </List.Content>
    </List.Item>
  )
}

export default MemberCard
