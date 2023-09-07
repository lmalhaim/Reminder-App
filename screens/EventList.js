import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, ScrollView, Modal } from "react-native";
import { Icon } from "react-native-elements";
import styles from "../assets/StyleSheet";
import { readEvents, initializeDB, readUserData } from "./api/EventApi.js";
import Event from "./Event";

import CreateEvent from "./CreateEvent";
const EventList = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState([]);
  const [showPopUp, setPopupVisible] = useState(false);
  const [Token, setToken] = useState("");

  const RetrievedEvents = (recievedEvents) => {
    setEvents(recievedEvents);
  };

  const togglePopup = () => {
    setPopupVisible(!showPopUp);
  };

  useEffect(() => {
    async function fetchData() {
      initializeDB();
      await readEvents(RetrievedEvents);
    }

    fetchData();
  }, [events]);

  useEffect(() => {
    async function getUser() {
      initializeDB();
      let name = await readUserData();
      setUser({
        name,
      });
    }
    getUser();
    if (user && user.name) {
      navigation.setOptions({
        title: `Welcome, ${user.name[0].toUpperCase()}${user.name.substring(1)}`, 
      })
    }
  });


  return (
    <View style={styles.container}>
      <ScrollView>
        {events.map((item, index) => {
          return (
            <View key={index}>
              <Event
                RetrievedEvents={RetrievedEvents}
                id={item.id}
                text={item.title}
                deadline={item.deadline}
              />
            </View>
          );
        })}
      </ScrollView>
      {showPopUp && (
        <Modal>
          <CreateEvent
            RetrievedEvents={RetrievedEvents}
            togglePopup={togglePopup}
          />
        </Modal>
      )}
      <TouchableOpacity
        onPress={() => {
          togglePopup();
        }}
        style={styles.addEventButton}
      >
        <Icon name="add-circle-outline" type="ionicon" size={90} />
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};

export default EventList;
