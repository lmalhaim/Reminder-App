import * as React from "react";
import styles from "../assets/StyleSheet";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function FirstScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        blurRadius={15}
        style={styles.image}
        source={require("../assets/Images/calendar.jpeg")}
      />
      <View style={styles.overlay}>
        <Text style={{fontSize: 50, marginBottom: 180}}>No more exuses, start <Text style={{fontWeight: "bold"}}>Remind</Text>ing Today</Text>
        <View style={[styles.buttonView,  styles.landingScreenButton]}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              props.navigation.navigate("Sign Up");
            }}
          >
            <Text style={styles.buttonText}> SIGN UP</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.buttonView, styles.landingScreenButton]}>
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
