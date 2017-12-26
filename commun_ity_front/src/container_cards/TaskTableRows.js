import React from 'react'
import { Table, Checkbox } from 'semantic-ui-react'

const TaskTableRows = ({description, event, tableType}) => {
  return (
      <Table.Row>
        <Table.Cell>{description}</Table.Cell>
        {tableType === "dashboard" ? <Table.Cell> {event.name} </Table.Cell>: null}
        {tableType === "dashboard" ? <Table.Cell textAlign='center'> {event.date} </Table.Cell>: null}
        <Table.Cell collapsing >
          <Checkbox toggle />
        </Table.Cell>
      </Table.Row>

 )
}

export default TaskTableRows;
