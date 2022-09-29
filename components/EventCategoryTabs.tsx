import { Tab } from '@rneui/themed'
import React from 'react'
import { View } from './Themed'

const EventCategoryTabs = () => {

  return (
    <Tab value={1} onChange={() => console.log("onChange()")}>
        <Tab.Item title="Local"/>
        <Tab.Item title="Hosted" />
    </Tab>
  )
}

export default EventCategoryTabs