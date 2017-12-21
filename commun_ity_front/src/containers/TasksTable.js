import React from 'react'
import { Header, Table, Rating } from 'semantic-ui-react'
import TaskTableRows from '../container_cards/TaskTableRows'

const TaskTable = () => {

  return (
    <div>
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Task Description</Table.HeaderCell>
        <Table.HeaderCell>Task's Event</Table.HeaderCell>
        <Table.HeaderCell>Event's Date</Table.HeaderCell>
        <Table.HeaderCell singleLine>Task Completed</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <TaskTableRows />
      <TaskTableRows />
    </Table.Body>
  </Table>
  </div>
 )
}

export default TaskTable
