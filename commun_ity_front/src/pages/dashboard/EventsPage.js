import React from "react";
import EventsContainer from "../../containers/EventsContainer";

class EventsPage extends React.Component {
  render() {
    return (
      <div id="user-home-div">
        <div id="browse-header">
        <h1 id="user-home-welcome">Your Events</h1>
        <p id="user-home-welcome">Check out your upcoming events below.</p>
      </div>
        <EventsContainer events={this.props.events} />
      </div>
    );
  }
}

export default EventsPage;
