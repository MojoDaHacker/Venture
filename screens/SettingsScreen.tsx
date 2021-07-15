import * as React from 'react';
import { FontAwesome } from "@expo/vector-icons";
import Styles from '../constants/Styles';
import { Text, View } from '../components/Themed';
import { Container, Row, Col, Icon } from '../components/StyledComponents';
import { StyleSheet, SectionList } from 'react-native';

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

export default function SettingsScreen(props) {
  const DATA = [
    {
      title: "Account Settings",
      data: ["Pizza", "Burger", "Risotto"]
    },
    {
      title: "Discovery",
      data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
      title: "Notifications",
      data: ["Water", "Coke", "Beer"]
    },
    {
      title: "Community",
      data: ["Cheese Cake", "Ice Cream"]
    }
  ];

  return (
    <View style={styles.container}>
      <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  }
});