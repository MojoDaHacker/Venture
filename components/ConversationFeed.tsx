import React from "react";
import { ScrollView } from "react-native";
import { NonUserMessageBubble, UserMessageBubble } from "./MessageBubbles";
import { View, Text } from "./Themed";

const ConversationFeed = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ width: "100%" }}>
        <View style={{ margin: 12 }}>
          {/* <Image style={styles.roundedPic} source={require('../assets/images/pic1.jpg')} /> */}
          <UserMessageBubble message="Hey, how are you doing?" />
          <NonUserMessageBubble message="I'm doing fine, thanks for asking." />
        </View>
      </ScrollView>
    </View>
  );
};

export default ConversationFeed;
