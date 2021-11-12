import firebaseInit from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

firebaseInit();
const useFirebase = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState({})

    const googProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignIn = (history, location) => {
        setIsLoading(true)
        signInWithPopup(auth, googProvider)
            .then(result => {
                const url = location?.state?.from || '/';
                history.push(url)
            })
            .finally(()=> setIsLoading(false))
    }



    // sign out user

    const logOut = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false));
    }

    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribe
    }, [auth]);


    return {
        googleSignIn,
        logOut,
        user
    }

};

export default useFirebase;