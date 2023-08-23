import Email_pass from "./view/Email_Pass.js";
import React from "react";
import { logIn } from "./api/EventApi.js";

export default function SignIn(props) {
  const log_in = async (email, pass) => {
    const message = await logIn(email, pass);
    if (message != "") {
      alert(message);
    } else {
      props.navigation.navigate("All Events");
    }
  };
  return (
    <Email_pass
      function={log_in}
      forgot_pass={true}
      navigation={props.navigation}
      button_title="Sign in"
    />
  );
}
