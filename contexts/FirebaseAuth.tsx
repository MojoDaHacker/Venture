import React, { useState, useEffect, useContext } from 'react'
import { loginWithFacebook } from '../firebase/loginWithFacebook';
import fakeData from '../testData.json'
import firebase from 'firebase/app';
import "firebase/database";
import "firebase/auth";
import "firebase/firestore";

import auth from '@react-native-firebase/auth';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQ6NpRBeVlAAiTjk1R1Y9DDZo1YQRAzjs",
  authDomain: "venture-32107.firebaseapp.com",
  databaseURL: "https://venture-32107-default-rtdb.firebaseio.com",
  projectId: "venture-32107",
  storageBucket: "venture-32107.appspot.com",
  messagingSenderId: "155091567874",
  appId: "1:155091567874:web:c43714c0e45dc465ecae1b",
  measurementId: "G-2M915F3211"
};
const AuthContext = React.createContext(null)

const FirebaseAuthProvider = props => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = React.useState(true);
  const [user, setUser] = React.useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  React.useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  useEffect(() => {
    // if (firebase.apps.length < 1) {
    //   firebase.initializeApp(firebaseConfig);
    // }

    // loginWithFacebook(firebase)
    // // Listen for authentication state to change.
    // firebase.auth().onAuthStateChanged(user => {
    //   if (user != null) {
    //     console.log('We are authenticated now!');
    //     setUser(user)
    //   }
    // });
  }, [])


  return <AuthContext.Provider children={props.children} value={user} />
}

export default FirebaseAuthProvider

export const useFirebaseAuth = () => useContext(AuthContext)

