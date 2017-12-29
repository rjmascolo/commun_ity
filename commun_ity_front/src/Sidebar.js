import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Menu } from "semantic-ui-react";

export default class SidebarLeft extends Component {
  handleItemClick = name => {
    this.setState({ activeItem: name });
  };

  //this is not working, never hits handleLogOut
  handleLogOut = () => {
    localStorage.removeItem("token");
  };

  render() {
    const { activeItem } = this.state || {};
    const loggedIn = !!localStorage.token;
    return (
      <Menu vertical idName="sidebar">
        <Menu.Item>
          <Menu.Header>Your Dashboard</Menu.Header>

          <Menu.Menu>
            <NavLink to="/your-calendar">
              <Menu.Item
                name="Calendar"
                active={activeItem === "enterprise"}
                onClick={this.handleItemClick}
              />
            </NavLink>
            <NavLink to="/your-events">
              <Menu.Item
                name="Events"
                active={activeItem === "enterprise"}
                onClick={this.handleItemClick}
              />
            </NavLink>
            <NavLink to="/your-tasks">
              <Menu.Item
                name="Tasks"
                active={activeItem === "consumer"}
                onClick={this.handleItemClick}
              />
            </NavLink>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Browse </Menu.Header>

          <Menu.Menu>
            <NavLink to="/communities">
              <Menu.Item
                name="Communities"
                active={activeItem === "rails"}
                onClick={this.handleItemClick}
              />
            </NavLink>
            <NavLink to="/events">
              <Menu.Item
                name="Events"
                active={activeItem === "python"}
                onClick={this.handleItemClick}
              />
            </NavLink>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Settings</Menu.Header>

          <Menu.Menu>
            {loggedIn ? (
              <NavLink to={"/login"}>
                <Menu.Item
                  name="Log Out"
                  active={activeItem === "rails"}
                  onClick={() => {
                    this.handleLogOut;
                  }}
                />
              </NavLink>
            ) : (
              <NavLink to={"/login"}>
                <Menu.Item
                  name="Log In"
                  active={activeItem === "rails"}
                  onClick={this.handleItemClick}
                />
              </NavLink>
            )}
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    );
  }
}
