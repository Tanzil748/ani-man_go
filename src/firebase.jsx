// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgUpM4BKER2x5v2vp1SFw_OFCAqfhxQjM",
  authDomain: "ani-mango.firebaseapp.com",
  projectId: "ani-mango",
  storageBucket: "ani-mango.appspot.com",
  messagingSenderId: "651972429755",
  appId: "1:651972429755:web:120d74bb80d7c32b6e669e",
  measurementId: "G-VYGSYV6YGN",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
