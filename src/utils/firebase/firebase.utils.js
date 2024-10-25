import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
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

const googleAuthProvider = new GoogleAuthProvider();
googleAuthProvider.setCustomParameters({
  prompt: "select_account",
});

// const facebookAuthProvider = new FacebookAuthProvider();
// facebookAuthProvider.setCustomParameters({
//   prompt: "select_account",
// });

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleAuthProvider);

// export const signInWithEmailAndPassword = () => {};

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapShot = await getDoc(userDocRef);

  // if user data does not exist
  if (!userSnapShot.exists()) {
    // create / set the document with user data from userAuth in my user collection
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.error("error creating the user", error);
    }
  }

  // if user does exists
  // return users data
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async function (
  email,
  password
) {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async function (
  email,
  password
) {
  if (!email || !password) return;
  const res = await signInWithEmailAndPassword(auth, email, password);
  return res;
};

export const signOutUser = async function () {
  return await signOut(auth);
};

export const onAuthStateChangeListener = function (callback) {
  return onAuthStateChanged(auth, callback);
};
