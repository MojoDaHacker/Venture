import { AntDesign } from '@expo/vector-icons'
import React from 'react'
import Button from '../components/Button'
import { Text, TouchableOpacityButton, View } from '../components/Themed'

const ConfirmedPurchaseScreen = ({ navigation }) => {

  return (
    <View style={styles.screen}>
        <View style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
            <View style={{  position: "relative" }}>
                <AntDesign name="checkcircle" size={200} color="green" />
            </View>
            <View margin="s0" style={{ width: "75%", alignItems: "center" }}>
                <Text margin="_s2" style={{ textAlign: "center" }}>Your payment was successful. Your coupon code to use at checkout is below.</Text>
                <Text margin="_s2" header>Coupon</Text>
                <Text margin="_s2" header>#CJ8S7DGV09JE98N</Text>
            </View>
        </View>
        <View style={{ flex: 1 }}>
            <TouchableOpacityButton onPress={() => navigation.navigate("Conversation")} variant='link'>Go to Event Chat</TouchableOpacityButton>
            <TouchableOpacityButton onPress={() => navigation.navigate("EventDetails")} variant='link'>Back to Event Details</TouchableOpacityButton>
            <TouchableOpacityButton onPress={() => navigation.navigate("Events")} variant='link'>Back to Events</TouchableOpacityButton>
        </View>
    </View>
  )
}

export default ConfirmedPurchaseScreen

const styles = {
    screen: {
        flex: 1
    }
}