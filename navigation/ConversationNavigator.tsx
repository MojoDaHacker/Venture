import { Entypo } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import * as React from "react";
import MessagesScreen from "../screens/MessagesScreen";
import ConversationScreen from "../screens/ConversationScreen";
import { ConversationParamList } from "../types";
import ConversationHeader from "../components/ConversationScreenHeader";
import ConversationDetailsModal from "../screens/ConversationDetailsModal";
import ReportScreen from "../screens/ReportScreen";

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const Conversation = createStackNavigator<ConversationParamList>();

export default function ConversationNavigator() {
  return (
    <Conversation.Navigator
      screenOptions={{
        presentation: "modal",
        headerMode: "screen"
      }}
      initialRouteName="ConversationRoot"
    >
      <Conversation.Screen
        name="ConversationRoot"
        component={ConversationScreen}
        options={{
          headerBackTitleVisible: false,
          header: (props) => <ConversationHeader {...props} />,
        }}
      />
      <Conversation.Screen
        name="ConversationDetailsModal"
        component={ConversationDetailsModal}
        options={{
          headerShown: true,
          headerTitle: "",
          headerBackTitleVisible: false,
        }}
      />
      <Conversation.Screen
        name="Report"
        component={ReportScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerBackTitleVisible: false,
        }}
      />
    </Conversation.Navigator>
  );
}
