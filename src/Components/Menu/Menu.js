import React from "react";
import './menu.css';

export default class Menu extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div class="row mt-4">
                    <div className="col-md-2 shadow-lg">
                        <div className="list-group" id="list-tab" role="tablist">
                            <a className="list-group-item list-group-item-action fw-bolder active" id="list-home-list" data-bs-toggle="list" href="#list-home" role="tab" aria-controls="list-home">
                                <i className="fa-solid fa-map-location-dot"></i>
                                <br/>Dashboard
                            </a>
                            <a className="list-group-item list-group-item-action fw-bolder" id="list-profile-list" data-bs-toggle="list" href="#list-profile" role="tab" aria-controls="list-profile">
                                <i className="fa-solid fa-chart-line"></i>
                                <br/>Sensor Graphs
                            </a>
                            <a className="list-group-item list-group-item-action fw-bolder" id="list-messages-list" data-bs-toggle="list" href="#list-messages" role="tab" aria-controls="list-messages">
                                <i class="fa-solid fa-chart-simple"></i>
                                <br/>Statistics
                            </a>
                            <a className="list-group-item list-group-item-action fw-bolder" id="list-settings-list" data-bs-toggle="list" href="#list-settings" role="tab" aria-controls="list-settings">
                                <i className="fa-solid fa-pen-to-square"></i>
                                <br/>Edit Data
                            </a>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="list-home-list">Dashboard</div>
                        <div className="tab-pane fade" id="list-profile" role="tabpanel" aria-labelledby="list-profile-list">Sensor</div>
                        <div className="tab-pane fade" id="list-messages" role="tabpanel" aria-labelledby="list-messages-list">Statistics</div>
                        <div className="tab-pane fade" id="list-settings" role="tabpanel" aria-labelledby="list-settings-list">Edit</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}