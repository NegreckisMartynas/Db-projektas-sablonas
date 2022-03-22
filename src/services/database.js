import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import fs from 'fs';


const firebaseConfig = {
  apiKey: "AIzaSyAylN_d2XBLizl_gYd-yY8wjce_bzuNjpo",
  authDomain: "gr-front-end.firebaseapp.com",
  projectId: "gr-front-end",
  storageBucket: "gr-front-end.appspot.com",
  messagingSenderId: "835713756636",
  appId: "1:835713756636:web:0a92cd60ab404c6b3ff319",
  measurementId: "G-1LF7F97STQ"
};

initializeApp(firebaseConfig)

const db = getFirestore();

export { db as database }


