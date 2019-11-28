import * as firebase from 'firebase';
import 'firebase/firestore';
import * as c from "./constants"

// Initialize Firebase
const config = {
  apiKey: c.FIREBASE_API_KEY,
  authDomain: c.FIREBASE_AUTH_DOMAIN,
  databaseURL: c.FIREBASE_DATABASE_URL,
  projectId: c.FIREBASE_PROJECT_ID,
  storageBucket: c.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: c.FIREBASE_MESSAGING_SENDER_ID,
  appId: c.FIREBASE_APP_ID,
  measurementId: c.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(config);

export const database = firebase.firestore(); // this must change to firebase.firestore()
export const auth = firebase.auth();
export const provider = new firebase.auth.FacebookAuthProvider();
export const storage = firebase.storage();