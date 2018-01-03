import React from "react";
import { Button, Icon, Item } from "semantic-ui-react";

class EventsBrowseItem extends React.Component {
  href = `/events/${this.props.event.id}`;

  render() {
    return (
      <Item>
        <Item.Image as="a" src={this.props.event.image} href={this.href} />

        <Item.Content>
          <Item.Header as="a" href={this.href}>
            {this.props.event.name}
          </Item.Header>
          <Item.Meta>
            <span href={this.href} className="cinema">
              {this.props.event.location}
            </span>
          </Item.Meta>
          <Item.Description href={this.href}>
            {this.props.event.description}
          </Item.Description>
          <Item.Extra>
            <Button as="a" primary floated="right" href={this.href}>
              Get Details
              <Icon name="right chevron" />
            </Button>
            {this.props.isGoing ? (
              <Button
                as="a"
                href={this.href}
                floated="right"
                basic
                color="grey"
                content="You're Going"
                icon="calendar"
                label={{
                  as: "a",
                  basic: true,
                  color: "blue",
                  pointing: "left",
                  content: `${this.props.event.tasks.length} People Going`
                }}
              />
            ) : (
              <Button
                floated="right"
                basic
                color="blue"
                content="RSVP"
                icon="calendar"
                label={{
                  as: "a",
                  basic: true,
                  color: "blue",
                  pointing: "left",
                  content: `${this.props.event.tasks.length} People Going`
                }}
                onClick={() => {
                  this.props.goingToEvent(
                    this.props.user_id,
                    this.props.event.id
                  );
                }}
              />
            )}
          </Item.Extra>
        </Item.Content>
      </Item>
    );
  }
}

export default EventsBrowseItem;
