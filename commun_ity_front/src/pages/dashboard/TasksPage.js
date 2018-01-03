import React from "react";
import TasksTable from "../../containers/TasksTable";

class TasksPage extends React.Component {
  render() {
    return (
      <div id="user-home-div">
        <h1 id="user-home-welcome">Your Tasks</h1>
        <p id="user-home-welcome">Check out your upcoming tasks below.</p>
        <TasksTable
          routerProps={this.props.routerProps}
          tasks={this.props.tasks}
          toggleCompletedTask={this.props.toggleCompletedTask}
          tableType="dashboard"
        />
      </div>
    );
  }
}

export default TasksPage;
