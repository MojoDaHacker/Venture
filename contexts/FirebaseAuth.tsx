import React, { useState, useEffect, useContext } from 'react'
import { loginWithFacebook } from '../firebase/loginWithFacebook';
import fakeData from '../testData.json'
import firebase from 'firebase/app';

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

  return <AuthContext.Provider children={props.children} value={user} />
}

export default FirebaseAuthProvider

export const useFirebaseAuth = () => useContext(AuthContext)

