import React from 'react'
import { Grid, Label } from 'semantic-ui-react'
import { Chart } from '../components/Chart'
import TableExamplePagination from '../components/List'

export default function Costs() {

  return (
    <div>
      <Grid columns={2} padded stackable>
        <Grid.Row>
          <Grid.Column>
            <Chart />
          </Grid.Column>
          <Grid.Column>
            <Label
              attached='top'
              color='blue'
              size='large'
              ribbon
            >
              Registrar
            </Label>
            <TableExamplePagination />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
