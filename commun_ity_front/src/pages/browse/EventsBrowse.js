import React from "react";
import { Item } from "semantic-ui-react";
import EventsBrowserItem from "../../container_cards/EventBrowseItem";

let URL = "http://localhost:3000/events";

class EventsBrowse extends React.Component {
  state = {
    events: []
  };

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(events => this.setState({ events: events }));
  }

  render() {
    const usersEvents = this.props.user.tasks.map(task => task.event.id);
    const eventDets = this.state.events.map((event, id) => {
      return (
        <EventsBrowserItem
          event={event}
          key={id}
          goingToEvent={this.props.goingToEvent}
          user_id={this.props.user.id}
          isGoing={usersEvents.includes(event.id)}
        />
      );
    });

    return (
      <div id="user-home-div">
        <div id="browse-header">
          <h1 id="user-home-welcome">Events In Your Communities</h1>
          <p id="user-home-welcome">
            Check out your upcoming events in your communities below.
          </p>
      </div>
        <div id="browse-event-card-container">
          <Item.Group divided>{eventDets}</Item.Group>
        </div>
      </div>
    );
  }
}

export default EventsBrowse;
