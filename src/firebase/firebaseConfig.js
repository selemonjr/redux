import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCXYONPIooCmcPoavhdcl-DXAqzwXo-P58",
  authDomain: "redux-firebase-7b5ce.firebaseapp.com",
  projectId: "redux-firebase-7b5ce",
  storageBucket: "redux-firebase-7b5ce.appspot.com",
  messagingSenderId: "796146857470",
  appId: "1:796146857470:web:c54ef3878394010cc1fcaf"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
