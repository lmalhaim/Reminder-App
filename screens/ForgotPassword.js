import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  TextInput,
  Button,
  Alert,
} from "react-native";
import { resetPass } from "./api/EventApi.js";
import styles from "../assets/StyleSheet.js";
import CustomButton from "./components/CustomButton.js";

export default function ForgotPassword(props) {
  const [email, setEmail] = useState();
  const handleForgotPassword = async () => {
    let message = await resetPass(email);
    if (message != "") {
      alert(message);
    } else {
      Alert.alert("", "A reset password link was sent to your account");
      props.navigation.navigate("First Screen");
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ ...styles.inputContainer}}>
        <KeyboardAvoidingView>
          <TextInput
            placeholder="email"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
            style={styles.textInput}
          />
        </KeyboardAvoidingView>
      </View>
      <CustomButton variant={"outline"} onClickHandler={handleForgotPassword} buttonTitle="Submit" styleProps={{
        view: {width: 150,
          marginTop: 100,}
      }}/>
    </View>
  );
}
