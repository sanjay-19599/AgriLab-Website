import React from "react";
import './statistics.css'

export default class Statistics extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="fs-1 fw-bolder border-bottom text-center">Statistics</div>
                <select className="form-select" aria-label="Default select example">
                    <option selected value="1">Farm 1</option>
                    <option value="2">Farm 2</option>
                    <option value="3">Farm 3</option>
                </select>
            </div>
        )
    }
}