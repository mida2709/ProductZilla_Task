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
      <Switch>
        <Route path="/" component={Home}></Route>
        <Route path="/About" component={About}></Route>
        <Route path="/Contact" component={Contact}></Route>
        <Route path="/Services" component={Services}></Route>
      </Switch>
    </div>
  )
}

export default App;