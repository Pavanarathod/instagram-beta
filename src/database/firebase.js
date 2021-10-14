import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDwrqzuYbrA4h1b3yaViIo9ZPJUKfvPMrY",
  authDomain: "instagram-beta-19e08.firebaseapp.com",
  projectId: "instagram-beta-19e08",
  storageBucket: "instagram-beta-19e08.appspot.com",
  messagingSenderId: "763432792185",
  appId: "1:763432792185:web:6ce2d909abad743fc8a4a8",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const database = getFirestore(app);
const storage = getStorage();

export { app, database, storage };
