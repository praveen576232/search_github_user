import React from 'react'
import './Login.css'
import firebase from 'firebase'
import { Button } from '@material-ui/core'
import auth from '../Firebase/firebase'
import { useHistory } from 'react-router-dom'
function Login() {
    const history = useHistory()
    const login =()=>{
        const provider =new firebase.auth.GoogleAuthProvider();
auth.signInWithPopup(provider).then(()=>{
    history.push('/')
})
.catch(err =>alert(err.message))
    }
    return (
        <div className="login">
            <img alt="" src="https://image.shutterstock.com/image-illustration/login-icon-sign-on-computer-260nw-520764616.jpg"></img>
             <Button onClick={login} className="login_button" >Login With Google</Button>
        </div>
    )
}

export default Login
