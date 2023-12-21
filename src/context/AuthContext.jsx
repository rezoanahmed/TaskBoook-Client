import { createContext } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase.config"

export const FirebaseContext = createContext(null);
const AuthContext = ({ children }) => {
    const testData = "test";
    // registration
    const register = async (email, password) => {
        const result = await createUserWithEmailAndPassword(auth, email, password);
        return result;

    }
    // login
    const login = async (email, password) => {
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
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        return result;
    }
    const provided = {
        testData,
        register,
        login,
        logout,
        googleLogin,
        

    }
    return (
        <FirebaseContext.Provider value={provided}>
            {children}
        </FirebaseContext.Provider>
    )
};

export default AuthContext;