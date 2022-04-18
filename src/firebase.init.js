// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCQ146SkGae44vZkk_g38EtvczrGgXtYwI",
    authDomain: "assignment10-a61c4.firebaseapp.com",
    projectId: "assignment10-a61c4",
    storageBucket: "assignment10-a61c4.appspot.com",
    messagingSenderId: "552010993213",
    appId: "1:552010993213:web:215094573723a0f6ea6454"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;