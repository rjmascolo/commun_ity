import React from 'react'
import { Table, Checkbox } from 'semantic-ui-react'

const TaskTableRows = ({description, event}) => {
  return (
      <Table.Row>
        <Table.Cell>
          {description}
        </Table.Cell>
        <Table.Cell>
          {event}
        </Table.Cell>
        <Table.Cell textAlign='center'>
            Monday, December 25th
        </Table.Cell>
        <Table.Cell collapsing >
          <Checkbox toggle />
        </Table.Cell>
      </Table.Row>

 )
}

export default TaskTableRows;
