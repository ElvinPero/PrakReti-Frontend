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
    <div>Login</div>
    <div>Login</div>
    <div>Login</div>
    <div>Login</div>
    <div>Login</div>
    <div className='login-container'>
    <div>
        <button className='login-btn' onClick={handleLogin}>
        Login

        </button>
    </div>
    </div>

    </>
  )
}

export default Login