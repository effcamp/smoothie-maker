import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import dotenv from 'dotenv';
dotenv.config();
// // Initialize Firebase
// if (!(process.env.NODE_ENV === 'production')) {
//   config = require('./dev.env.js');
// }

console.log(process.env.VUE_APP_API_KEY);

const keys = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID
};
const firebaseApp = firebase.initializeApp(keys);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });
// export firestore database

export default firebaseApp.firestore();
