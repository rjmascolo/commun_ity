import React from 'react'
import { Table, Checkbox, Button } from 'semantic-ui-react'

class TaskTableRows extends React.Component {

  onToggle = (e, data) => {
    this.props.toggleCompletedTask(this.props.id, data.checked)
  }

  volunteerCell = () => {
    if (this.props.taskIsTaken && this.props.tableType !== "dashboard") {
      return <Table.Cell>{this.props.user.first_name + " " + this.props.user.last_name}</Table.Cell>
    } else if (!this.props.taskIsTaken && this.props.tableType !== "dashboard") {
      return <Table.Cell><Button onClick={() => this.props.volunteer(this.props.userId, this.props.taskId)}>Volunteer</Button></Table.Cell>
    }
  }

  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.description}</Table.Cell>
          {this.props.tableType === "dashboard" ? <Table.Cell> {this.props.event.name} </Table.Cell>: null}
          {this.props.tableType === "dashboard" ? <Table.Cell textAlign='center'> {this.props.event.start_date} </Table.Cell>:null}
          {this.volunteerCell()}
          <Table.Cell collapsing >
            {this.props.tableType === "dashboard" ? <Checkbox onClick={this.onToggle} checked={this.props.completed} toggle /> : <Checkbox disabled checked={this.props.completed} />}
          </Table.Cell>
        </Table.Row>

   )
  }
}

export default TaskTableRows;
