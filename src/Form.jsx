import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Form = () => {
    const[email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const[allEntry,setAllEntry]= useState([]);
 const submitForm =(e)=>{
     e.preventDefault();
     const newEntry={email: email, password: password};
     setAllEntry([...allEntry,newEntry]);
     console.log(allEntry);
 }

    return (
     <> 
      <div className="my-5"> 
      <div id="m">
      <h1 className="text-center">Login</h1>
      </div>
        <div className="container-fluid">
            <div className="row">
         <div className='col-md-5 col-10 mx-auto'>
         <form action="" onSubmit={submitForm}>
             <div className=" md-4" id="i1">
                 <label htmlFor="email" className="form-label">
                     Email
                </label>
                 <input
                  type="text"
                   className="form-control" 
                   name="email" 
                   id="email" 
                   value={email}
                   onChange={(e) =>setEmail(e.target.value) }
                 />
             </div>
             <div className="md-4" id="i2">
                 <label htmlFor="password" className="form-label">Password</label>
                 <input 
                 type="password"
                  className="form-control" 
                  name="password" 
                  id="password" 
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 />
             </div>
            
            <div class="col-12 my-3">
             <NavLink to="/meet" type="submit" class="btn btn-outline-primary" >Login</NavLink>
             </div>
         </form>
         </div>
         </div>
         </div>
     </div>
     </>
    )
}

export default Form
