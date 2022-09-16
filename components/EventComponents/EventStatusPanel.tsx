import React from 'react'
import EventDiscountProgress from './EventDiscountProgress'
import EventDiscountStats from './EventDiscountStats'
import { View } from '../Themed'

const EventStatusPanel = () => {
  return (
    <View margin="_s2">
        <EventDiscountStats />
        <EventDiscountProgress />
    </View>
  )
}

export default EventStatusPanel