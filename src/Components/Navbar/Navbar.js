import React from "react"
import { Link } from "react-router-dom";
import './navbar.css'

export default class Navbar extends React.Component {
  render(){
    return (
    <div className="navbar p-0">
      <div className="container-fluid color1 shadow-lg">
        <Link to="/" className="textStyle h1 mx-5">Title of the Lab</Link>
        <div className="d-flex">
          <Link to="/farms" className='farms h5 mx-5'>Farms</Link>
        </div>
      </div>
      
    </div>
  )
  }
}
