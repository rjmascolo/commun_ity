import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class SidebarLeft extends Component {
  handleItemClick = name => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state || {}

    return (
      <Menu vertical idName="sidebar">
        <Menu.Item>
          <Menu.Header>Your Dashboard</Menu.Header>

          <Menu.Menu>
            <NavLink to= "/calendar"><Menu.Item name='Calendar' active={activeItem === 'enterprise'} onClick={this.handleItemClick} /></NavLink>
            <NavLink to= "/events"><Menu.Item name='Events' active={activeItem === 'enterprise'} onClick={this.handleItemClick} /></NavLink>
            <NavLink to= "/tasks"><Menu.Item name='Tasks' active={activeItem === 'consumer'} onClick={this.handleItemClick} /></NavLink>
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Browse </Menu.Header>

          <Menu.Menu>
            <Menu.Item name='Communities' active={activeItem === 'rails'} onClick={this.handleItemClick} />
            <Menu.Item name='Events' active={activeItem === 'python'} onClick={this.handleItemClick} />
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
