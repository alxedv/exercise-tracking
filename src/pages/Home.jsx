import React from 'react'
import { TabList, TabPanel, Tabs } from 'react-tabs'
import { Input, Tab } from 'semantic-ui-react'
import { Chart } from '../components/Chart'
import 'react-tabs/style/react-tabs.css';
import './tabs.css';
import TabsComponent from '../components/TabsComponent';

export default function Home() {
  return (
    <div className='tabs'>
      {TabsComponent()}
      <div className='chart'>
        <Chart />
      </div>
    </div>
  )
}
