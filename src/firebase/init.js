import firebase from 'firebase';
import firestore from 'firebase/firestore';
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyBNSP_dBVJOzhK7oUB_sNLqwE_mkJ-TNY4',
  authDomain: 'smoothie-maker-5a340.firebaseapp.com',
  databaseURL: 'https://smoothie-maker-5a340.firebaseio.com',
  projectId: 'smoothie-maker-5a340',
  storageBucket: 'smoothie-maker-5a340.appspot.com',
  messagingSenderId: '143167629269'
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });
// export firestore database

export default firebaseApp.firestore();
