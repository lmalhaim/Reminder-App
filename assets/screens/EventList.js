import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { TouchableOpacity, View, ScrollView, Modal } from "react-native";
import { Icon } from "react-native-elements";
import styles from "../StyleSheet";
import { readEvents, initializeDB } from "./api/EventApi.js";
import EventComp from "./view/Event";

import CreateEvent from "./CreateEvent";
class EventList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [],
      popup_isVisible: false,
      Token: "",
    };
    initializeDB();
    this.togglePopup = this.togglePopup.bind(this);
  }

  RetrievedEvents = (recievedEvents) => {
    this.setState((prevState) => ({
      events: (prevState.events = recievedEvents),
    }));
  };

  togglePopup() {
    this.setState({
      popup_isVisible: !this.state.popup_isVisible,
    });
  }

  async componentDidMount() {
    await readEvents(this.RetrievedEvents);
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          {this.state.events.map((item, index) => {
            return (
              <View key={index}>
                <EventComp
                  RetrievedEvents={this.RetrievedEvents}
                  id={item.id}
                  text={item.title}
                  deadline={item.deadline}
                />
              </View>
            );
          })}
        </ScrollView>
        {this.state.popup_isVisible && (
          <Modal>
            <CreateEvent
              RetrievedEvents={this.RetrievedEvents}
              togglePopup={this.togglePopup}
            />
          </Modal>
        )}
        <TouchableOpacity
          onPress={() => {
            this.togglePopup();
          }}
          style={styles.addEventButton}
        >
          <Icon name="add-circle-outline" type="ionicon" size={90} />
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    );
  }
}

export default EventList;
