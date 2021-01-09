import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyADEq7jYA8qmikdl5t6JxhHfmhzKdgW8xQ",
  authDomain: "clone-77936.firebaseapp.com",
  projectId: "clone-77936",
  storageBucket: "clone-77936.appspot.com",
  messagingSenderId: "603973446890",
  appId: "1:603973446890:web:0239d0b0b811c6ed187b93",
  measurementId: "G-GQ534VBCHE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
