import React from 'react'
import '../styles/marketplace.css'
import Card from '../components/Card'
import Loader from '../components/Loader';
import { useEffect,useState } from 'react';

import { Link } from 'react-router-dom';




const Marketplace = () => {

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
    <div>Marketplace
      
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
        name="
        Pacajai REDD+ Project"
        value="$210"
        sector="Forestry"
        description="
        A REDD Project to Halt Deforestation in Brazil

        In the heart of Brazil, a REDD project has been implemented to prevent deforestation on private parcels of land spanning 135,105 hectares on the brink of the deforestation frontier. This project aims to produce various advantages for the environment, society, and biodiversity.
        
        Key Highlights:
        - The project is designed to protect over 135,000 hectares of land from deforestation, safeguarding the habitat of endangered species and preserving the natural beauty of the region.
        - By stopping deforestation, the project also prevents the release of carbon emissions into the atmosphere, thus mitigating the effects of climate change.
        - The implementation of this project has created job opportunities for the local community and fostered sustainable development in the region.
            "
            
        date="2017"
        location="Altamira"
        verify="true"
        imgUrl="https://media.istockphoto.com/id/1350227028/video/aerial-view-of-foggy-mountains-during-monsoon-in-india.jpg?s=640x640&k=20&c=5OzdInDbrCdEYVI1qqw96__oS95tVq26zR-bUYyNbdM="
      
        
      />
      <Card
        name="Gaia Solar Project"
        value="$450"
        sector="Solar"
        description="From setup, Gaia Solar engaged in changing steadily deteriorating environment, and invested huge capitals on researching one kind of clean and sustainable energy.
        With the noble mission, Gaia Solar has become a famous brand in concentrated solar power industry. Gaia researched on solar receiver tube technology more than ten years ago, and as a strategic partner of CASC, Gaia Solar promoted high quality and traceable solar receiver tube RT-4060. Gaia Solar also successfully researched out parabolic trough solar collectors PT-5760 and PT-2O, which can be used for solar thermal plant and steam generation. 
        
        From setup, Gaia Solar engaged in changing steadily deteriorating environment, and invested huge capitals on researching one kind of clean and sustainable energy.
        With the noble mission, Gaia Solar has become a famous brand in concentrated solar power industry. Gaia researched on solar receiver tube technology more than ten years ago, and as a strategic partner of CASC, Gaia Solar promoted high quality and traceable solar receiver tube RT-4060. Gaia Solar also successfully researched out parabolic trough solar collectors PT-5760 and PT-2O, which can be used for solar thermal plant and steam generation.
        "
        
        date="2018"
        location="Los Angeles"
        imgUrl="https://images.unsplash.com/photo-1536408745983-0f03be6e8a00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2148&q=80"
      />
      <Card
        name="150MW Grid Electric Gujrat"
        value="$590"
        sector="Electric"
        description="Generating Renewable Energy through Wind Power in Gujarat
        This project aims to reduce carbon emissions by generating electrical energy through sustainable and renewable wind power sources in Gujarat, India. By feeding the output back into the local grid, the project contributes to climate change mitigation efforts. "
        date="2020"
        location="Gujrat"
        verify="true"
        imgUrl="https://c1.wallpaperflare.com/preview/901/828/1001/substation-power-plant-electricity-public-power.jpg"
      />
      <Card
        name="Brahma Ganga Hydro"
        value="$160"
        sector="Hydro"
        description="
        Located in the Kullu District of Himachal Pradesh, India, this project involves the implementation and operation of a 5 MW run-of-the-river Hydroelectric project (HEP) on the Brahm Ganga Nallah, a tributary of River Parbati. The aim of the project is to generate clean energy in a sustainable manner by harnessing the hydrological resource of the Nallah.

Key Highlights:
- The project utilizes two 2.5 MW Horizontal axis Francis turbines to generate electricity
- The generated electricity is supplied to the respective State Grid of India
- The project's implementation and operation adhere to strict sustainability standards

This project is important as it promotes the use of clean energy and reduces dependence on thermal-based power generating units. By utilizing the hydrological resource of the Nallah, the project helps to reduce greenhouse gas emissions and mitigates the negative impacts of climate change. Additionally, the project's adherence to sustainability standards ensures that it is environmentally responsible and socially beneficial.
        "
        date="2019"
        location="Himachal Pradesh"
        imgUrl="https://c1.wallpaperflare.com/preview/567/951/752/public-power-holyoke-hydropower-hydro.jpg"
      />
      <Card
        name="NG Kotpetha"
        value="$320"
        sector="Petroleum"
        description="
        Located in the East Godavari district of Andhra Pradesh, India, the Phase-I grid connected 445 MW natural gas-based Combined Cycle Power Plant (CCPP) is a green field project developed by Konaseema Gas Power Ltd, or KGPL, to meet the base load requirement of the southern grid. The project comprises of 2 x 140 MW natural gas-run turbines, two heat recovery steam generators, and a 165 MW steam turbine. By exporting the generated power to the Andhra Pradesh power grid, KGPL has ensured a reduction in greenhouse gas (GHG) emissions that would have been produced from fossil fuels.

Key Highlights:
- The project activity will generate 445 MW of electricity by utilizing natural gas, which is a cleaner and more efficient energy source as compared to coal.
- By exporting the generated power to the Andhra Pradesh power grid, the project will meet the base load requirement of the southern grid, which will reduce the usage of GHGs intensive fossil fuels.
- The Power Purchase Agreement (PPA) signed with State government-owned Andhra Pradesh Transmission Corporation of India Ltd. (APTRANSCO) ensures the export of the generated power to the grid.
- The use of natural gas as an energy source makes the project environmentally friendly, as it emits fewer GHGs as compared to coal.
- The implementation of this project will contribute towards India's goal of reducing carbon emissions by 33-35% by 2030, as stated in the Paris Agreement.
        "
        date="2021"
        location="Andhra Pradesh"
        
        imgUrl="https://i2.wp.com/www.electricalindia.in/wp-content/uploads/2019/04/gasbased-powergeneration.jpg?fit=1199%2C612&ssl=1"
      />
      <Card
        name="
        Rimba Raya Reserve Project"
        value="$170"
        sector="Forestry"
        description="
        The Rimba Raya Biodiversity Reserve Project, a noble initiative by InfiniteEARTH, is committed to preserving Indonesia's tropical peat swamp forest and reducing the country's emissions. This forest spans over 64,000 hectares and is home to a diverse range of flora and fauna, including the endangered Bornean orangutan. The project was proposed to counter the Provincial government's plan of converting this area into four palm oil estates. The project is located on the south coast of Borneo in the province of Central Kalimantan and aims to create a physical buffer zone to protect the adjacent Tanjung Puting National Park, which is a world-renowned park.

        Key Highlights:
        - Preserves over 64,000 hectares of tropical peat swamp forest.
        - Protects the endangered Bornean orangutan and the rich biodiversity of the area.
        - Creates a physical buffer zone to safeguard the integrity of the Tanjung Puting National Park.   
"
        date="2021"
        location="Muara Dua"
        imgUrl="https://images.unsplash.com/photo-1442120108414-42e7ea50d0b5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvcmVzdCUyMGxhbmRzY2FwZXxlbnwwfHwwfHx8MA%3D%3D"
      />
      <Card
        name="
        Song Ong Hydropower"
        value="$450"
        sector="Hydro"
        description="
       
        The Song Ong Hydropower Project is a renewable energy initiative that involves building a hydropower plant with 3 units. The project has an installed capacity of 8.1 MW and is expected to generate 40,500 MWh of gross power annually. The primary objective of the project is to generate and supply renewable electricity to the national grid of Vietnam under a Power Purchase Agreement (PPA) signed with the Electricity Corporation of Vietnam (EVN).

Key Highlights:
- The project generates an estimated 39,994 MWh of net electricity annually.
- A 22 kV line connects the plant with Ninh Son 110/22 kV transformer station, enabling the national grid to access the generated electricity.
- The project involves the construction of a dam, tunnels, a penstock, a pressurized well, a powerhouse and a discharge channel to convert potential flowing energy from the stream into clean electrical energy.

The Song Ong Hydropower Project is an important initiative in meeting Vietnam's commitment to reduce greenhouse gas emissions by 8% by 2030. 
"
        date="2021"
        location="Dalat"
        verify="true"
        imgUrl="https://www.worldbank.org/content/dam/photos/780x439/2020/oct-2/Trung-Son-Hydropower-Project.png"
      />
      <Card
        name="
        Florestal Santa Maria"
        value="$180"
        sector="Forestry"
        description="
        Florestal Santa Maria S/A (FSM) has proposed the FSM-REDD Project to combat deforestation in the Colniza Municipality of Mato Grosso, Brazil, which is a part of the Brazilian Amazon and known as the Deforestation Arch. The FSM-REDD Project aims to avoid the emission of 29,923,331 tCO2 over 30 years within the Fazenda Florestal Santa Maria, which is a private land owned by FSM and covers 71,714 hectares of native forest.

Key Highlights:
- The FSM-REDD Project estimates the avoidance of nearly 30 million tCO2 emissions over 30 years.
- The project is located in the Deforestation Arch, which is a region with high deforestation pressure.
- FSM is committed to local socio-environmental development and has partnered with a neighboring State Park to create fire brigades and technical forestry schools for local youngsters.

The FSM-REDD Project is important because it not only aims to combat deforestation but also promotes socio-environmental development in the local community through various initiatives.
        "
        date="2021"
        location="Colniza"
        verify="true"
        imgUrl="https://i1.rgstatic.net/ii/lab.file/AS%3A603889955000320%401520989993561_xl"
      />
{/* 
{allPosts?.length > 0 ? (
      
          allPosts.map( (post) => (
            <Card
            name="Refined Hill arizona "
            value="$210"
            sector="Petroleum"
            description="From setup, Gaia Solar engaged in changing steadily deteriorating environment, and invested huge capitals on researching one kind of clean and sustainable energy.
            With the noble mission, Gaia Solar has become a famous brand in concentrated solar power industry. Gaia researched on solar receiver tube technology more than ten years ago, and as a strategic partner of CASC, Gaia Solar promoted high quality and traceable solar receiver tube RT-4060. Gaia Solar also successfully researched out parabolic trough solar collectors PT-5760 and PT-2O, which can be used for solar thermal plant and steam generation. "
            
            date="2018"
            location="Los Angeles"
            verify="true"
            // imgUrl="https://images.unsplash.com/photo-1468787737698-f5c03f0570dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3260&q=80"
          
            imgUrl={post.Poster}
            />
          ))
        
      ) : (
       
          <h2>No Posts</h2>
      )}
        */}
     </main>
     </div>
     </div>
    
      
    </div>
  )
}

export default Marketplace