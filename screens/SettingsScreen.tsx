import * as React from "react";
import { StyleSheet, Image, Pressable } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Styles from "../constants/Styles";
import { Text, View } from "../components/Themed";
import { Container, Row, Col, Icon } from "../components/StyledComponents";

export default function SettingsScreen(props) {
  const onPress = () =>
    props.navigation.navigate("Settings", { screen: "ChangeSettings" });
  return (
    <View style={{ flex: 1 }}>
      <Container>
        <Row style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
          <Col>
            <View style={{ marginHorizontal: "auto" }}>
              <Image
                style={{ width: 250, height: 250, borderRadius: 150 }}
                source={require("../assets/images/pic1.jpg")}
              />
            </View>
          </Col>
        </Row>
        <Row style={{ flex: 1 }}>
          <Col style={{ flex: 1, alignItems: "center" }}>
            <Icon as={Pressable} style={styles.controlsContainer}>
              <FontAwesome name="gear" size={25} />
            </Icon>
          </Col>
          <Col
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Icon as={Pressable} style={styles.controlsContainer}>
              <FontAwesome name="ticket" size={25} />
            </Icon>
          </Col>
          <Col style={{ flex: 1, alignItems: "center" }}>
            <Icon as={Pressable} style={styles.controlsContainer}>
              <FontAwesome name="pencil" size={25} />
            </Icon>
          </Col>
        </Row>
        <Row style={{ flex: 1 }}>
          <Col
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <View>
              <Text>Matthew McKenzie</Text>
              <Text>25</Text>
            </View>
            <View>
              <Text>Marketing Coordinator</Text>
            </View>
            <View>
              <Text>University Of Central Florida</Text>
            </View>
          </Col>
        </Row>
      </Container>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
