import * as React from "react";
import styles from "../StyleSheet";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function FirstScreen(props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../Images/calendar.jpeg")} />
      <View style={styles.buttonLocation}>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              props.navigation.navigate("Sign Up");
            }}
          >
            <Text style={styles.buttonText}> SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              props.navigation.navigate("Sign In");
            }}
          >
            <Text style={styles.buttonText}> SIGN IN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
