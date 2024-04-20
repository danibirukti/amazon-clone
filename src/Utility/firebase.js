
import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore"
import "firebase/compat/auth"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQygJa3gSoAZcVcYv0G1WwURYmpediDN4",
  authDomain: "clone-531b0.firebaseapp.com",
  projectId: "clone-531b0",
  storageBucket: "clone-531b0.appspot.com",
  messagingSenderId: "701377258782",
  appId: "1:701377258782:web:735cab2cdc2186d660550f"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();