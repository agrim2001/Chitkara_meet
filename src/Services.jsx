import React from "react";
import "./services.css";
import icon1 from "../src/images/icon 1.png";
import icon2 from "../src/images/icon2.png";
import icon3 from "../src/images/icon3.jpg";
import {NavLink} from "react-router-dom";
 
const  Services =() =>{
  return(
      <>
<div className="my-5" id="head">
    <h1 className="text-center">Services</h1>
 </div> 
<div className="container ">
<NavLink to="/meet">
  <div class="card" id="card1">
    <div class="imgBx">
      <img src={icon1}/>
    </div>
    <div class="content">
      <h2>MEET</h2>
      <p> we provide the best experince of online education</p>
    </div>
  </div>
 </NavLink> 
 <NavLink to="/class" id ="card2">
  <div class="card">
    <div class="imgBx">
      <img src={icon2}/>
    </div>
    <div class="content">
      <h2>CLASSES</h2>
      <p> we provide the best experince of study</p>
    </div>
  </div>
  </NavLink>
  <NavLink to="/books" id="card3">
  <div class="card">
    <div class="imgBx">
      <img src={icon3}/>
    </div>
    <div class="content">
      <h2>Books</h2>
      <p> we provide the best experince of online education</p>
    </div>
  </div>
  </NavLink>

 </div>

</>
  );
};

export default Services;
