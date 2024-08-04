// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCu4DCLlljaUc_m8fCp4f4sZx8Dr7BFswM",
  authDomain: "inventory-app-management-5e09e.firebaseapp.com",
  projectId: "inventory-app-management-5e09e",
  storageBucket: "inventory-app-management-5e09e.appspot.com",
  messagingSenderId: "827010542203",
  appId: "1:827010542203:web:e0b8527ca87e2c99e1d0de",
  measurementId: "G-Q8J36LCWS1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export { firestore };