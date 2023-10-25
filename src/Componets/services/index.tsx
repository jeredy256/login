import { initializeApp } from "firebase/app";
import {getAuth}  from "firebase/auth"



const firebaseConfig = {
  apiKey: "AIzaSyAXL5LFZ5g14LeB3EkjGNbjRzrnELICRrM",
  authDomain: "chico-b7b1f.firebaseapp.com",
  projectId: "chico-b7b1f",
  storageBucket: "chico-b7b1f.appspot.com",
  messagingSenderId: "1029548272121",
  appId: "1:1029548272121:web:2c74a5fc1396dc78727528"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 const auth = getAuth(app)

 export default auth