import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth"

const config = {
    apiKey: "AIzaSyAZb6eUyISKSh16XvY3kboLQd6kVnXBeGc",
    authDomain: "crown-db-1705.firebaseapp.com",
    projectId: "crown-db-1705",
    storageBucket: "crown-db-1705.appspot.com",
    messagingSenderId: "741303439927",
    appId: "1:741303439927:web:f97d2061a80469f8ff65b2"
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  const provider=new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:"select_account"});
  export const signInWithGoogle=()=>auth.signInWithPopup(provider);
  
  export default firebase;
