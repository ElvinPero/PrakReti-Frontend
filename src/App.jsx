
import React from 'react'
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import Header from './pages/Header'
import Home from './pages/Home'
import Marketplace from './pages/Marketplace'
import About from './pages/About'
import Verify from './pages/Verify'
import Login from './pages/Login'
import Create from './pages/Create'
import ScrollToTop from './components/ScrollToTop'

import CardDetail from './components/CardDetail'
import './styles/header.css'

const App =()=> {


  return (
    <>
    <Header/>
    {/* <Router> */}
    <ScrollToTop>
      <Routes>

        <Route path="/" element={<Home/>}/> 
        <Route path="/marketplace" element={<Marketplace/>}/> 
        <Route path="/about" element={<About/>}/> 
        <Route path="/verify" element={<Verify/>}/> 
        <Route path="/marketplace/:id" element={<CardDetail/>}/> 
        <Route path="/login" element={<Login/>}/> 
        <Route path="/create" element={<Create/>}/> 
        <Route path="*" element={<Home/>}/> 
    
      </Routes>
      </ScrollToTop>
    {/* </Router> */}

    </>
  )
}

export default App
