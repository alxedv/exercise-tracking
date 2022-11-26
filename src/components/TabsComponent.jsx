import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { Button, Input, Label } from 'semantic-ui-react';

import React from 'react'

export default function TabsComponent() {
  const exercises = ['Supino reto', 'Supino inclinado', 'Crucifixo', 'Exer 1', 'Exer 2']
  return (
    <Tabs>
    <TabList>
      <Tab>Peito</Tab>
      <Tab>Costas</Tab>
      <Tab>Bíceps</Tab>
      <Tab>Tríceps</Tab>
      <Tab>Ombro</Tab>
      <Tab>Pernas</Tab>
    </TabList>

    <TabPanel>
      <div className='exercises'>
        <h2>Exercicios de Peito</h2>
        {
          exercises.map((exercise) => (
            <div className='exer'>
              <Label>
                {exercise}
                <Label>
                  Peso: 
                  <Input className='weight-input' type='number' />
                </Label>
              </Label>
              <div className='exercise-btns'>
                <Button>Adicionar Peso</Button>
                <Button>Ver progressão</Button>
              </div>
            </div>
          ))
        }
      </div>
    </TabPanel>
    <TabPanel>
      <h2>Exercícios de Costas</h2>
    </TabPanel>
    <TabPanel>
      <h2>Exercícios de Bíceps</h2>
    </TabPanel>
    <TabPanel>
      <h2>Exercícios de Tríceps</h2>
    </TabPanel>
    <TabPanel>
      <h2>Exercícios de Ombro</h2>
    </TabPanel>
    <TabPanel>
      <h2>Exercícios de perna</h2>
    </TabPanel>
  </Tabs>
  )
}
