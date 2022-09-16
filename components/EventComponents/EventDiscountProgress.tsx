import React from 'react'
import ProgressBar from '../ProgressBar'
import { View } from '../Themed'

const EventDiscountProgress = () => {
  return (
    <View style={styles.container}>
        <ProgressBar style={styles.progress}/>
    </View>
  )
}

export default EventDiscountProgress

const styles = {
    container: {
        marginTop: 25
    },
    progress: {
        height: 25,
        borderRadius: 25
    }
}