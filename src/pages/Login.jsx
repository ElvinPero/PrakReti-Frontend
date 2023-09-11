import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import '../styles/login.css'

const Login = () => {
    const navigate = useNavigate();
const handleLogin=()=>{
 
    navigate("/create");
}
  return (
    <>
  
    <div className='login-container'>
   
    <div className="loginBack">
    <div className='backsheet'>
    
    <form className='loginForm'>
        <h3>Login</h3>

        <label className="loginLabel"for="username">Username</label>
        <input className="loginInput"type="text" placeholder="Email or Phone" id="username"/>

        <label className="loginLabel"for="password">Password</label>
        <input className="loginInput"type="password" placeholder="Password" id="password"/>

        <button className="loginButton"onClick={handleLogin}>Log In</button>
       
    </form>
    </div>




      
    </div>
    </div>

    </>
  )
}

export default Login