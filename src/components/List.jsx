import { useAtom } from 'jotai'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon, Label, Menu, Table, Button, Input } from 'semantic-ui-react'
import { dateAtom, weightsAtom } from './Store'

const TableExamplePagination = () => {
  const [weights, setWeights] = useAtom(weightsAtom);
  const [dates, setDates] = useAtom(dateAtom);
  const [actualWeight, setActualWeight] = useState('');
  const [actualDate, setActualDate] = useState('');

  const addNewData = (weight, date) => {
    setWeights([...weights, actualWeight]);
    setDates([...dates, actualDate]);
  }

  return(
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Peso</Table.HeaderCell>
          <Table.HeaderCell>Data</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Input type='number' onChange={({ target }) => setActualWeight(target.value)}/>
            </Table.Cell>
            <Table.Cell>
              <Input type='date' onChange={({ target }) => setActualDate(target.value)}/>
            </Table.Cell>
          </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
            <Button
              onClick={() => addNewData(actualWeight, actualDate)}
              color='blue'
            >
              Adicionar novo peso
            </Button>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
            <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
            <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
  )  
}

export default TableExamplePagination