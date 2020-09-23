import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDiH9w-b7dzSSHvD7BEhGfIQTXxNv988-c',
  authDomain: 'emirates-backend.firebaseapp.com',
  databaseURL: 'https://emirates-backend.firebaseio.com',
  projectId: 'emirates-backend',
  storageBucket: 'emirates-backend.appspot.com',
  messagingSenderId: '1091226720462',
  appId: '1:1091226720462:web:4b8c1d716e91cae07d189f',
};
firebase.initializeApp(firebaseConfig);
firebase.firestore();
export default firebase;
