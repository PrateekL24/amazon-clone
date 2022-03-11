import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC9gXT29KOHyqU7sRyBUjxWBG1acf7lGtw",
    authDomain: "clone-1e9e3.firebaseapp.com",
    projectId: "clone-1e9e3",
    storageBucket: "clone-1e9e3.appspot.com",
    messagingSenderId: "940912180633",
    appId: "1:940912180633:web:9525ab3c413162acef6708"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth}; 