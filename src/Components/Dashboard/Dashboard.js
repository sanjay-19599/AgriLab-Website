import React from "react";
import './dashboard.css'
export default class Dashboard extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="fs-1 fw-bolder border-bottom text-center">Dashboard</div>
                <select className="form-select" aria-label="Default select example">
                    <option selected value="1">Farm 1</option>
                    <option value="2">Farm 2</option>
                    <option value="3">Farm 3</option>
                </select>
                <div className="row mt-3">
                    <div className="col-md-8 text-center border-end fw-bold" style={{minHeight:'70vh'}}>
                        Geo Reference Map
                    </div>
                    <div className="col-md-4 text-center fw-bold">
                        Weather Info
                    </div>
                </div>
            </div>
        )
    }
}