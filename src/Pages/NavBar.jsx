import React from 'react'
import './NavBar.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {BsCart4} from 'react-icons/bs'

const NavBar = () => {
 
   
  
  return (

    <div className='mainNav' > 
    
    <div className="Nav">
       <div >
         <img id="Navlogo" src='https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png'/>
       </div>
       <div>
          <input id='pcs' type="url" placeholder='Deliver to Select Pincode |'  />
          <input id='search' type="text" placeholder='Search medicines/Healthcare Producta @18% Off' />
          <button id='seacrchbutton'>SearchIcon </button>
       </div>

       <div style={{marginTop:"5px", color:"white",float:"right",marginRight:"5px"}}>
          <Link to="/cart" style={{color:"white",textDecoration:"none" ,fontSize:"10px"}}><BsCart4 size={"0.9em"}/>Cart</Link>
         
       </div>
     
    
    </div>
    <div className='Nav2'>
        
         <Link to="/medicens" id="link1" >Order Medicines</Link>
         <Link to="/Health" id="link">Healthcare Products</Link>
         <Link to="/Labtest" id="link">Lab Tests</Link>
         <Link to="/" id='link'>RTPCR</Link>
    </div>
  


    </div>
  )
}

export default NavBar