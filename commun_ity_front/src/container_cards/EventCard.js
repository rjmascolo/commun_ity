import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

const EventCard = ({ peopleGoing, name, date, image, id }) => (
  <Card href={`/events/${id}`}>
    <Image src={image} />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className="date">{date}</span>
      </Card.Meta>
    </Card.Content>
    <Card.Content extra>
      <Icon name="user" />
      {peopleGoing} People Going
    </Card.Content>
  </Card>
);

export default EventCard;
