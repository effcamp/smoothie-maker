import firebase from 'firebase/app';
import firestore from 'firebase/firestore/';
let config = {};
// Initialize Firebase
if (!(process.env.NODE_ENV === 'production')) {
  config = require('./dev.env.js');
}

const keys = {
  apiKey: config.apiKey || process.env.API_KEY,
  authDomain: config.authDomain || process.env.AUTH_DOMAIN,
  databaseURL: config.databaseURL || process.env.DATABASE_URL,
  projectId: config.projectId || process.env.PROJECT_ID,
  storageBucket: config.storageBucket || process.env.STORAGE_BUCKET,
  messagingSenderId: config.storageBucket || process.env.MESSAGING_SENDER_ID
};
const firebaseApp = firebase.initializeApp(keys);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });
// export firestore database

export default firebaseApp.firestore();
