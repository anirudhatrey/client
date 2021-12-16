import React, { useState } from "react";
import Header from './components/header';
import Login from './components/login';
import Reg from "./components/reg";
import {BrowserRouter as Router,Route ,Switch} from 'react-router-dom';
import Product from "./components/products";
import './App.css';
import './components/login.css';
import useToken from './useToken';
import { ProtectedRoute } from "./protected.route";
import Home from "./components/home";



function App() {
  const { token, setToken } = useToken();
  const [registered,changeReg]=useState(true);

  if(!token) {
    if(registered) {
     return <Login registered={registered} changeReg={changeReg}  setToken={setToken} />}
    return <Reg  setToken={setToken}  registered={registered} changeReg={changeReg}/>}
    
    
  
  return (
    <Router>

  
    <div className="App">
      
      <Switch>
        <Route exact path={"/"}>
        <Home setToken={setToken}/>
        </Route>
        <Route exact path={"/product/:id"}>
        <Header/>
        <Product/>
        </Route>
        <Route  path={"/login"}>
        {registered? <Login registered={registered} changeReg={changeReg} />:<Reg registered={registered} changeReg={changeReg}/>}
        </Route>
      </Switch>
      
     
    </div>

    </Router>
  );
}

export default App;
