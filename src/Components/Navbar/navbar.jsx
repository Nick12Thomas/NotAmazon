import React, { useState } from 'react'
import './navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
const Navbar = () => {
    const [menu,setMenu] = useState("Home")
  return (
    <div className='navbar'>
      <div className='nav-logo'>
      <Link to={'/'}><img src={logo} alt=''/> </Link>
        <p>Not-Amazon</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("Home")}}><Link style={{textDecoration:'none'}} to={'/'}>Home</Link>{menu==="Home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Men")}}><Link style={{textDecoration:'none'}}to={'/men'}>Men</Link>{menu==="Men"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Women")}}><Link style={{textDecoration:'none'}}to={'/women'}>Women</Link>{menu==="Women"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration:'none'}}to={'/kids'}>Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>
      </ul>

      <div className='nav-login'>
        <button> <Link style={{textDecoration:'none'}}to={'/login'}>LOGIN</Link></button>
        <Link to={'/cart'}>
        <img src={cart_icon} alt=""/>
        </Link>    
        <div className='cart-count'>0</div>
      </div>
    </div>
  )
}

export default Navbar



