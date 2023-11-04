import React, { useState } from 'react'
import './navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
const Navbar = () => {
    const [menu,setMenu] = useState("Home")
  return (
    <div className='navbar'>
      <div className='nav-logo'>
      <img src={logo} alt=''/>
        <p>Not-Amazon</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("Home")}}>Home{menu==="Home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Men")}}>Men{menu==="Men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Women")}}>Women{menu==="Women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Kids")}}>Kids{menu==="Kids"?<hr/>:<></>}</li>
      </ul>

      <div className='nav-login'>
        <button> LOGIN</button>
        <img src={cart_icon} alt="" />
        <div className='cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar
