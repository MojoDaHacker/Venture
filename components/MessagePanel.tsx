import { FontAwesome } from "@expo/vector-icons";
import React, { useState } from "react";
import { TextInput } from "react-native";
import { View } from "./Themed";

const MessagePanel = ({ }) => {
  const [userText, setUserText] = useState("");
  
  return (
    <View
        style={{
          flexShrink: 1,
          padding: 6,
          paddingLeft: 18,
          paddingRight: 18,
          flexDirection: "row",
          alignItems: "center",
          // justifyContent: "space-around"
          // borderTopWidth: 0.5
        }}
      >
        <FontAwesome
          style={{ flexShrink: 1, marginRight: 12, justifyContent: "center", alignItems: "center" }}
          name="camera"
          size={24}
          color="lightgray"
        />
        <TextInput
          style={{ borderWidth: .5, borderColor: "lightgray", padding: 12, borderRadius: 50, flex: 6 }}
          placeholder="Type message..."
          onChangeText={setUserText}
          value={userText}
        />
        {/* <FontAwesome
          style={{ margin: 6,  flex: 1 }}
          name="microphone"
          size={24}
          color="lightgray"
        /> */}
      </View>
  );
};

export default MessagePanel;

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
