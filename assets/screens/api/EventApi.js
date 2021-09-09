import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBjKFmEHikysejg8Be_XTijhACtgwDQEDM",
  authDomain: "countdown-79765.firebaseapp.com",
  projectId: "countdown-79765",
  storageBucket: "countdown-79765.appspot.com",
  messagingSenderId: "261477327515",
  appId: "1:261477327515:web:cfe960320f9df23ec5dc3e",
  measurementId: "G-G5TKTKWYEG",
};

if (firebase.apps.length == 0) {
  try {
    firebase.initializeApp(firebaseConfig);
  } catch (err) {
    console.log(err);
  }
}

//declare database
const db = firebase.firestore();
const auth = firebase.auth();
const userRef = db.collection("users");
let eventRef = "";

//get eventlist collection by userID
export function initializeDB() {
  try {
    const userID = auth.currentUser.uid;
    eventRef = userRef.doc(userID).collection("event_list");
  } catch (err) {
    console.log("userid", err);
  }
}

/* AUTHURIZATION FUNCTIONS */

export function fetchEmail() {
  const email = auth.currentUser.email || "";
  return email;
}

export async function updateEmail(currentEmail, newEmail, password) {
  try {
    const userCred = await auth.signInWithEmailAndPassword(
      currentEmail,
      password
    );
    const response = await userCred.user
      .updateEmail(newEmail)
      .then(() => {
        return true;
      })
      .catch((error) => {
        return false;
      });

    return await response;
  } catch (err) {
    console.log(err);
  }
}

export async function addUser(email, password) {
  let response = await auth
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      return "";
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        return "Email addrress already in use";
      }
      if (error.code === "auth/invalid-email") {
        return "Please enter a valid email address";
      }
      if ((error.code = "auth/weak-password")) {
        return "Please use a stronger password";
      }
    });
  return response;
}

export async function logIn(email, password) {
  let response = await auth
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      return "";
    })
    .catch((error) => {
      if (error.code === "auth/user-not-found") {
        return "The email addrress is not signed up";
      }
      if (error.code === "auth/wrong-password") {
        return "Incorrect password";
      }
      return error.code;
    });
  return await response;
}

export function logOut() {
  auth
    .signOut()
    .then(() => {
      console.log("User signed out");
    })
    .catch((err) => {
      console.log(err);
    });
}

export async function resetPass(email) {
  let response = await auth
    .sendPasswordResetEmail(email)
    .then(() => {
      return "";
    })
    .catch((error) => {
      if (error.code === "auth/user-not-found") {
        return "The email addrress is not signed up";
      }
      if (error.code === "auth/invalid-email") {
        return "Please enter a valid email address";
      }
      if ((error.code = "auth/too-many-requests")) {
        return "This device has been blocked due to unusual activity, please try again later";
      }
      return error;
    });
  return await response;
}

/* EVENT FUNCTIONS */
export function addEvent(event) {
  eventRef
    .add({
      title: event.title,
      deadline: event.deadline,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log("event added");
    })
    .catch((error) => {
      console.log("event not added");
    });
}

export function removeEvent(event) {
  eventRef
    .doc(event.id)
    .delete()
    .then(() => {
      console.log("removed");
    })
    .catch((error) => {
      console.log("not removed");
    });
}

export async function readEvents(RetrievedEvents) {
  try {
    var eventlist = [];
    var snapshot = await eventRef.orderBy("createdAt").get();

    snapshot.forEach((doc) => {
      eventlist.push({
        id: doc.id,
        title: doc.data().title,
        deadline: doc.data().deadline,
      });
    });
    RetrievedEvents(eventlist);
  } catch (err) {
    console.log("read", err);
  }
}
