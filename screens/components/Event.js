import React from "react";
import { Text, View, TouchableOpacity, Dimensions } from "react-native";
import { removeEvent, readEvents } from "../api/EventApi.js";
import { to12HourFormat } from "../helper/TimeFormatter.js";
import { Icon } from "react-native-elements";
import styles from "../../assets/StyleSheet.js";
const Event = (props) => {
  const toDateTime = (dateTime) => {
    let day = dateTime.DayOfWeek;
    let date = dateTime.Month + " " + dateTime.Day + ", " + dateTime.Year;
    console.log(dateTime);
    let time = to12HourFormat(dateTime.Time);
    return { day: day, date: date, time: time };
  };

  const removeEventHandler = () => {
    removeEvent(props);
    readEvents(props.RetrievedEvents);
  };
  const deadline = toDateTime(props.deadline);
  return (
    <View style={styles.event}>
      <Text style={styles.title}> {props.text} </Text>
      <TouchableOpacity
        onPress={removeEventHandler}
        style={styles.removeEventButton}
      >
        <Icon
          name="remove-circle-outline"
          type="ionicon"
          size={30}
          color="darkred"
        />
      </TouchableOpacity>
      <Text style={styles.deadline}> {deadline.day} </Text>
      <Text style={styles.deadline}> {deadline.date} </Text>
      <Text style={styles.deadline}> {deadline.time} </Text>
    </View>
  );
};

export default Event;
