import React, { useEffect } from 'react'
import '../styles/cardDetail.css'
import { useLocation, useNavigate } from 'react-router-dom'

import { Navigate } from 'react-router-dom';


const CardDetail = () => {
    const current = useLocation();
    const propsData = current.state;
    console.log(propsData);
    const {name,value,sector,date,location,description,imgUrl,verify}= propsData;
    const navigate= useNavigate();
    const goBack=()=>{
        navigate(-1);
    }
    
  return (
    <>
   <div>hey</div>
  


    <div className="prod-container">
        <div class ="backimage">
        <div className='back-button'>

            <button onClick={goBack} >
                Back
            </button>
        <i class="fa fa-arrow-left"></i>
        </div>
        
        <div className="prod-imag">
            <div class="prod-name">
                {name}
            </div>
            <div className="secondary-line">
                <span className="prod-date">
                  {date}
                </span>
                <span className="prod-sector">
                    {sector}
                </span>
                <span className="prod-location">
                 {location}
                </span>
            </div>
        </div>
        <div className="prod-detail">
            <div className="prod-price">
                {value}
            </div>
            <div className="abc" >
               <div className="map"> 
   
                </div>
               <div className="prod-descrip">
                {description}
               </div>
           </div>
        </div>
    </div>
    </div>
    
   </>
    )
}

export default CardDetail