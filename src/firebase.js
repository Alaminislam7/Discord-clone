// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCB5vHPBBloJZejeMgHqwGPQZ0A3AeFVV4",
  authDomain: "discord-clone-caf17.firebaseapp.com",
  databaseURL: "https://discord-clone-caf17.firebaseio.com",
  projectId: "discord-clone-caf17",
  storageBucket: "discord-clone-caf17.appspot.com",
  messagingSenderId: "285399680339",
  appId: "1:285399680339:web:d760390ca153730c658da6",
  measurementId: "G-DYFXXSKM8S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db


