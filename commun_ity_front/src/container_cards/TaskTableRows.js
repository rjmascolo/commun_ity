import React from "react";
import { Table, Checkbox, Button } from "semantic-ui-react";

class TaskTableRows extends React.Component {
  onToggle = (e, data) => {
    this.props.toggleCompletedTask(this.props.id, data.checked);
  };

  handleClick = ( ) => {
    this.props.volunteer(this.props.userId, this.props.taskId)

  }

  volunteerCell = () => {
    if (this.props.taskIsTaken && this.props.tableType !== "dashboard") {
      return (
        <Table.Cell>
          {this.props.user.first_name + " " + this.props.user.last_name}
        </Table.Cell>
      );
    } else if (
      !this.props.taskIsTaken &&
      this.props.tableType !== "dashboard"
    ) {
      return (
        <Table.Cell>
          <Button
            onClick={() =>
              this.handleClick(this.props.userId, this.props.taskId)
            }
          >
            Volunteer
          </Button>
        </Table.Cell>
      );
    }
  };

  render() {
    console.log(this.props)
    return (
      <Table.Row>
        <Table.Cell>
          <a href={this.props.url}>{this.props.description} </a>
        </Table.Cell>
        {this.props.tableType === "dashboard" ? (
          <Table.Cell> {this.props.event.name} </Table.Cell>
        ) : null}
        {this.props.tableType === "dashboard" ? (
          <Table.Cell textAlign="center">
            {" "}
            {this.props.date}{" "}
          </Table.Cell>
        ) : null}
        {this.volunteerCell()}
        <Table.Cell collapsing>
          {this.props.tableType === "dashboard" ? (
            <Checkbox
              onClick={this.onToggle}
              checked={this.props.completed}
              toggle
            />
          ) : (
            <Checkbox disabled checked={this.props.completed} />
          )}
        </Table.Cell>
      </Table.Row>
    );
  }
}

export default TaskTableRows;
