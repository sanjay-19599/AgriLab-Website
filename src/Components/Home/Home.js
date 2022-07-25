import React from 'react';
import './home.css'
import corn from './cornplant.jpg'
export default class Home extends React.Component{
    render(){
        return(
            <div>
                <img src={corn} className="img-fluid bgimg"/>
            </div>
        )
    }
}