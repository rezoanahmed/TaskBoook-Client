
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
const firebaseConfig = {
    apiKey: import.meta.env.VITE_api,
    authDomain: import.meta.env.VITE_domain,
    projectId: import.meta.env.VITE_project,
    storageBucket: import.meta.env.VITE_storage,
    messagingSenderId: import.meta.env.VITE_sender,
    appId: import.meta.env.VITE_app
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);