import React from "react";
import { List, Image } from "semantic-ui-react";
import '../css/member-card.css'

const MemberCard = ({ member, isManager }) => {
  return (
    <List.Item id="member-card">
    <Image avatar src={member.profile_pic }/>
      <List.Content>
        <List.Header>{member.first_name + " " + member.last_name}</List.Header>
        <List.Description>{isManager ? "Manager" : "Member"}</List.Description>
      </List.Content>
    </List.Item>
  );
};

export default MemberCard;
