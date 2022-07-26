import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import Farms from "./Components/Farms/Farms"
import Menu from "./Components/Menu/Menu"
import { Route, Routes } from "react-router-dom"
import './App.css';
import React from 'react';

class App extends React.Component{
  render(){
    return (
      <div className="App">
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/farms" element={<Farms />} />
            <Route path="/farm-menu" element={<Menu />}/>
          </Routes>
      </div>
    )
  }
}

export default App
