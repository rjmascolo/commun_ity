import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class LogIn extends Component {
  render() {
    return (
      <Segment padded raised id="login-form">
        <h1>Log in to your dashboard</h1>
        <br />
        <Form>
          <Form.Field>
            <label>Email Address</label>
            <input placeholder="Email" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input placeholder="Password" type="password" />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Segment>
    );
  }
}

export default LogIn;
