import React from "react";
import { FlatList, Pressable, ScrollView } from "react-native";
import { View, Text, TouchableOpacity, Image } from "../components/Themed";
import Navigation from "../navigation";

const EventParticipantsScreen = ({ navigation }) => {
  const data = [
    {
      name: "Jael Holmes",
      id: "E96916B1-BCE8-A158-D9D4-876366D488FA",
    },
    {
      name: "Katelyn Francis",
      id: "3B715431-2954-CB86-59C6-CE71141C8957",
    },
    {
      name: "Sarah Henry",
      id: "0C762287-7EA7-36B6-EE62-279D94F4D638",
    },
    {
      name: "Alvin Poole",
      id: "475E2CF3-5046-AB1B-2983-568C6415453E",
    },
    {
      name: "Hedwig Yang",
      id: "ABCF6661-2B97-BFF1-AC86-0AE274BD65AB",
    },
    {
      name: "Edward Juarez",
      id: "3B9DFA61-2D6E-135E-5DD0-9224B9B858A4",
    },
    {
      name: "Octavius Farrell",
      id: "689234E1-E990-75A8-894C-63EA9C764B6E",
    },
    {
      name: "Jermaine Hunt",
      id: "697873B0-54FA-93F4-CB9A-A3E5F903BC72",
    },
    {
      name: "Aaron Justice",
      id: "A7C54B17-ABDB-C92A-FF79-657525CE8E44",
    },
    {
      name: "David Pacheco",
      id: "744D89EE-35BC-AA9E-8ACE-CD38F924C63B",
    },
    {
      name: "Eagan Burris",
      id: "AA3B1668-F931-A8AB-C068-1148E9C67D6A",
    },
    {
      name: "Vielka Haynes",
      id: "3D0875AF-B96E-A09E-CF0D-1077B5248D9E",
    },
    {
      name: "Isabelle Rios",
      id: "D853D967-867A-2CBA-AB5D-BE3250327AD6",
    },
    {
      name: "Phelan Pitts",
      id: "EDB285AE-D4EF-D48B-8CE7-8212E909599B",
    },
    {
      name: "Wendy Myers",
      id: "E6C77D3F-AD53-BDAF-CABA-93A8B45BDC24",
    },
    {
      name: "Maris Moss",
      id: "2550EB43-F9FD-8878-E94C-14CFDFC8618D",
    },
    {
      name: "Melvin Barry",
      id: "431CC172-FBA6-2108-6629-373D9131C8AA",
    },
    {
      name: "Claire Joyce",
      id: "BEF2D6A8-5794-E788-83CE-FC1AB094E9B8",
    },
    {
      name: "Kyle Roberson",
      id: "C573833E-4A43-0B21-AFC9-B63A9668B36D",
    },
    {
      name: "Kim Armstrong",
      id: "1644E729-9A1D-DADB-1374-C1BE5DFE2CC2",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={data}
        renderItem={({ item }) => <FlatListItem navigateTo={navigation.navigate} name={item.name} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const FlatListItem = ({ name, navigateTo }) => (
  <View padding = "s0" style={{ flexDirection: "row", alignItems: "center" }}>
    <View>
      <Image
        style={{ width: 50, height: 50, borderRadius: 25 }}
        source={require("../assets/images/pic1.jpg")}
      />
    </View>
    <View style={{ marginLeft: 12 }}>
      <Text>{name}</Text>
    </View>
    <View style={{ marginLeft: "auto" }}>
      <TouchableOpacity onPress={() => navigateTo("ParticipantProfile")}>
        <Text>View Profile</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default EventParticipantsScreen;
