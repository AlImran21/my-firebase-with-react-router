// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBcBrU-kqYh2-aQCZyqTpGlI8Mq3G3wszI",
  authDomain: "fir-auth-with-react-route.firebaseapp.com",
  projectId: "fir-auth-with-react-route",
  storageBucket: "fir-auth-with-react-route.appspot.com",
  messagingSenderId: "161446913108",
  appId: "1:161446913108:web:8047d37325790fd464b9c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;