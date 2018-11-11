import firebase from 'firebase/app';
import firestore from 'firebase/firestore/';
import * as config from './dev.env.js';
// Initialize Firebase
var config = {
  apiKey: config.apiKey || process.env.API_KEY,
  authDomain: config.authDomain || process.env.AUTH_DOMAIN,
  databaseURL: config.databaseURL || process.env.DATABASE_URL,
  projectId: config.projectId || process.env.PROJECT_ID,
  storageBucket: config.storageBucket || process.env.STORAGE_BUCKET,
  messagingSenderId: config.storageBucket || process.env.MESSAGING_SENDER_ID
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });
// export firestore database

export default firebaseApp.firestore();
