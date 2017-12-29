import React from "react";
import EventsContainer from "../../containers/EventsContainer";

class EventsPage extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <div id="user-home-div">
        <h1 id="user-home-welcome">Your Events</h1>
        <p id="user-home-welcome">Check out your upcoming events below.</p>
        <EventsContainer events={this.props.events} />
      </div>
    );
  }
}

export default EventsPage;
