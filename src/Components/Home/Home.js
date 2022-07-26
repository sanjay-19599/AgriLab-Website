import React from 'react';
import './home.css'
import corn from './cornplant.jpg'
export default class Home extends React.Component{
    render(){
        return(
            <div style={{backgroundImage:`url(${corn})`, 
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat', 
            height:'93vh', 
            width:'100vw'
            }}>
                <div className='container welcome fw-bolder'>
                    Welcome to the Lab
                </div>
            </div>
        )
    }
}