import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'

export default class NavBar extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='massive'>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
          <Icon name='home' />
        </Menu.Item>
        <Menu.Menu position='right'>
          <Menu.Item name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} />
        </Menu.Menu>
      </Menu>
    )
  }
}
