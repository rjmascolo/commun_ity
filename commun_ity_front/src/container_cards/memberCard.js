import React from "react";
import { List } from "semantic-ui-react";

const MemberCard = ({ member }) => (
  <List.Item>
    <List.Content>
      <List.Header>{member.firstName + " " + member.lastName}</List.Header>
      <List.Description>Joined whenever</List.Description>
    </List.Content>
  </List.Item>
);

export default MemberCard;
