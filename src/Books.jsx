import React from "react"; 
import img1 from "../src/images/1i.jpg";
import img2 from "../src/images/2i.png";
import img3 from "../src/images/3i.jpg";
import img4 from "../src/images/4i.jpg";
import img5 from "../src/images/5i.jpg";
import img6 from "../src/images/6i.jpg";
import Footer from "./Footer";
const Books =() =>{
  return(
    <> 
    <div className="container-fluid text-center ">
      <div className="row">
      <div className="col-md-8 mx-auto d-flex my-5 justify-content-center flex-column " id="p1">
      <div id="carouselExampleControls" class="carousel slide ca" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={img1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img2} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img3} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img4} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img5} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img6} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
       </div >
       
       <div className="col-md-3  mx-auto d-flex my-3 justify-content-center flex-column " id="logo">
         <div className="bl">
         <h2>Newly added books</h2>
       <ul class="list-group list-group-flush">
         <li class="list-group-item">C</li>
         <li class="list-group-item">Java</li>
         <li class="list-group-item">C++</li>
         <li class="list-group-item">Python</li>
         <li class="list-group-item">React</li>
         <li class="list-group-item">Javascript</li>
         <li class="list-group-item">Html</li>
         <li class="list-group-item">Ethical hacking</li>
       </ul>
       </div>
       </div>
    </div>
    </div> 
 <div className="container-fluid mb-5">
    <div className="row">
      <div className="col-10 mx-auto">
         <div className="row gy-4">
            <div className="col-md-4 col-10 mx-auto" id="class1" >
              <div class="card" id="m1">
              <img src={img1} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">C</h5>
               

              </div>
            </div>
           </div>
           <div className="col-md-4 col-10 mx-auto" id="class1">
              <div class="card" id="m2">
              <img src={img2} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Java</h5>
               
               
              </div>
            </div>
           </div>
           <div className="col-md-4 col-10 mx-auto" id="class1">
              <div class="card" id="m3">
              <img src={img3} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Python</h5>
                
                
              </div>
            </div>
           </div>
           <div className="col-md-4 col-10 mx-auto" id="class1">
              <div class="card"  id="m1">
              <img src={img4} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">C ++</h5>
                
               
              </div>
            </div>
           </div>
           <div className="col-md-4 col-10 mx-auto" id="class1">
              <div class="card" id="m2">
              <img src={img5} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">React hook</h5>
                
                
              </div>
            </div>
           </div>
           <div className="col-md-4 col-10 mx-auto" id="class1">
              <div class="card" id="m3">
              <img src={img6} class="card-img-top" alt="..."/>
              <div class="card-body">
                <h5 class="card-title">Full stack Developer</h5>
                
                
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

export default Books;
