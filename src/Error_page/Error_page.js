import './Error_page.css';
import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from '@material-ui/core';
function Error_page() {
    const history = useHistory()
    const home =() =>{
        history.push('/')
    }
    return (
        <div className="error_page">
            <img className="error_button"  className="error_img" alt="page not found" src="https://www.pngitem.com/pimgs/m/254-2549834_404-page-not-found-404-not-found-png.png"></img>
            <Button onClick={home} className="error_button" >Back To Home</Button>
        </div>
    )
}

export default Error_page
