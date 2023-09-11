import React, { useState } from "react";

import {
  TextInput,
  View,
  KeyboardAvoidingView,
  TouchableOpacity,
  Text,
} from "react-native";

import styles from "../../assets/StyleSheet";
import CustomButton from "./CustomButton";
export default function LoginForm({
  handleClick,
  buttonTitle,
  navigation,
  signUpForm,
}) {
  const [email, setEmail] = useState();
  const [pass, setPass] = useState();
  const [name, setName] = useState();

  const handleButtonClick = () => {
    if (signUpForm) {
      handleClick(email, pass, name);
    } else {
      handleClick(email, pass);
    }
  };
  return (
    <View style={styles.container}>
      {signUpForm && (
        <View style={styles.inputContainer}>
          <KeyboardAvoidingView>
            <TextInput
              placeholder="Name"
              value={name}
              onChangeText={(text) => {
                setName(text);
              }}
              style={styles.textInput}
            />
          </KeyboardAvoidingView>
        </View>
      )}

      <View style={styles.inputContainer}>
        <KeyboardAvoidingView>
          <TextInput
            placeholder="Email"
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
            placeholder="Password"
            value={pass}
            secureTextEntry={true}
            onChangeText={(text) => {
              setPass(text);
            }}
            style={styles.textInput}
          />
        </KeyboardAvoidingView>
      </View>
      
      {!signUpForm && (
        <CustomButton
          variant="simple"
          onClickHandler={() => {
            navigation.navigate("Forgot Password");
          }}
          buttonTitle={"Forgot Password"}
        />
      )}

      <CustomButton
        variant="outline"
        styleProps={{
          view: {
            width: 150,
            marginTop: 100,
          },
        }}
        onClickHandler={handleButtonClick}
        buttonTitle={buttonTitle.toUpperCase()}
      />
    </View>
  );
}
