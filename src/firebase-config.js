
import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'




const firebaseConfig = {
  apiKey: process.env.REACT_APP_SECRET_KEY,
  authDomain: "my-blog-dbd4c.firebaseapp.com",
  projectId: "my-blog-dbd4c",
  storageBucket: "my-blog-dbd4c.appspot.com",
  messagingSenderId: "679596508817",
  appId: "1:679596508817:web:9687d523d48fa2b535e130",
  measurementId: "G-T1N65R52W1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// 輸出資料庫的database
export const db = getFirestore(app)

// 增加Google登入功能
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

