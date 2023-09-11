import React, { useState } from "react";
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  Text,
  TouchableOpacity,
} from "react-native";
import { resetPass, fetchEmail, updateEmail, logOut } from "./api/EventApi";
import styles from "../assets/StyleSheet";
import CustomButton from "./components/CustomButton";

export default function Account(props) {
  const [email, setEmail] = useState(fetchEmail());
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");

  const saveChanges = () => {
    if (newEmail.length == 0 || password.length == 0) {
      alert("Please fill the empty fields");
      return;
    }
    if (newEmail.toLowerCase() == email.toLowerCase()) {
      alert("The email entered matches the old email");
      return;
    }
    const update = async () => {
      const msg = await updateEmail(email, newEmail, password);
      if (msg.length != 0) {
        alert(msg);
      } else {
        setEmail(newEmail);
        setNewEmail("");
        setPassword("");
        alert("The email address was changed to " + newEmail);
      }
    };
    update();
  };

  function handleLogOut() {
    logOut();
    props.navigation.navigate("First Screen");
  }

  const handleResetPassword = async () => {
    let message = await resetPass(email);
    if (message != "") {
      alert(message);
    } else {
      alert("", "A reset password link was sent to your account");
    }
  };

  return (
    <View style={{ ...styles.container, justifyContent: "stretch" }}>
      <View style={{ paddingTop: 100 }}>
        <Text>Current Email</Text>
        <View style={styles.inputContainer}>
          <TextInput value={email} editable={false} style={styles.textInput} />
        </View>
        <Text> New Email </Text>
        <View style={styles.inputContainer}>
          <KeyboardAvoidingView>
            <TextInput
              value={newEmail}
              onChangeText={(text) => {
                setNewEmail(text);
              }}
              style={styles.textInput}
            />
          </KeyboardAvoidingView>
        </View>
        <View style={styles.inputContainer}>
          <KeyboardAvoidingView>
            <TextInput
              placeholder="Password"
              value={password}
              secureTextEntry={true}
              onChangeText={(text) => {
                setPassword(text);
              }}
              style={styles.textInput}
            />
          </KeyboardAvoidingView>
        </View>
      </View>
      <CustomButton
        variant="simple"
        onClickHandler={saveChanges}
        buttonTitle="Save Changes"
        styleProps={{
          view: {
            marginTop: 15,
          },
        }}
      />
      <View
        style={{
          paddingTop: 200,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CustomButton
          variant="simple"
          onClickHandler={handleResetPassword}
          buttonTitle="Reset Password"
        />
        <CustomButton
          variant="outline"
          onClickHandler={handleLogOut}
          styleProps={{
            view: {
              width: 200,
              marginTop: 30,
            },
          }}
          buttonTitle="Sign out"
        />
      </View>
    </View>
  );
}
