import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class SidebarLeft extends Component {
  handleItemClick = name => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state || {}

    return (
      <Menu vertical idname="sidebar">
        <Menu.Item>
          <Menu.Header>Your Dashboard</Menu.Header>

          <Menu.Menu>
            <Menu.Item name='Calendar' href="/your-calendar" active={activeItem === 'Calendar'} onClick={this.handleItemClick} />
            <Menu.Item name='Events' href="/your-events" active={activeItem === 'Events'} onClick={this.handleItemClick} />
            <Menu.Item name='Tasks' href="/your-tasks" active={activeItem === 'Tasks'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Browse </Menu.Header>

          <Menu.Menu>
            <Menu.Item href="/communities" name='Communities' active={activeItem === 'rails'} onClick={this.handleItemClick} />
            <Menu.Item href="/events" name='Events' active={activeItem === 'python'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Settings</Menu.Header>

          <Menu.Menu>
            <Menu.Item name='Log Out' active={activeItem === 'rails'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu.Item>

      </Menu>
    )
  }
}
