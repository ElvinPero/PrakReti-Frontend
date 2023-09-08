import React, { useRef, useEffect, useState } from 'react';
import mapboxgl, { LngLat } from 'mapbox-gl';
import '../styles/mapPage.css';
const token="pk.eyJ1IjoiamF5ZXNoMTIzNHhkIiwiYSI6ImNsbWF0aDNsODBkcGkzZXB4YzAyMnNiM2gifQ.Od6tfgdQ6hHXmM6aiE0z6A";
mapboxgl.accessToken =
  'pk.eyJ1IjoiamF5ZXNoMTIzNHhkIiwiYSI6ImNsbWF0aDNsODBkcGkzZXB4YzAyMnNiM2gifQ.Od6tfgdQ6hHXmM6aiE0z6A';




// const location = "London";
const MapPage = ({location}) => {

    
  console.log(location);

  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);
  const [zoom, setZoom] = useState(1.5);

  useEffect(() => {

    const fetchMapUrl= async () => {
     
        try {
         
            const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=${token}`);

            if (response.ok) {
                const result = await response.json();

                const {center}=result.features[1];
                const longi= center[0];
                const lati= center[1];
               
                setLng(longi);
                setLat(lati);
                console.log(lat);
                console.log(lng);
            }
        } catch (e) {
            alert(e)
        } 
    
    }
    fetchMapUrl();
    


    const map =  new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [lng, lat],
        zoom: 5
        });

    
    const marker1 = new mapboxgl.Marker()
    .setLngLat([lng, lat])
    .addTo(map);
    
    
    return () => map.remove();
    
  }, [lng,lat]); 

  return (
    <div>
      <div className='sidebarStyle'>
        {/* <div>
          Longitude: {lng} | Latitude: {lat} | 
        </div> */}
      </div>
      <div className='map-container' ref={mapContainerRef} />
    </div>
  );
};

export default MapPage;