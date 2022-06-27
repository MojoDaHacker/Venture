import React from "react";
import { View, Text } from "./Themed";

const NonUserMessageBubble = ({ message }) => {
  return (
    <View style={style.messageContainer}>
      <Text style={{...style.nonUserMessage, ...style.message}}>{message}</Text>
    </View>
  );
};

const UserMessageBubble = ({ message }) => {
  return (
    <View style={style.messageContainer}>
      <Text style={{...style.userMessage, ...style.message}}>{message}</Text>
    </View>
  );
};

export { NonUserMessageBubble, UserMessageBubble };

const style = {
  messageContainer: {
    maxWidth: "100%",
    margin: 12,
  },
  message:{
    borderRadius: 20,
    overflow: "hidden",
  },
  userMessage: {
    backgroundColor: "lightgreen",
    padding: 12,
    marginLeft: "auto",
  },
  nonUserMessage: {
    padding: 12,
    backgroundColor: "lightblue",
    marginRight: "auto",
  },
};
