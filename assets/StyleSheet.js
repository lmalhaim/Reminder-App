import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    padding: 10,
  },
  textInput: {
    backgroundColor: "#EFEFF0",
    borderColor: "#EFEFF0",
    borderWidth: 1,
    borderRadius: 10,
    width: 350,
    height: 50,
    padding: 15,
    justifyContent: "center",
    alignContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  buttonLocation: {
    position: "absolute",
    bottom: 100,
  },
  buttonView: {
    padding: 10,
    backgroundColor: "black",
    borderColor: "#323335",
    borderWidth: 2,
    margin: 5,
    borderRadius: 5,
    width: Dimensions.get("window").width - 25,
    height: 60,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    marginTop: "3%",
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  addEventButton: {
    position: "absolute",
    bottom: 60,
    left: "75%",
    opacity: 0.6,
  },
  datePicker: {
    width: 150,
    marginLeft: 25,
  },
  timePicker: {
    width: 150,
    marginLeft: 65,
  },
  exitButton: {
    position: "absolute",
    right: "32%",
    bottom: 230,
  },
  event: {
    backgroundColor: "gray",
    flexDirection: "column",
    borderColor: "darkgray",
    borderWidth: 1,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window").width - 10,
    margin: 10,
  },
  removeEventButton: {
    position: "absolute",
    top: 15,
    right: 15,
  },

  title: {
    fontSize: 25,
    color: "white",
    margin: 5,
  },
  deadline: {
    fontSize: 20,
    color: "white",
    margin: 3,
  },
});
