import React from "react";
import { Item } from "semantic-ui-react";
import EventsBrowseItem  from "../container_cards/EventBrowseItem";

const EventsContainer = ({ events }) => {
  const eventData = events ? (
    events.map((event, i) => {
      return (
          <EventsBrowseItem
            event={event}
            isGoing={true}
            // name={event.name}
            // date={event.date}
            // image={event.image}
            // peopleGoing={event.volunteer_num}
            // id={event.id}
          />
      );
    })
  ) : (
    <div>Loading</div>
  );
  return (
    <Item.Group divided>
      {eventData}
    </Item.Group>
  );
};

export default EventsContainer;
