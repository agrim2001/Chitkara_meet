import React from "react"; 
import img1 from "../src/images/iimg1.jpg";
import img2 from "../src/images/img2.jpg";
import img3 from "../src/images/img6.png";
import { FiVideo } from "react-icons/fi";
import Datetime from "./Datetime";
import Footer from "./Footer";
const Meet =() =>{
  return(
    <>
  <section id="header" className="d-flex align-items-center">
    <div className="container-fluild">
      <div className='row'>
          <div className="col-10 mx-auto my-5">
            <div className="row">
              <div className ="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                <h1 id="p1">CHITKARA~MEET</h1>
                <h2 className="my-3" id="p1">
                 Premium video meeting Now free for everyone 
                </h2>
                 <div className="my-4 row g-2" id="btn">
                   <div className="col-auto">
                 <button  type="button"  class="btn btn-success"><FiVideo/> New meeting</button>
                 </div>
                 <div className="col-auto">
                 <input type="link" class=" form-control"  placeholder="Enter a code or link"></input>
                 </div>
                 <div className="col-auto">
                 <button  type="button" class="btn">Join</button>
                 </div>
                 </div>
 
                 </div>
                    <div className="col-lg-5 order-2 order-lg-2 header-img my-3" id="logo">
                    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                         <div class="carousel-inner">
                           <div class="carousel-item active " data-bs-interval="10000">
                             <img src={img1} class="d-block w-100 h-100" alt="..."/>
                           </div>
                           <div class="carousel-item" data-bs-interval="2000">
                             <img src={img2} class="d-block w-100" alt="..."/>
                           </div>
                           <div class="carousel-item">
                             <img src={img3} class="d-block w-100" alt="..."/>
                           </div>
                        
                         </div>
                         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                           <span class="visually-hidden">Previous</span>
                         </button>
                         <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                           <span class="carousel-control-next-icon" aria-hidden="true"></span>
                           <span class="visually-hidden">Next</span>
                         </button>
                      </div>
                    </div> 
                 </div>
             </div>  
       </div>
     </div>
    
 </section>
 <div className="text-center">
   <Datetime/>
</div>
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
<Footer/>
</>
  );
};

export default Meet;
