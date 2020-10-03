import './Header.css';
import React from 'react'
import {Avatar} from '@material-ui/core'
import auth from '../Firebase/firebase'
function Header({loginUser}) {
    const logout =() =>{
       auth.signOut();
    }
    return (
        <div className="header">
            <Avatar className="header_avatar" src={loginUser?.photoURL}></Avatar>
            <p className="header_login_user_name">Welcome, <strong> {loginUser?.displayName}</strong></p>
            <p onClick={logout} className="header_logout">Logout</p>
        </div>
    )
}

export default Header
