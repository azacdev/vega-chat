import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDQHpYGuGlrj7JMlUWKONRihXjfuXOUGXE",
  authDomain: "vegachat-b0f80.firebaseapp.com",
  projectId: "vegachat-b0f80",
  storageBucket: "vegachat-b0f80.appspot.com",
  messagingSenderId: "346562855480",
  appId: "1:346562855480:web:88fbe282fd8e3b909e9ccd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)