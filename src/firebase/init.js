import firebase from 'firebase/app';
import firestore from 'firebase/firestore/';
// Initialize Firebase

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });
// export firestore database

export default firebaseApp.firestore();
