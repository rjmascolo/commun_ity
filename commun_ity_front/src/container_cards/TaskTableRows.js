import React from 'react'
import { Header, Table, Rating } from 'semantic-ui-react'

const TaskTableRows = () => {
  return (
    <div>
      <Table.Row>
        <Table.Cell>
          <Header as='h2' textAlign='center'>A</Header>
        </Table.Cell>
        <Table.Cell singleLine>Power Output</Table.Cell>
        <Table.Cell>
          <Rating icon='star' defaultRating={3} maxRating={3} />
        </Table.Cell>
        <Table.Cell textAlign='right'>
            80% <br />
          <a href='#'>18 studies</a>
        </Table.Cell>
        <Table.Cell>
            Creatine supplementation is the reference compound for increasing muscular creatine levels; there is
            variability in this increase, however, with some nonresponders.
        </Table.Cell>
      </Table.Row>

 )
}

export default TaskTableRows
