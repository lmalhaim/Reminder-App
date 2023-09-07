import React, { useState } from "react";

import {
  Button,
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
} from "react-native";

import styles from "../assets/StyleSheet";
export default function LoginForm({
  handleClick,
  showForgotPass,
  buttonTitle,
  navigation,
}) {
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
      <View style={{ ...styles.inputContainer }}>
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

      {showForgotPass && (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Forgot Password");
          }}
        >
          <Text style={{ color: "#0d3a9b", fontSize: 15 }}>
            {" "}
            Forgot Password{" "}
          </Text>
        </TouchableOpacity>
      )}

      <View
        style={{
          ...styles.buttonView,
          width: 150,
          position: "absolute",
          bottom: 100,
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            handleClick(email, pass);
          }}
        >
          <Text style={{ fontSize: 18, color: "white" }}>
            {" "}
            {buttonTitle.toUpperCase()}{" "}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
