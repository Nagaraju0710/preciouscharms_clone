import React from "react";
import  { useState } from 'react';

import { styled } from 'styled-components';


export const  Address =()=>{


    return (
        <DIV>
     
        <div  className="background-image" style={{ backgroundImage: `url("https://rare-gallery.com/uploads/posts/585771-black-and-white.jpg")`,
                 backgroundRepeat:"no-repeat",
                 backgroundSize:"cover",
                 height:"800px",
                  border:"1px solid black",
              }}>
           <div className="address-form">
             <h2>Shipping Address</h2>
             <form>
            
             
               <div className="form-group">
                 <label htmlFor="name">Full Name</label>
                 <input type="text" id="name" required />
               </div>
               <div className="form-group">
                 <label htmlFor="address">Mobile number</label>
                 <input type="text" id="address" required />
               </div>
               <div className="form-group">
                 <label htmlFor="city">Pincode</label>
                 <input type="text" id="city" required />
               </div>
               <div className="form-group">
                 <label htmlFor="zip">Flat, House no., Building, Company, Apartment</label>
                 <input type="text" id="zip" required />
               </div>
               <div className="form-group">
                 <label htmlFor="country">Area, Street, Sector, Village</label>
                 <input type="text" id="country" required />
               </div>
               <div className="form-group">
                 <label htmlFor="country">Town/City</label>
                 <input type="text" id="country" required />
               </div>
               <button type="submit">Proceed to Payment</button>
             </form>
           </div>
         </div>
         </DIV>
    )
}

const DIV=styled.div`

  
  

  .background-image {
  height: 1000px;
  margin-bottom: 1px;
  }


.address-form {
  padding: 20px;
  padding-right: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  width: 500px;
 
  margin: auto;
  margin-top: 100px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight:bold
}

.form-group {
  margin-bottom: 15px;
  width: 470px;
}

label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
}

input[type="text"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  display: block;
  width: 100%;
  padding: 12px;
  background-color: #000;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button:hover {
  background-color: #444;
}



`
