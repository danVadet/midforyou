import { GoogleMap, Marker, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import styles from './Map.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MarkerModel } from '../models/MarkerModel';
import { PortMarker } from '../models/PortMarker';





const Map =() => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDKhBBIdo-9CFMlcObXeRstXDO8712dPqQ"

  })

  const [markers, setMarkers] = useState<MarkerModel[]>([]);
  const [marker, setMarker] = useState<MarkerModel>({
    id: 0,
    label: "",
    lat: 0,
    lng: 0
  });
  
 const [portsMarker, setPortsMarker] = useState<PortMarker[]>([]);

 

  

  const getMarkers = async () => {
    try {
        const response = await axios.get(`http://localhost:5077/markers/state`);
        console.log(response.data);
        setMarkers(response.data);
    } catch (error) {
        console.log(error);
    }

 }
 const getMarkersPort = async () => {
  try {
      const response = await axios.get(`http://localhost:5077/markers/port`);
      console.log(response.data);
      setPortsMarker(response.data);
  } catch (error) {
      console.log(error);
  }

}

 const handleChangeSelectMarker = async  (e: React.ChangeEvent<HTMLSelectElement>) => {
  try {
  const value =  e.target.value;
  const response = await axios.get(`http://localhost:5077/markers/state/${value}`);
      console.log(response.data);
      setMarker(response.data);
  } catch (error) {
      console.log(error);
  }
}
 useEffect(() => {
  getMarkers();
  getMarkersPort();
}, []);






    return <div className={`${styles.map}`}>


      <h1>Portos do Brasil</h1>

      <select  onChange={(e) => handleChangeSelectMarker(e)} >
        <option>Seleciona o estado...</option>
        {markers.map((marker, index) => (
                   <option value={marker.id} key={index}>{marker.label}</option>
                ))}
      
            </select>

{isLoaded ? (
      <GoogleMap
        mapContainerStyle={{width: '90vw',
          height: '90vh', borderRadius: '10px', margin: '10px 50px'}}
        center={{lat: marker?.lat || -3.745 ,
          lng: marker.lng || -38.523}}
        zoom={10}
       
      >
       { /* Child components, such as markers, info windows, etc. */ 



         
         
         
         portsMarker.map((portMarker, index) =>(
    
         <div>
            <MarkerF key={index}  position={{lat: portMarker.lat, lng:  portMarker.lng}} options={{
            label: {
              text: portMarker.label
            },
          
            
          }}/>
         </div>
  
         
          
         

         ) )
        }

        <>
        
        
        </>
      </GoogleMap>
  ) : <></> }

   <h1>{marker.label}</h1>
  
  
   {portsMarker.map((portsMarker, index) =>(
   <div key={index}>
     {marker.id === portsMarker.markerId && portsMarker.portType === "SEA" ?  <>
      <div className={`${styles.infoPorts}`}>
      <svg width="75px" height="75px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#097a7c" fill-rule="evenodd" d="M9 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2h3a1 1 0 0 1 .981 1.192l-.437 2.238-1.327-.295-5-1.111a1 1 0 0 0-.434 0l-5 1.11-1.327.296-.437-2.238A1 1 0 0 1 6 5h3V3zm-6.092 7.996-.125.028a1 1 0 0 0-.677 1.423l2 4a1 1 0 0 0 1.035.543L12 16.01l6.859.98a1 1 0 0 0 1.035-.543l2-4a1 1 0 0 0-.677-1.423l-.125-.028a1 1 0 0 1-.309-.02l-4-.889L12 9.024l-4.783 1.063-4 .89a1 1 0 0 1-.309.019zm6.36 7.609a3.631 3.631 0 0 1 5.465 0l.035.04a1.57 1.57 0 0 0 2.053.273 3.57 3.57 0 0 1 3.305-.344l1.245.497a1 1 0 0 1-.742 1.857l-1.245-.498a1.57 1.57 0 0 0-1.454.152 3.57 3.57 0 0 1-4.667-.62l-.035-.04a1.631 1.631 0 0 0-2.456 0l-.035.04a3.57 3.57 0 0 1-4.667.62 1.57 1.57 0 0 0-1.454-.152l-1.245.498a1 1 0 1 1-.742-1.857l1.245-.497a3.57 3.57 0 0 1 3.305.344 1.57 1.57 0 0 0 2.053-.273l.035-.04z" clip-rule="evenodd"></path></g></svg>
     <h1>{portsMarker.label}</h1>
     

      </div>

    
     
     </>: <></>}

     {marker.id === portsMarker.markerId && portsMarker.portType === "AIR" ?  <>

<div className={`${styles.infoPorts}`}>
<svg fill="#000000" height="75px" width="75px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 122.88" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">  <g> <path className="st0" d="M16.63,105.75c0.01-4.03,2.3-7.97,6.03-12.38L1.09,79.73c-1.36-0.59-1.33-1.42-0.54-2.4l4.57-3.9 c0.83-0.51,1.71-0.73,2.66-0.47l26.62,4.5l22.18-24.02L4.8,18.41c-1.31-0.77-1.42-1.64-0.07-2.65l7.47-5.96l67.5,18.97L99.64,7.45 c6.69-5.79,13.19-8.38,18.18-7.15c2.75,0.68,3.72,1.5,4.57,4.08c1.65,5.06-0.91,11.86-6.96,18.86L94.11,43.18l18.97,67.5 l-5.96,7.47c-1.01,1.34-1.88,1.23-2.65-0.07L69.43,66.31L45.41,88.48l4.5,26.62c0.26,0.94,0.05,1.82-0.47,2.66l-3.9,4.57 c-0.97,0.79-1.81,0.82-2.4-0.54l-13.64-21.57c-4.43,3.74-8.37,6.03-12.42,6.03C16.71,106.24,16.63,106.11,16.63,105.75 L16.63,105.75z"></path> </g> </g></svg>
<h1>{portsMarker.label}</h1>


</div>



</>: <></>}
   </div>
   
   
   ))}

   <div>

   </div>
   
 

  </div> 

}
export default Map;