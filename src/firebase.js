import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBKDEoU_bDq7OybFf3ZLdwPYcbs9OnW4z8",
  authDomain: "react-ecommerce-ee73d.firebaseapp.com",
  projectId: "react-ecommerce-ee73d",
  storageBucket: "react-ecommerce-ee73d.appspot.com",
  messagingSenderId: "345872332228",
  appId: "1:345872332228:web:144b0ebd7985248f082091"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//export default
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
