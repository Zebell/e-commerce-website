import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyBx0ijgdtzSVivZZfHv0rx6K7A8_fYiWmY",
  authDomain: "my-shop-814a3.firebaseapp.com",
  projectId: "my-shop-814a3",
  storageBucket: "my-shop-814a3.appspot.com",
  messagingSenderId: "231316386165",
  appId: "1:231316386165:web:e289b75afb56a7bf09233c",
  measurementId: "G-L2XPLP87ER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const storage = getStorage(app);
export const db = getFirestore(app);

export default app;