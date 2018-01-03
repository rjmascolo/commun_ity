import React from 'react'
import {Button, Form} from 'semantic-ui-react'

class TaskForm extends React.Component {
  state = {

      description: ""

  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.createTask(this.state.description, this.props.event_id)
    .then(newTask => this.props.addTask(newTask)).then(this.setState({description: ""} ))
  }

  render() {
    return (
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Description</label>
            <input
              placeholder="Description"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
    )
  }
}

export default TaskForm
