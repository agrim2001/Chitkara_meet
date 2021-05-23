import React from "react"; 
import i1 from "../src/images/i1.jpg";
import i2 from "../src/images/i2.jpg";
import i3 from "../src/images/i3.jpg";
import i4 from "../src/images/i4.jpg";
import i5 from "../src/images/i5.jpg";
import i6 from "../src/images/i6.jpg";
import Footer from "./Footer";
const Class =() =>{
  return(
    <>
 <div className="my-5">
    <h1 className="text-center" id='c'>CLASSES</h1>
 </div> 
 <div className="container-fluid mb-5">
    <div className="row">
      <div className="col-10 mx-auto">
         <div className="row gy-4">
            <div className="col-md-4 col-10 mx-auto" id="class1" >
              <div class="card" id="c1">
              <img src={i1} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">AWT</h5>
                <p class="card-text" id="link">Meet link: https/.</p>

              </div>
            </div>
           </div>
           <div className="col-md-4 col-10 mx-auto" id="class1">
              <div class="card" id="c2">
              <img src={i2} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">OS</h5>
                <p class="card-text" id="link">Meet link: https/.</p>
               
              </div>
            </div>
           </div>
           <div className="col-md-4 col-10 mx-auto" id="class1">
              <div class="card" id="c3">
              <img src={i3} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">DELD</h5>
                <p class="card-text" id="link">Meet link: https/.</p>
                
              </div>
            </div>
           </div>
           <div className="col-md-4 col-10 mx-auto" id="class1">
              <div class="card"  id="c1">
              <img src={i4} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">C Language</h5>
                <p class="card-text" id="link">Meet link: https/.</p>
               
              </div>
            </div>
           </div>
           <div className="col-md-4 col-10 mx-auto" id="class1">
              <div class="card" id="c2">
              <img src={i5} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Java</h5>
                <p class="card-text" id="link">Meet link: https/.</p>
                
              </div>
            </div>
           </div>
           <div className="col-md-4 col-10 mx-auto" id="class1">
              <div class="card" id="c3">
              <img src={i6} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Python</h5>
                <p class="card-text" id="link">Meet link: https/.</p>
                
              </div>
            </div>
           </div>
           
         </div>
      </div>
    </div>
 </div>
 <Footer/>
 </> 
  );
};

export default Class;
