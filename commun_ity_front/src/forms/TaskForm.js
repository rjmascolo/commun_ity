import React from 'react'
import {Button, Form} from 'semantic-ui-react'

class TaskForm extends React.Component {
  state = {

      description: "",
      name: "",
      image:"https://media.istockphoto.com/photos/happy-business-colleagues-having-fun-picture-id134115438",
      location: "",
      end_date: "",
      start_date: "",
      community_id: null

  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let newEvent = this.state
    newEvent.community_id = this.props.community_id
    this.props.createEvent(newEvent).then(this.props.addEvent(newEvent)).then(this.setState({
      description: "",
      name: "",
      image:"https://media.istockphoto.com/photos/happy-business-colleagues-having-fun-picture-id134115438",
      location: "",
      end_date: "",
      start_date: "",
      community_id: null})
    )
  }

  render() {
    return (
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Name</label>
            <input
              name="name"
              placeholder="Name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Description</label>
            <input
              placeholder="Description"
              name="description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Image</label>
            <input
              type="file"
              placeholder="Image File"
              name="image"
              // value={this.state.image}
              // onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Start Date</label>
            <input
              type="date"
              placeholder="Date"
              name="start_date"
              value={this.state.start_date}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>End Date</label>
            <input
              type="date"
              placeholder="Date"
              name="end_date"
              value={this.state.end_date}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Location</label>
            <input
              placeholder="Location"
              name="location"
              value={this.state.location}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
    )
  }
}

export default TaskForm
