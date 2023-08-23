import React from "react";

import { addUser } from "./api/EventApi.js";

import Email_pass from "./view/Email_Pass.js";

export default function SignUp(props) {
  const createUser = async (email, pass) => {
    let message = await addUser(email, pass);
    if (message != "") {
      alert(message);
    } else {
      props.navigation.navigate("All Events");
    }
  };

  return (
    <Email_pass
      function={createUser}
      forgot_pass={false}
      navigation={props.navigation}
      button_title="Sign up"
    />
  );
}
