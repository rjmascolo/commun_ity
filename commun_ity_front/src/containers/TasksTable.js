import React from "react";
import { Table } from "semantic-ui-react";
import TaskTableRows from "../container_cards/TaskTableRows";

const TasksTable = ({
  routerProps,
  tasks,
  tableType,
  toggleCompletedTask,
  volunteer
}) => {
  const taskDataDash =
    tableType === "dashboard" && tasks
      ? tasks.filter(task => task.description !== "RSVP").map((taskDets, i) => {
          return (
            <TaskTableRows
              url={`/events/${taskDets.event.id}`}
              key={i}
              id={taskDets.id}
              date={taskDets.date_presentable}
              description={taskDets.description}
              event={taskDets.event}
              tableType="dashboard"
              completed={taskDets.completed}
              toggleCompletedTask={toggleCompletedTask}
            />
          );
        })
      : null;
  const taskDataPage =
    tableType !== "dashboard" && tasks
      ? tasks.filter(task => task.description !== "RSVP").map((taskDets, i) => {
          return (
            <TaskTableRows
              key={i}
              completed={taskDets.completed}
              description={taskDets.description}
              taskId={taskDets.id}
              user={taskDets.user}
              date={taskDets.date_presentable}
              volunteer={volunteer}
              taskIsTaken={taskDets.user ? true : false}
              tableType="event-page"
            />
          );
        })
      : null;

  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Task Description</Table.HeaderCell>
          {tableType === "dashboard" ? (
            <Table.HeaderCell>Task's Event</Table.HeaderCell>
          ) : null}
          {tableType === "dashboard" ? (
            <Table.HeaderCell>Event's Date</Table.HeaderCell>
          ) : (
            <Table.HeaderCell>Volunteer</Table.HeaderCell>
          )}
          <Table.HeaderCell singleLine>Task Completed</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {tableType === "dashboard" ? taskDataDash : taskDataPage}
      </Table.Body>
    </Table>
  );
};

export default TasksTable;
