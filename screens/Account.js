import React, { useState } from "react";
import {
  View,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Alert,
} from "react-native";
import { resetPass, fetchEmail, updateEmail, logOut } from "./api/EventApi";
import styles from "../assets/StyleSheet";


export default function Account(props) {
  const [changeEmail, setChangeEmail] = useState(true);
  const [email, setEmail] = useState(fetchEmail());
  const [newEmail, setNewEmail] = useState("");
  function toggleSaveChange() {
    if (newEmail != email) {
      setChangeEmail(!changeEmail);
    }
  }
  function saveChanges() {
    Alert.prompt(
      null,
      "Enter Password",
      async (password) => {
        const msg = await updateEmail(email, newEmail, password);
        if (msg === false) {
          alert("Please enter a valid email address");
        } else {
          setEmail(newEmail);
          Alert.alert(null, "The email address was changed to " + newEmail);
        }
      },
      "secure-text"
    );
  }

  function logOutHandler() {
    logOut();
    props.navigation.navigate("First Screen");
  }

  const resetPassHandler = async () => {
    let message = await resetPass(email);
    if (message != "") {
      alert(message);
    } else {
      Alert.alert("", "A reset password link was sent to your account");
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View>
          <KeyboardAvoidingView>
            <TextInput
              placeholder={email}
              onChangeText={(text) => {
                setNewEmail(text);
              }}
              onEndEditing={() => {
                toggleSaveChange();
              }}
              style={styles.textInput}
            />
          </KeyboardAvoidingView>
        </View>
        <Button
          title="Save Changes"
          disabled={changeEmail}
          onPress={() => {
            saveChanges();
          }}
        />
      </View>
      <View style={styles.buttonLocation}>
        <Button
          title="Reset Password"
          onPress={() => {
            resetPassHandler();
          }}
        />
        <Button
          title="Sign out"
          onPress={() => {
            logOutHandler();
          }}
        />
      </View>
    </View>
  );
}
