import * as Facebook from 'expo-facebook'

export async function loginWithFacebook(firebase) {
  await Facebook.initializeAsync({appId: '3904798486263112', appName: 'Venture'});

  const { type, token } = await Facebook.logInWithReadPermissionsAsync({
    permissions: ['public_profile'],
  });
  if (type === 'success') {
    // Build Firebase credential with the Facebook access token.
    const credential = firebase.auth.FacebookAuthProvider.credential(token);

    // Sign in with credential from the Facebook user.
    firebase
    .auth()
    .signInWithCredential(credential)
    .catch(error => {
      console.log(error)
    });
  }
}

