import React from "react";

import { addUser } from "./api/EventApi.js";

import LoginForm from "./LoginForm.js";

export default function SignUp(props) {
  const createUser = async (email, pass) => {
    let message = await addUser(email, pass);
    if (message != "") {
      alert(message);
    } else {
      props.navigation.navigate("Reminders");
    }
  };

  return (
    <LoginForm
      handleClick={createUser}
      showForgotPass={false}
      navigation={props.navigation}
      buttonTitle="Sign up"
    />
  );
}
