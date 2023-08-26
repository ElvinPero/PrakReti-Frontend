import React from 'react'
import About from './About'
import { Link } from 'react-router-dom'
import '../styles/home.css'
const Home = () => {
  return (
    
    <div className='home-main'>
    <div>
    <div className='home-body1'>
        <div className='txt'>
            <div className='txthead'>CARBON  TOKENS  FOR  A  <span className='head-span'>GREENER  FUTURE</span>
            </div>
            <div className='txtbody'>
            The largest selection of digital carbon credits worldwide. 
            <br />
            <br />
           
            </div>
            <div className='goto'>
            <div class="blue-btn">
             <Link to ="/marketplace" className="first-link" href="">
               Get Started
             </Link>
                <Link to="/marketplace">
                Learn More
                </Link>
            </div>
            </div>
           
           

        </div>
        <div className='object'>
            <img width="100%" 
            // src="https://i.pinimg.com/originals/f3/7e/bb/f37ebbea1f4318dec775a4d705bd7cca.gif"
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExazJlNGxrbzk5c2ZleGs0a240MTVrMmgzOW9rajV2bXZrdmZsN2tvYyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/VI2UC13hwWin1MIfmi/giphy.gif"
            alt="" />
        </div>
    </div>
    <div className='home-body1'>
    <div className='object'>
           
           </div>
        <div className='txt'>
            <div className='txthead'>FIND AND  <span className='head-span'>CREATE PROJECTS </span>
            </div>
            <div className='txtbody'>
            The largest selection of digital carbon credits worldwide. 
            </div>

        </div>
        
    </div>
    <div className='home-body2'>
    <div className='object'>

        </div>
        <div className='txt'>
            
            <div className='txthead'>Buying and selling tokens made easy
            </div>
            <div className='txtbody'>Buy, sell, and retire digital carbon from any project instantly with zero-commission trading.</div>

        </div>
    </div>
    
    <About/>
    </div>
    </div>
  )
}

export default Home