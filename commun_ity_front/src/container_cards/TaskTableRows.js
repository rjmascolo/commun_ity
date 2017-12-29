import React from 'react'
import { Table, Checkbox } from 'semantic-ui-react'

class TaskTableRows extends React.Component {

  onToggle = (e, data) => {
    this.props.toggleCompletedTask(this.props.id, data.checked)
  }

  render() {
    return (
        <Table.Row>
          <Table.Cell>{this.props.description}</Table.Cell>
          {this.props.tableType === "dashboard" ? <Table.Cell> {this.props.event.name} </Table.Cell>: null}
          {this.props.tableType === "dashboard" ? <Table.Cell textAlign='center'> {this.props.event.start_date} </Table.Cell>: null}
          <Table.Cell collapsing >
            <Checkbox onClick={this.onToggle} checked={this.props.completed} toggle />
          </Table.Cell>
        </Table.Row>

   )
  }
}

export default TaskTableRows;
