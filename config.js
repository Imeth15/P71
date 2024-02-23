import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyA-hg4FHc9UViPois5U26JZWOsyu3rRwSU",
    authDomain: "e-library-b2206.firebaseapp.com",
    projectId: "e-library-b2206",
    storageBucket: "e-library-b2206.appspot.com",
    messagingSenderId: "732004441419",
    appId: "1:732004441419:web:f2a7d83f3f616d194c1cce"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
