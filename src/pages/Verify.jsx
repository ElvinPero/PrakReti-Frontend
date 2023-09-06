import React from 'react'
import '../styles/marketplace.css'
import Card from '../components/Card'
import Loader from '../components/Loader';
import { useEffect,useState } from 'react';

import { Link } from 'react-router-dom';
const Verify = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchPosts = async () => {
        setLoading(true);
        try {
            // const title = 'john wick';
            const response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=1bced0e9&s=earth");

            if (response.ok) {
                const result = await response.json();
                setAllPosts(result.Search);
                console.log(allPosts);
                
            }
        } catch (e) {
            alert(e)
        } 
        // finally {
        //     setLoading(false);
        // }

    }
    fetchPosts();
    setTimeout(() => {
      setLoading(false);
    }, 1200);
    
}, []);


  return (
    <div>Verify
      
      {loading && <Loader/> }
      
      
      <div className='panel'>
          
          <div class="blue-btn">
               <Link to ="/login" className="first-link" href="">
                 Create Project
               </Link>
                  <Link to="/login">
                    New Project
                  </Link>
              </div>
          </div>
      <div class="container">
     
        <div className='holder'>
  <main class="grid">

<Card
        name="refined Hill Arizona"
        value="$210"
        sector="Petroleum"
        description="The Inner Mongolia Chao'er Forest Industry IFM Project, implemented by Chao'er Forest Industry"
        date="2018"
        location="Sidney Australia"
        verify="false"
        imgUrl="https://images.unsplash.com/photo-1468787737698-f5c03f0570dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3260&q=80"
      
        
      />
      <Card
        name="Giya Solar"
        value="$45"
        sector="Solar"
        description="From setup, Gaia Solar engaged in changing steadily deteriorating environment, and invested huge capitals on researching one kind of clean and sustainable energy.
        With the noble mission, Gaia Solar has become a famous brand in concentrated solar power industry. Gaia researched on solar receiver tube technology more than ten years ago, and as a strategic partner of CASC, Gaia Solar promoted high quality and traceable solar receiver tube RT-4060. Gaia Solar also successfully researched out parabolic trough solar collectors PT-5760 and PT-2O, which can be used for solar thermal plant and steam generation. "
        date="2018"
        location="Sidney"
        imgUrl="https://images.unsplash.com/photo-1536408745983-0f03be6e8a00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80"
      />
      <Card
        name="hey"
        value="hey"
        sector="hey"
        description="From setup, Gaia Solar engaged in changing steadily deteriorating environment, and invested huge capitals on researching one kind of clean and sustainable energy.
        With the noble mission, Gaia Solar has become a famous brand in concentrated solar power industry. Gaia researched on solar receiver tube technology more than ten years ago, and as a strategic partner of CASC, Gaia Solar promoted high quality and traceable solar receiver tube RT-4060. Gaia Solar also successfully researched out parabolic trough solar collectors PT-5760 and PT-2O, which can be used for solar thermal plant and steam generation. "
        date="2018"
        location="Sidney"
       
        imgUrl="https://images.unsplash.com/photo-1468787737698-f5c03f0570dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3260&q=80"
      />
      <Card
        name="hey"
        value="hey"
        sector="hey"
        description="lorem*daedd awmdwdnwndkawnd "
        date="2018"
        location="Sidney"
        imgUrl="https://images.unsplash.com/photo-1558449028-b53a39d100fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80"
      />
      <Card
        name="hey"
        value="hey"
        sector="hey"
        description="lorem*daedd awmdwdnwndkawnd "
        date="2018"
        location="Sidney"
        imgUrl="https://images.unsplash.com/photo-1468787737698-f5c03f0570dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3260&q=80"
      />

{/* {allPosts?.length > 0 ? (
      
          allPosts.map( (post) => (
          <Card
            name="Refined Hill arizona "
            value="$210"
            sector="Petroleum"
            description="From setup, Gaia Solar engaged in changing steadily deteriorating environment, and invested huge capitals on researching one kind of clean and sustainable energy.
            With the noble mission, Gaia Solar has become a famous brand in concentrated solar power industry. Gaia researched on solar receiver tube technology more than ten years ago, and as a strategic partner of CASC, Gaia Solar promoted high quality and traceable solar receiver tube RT-4060. Gaia Solar also successfully researched out parabolic trough solar collectors PT-5760 and PT-2O, which can be used for solar thermal plant and steam generation. "
            date="2018"
            location="Sidney Australia"
            verify="true"
            // imgUrl="https://images.unsplash.com/photo-1468787737698-f5c03f0570dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3260&q=80"
          
            imgUrl={post.Poster}
            />
          ))
        
      ) : (
       
          <h2>No Posts</h2>
      )} */}
       
     </main>
     </div>
     </div>
    
      
    </div>
  )
}

export default Verify