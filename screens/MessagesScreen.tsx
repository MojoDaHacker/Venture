import { Divider } from "@rneui/themed";
import * as React from "react";
import {
  Image,
  ScrollView,
  StyleSheet as Styles,
  Pressable,
} from "react-native";
import { Text, View } from "../components/Themed";

export default function MessagesScreen(props) {
  const testArr = [
    {
      id: "62f5cfafca8a057785a41ca4",
      name: "Ross Ayala",
      about:
        "Enim ut laborum mollit amet consectetur aliquip dolore adipisicing commodo sunt esse exercitation ut. Occaecat aliquip nostrud qui in est excepteur mollit aliquip mollit non consectetur.",
      lastMessageTime: "5 days ago",
    },
    {
      id: "62f5cfaf117ac0754bcab64a",
      name: "Knight Watts",
      about:
        "Laborum id incididunt cupidatat aliqua irure culpa proident voluptate minim minim in cupidatat. Cillum ipsum pariatur enim amet consequat reprehenderit ullamco aute elit exercitation culpa in sint.",
      lastMessageTime: "6 hours ago",
    },
    {
      id: "62f5cfaf046ae47db710e878",
      name: "Tanisha Dyer",
      about:
        "Incididunt culpa cupidatat quis fugiat. Non aute anim elit labore cillum.",
      lastMessageTime: "7 months ago",
    },
    {
      id: "62f5cfafb5f65aa78194a7ca",
      name: "Lidia Whitney",
      about:
        "Lorem incididunt fugiat pariatur anim amet Lorem proident officia minim Lorem. Elit consectetur est et magna amet.",
      lastMessageTime: "10 hours ago",
    },
    {
      id: "62f5cfafa256c36c5769dc1b",
      name: "Reid Cruz",
      about:
        "Nulla deserunt incididunt sint velit. Officia cupidatat sunt sit Lorem sunt minim amet.",
      lastMessageTime: "7 hours ago",
    },
    {
      id: "62f5cfaf668b78504737da83",
      name: "Workman Baldwin",
      about:
        "Mollit non exercitation amet tempor cillum do tempor sunt aliqua excepteur consequat. Ex ex labore magna eiusmod dolore deserunt Lorem.",
      lastMessageTime: "1 months ago",
    },
    {
      id: "62f5cfaf57e0b96de7fbd994",
      name: "Della Fulton",
      about:
        "Quis aute nisi sint minim laborum culpa in occaecat ut laborum magna consectetur Lorem. Lorem deserunt non nisi incididunt ex.",
      lastMessageTime: "3 hours ago",
    },
    {
      id: "62f5cfaf42f22db03afe0bc8",
      name: "Maryellen Rodriquez",
      about:
        "Nisi officia sunt non laborum excepteur nostrud anim nostrud ipsum. Culpa exercitation esse in occaecat sit eiusmod irure ex aliquip deserunt anim duis exercitation.",
      lastMessageTime: "8 mins ago",
    },
    {
      id: "62f5cfaf8b386f12e1545605",
      name: "Marjorie Patrick",
      about:
        "Exercitation qui excepteur id exercitation veniam eiusmod dolor anim duis tempor voluptate do. Mollit culpa magna ea proident.",
      lastMessageTime: "5 months ago",
    },
    {
      id: "62f5cfaf1a433d8a346c2b24",
      name: "Frederick Elliott",
      about:
        "Commodo sit sunt consectetur do veniam id aliqua tempor nulla in. Velit eu minim sunt dolor aliquip consequat dolore.",
      lastMessageTime: "10 months ago",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      {/* <View style={{ width: "100%", flexDirection: "row" }}>
        <View style={{ flex: 1, alignItems: "center", margin: 12 }}>
          <Text>Test</Text>
        </View>
        <View style={{ flex: 1, alignItems: "center", margin: 12 }}>
          <Text>Test</Text>
        </View>
      </View> */}
      <ScrollView bounces={false}>
        {testArr.map((val, i) => (
          <View key={i}>
            <Pressable
              onPress={() => props.navigation.navigate("Conversation")}
            >
              <View style={{ flexDirection: "row", margin: 12 }}>
                <View
                  style={{
                    flexShrink: 1,
                  }}
                >
                  <Image
                    style={styles.img}
                    source={require("../assets/images/pic1.jpg")}
                  />
                </View>
                <View
                  style={{
                    marginLeft: 18,
                    justifyContent: "space-around",
                    flex: 1,
                  }}
                >
                  <Text header="h3">{val.name}</Text>
                  <Text>Hello How are you?</Text>
                  <Text body="italic" size="">{val.lastMessageTime}</Text>
                </View>
              </View>
            </Pressable>
            {!(i == testArr.length - 1) ? <Divider /> : null}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = Styles.create({
  container: {
    flex: 1,
  },
  img: {
    width: 75,
    height: 75,
    borderRadius: 100,
  },
});
