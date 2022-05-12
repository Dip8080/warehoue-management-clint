// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbiEhQH56mFYCHwftvTJuZeXwFsttwlD0",
  authDomain: "fruit-warehouse-e6b01.firebaseapp.com",
  projectId: "fruit-warehouse-e6b01",
  storageBucket: "fruit-warehouse-e6b01.appspot.com",
  messagingSenderId: "261254422594",
  appId: "1:261254422594:web:c956df3dbaba839447cddb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;