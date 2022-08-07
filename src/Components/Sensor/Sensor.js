import React from "react";
import './sensor.css'

export default class Sensor extends React.Component{
    render(){
        return(
            <div className="container-fluid">
               <div className="fs-1 fw-bolder border-bottom text-center">Sensor Graph</div>
               <select className="form-select" aria-label="Default select example">
                    <option selected value="1">Farm 1</option>
                    <option value="2">Farm 2</option>
                    <option value="3">Farm 3</option>
                </select>
            </div>
        )
    }
}