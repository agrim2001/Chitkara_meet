import React from "react"; 
import web from "../src/images/img1.png";
import {NavLink} from "react-router-dom";
import Form from "../src/Form";
import Services from "./Services";
import Footer from "./Footer";

const Home =() =>{

  return(
    <>
  <section id="header" className="d-flex align-items-center ">
   <div className="container-fluild">
     <div className='row'>
         <div className="col-10 mx-auto">
           <div className="row">
             <div className ="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
               <h1 id="p1">CHITKARA~MEET</h1>
               <h2 className="my-3" id="p1">
                We make the study easy in pandemic sitution.
               </h2>
                <div className="my-3"id="btn">
                    <NavLink to="./form" className="btn-get-started" >
                      get started
                      </NavLink>
                </div>  

                </div>
                 <div className="col-lg-5 order-2 order-lg-2 header-img" id="logo">
                    <img src={web} className="img-fluid animated " alt="logo" />
                 </div> 
                </div>
            </div>  
      </div>
    </div>
   
</section>
<Services/>

<div className="container-fluid">
  <div className="parallex">
    <div className="row">
  
     </div>
    </div>
</div>


<Form/>
<div className="container-fluid">
  <div className="parallax2 text-center">
 
  </div>
</div>

<Footer/>

           
     
</>
  );
};

export default Home;
