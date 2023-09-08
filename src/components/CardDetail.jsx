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
   <div class="prod-container">


    <div class="backimage">
        <img class="imagi" src={imgUrl} alt="Forest" />
        <div class="imgPosition">
        <div onClick={goBack} class="back-button">
            <span>&#60; Previous</span>
        </div>
        <div class="prod-imag">

            <div class="prod-name">
                {name}
            </div>
            <div class="secondary-line">
              
                    <span  class="prod-date">
                        {date}
                    </span>
               
                    <span class="prod-sector">
                        {sector}
                    </span>
                    <span class="prod-location">
                        {location}
                    </span>
                </div>
            </div>
        </div>
    </div>


    <div class="prod-detail">
        <div class="prod-price">
            {value}
        </div>
        <div class="abc">
            <div class="prod-map">
                <img src="GoogleMapTA.jpg.webp" alt=""/>
            </div>
            <div class="prod-descrip">
                {description}
            </div>
        </div>
    </div>
    </div>

    

   </>
    )
}

export default CardDetail