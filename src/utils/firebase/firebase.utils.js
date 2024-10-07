import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxTEhNFC-H5MPu_ZF1zjWDlJDzqsnSx1c",
  authDomain: "e-shop-db-f9deb.firebaseapp.com",
  projectId: "e-shop-db-f9deb",
  storageBucket: "e-shop-db-f9deb.appspot.com",
  messagingSenderId: "536112288932",
  appId: "1:536112288932:web:6eae5284f64bcc126b4231",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  // if user data does not exist
  if (!userSnapShot.exists()) {
    // create / set the document with user data from userAuth in my user collection
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.error("error creating the user", error);
    }
  }

  // if user does exists
  // return users data
  return userDocRef;
};
