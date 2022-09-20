import auth from "@react-native-firebase/auth";

export default async (params: type) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log("User account created & signed in!");
    })
    .catch((err) => {
      if (err.code === "auth/email-already-in-use") {
        console.log("That email address is already in use!");
      }

      if (err.code === "auth/invalid-email") {
        console.log("That email address is invalid!");
      }

      console.error(err);
    });
};
