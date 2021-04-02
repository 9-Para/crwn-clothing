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



export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log("Error creating user.", error.message);
        }
    }

    return userRef;
};




firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
