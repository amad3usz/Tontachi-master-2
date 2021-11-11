import React from "react";
import './App.css';
import {Switch, Route } from 'react-router-dom';
import Home from "./Pages/Home";
import Market from "./Pages/Marketplace";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar"
import "./Components/Navbar.css"





const App = () => {
  return (
    <>
   <Switch>
     <Route exact path="/" component={Home}/>
     <Route exact path="/Market" component={Market}/>
   </Switch>
   </>
  );
};

export default App;
