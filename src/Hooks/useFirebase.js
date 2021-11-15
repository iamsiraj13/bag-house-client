import firebaseInit from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory } from "react-router";

firebaseInit();
const useFirebase = () => {

    const [isLoading, setIsLoading] = useState(true)
    const [user, setUser] = useState({})
    const [authError, setAuthError] = useState('')
    const [admin, setAdmin] = useState(false)

    const googProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const googleSignIn = (history, location) => {
        setIsLoading(true)
        signInWithPopup(auth, googProvider)
            .then(result => {
                const user = result.user;
                saveUser(user.email,user.displayName,'PUT')
                const url = location?.state?.from || '/';
                history.push(url)
            })
            .finally(() => setIsLoading(false))
    }




    // sign out user

    const logOut = (history) => {
        signOut(auth)
            .then(() => {
                history.push('/')
                window.location.reload();

            }).catch((error) => {
                // An error happened.
            })
            .finally(() => setIsLoading(false));
    }
   // save user info to database

   const saveUser=(email,displayName,method)=>{
      const user = {email,displayName}
      fetch('http://localhost:5000/user',{
          method:method,
          headers:{
              'content-type':'application/json'
          },
          body:JSON.stringify(user)
      })
   }

   useEffect(()=>{
    fetch(`http://localhost:5000/user/${user.email}`)
    .then(res=>res.json())
    .then(data=>{
        setAdmin(data.admin)
    })
   },[user.email])



    useEffect(() => {

        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            setIsLoading(false)
        });
        return () => unsubscribe
    }, [auth]);

    return {
        admin,
        isLoading,
        setIsLoading,
        googleSignIn,
        logOut,
        user

    }

};

export default useFirebase;