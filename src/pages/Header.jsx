import React from 'react'
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link'


const handleClick=()=>{
    console.log("auth")
}
const Header = () => {
  return (
    <nav>
        <div ><Link to="/">
            <span className='logo'>PrakReti
            </span>
            </Link> 
        </div> 
        <div className='links'> 
        <Link to="/marketplace">
        <button class="btn btn-2 hover-filled-slide-right">
            <span> Marketplace</span>
        </button>
        </Link> 


        <Link to="/verify">
        <button class="btn btn-2 hover-filled-slide-right">
            <span> Verify</span>
        </button>    
        </Link> 
        <Link to="/about">
        <button class="btn btn-2 hover-filled-slide-right">
            <span> About Us</span>
        </button></Link> 
        

        
        <button className="btn-hover color-1"onClick={handleClick}>Connect Wallet</button>
        </div> 
    {/* <h1>hay</h1>
        <Link to="/">Home</Link> */}
    </nav>
  )
}

export default Header