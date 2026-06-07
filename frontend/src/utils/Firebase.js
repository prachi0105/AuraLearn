import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "learning-management-syst-d45cd.firebaseapp.com",
  projectId: "learning-management-syst-d45cd",
  storageBucket: "learning-management-syst-d45cd.firebasestorage.app",
  messagingSenderId: "240040972528",
  appId: "1:240040972528:web:2f176683bf0a4cb2f93235"
};

// Initialize Firebase

// IMPORTANT: prevent multiple init
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

