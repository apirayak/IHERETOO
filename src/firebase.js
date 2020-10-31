import firebase from 'firebase/app'
import 'firebase/database'

const config = {
  apiKey: "AIzaSyARoDFePdcknvjV6pRo6gDtMIcnixcsnSM",
  authDomain: "iheretoo-38e17.firebaseapp.com",
  databaseURL: "https://iheretoo-38e17.firebaseio.com",
  projectId: "iheretoo-38e17",
  storageBucket: "iheretoo-38e17.appspot.com",
  messagingSenderId: "448177809729",
  appId: "1:448177809729:web:e93c2cd07135a7a55899c0"
}

firebase.initializeApp(config);
const db = firebase.database();

export {
  db
}