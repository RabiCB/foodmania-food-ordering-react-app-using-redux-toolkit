import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyAYZQrcodUb-KVNJVVgB2pbSxWAtPf-Who",
    authDomain: "foodmania-cd6fc.firebaseapp.com",
    projectId: "foodmania-cd6fc",
    storageBucket: "foodmania-cd6fc.appspot.com",
    messagingSenderId: "447625079895",
    appId: "1:447625079895:web:7ec30b0240cdad2e3e4712"
  };
  const app=initializeApp(firebaseConfig)
 export const auth=getAuth(app)
 export default app;