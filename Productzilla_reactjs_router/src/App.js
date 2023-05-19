import React from "react";
import Navbar from './Components/Navbar';
import {Switch,Route} from 'react-router-dom';
import Home from './Components/Home';
import About from "./Components/About";
import Contact from "./Components/Contact"; 
import Services from "./Components/Services";



const App = () => {
  return (
    <div>
      <Navbar />
      <switch>
        <Route path="/" Component={Home}></Route>
        <Route path="/About" Component={About}></Route>
        <Route path="/Contact" Component={Contact}></Route>
        <Route path="/Services" Component={Services}></Route>
      </switch>
    </div>
  )
}

export default App;