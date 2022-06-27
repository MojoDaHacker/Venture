import React, { useState } from "react";
import { Text, View } from "../components/Themed";
import MessagePanel from "../components/MessagePanel";
import ConversationFeed from "../components/ConversationFeed";
import { Ionicons } from "@expo/vector-icons";

export default function ConversationScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ConversationFeed />
      <MessagePanel />
    </View>
  );
}
