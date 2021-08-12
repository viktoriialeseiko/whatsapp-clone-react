//Connect database
import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaQU0oIDo4kRK7dcBh5cb9Ke99N2SRMU8",
  authDomain: "whatsapp-clone-c8d7d.firebaseapp.com",
  projectId: "whatsapp-clone-c8d7d",
  storageBucket: "whatsapp-clone-c8d7d.appspot.com",
  messagingSenderId: "505641678756",
  appId: "1:505641678756:web:0dcac88b8c229ff0dfb331",
  measurementId: "G-6GJ5HQ6E59"
};

//real time database
const firebaseApp = firebase.initializeApp(firebaseConfig); //initialize app and store that data in this variable
const db = firebaseApp.firestore(); //it will access the firebase instance 
const auth = firebase.auth(); //authentication
const provider = new firebase.auth.GoogleAuthProvider(); //authentication for google

export { auth, provider };
export default db; //will use quite more