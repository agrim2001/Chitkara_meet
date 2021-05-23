import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { FiFacebook} from "@react-icons/all-files/fi/FiFacebook";
import { AiFillTwitterCircle} from "react-icons/ai";
import {FaGooglePlusG} from "react-icons/fa";
import {AiOutlineInstagram} from "react-icons/ai";
import {AiOutlineLinkedin,AiOutlineHome,AiOutlinePhone,AiOutlinePrinter } from "react-icons/ai";
import {CgMail} from "react-icons/cg";

import {NavLink} from "react-router-dom";
function Footer() {
    return (
      <footer className="page-footer bg">
          <div className="bg">
              <div className="container">
                <div className="row d-flex align-items-center ">
                   <div className="col-md-12 text-center ">
                      <a href="https://www.facebook.com/ChitkaraU/" className="fab  text-dark mx-5" id="class1"><FiFacebook/></a> 
                      <a href="https://twitter.com/ChitkaraU?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor" className="fab text-dark mx-5" id="class1" ><AiFillTwitterCircle/></a> 
                      <a href="#" className="fab text-dark mx-5" id="class1" ><FaGooglePlusG/></a> 
                      <a href="https://www.instagram.com/chitkarau/?hl=en" className="fab text-dark mx-5" id="class1"><AiOutlineInstagram/></a> 
                      <a href="https://in.linkedin.com/school/chitkara-university/" className="fab text-dark mx-5" id="class1"><AiOutlineLinkedin/></a> 
                    </div> 
                </div> 
              </div>
          </div>
          
       <div className="container-fluid text-center  mt-2">
         <div className="row">

           <div className="col-md-2  mx-auto mb-4 d-flex justify-content-center flex-column list-group-flush">
              <h5 className="text-uppercase font-weight-bold list-group-item ">MADE BY</h5>
              <ul className="list-unstyled ">
                <li className="my-2 ">Agrim</li>
                <li className="my-2">Shubham</li>
                <li className="my-2">Mandeep</li>
                <li className="my-2">Ananya</li>
                </ul>
           </div>

           <div className="col-md-2 mx-auto mb-4 list-group-flush">
              <h5 className="text-uppercase font-weight-bold list-group-item">Language use in site</h5>
              <ul className="list-unstyled">
                <li className="my-2">Html</li>
                <li className="my-2">Css</li>
                <li className="my-2">JS</li>
                <li className="my-2">React</li>
                </ul>
           </div>

           <div className="col-md-2 mx-auto mb-4 list-group-flush">
              <h5 className="text-uppercase font-weight-bold list-group-item">Usefull links</h5>
              <ul className="list-unstyled">
                <li className="my-2"><NavLink to="/">Home</NavLink></li>
                <li className="my-2"><NavLink to="/Class">Class</NavLink></li>
                <li className="my-2"><NavLink to="/Meet">Meet</NavLink></li>
                <li className="my-2"><NavLink to="/books">Books</NavLink></li>
                </ul>
           </div>
           <div className="col-md-2 mx-auto mb-4 list-group-flush">
              <h5 className="text-uppercase font-weight-bold list-group-item">Contact</h5>
              <ul className="list-unstyled">
                <li className="my-2"><a href="https://www.chitkara.edu.in/"><AiOutlineHome/>CHITKARA</a></li>
                <li className="my-2"><AiOutlinePhone/> +123456789</li>
                <li className="my-2"><CgMail/> +123456789</li>
                <li className="my-2"><AiOutlinePrinter/> +123456789</li>
                </ul>
           </div>
           
         </div>
       </div>

</footer>
    )
}

export default Footer
