import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


import {
  getAuth,
} from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDC1ACxvF82t7Ep3SQ4V6Kce43Uh0ZNCuk",
  authDomain: "clancers-inc.firebaseapp.com",
  projectId: "clancers-inc",
  storageBucket: "clancers-inc.appspot.com",
  messagingSenderId: "1003879772078",
  appId: "1:1003879772078:web:59c2744407fd0c947f623f"
};

const app = initializeApp(firebaseConfig);
const authweb = getAuth(app);
const db = getFirestore();

export { db, authweb };

