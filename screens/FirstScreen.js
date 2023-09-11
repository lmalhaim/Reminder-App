import * as React from "react";
import styles from "../assets/StyleSheet";
import { Image, Text, View } from "react-native";
import CustomButton from "./components/CustomButton";

export default function FirstScreen(props) {
  return (
    <View style={styles.container}>
      <Image
        blurRadius={15}
        style={styles.image}
        source={require("../assets/Images/calendar.jpeg")}
      />
      <View style={styles.overlay}>
        <Text style={{ fontSize: 50, marginBottom: 180 }}>
          No more exuses, start{" "}
          <Text style={{ fontWeight: "bold" }}>Remind</Text>ing Today
        </Text>
        <CustomButton
          styleProps={{
            view: styles.landingScreenButton,
            text: styles.buttonText,
          }}
          variant="outline"
          onClickHandler={() => {
            props.navigation.navigate("Sign Up");
          }}
          buttonTitle="SIGN UP"
        />
        <CustomButton
          styleProps={{
            view: styles.landingScreenButton,
            text: styles.buttonText,
          }}
          variant="outline"
          onClickHandler={() => {
            props.navigation.navigate("Sign In");
          }}
          buttonTitle="SIGN IN"
        />
      </View>
    </View>
  );
}
