import React from "react"; 
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Switch,Route, Redirect } from "react-router";
import Home from "./Home";
import Books from "./Books";
import Meet from "./Meet";
import Class from "./Class";
import Navbar from "./Navbar";
import Form from "./Form";

const App =() =>{
  return(
    <>
    <Navbar/>
    <Switch>
      <Route exact  path="/" component={Home}/>
      <Route exact path="/Meet" component={Meet}/>
      <Route exact path="/class" component={Class}/>
      <Route exact path="/books" component={Books}/>
      <Route exact path="/form" component={Form}/>
      <Redirect path="/"/>
     </Switch>
   
     </>
  );
};

export default App;
