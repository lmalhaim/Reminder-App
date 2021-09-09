import React, { useState } from "react";

import {
  Button,
  TextInput,
  View,
  KeyboardAvoidingView,
} from "react-native";

import styles from "../../StyleSheet";
export default function Email_pass(props) {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
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
      <View style={styles.inputContainer}>
        <KeyboardAvoidingView>
          <TextInput
            placeholder="password"
            value={pass}
            secureTextEntry={true}
            onChangeText={(text) => {
              setPass(text);
            }}
            style={styles.textInput}
          />
        </KeyboardAvoidingView>
      </View>

      {props.forgot_pass && (
        <Button
          title="forgot password"
          onPress={() => {
            props.navigation.navigate("Forgot Password");
          }}
        />
      )}

      <View style={styles.buttonLocation}>
        <Button
          title={props.button_title}
          onPress={() => {
            props.function(email, pass);
          }}
        />
      </View>
    </View>
  );
}
