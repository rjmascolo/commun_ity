import React from 'react'
import { Table } from 'semantic-ui-react'
import TaskTableRows from '../container_cards/TaskTableRows'

const TasksTable = ({tasks, tableType, toggleCompletedTask}) => {
  const taskDataDash = tableType === "dashboard" && tasks ? (tasks.map( (taskDets, i) => {
    return (
        <TaskTableRows
              key={i}
              id={taskDets.id}
              name={taskDets.name}
              description={taskDets.description}
              event={taskDets.event}
              tableType="dashboard"
              completed={taskDets.completed}
              toggleCompletedTask={toggleCompletedTask}
              />
            )
  })) : null
  const taskDataPage = tableType !== "dashboard" && tasks ? (tasks.map( (taskDets, i) => {
    return (
      <TaskTableRows
        key={i}
        name={taskDets.name}
        completed={taskDets.completed}
        description={taskDets.description}
        tableType="event-page"/>
    )}
  )) : null

  return (
  <Table celled padded>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Task Description</Table.HeaderCell>
        {tableType === "dashboard" ? <Table.HeaderCell>Task's Event</Table.HeaderCell> : null}
        {tableType === "dashboard" ? <Table.HeaderCell>Event's Date</Table.HeaderCell> : null}
        {tableType === "dashboard" ? <Table.HeaderCell singleLine>Task Completed</Table.HeaderCell> : <Table.HeaderCell singleLine>Assigned To</Table.HeaderCell> }
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {tableType === "dashboard" ? taskDataDash : taskDataPage}
    </Table.Body>
  </Table>
 )
}

export default TasksTable;
