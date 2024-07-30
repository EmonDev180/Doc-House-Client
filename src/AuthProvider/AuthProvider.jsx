import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../fireBase/firebaseConfic";


import useAxiosPublic from "../hooks/axiosPublic/axiosPublic";


export const AuthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const axiosPublic = useAxiosPublic()


    const createUser = (email,password) => {
        setLoading()
      return  createUserWithEmailAndPassword(auth,email,password)

    }
    const signin = (email,password) => {

        setLoading(false);

        return signInWithEmailAndPassword( auth,email,password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            setUser(currentUser)
            if(currentUser){
                const userInfo = {email:currentUser.email}
                axiosPublic.post('/jwt',userInfo,{withCredentials:true})
                .then(res =>{

                    console.log(res.data)


                    

                })
            }
            
            console.log('currentuser',currentUser);
            setLoading(false)

        })
        return () => {
            return unsubscribe;
        }
    })




    const authInfo = {
        user,
        loading,
        createUser,
        signin,
        logOut,
       updateUserProfile

    }
    
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;