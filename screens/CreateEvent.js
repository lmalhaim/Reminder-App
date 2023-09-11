import React, { useState } from "react";
import {
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import styles from "../assets/StyleSheet";
import { addEvent, readEvents } from "./api/EventApi.js";
import { Icon } from "react-native-elements";
import CustomButton from "./components/CustomButton";
import DateTimePicker from "@react-native-community/datetimepicker";

import { verifyDate } from "./helper/TimeFormatter";

export default function CreateEvent(props) {
  const [title, setTitle] = useState();
  const [dateTime, setDateTime] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || dateTime;
    setDateTime(currentDate);
  };

  async function addEventHandler() {
    const deadline = verifyDate(dateTime);
    if (Object.keys(deadline).length != 0) {
      addEvent({ title: title, deadline: deadline });
      readEvents(props.RetrievedEvents);
      props.togglePopup();
    } else {
      alert("event has to be in the future");
    }
  }

  return (
    <View style={{padding: 15, width: "90%", height: 'auto', borderRadius: 10,shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3 ,backgroundColor: "#fcfcfc",  justifyContent: "center",
    alignItems: "center",}}>
      <TouchableOpacity
        onPress={() => {
          props.togglePopup();
        }}
        style={styles.exitButton}
      >
        <Icon name="close-outline" type="ionicon" size={40} color={"black"} />
      </TouchableOpacity>
      <View>
      <View style={styles.inputContainer}>
        <KeyboardAvoidingView>
          <TextInput
            style={styles.textInput}
            value={title}
            onChangeText={(text) => setTitle(text)}
            placeholder="Title"
          />
        </KeyboardAvoidingView>
      </View>
      <View
        style={{
          marginTop: 10, 
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center"
        }}
      >

        <DateTimePicker
          testID="dateTimePicker"
          value={dateTime}
          mode={"time"}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
        <DateTimePicker
          testID="dateTimePicker"
          value={dateTime}
          mode={"date"}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      </View>
      </View>
      <CustomButton
        variant="outline"
        styleProps={{
          view: {
            width: 180,
            marginTop: 50,
          },
        }}
        onClickHandler={addEventHandler}
        buttonTitle={"Add Event"}
      />
    </View>
  );
}
