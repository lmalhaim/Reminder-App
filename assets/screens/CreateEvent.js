import React, { useState } from "react";
import {
  TextInput,
  View,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import styles from "../StyleSheet";
import { addEvent, readEvents } from "./api/EventApi.js";
import { Icon } from "react-native-elements";

import DateTimePicker from "@react-native-community/datetimepicker";

import { MonthToNum, TimeStringToValues } from "./helper/TimeFormatter";

export default function CreateEvent(props) {
  const [title, setTitle] = useState();
  const [dateTime, setDateTime] = useState(new Date());

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || dateTime;
    setDateTime(currentDate);
  };

  async function verifyDate(dateTime) {
    let event_fullD,
      today_fullD = "";
    let event_D,
      event_M,
      event_Y,
      today_D,
      today_M,
      today_Y = 0;
    let event_T,
      today_T = [];

    //get Event Date Values
    [event_fullD, event_D, event_M, event_Y, event_T] = TimeStringToValues(
      dateTime
    );

    //get Today Date Values;
    let today = new Date();
    [today_fullD, today_D, today_M, today_Y, today_T] = TimeStringToValues(
      today
    );

    let Y_diff = event_Y - today_Y;
    if (Y_diff < 0) {
      return {};
    } else if (Y_diff == 0) {
      let M_diff = MonthToNum(event_M) - MonthToNum(today_M);
      if (M_diff < 0) {
        return {};
      } else if (M_diff == 0) {
        let T_diff = event_D - today_D;
        if (T_diff < 0) {
          return {};
        } else if (T_diff == 0) {
          let hr_diff = Number(event_T[0]) - Number(today_T[0]);
          if (hr_diff < 0) {
            return {};
          } else if (hr_diff == 0) {
            let min_diff = Number(event_T[1]) - Number(today_T[1]);
            if (min_diff <= 0) {
              return {};
            }
          }
        }
      }
    }
    return {
      DayOfWeek: event_fullD,
      Day: event_D,
      Month: event_M,
      Year: event_Y,
      Time: event_T,
    };
  }

  async function addEventHandler() {
    const deadline = await verifyDate(dateTime);
    if (Object.keys(deadline).length != 0) {
      addEvent({ title: title, deadline: deadline });
      readEvents(props.RetrievedEvents);
      props.togglePopup();
    } else {
      alert("event has to be in the future");
    }
  }
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.exitButton}>
          <TouchableOpacity
            onPress={() => {
              props.togglePopup();
            }}
          >
            <Icon name="close-circle-outline" type="ionicon" size={50} />
          </TouchableOpacity>
        </View>
      </View>
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

      <View style={styles.inputContainer}>
        <View>
          <DateTimePicker
            style={styles.datePicker}
            testID="dateTimePicker"
            value={dateTime}
            mode={"date"}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        </View>
      </View>

      <View style={styles.inputContainer}>
        <View>
          <DateTimePicker
            style={styles.timePicker}
            testID="dateTimePicker"
            value={dateTime}
            mode={"time"}
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        </View>
      </View>
      <View style={styles.buttonLocation}>
        <Button
          onPress={() => {
            addEventHandler();
          }}
          title="add event"
        />
      </View>
    </View>
  );
}
