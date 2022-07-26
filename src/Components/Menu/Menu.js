import React from "react";
import { renderMatches } from "react-router-dom";
import './menu.css';

export default class Menu extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row" style={{minHeight: '100vh'}}>
                    <div className="col-sm-1 bg-success text-white">
                        <div className="mx-auto pt-5">
                            Dashboard
                        </div>
                        <div className="mx-auto pt-5">
                            Sensor Graphs
                        </div>
                        <div className="mx-auto pt-5">
                            Statistics
                        </div>
                        <div className="mx-auto pt-5">
                            Edit Data
                        </div>
                    </div>
                    <div className="col-sm-11">
                        Info
                    </div>
                </div>
                
            </div>
        )
    }
}