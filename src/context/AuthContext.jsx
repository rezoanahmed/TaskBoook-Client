import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config"

export const FirebaseContext = createContext(null);
const AuthContext = ({ children }) => {
    const [user,setUser] = useState();
    const [loading,setLoading] = useState();
    const testData = "test";
    // registration
    const register = async (email, password) => {
        setLoading(true);
        const result = await createUserWithEmailAndPassword(auth, email, password);
        return result;

    }
    // login
    const login = async (email, password) => {
        setLoading(true);
        const result = await signInWithEmailAndPassword(auth, email, password);
        return result;
    }
    // logout
    const logout = async () => {
        const result = await signOut(auth);
        return result;
    }
    // google login
    const googleLogin = async () => {
        setLoading(true);
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        return result;
    }

    // managing users

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const provided = {
        testData,
        register,
        login,
        logout,
        googleLogin,
        user,
        loading
    }
    return (
        <FirebaseContext.Provider value={provided}>
            {children}
        </FirebaseContext.Provider>
    )
};

export default AuthContext;