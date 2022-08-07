import React from "react";
import Dashboard from "../Dashboard/Dashboard";
import Sensor from "../Sensor/Sensor";
import Statistics from "../Statistics/Statistics";
import Edit from "../Edit/Edit";
import Login from "../Login/Login";
import './menu.css';

export default class Menu extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div class="row mt-4 m-1">
                    <div className="col-md-2 border-end">
                        <div className="list-group" id="list-tab" role="tablist">
                            <a className="list-group-item list-group-item-action fw-bolder active" id="list-dashboard-list" data-bs-toggle="list" href="#list-dashboard" role="tab" aria-controls="list-dashboard">
                                <i className="fa-solid fa-map-location-dot"></i>
                                <br/>Dashboard
                            </a>
                            <a className="list-group-item list-group-item-action fw-bolder" id="list-sensor-list" data-bs-toggle="list" href="#list-sensor" role="tab" aria-controls="list-sensor">
                                <i className="fa-solid fa-chart-line"></i>
                                <br/>Sensor Graphs
                            </a>
                            <a className="list-group-item list-group-item-action fw-bolder" id="list-statistics-list" data-bs-toggle="list" href="#list-statistics" role="tab" aria-controls="list-statistics">
                                <i class="fa-solid fa-chart-simple"></i>
                                <br/>Statistics
                            </a>
                            <a className="list-group-item list-group-item-action fw-bolder" id="list-edit-list" data-bs-toggle="list" href="#list-edit" role="tab" aria-controls="list-edit">
                                <i className="fa-solid fa-pen-to-square"></i>
                                <br/>Edit Data
                            </a>
                            <a className="list-group-item list-group-item-action fw-bolder" id="list-login-list" data-bs-toggle="list" href="#list-login" role="tab" aria-controls="list-login">
                                <i className="fa-solid fa-user"></i>
                                <br/>Login
                            </a>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="list-dashboard" role="tabpanel" aria-labelledby="list-dashboard-list"><Dashboard/></div>
                        <div className="tab-pane fade" id="list-sensor" role="tabpanel" aria-labelledby="list-sensor-list"><Sensor/></div>
                        <div className="tab-pane fade" id="list-statistics" role="tabpanel" aria-labelledby="list-statistics-list"><Statistics/></div>
                        <div className="tab-pane fade" id="list-edit" role="tabpanel" aria-labelledby="list-edit-list"><Edit/></div>
                        <div className="tab-pane fade" id="list-login" role="tabpanel" aria-labelledby="list-login-list"><Login/></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}