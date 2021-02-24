import React from 'react'
import './Login.css'
import { auth, provider } from './firebase';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {login } from './features/userSlice'




function Login() {


    const dispatch = useDispatch()
    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then(({user }) =>{
            dispatch(login({
                displayName : user.displayName,
                email: user.email,
                photoUrl : user.photoURL}) 
                )
        })
        .catch((error) => alert (error.message))
    }
    return (
        <div className ="login">
            <div className="login__container">
            <img src="https://preview.redd.it/s0jqt1kdhou51.jpg?auto=webp&s=39a45360ddb015e360d2adb7a93ff51922359b4f" alt=""/>
            <Button
                    variant="contained" color="primary"
                    onClick={signIn}
                    >Sign In</Button>
            </div>
            
        </div>
    )
}

export default Login
