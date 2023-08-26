
import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Header from './pages/Header'
import Home from './pages/Home'
import Marketplace from './pages/Marketplace'
import About from './pages/About'
import Verified from './pages/Verified'
import './styles/header.css'

const App =()=> {


  return (
    <>
    <Header/>
    {/* <Router> */}
      <Routes>

        <Route path="/" element={<Home/>}/> 
        <Route path="/marketplace" element={<Marketplace/>}/> 
        <Route path="/about" element={<About/>}/> 
        <Route path="/verified" element={<Verified/>}/> 
        <Route path="*" element={<Home/>}/> 
    
      </Routes>
    {/* </Router> */}

    </>
  )
}

export default App
