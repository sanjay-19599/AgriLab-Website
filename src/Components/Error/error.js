import React from "react";
import './error.css'
export default class Error extends React.Component{
    render(){
        return(
            <div className="container text-center fs-1 fw-bold pt-5 mt-5" style={{minHeight:'93vh'}}>
                Error 404 <br/>
                Page Not Found <br/>
                <a href='/' className="home">Go to Home</a>
            </div>
        )
    }
}