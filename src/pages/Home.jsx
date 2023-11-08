import React from 'react'
import About from './About'
import { Link } from 'react-router-dom'
import Card from '../components/Card'
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
                <div className='textsemihead'>
                    The largest selection of digital carbon credits worldwide. 
                </div>
         
           
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
    <div className='home-body3'>
    <div className='canvas'>
          
        <div className='homecard'>
            <div className='step'><span className='stepno'> Step 1</span> Choose a project and quantity</div>
            <div className='step'><span className='stepno'> Step 2</span> Create a profile and get connected</div>
            <div className='step'><span className='stepno'> Step 3</span> Retire instantly, or purchase and hold digital carbon</div>

        </div>
        <div className='midtxt'>
            <div className='txthead'>SELL CARBON<span className='head-span'> ON BLOCKCHAIN </span>
            </div>
            <div className='txtbody'>
           
                <div className='textsemihead '>
                Create your own carbon storefront.
                <br />
                Sell directly to organizations and individuals alike.
                </div>
                <br />
                

Unprecedented transparency across the digital carbon market.
            
            </div>
        </div>


    </div>   
    </div>
    <div className='bgwhite home-body1 '>
        <div className='txt'>
            <div className='txthead'>Buy OR  <span className='head-span'>Retire Carbon</span>
            </div>
            <div className='txtbody'>
            <br />
                <div className='textsemihead'>
                Maximize your positive climate impact
            </div>
            <br />
            Explore hundreds of verified carbon projects.

Retire now, or acquire carbon to retire later - you decide what to do when you take ownership of your carbon assets.
       
           
            </div>
            <div className='goto '>
            <div class="blue-btn">
             <Link to ="/marketplace" className="first-link" href="">
               Browse
             </Link>
                <Link to="/marketplace">
                Marketplace
                </Link>
            </div>
            </div>
        </div>
        <div className='object2'>
            <img width="100%" 
           
            src="https://www.carbonmark.com/_next/image?url=%2Fplant.jpeg&w=1920&q=75"
            alt="" />
        </div>
    </div>


    <div className='home-body2'>
    <div className='object'>

        </div>
        <div className='txt'>
            
            <div className='txthead'>Learn more about PrakReti
            </div>
<br />
<br />
<br />
            <div className='goto '>
            <div class="blue-btn">
             <Link to ="/marketplace" className="first-link" href="">
               Start Your Journey
             </Link>
                <Link to="/marketplace">
                Marketplace
                </Link>
            </div>
            </div>

        </div>
    </div>
   
    
    <About/>
    </div>
    </div>
  )
}

export default Home