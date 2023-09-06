import React from 'react'
import '../styles/card.css'
import { Link } from 'react-router-dom'


const Card = ({name,value,sector,date,location,description,imgUrl,verify}) => {
    const des= description.substring(0,100);
    // const des= description.split('.')[0];
    
    const cardData={
        name,
        value,
        sector,
        date,
        location,
        description,
        imgUrl,
        verify
       
    };
    return (
    
    <Link to={`/marketplace/${name}`} state={cardData} style = {{textDecoration:"none",color:"black"}}>
    <div className="img-card iCard-style2">
    
    
                        <div className="card-content">
                            <div className="card-image">
                            {verify=="true" &&
                            <span className="card-caption">
                                   
                                  
                                      <i >
                                      Verified 
                                      &#10004;
                                      </i>
                                      </span>
                            }
                                         
                                <img src={imgUrl}/>
                            </div>
                            <div className='card-head'>
                            <span className="card-title">{name}</span>
                            <span className="card-value">{value}</span>
                            </div>
                            <div className="card-text">
                                <p className='desc'>
                                  
                                        {des + " ..."}
                               
                                </p>
                            </div>
                            
                        </div>
                        
                        <div className="card-link">
                            <span className='card-date'>{date}</span>
                            <span className='card-location'>{location}</span>
                            <span className='card-sector'>{sector}</span>
                        
                        </div>
                    </div>      

                    </Link>

  )
}

export default Card