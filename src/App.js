import Navbar from "./Components/Navbar/Navbar"
import Home from "./Components/Home/Home"
import Farms from "./Components/Farms/Farms"
import Menu from "./Components/Menu/Menu"
import Error from "./Components/Error/error"
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
            <Route path="/farms/menu" element={<Menu />}/>
            <Route path="*" element={<Error />}/>
          </Routes>
      </div>
    )
  }
}

export default App
