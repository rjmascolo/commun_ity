import React, { Component } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class LogIn extends Component {
  state = { email: "", password: "", error: false };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.logIn(this.state.email, this.state.password);
  };

  logIn = (email, password) => {
    fetch("http://localhost:3000/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accepts: "application/json"
      },
      body: JSON.stringify({ email: email, password: password })
    })
      .then(res => res.json())
      .then(userData => {
        if (userData.error) {
          this.setState({ error: true });
        } else {
          localStorage.setItem("token", userData.token);
          this.props.handleLogIn(userData.user);
          this.props.history.push("/your-calendar");
        }
      });
  };

  render() {
    return (
      <Segment padded raised id="login-form">
        <h1>Log in to your dashboard</h1>
        {this.state.error ? <h1>Incorrect Email or Password</h1> : null}
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label>Email Address</label>
            <input
              name="email"
              placeholder="Email"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Password</label>
            <input
              placeholder="Password"
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </Form.Field>
          <Button type="submit">Submit</Button>
        </Form>
      </Segment>
    );
  }
}

export default LogIn;
