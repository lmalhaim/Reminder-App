import React from "react";

import { addUser } from "./api/EventApi.js";

import LoginForm from "./components/LoginForm.js";

export default function SignUp(props) {
  const createUser = async (email, pass, name) => {
    let message = await addUser(email, pass, name);
    if (message != "") {
      alert(message);
    } else {
      props.navigation.navigate("Reminders");
    }
  };

  return (
    <LoginForm
      handleClick={createUser}
      signUpForm={true}
      navigation={props.navigation}
      buttonTitle="Sign up"
    />
  );
}
