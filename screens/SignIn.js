import React from "react";
import { logIn } from "./api/EventApi.js";
import LoginForm from "./components/LoginForm.js";

export default function SignIn(props) {
  const log_in = async (email, pass) => {
    const message = await logIn(email, pass);
    if (message != "") {
      alert(message);
    } else {
      props.navigation.navigate("Reminders");
    }
  };
  return (
    <LoginForm
      handleClick={log_in}
      signUpForm={false}
      navigation={props.navigation}
      buttonTitle="Sign in"
    />
  );
}
