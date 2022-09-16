import React from "react";
import Button from "../components/Button";
import List from "../components/List";
import ListItem from "../components/ListItem";
import { Image, Text, View } from "../components/Themed";

const ConversationDetailsModal = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 2, alignItems: "center" }}>
        <View margin="_s2">
          <Image style={{ width: 200, height: 200, borderRadius: 200 / 2 }} />
        </View>
        <View margin="_s2">
          <Text>Organizer</Text>
        </View>
        <View margin="_s2" style={{ width: "75%" }}>
          <Text style={{ textAlign: "center" }}>
            I am a free soul, that loves to venture outside. With me you can be
            assured that you will have the time of your life in a safe and
            friendly environment.
          </Text>
        </View>
        <View
          margin="_s2"
          style={{
            width: "100%",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View style={{ backgroundColor: "green" }}>
            <Button onPress={()  => navigation.navigate("DisplayProfileScreen")} buttonStyle={null} buttonTextStyle={null}>
              View Profile
            </Button>
          </View>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <List>
          <ListItem
            onPress={() => navigation.navigate("Event", { screen: "EventParticipants" })}
            pressable
          >
            View the Participants
          </ListItem>
          <ListItem
            onPress={() =>
              navigation.navigate("Event", { screen: "EventDetails" })
            }
            pressable
          >
            View the Event
          </ListItem>
          <ListItem onPress={() => navigation.navigate("Report")} pressable>
            Report
          </ListItem>
        </List>
      </View>
    </View>
  );
};

export default ConversationDetailsModal;
