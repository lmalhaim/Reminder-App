import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import * as React from "react";
import {
  StyleSheet,
  Button,
  Pressable,
  TouchableOpacity,
  Text,
} from "react-native";
import { Icon } from "react-native-elements";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "firebase/firestore";
import Events from "./screens/Events.js";
import CreateEvent from "./screens/CreateEvent.js";
import SignUp from "./screens/SignUp.js";
import SignIn from "./screens/SignIn.js";
import ForgotPassword from "./screens/ForgotPassword.js";
import Account from "./screens/Account.js";
import FirstScreen from "./screens/FirstScreen.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="First Screen">
        <Stack.Screen
          name="First Screen"
          component={FirstScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Account Managment" component={Account} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Sign In" component={SignIn} />
        <Stack.Screen name="Forgot Password" component={ForgotPassword} />
        <Stack.Screen
          name="Reminders"
          component={Events}
          options={({ navigation }) => ({
            // get reference to navigation
            headerRight: () => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Account Managment");
                }}
              >
                <Text
                  style={{ color: "#0d3a9b", fontSize: 17, paddingRight: 15 }}
                >
                  Account
                </Text>
              </TouchableOpacity>
            ),
            headerLeft: () => {
              null;
            },
          })}
        />
        <Stack.Screen name="Create Event" component={CreateEvent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
