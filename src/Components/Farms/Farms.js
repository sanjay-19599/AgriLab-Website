import React from "react"
import { Link } from "react-router-dom";
import farm from './img.jpg'
import './farms.css'
export default class Pricing extends React.Component {
  render(){
    return (
      <div className="container pt-5" style={{minHeight: '93vh'}}>
        <div className="row mx-auto">
          <div className="col-lg-4">
            <div className="shadow-lg">
              <img src={farm} alt="Farm 1" className="mx-auto img-fluid"  />
                <div class="d-grid gap-2">
                  <Link to='/farms/menu' className="btn d-block">Farm 1</Link> 
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="shadow-lg">
                 <img src={farm} alt="Farm 2" className="mx-auto img-fluid"/>
                 <div class="d-grid gap-2">
                 <Link to='/farms/menu' className="btn d-block">Farm 2</Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="shadow-lg">
                <img src={farm} alt="Farm 3" className="mx-auto img-fluid"/>
                <div class="d-grid gap-2">
                  <Link to='/farms/menu' className="btn d-block">Farm 3</Link>
                </div>
              </div>
            </div>
        </div>
      </div>  
    )
  }
}
