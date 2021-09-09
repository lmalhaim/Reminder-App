import { StatusBar } from "expo-status-bar";
import "react-native-gesture-handler";
import * as React from "react";
import {
  StyleSheet,
  Button,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "firebase/firestore";
import EventList from "./assets/screens/EventList.js";
import CreateEvent from "./assets/screens/CreateEvent.js";
import SignUp from "./assets/screens/SignUp.js";
import SignIn from "./assets/screens/SignIn.js";
import ForgotPass from "./assets/screens/FogotPass";
import Account from "./assets/screens/Account.js";
import FirstScreen from "./assets/screens/FirstScreen.js";

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
        <Stack.Screen name="Forgot Password" component={ForgotPass} />
        <Stack.Screen
          name="All Events"
          component={EventList}
          options={({ navigation }) => ({
            // get reference to navigation
            headerRight: () => (
              <Button
                title="Account"
                onPress={() => {
                  navigation.navigate("Account Managment");
                }}
              />
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
