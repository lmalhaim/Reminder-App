import React from "react";
import { TouchableOpacity, Text, View } from "react-native";
import styles from "../../assets/StyleSheet";

export default function({ variant, styleProps, onClickHandler, buttonTitle }) {
  if (styleProps) {
    if (!styleProps.view) {
      styleProps.view = {};
    }
    if (!styleProps.button) {
      styleProps.button = {};
    }
    if (!styleProps.text) {
      styleProps.text = {};
    }
  } else {
    styleProps = {
      view: {},
      button: {},
      text: {},
    };
  }
  return (
    <View
      style={{ ...(variant === "outline" ? styles.buttonView : {}), ...styleProps.view }}
    >
      <TouchableOpacity
      style={{...(variant == "outline" ? styles.button : {}), ...styleProps.button}}
      onPress={onClickHandler}
      >
        <Text style={{ ...{
            fontSize: 18, 
            color: variant == "outline" ? "white" : "#0d3a9b"
        }, ...styleProps.text}}>
            {" "}
            {buttonTitle} {" "}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

