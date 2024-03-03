import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase/firebase.config"




export const AuthContext = createContext(null);




const Authentication = ({ children }) => {



    const [User, setUser] = useState(null);



    const [isLoading, setIsLoading] = useState(true)



    const CreateAccount = (email, password) => {

        setIsLoading(true)

        return createUserWithEmailAndPassword(auth, email, password);

    }




    const GoogleLogin = () => {

        const GGLProvider = new GoogleAuthProvider

        return signInWithPopup(auth, GGLProvider)

    }




    const LoginAccount = (email, password) => {

        setIsLoading(true)

        return signInWithEmailAndPassword(auth, email, password);

    }




    const LogOutAccount = () => {

        setIsLoading(true)

        return signOut(auth);

    }




    const updatingProfile = (res, name, pic) => {

        return updateProfile(res.user, {

            displayName: name,

            photoURL: pic

        })
    }




    useEffect(() => {

        const unSubscribe = onAuthStateChanged(auth, userAccount => {

            setUser(userAccount)

            setIsLoading(false)

        });

        return () => {

            unSubscribe()

        }

    }, [])





    const AuthMethods = {

        User,

        isLoading,
        
        CreateAccount,
        
        GoogleLogin,
        
        LoginAccount,
        
        LogOutAccount,
        
        updatingProfile
    
    }





    return (

        <AuthContext.Provider value={AuthMethods}>
        
            {children}
        
        </AuthContext.Provider>

    );
};

export default Authentication;