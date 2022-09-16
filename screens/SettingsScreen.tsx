import { Divider } from "@rneui/themed";
import * as React from "react";
import { FlatList, Pressable } from "react-native";
import { Text, View, Image } from "../components/Themed";

export default function SettingsScreen({ navigation }) {
  const onPress = ({ navigateTo }) =>
    navigation.navigate("Settings", { screen: "ChangeSettings" });

  const DATA_ONE = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "View profile",
      onPress: () => navigation.navigate("Setting" , { screen: "Profile" })
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Push notifications",
      onPress: null
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Email updates",
      onPress: null
    },
  ];
  const DATA_TWO = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "About Venture",
      onPress: null
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Get help",
      onPress: null
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Give us feedback",
      onPress: null
    },
  ];

  const renderItem = ({ item, ...rest }) => (
    <>
      <ListItem onPress={item.onPress} title={item.title} />
      <Divider />
    </>
  )

  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={DATA_ONE}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <FlatList
        data={DATA_TWO}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const ListItem = ({ title, onPress }) => (
  <Pressable onPress={onPress}>
    <View margin="s0">
      <Text>{title}</Text>
    </View>
  </Pressable>
);

const styles = {
  controlsContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    marginLeft: 12,
    marginBottom: 16,
    borderRadius: 100,
    borderWidth: 0,
    shadowColor: "black",
    shadowRadius: 3,
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.4,
  },
};
