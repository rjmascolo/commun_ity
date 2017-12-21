import React from 'react'
import { Header, Table, Rating, Checkbox } from 'semantic-ui-react'

const TaskTableRows = () => {
  return (
      <Table.Row>
        <Table.Cell>
          Cooking mashed potatoes and string bean cassorole
        </Table.Cell>
        <Table.Cell>
          Ryan's Potluck
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
