import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBPTLEU-nTKJot5B77RqyFE1x8TmRq2WEo",
  authDomain: "notion-clone-17dc8.firebaseapp.com",
  projectId: "notion-clone-17dc8",
  storageBucket: "notion-clone-17dc8.firebasestorage.app",
  messagingSenderId: "75092662824",
  appId: "1:75092662824:web:935d83d3905bf80a1b331d"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };