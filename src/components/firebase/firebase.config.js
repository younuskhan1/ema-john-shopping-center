// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDPb21YQpQ0tCMt99BjJ5-WhHIh-XPgzus",
  authDomain: "ema-john-shopping-center.firebaseapp.com",
  projectId: "ema-john-shopping-center",
  storageBucket: "ema-john-shopping-center.appspot.com",
  messagingSenderId: "579874213103",
  appId: "1:579874213103:web:b7510b57d18be0c3055f1a"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;