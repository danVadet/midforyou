import { GoogleMap, Marker, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import mapWrapper from './Map.module.css';
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
  

});


const center = {
  lat: -3.745,
  lng: -38.523
};




    return <div className={`${mapWrapper.map}`}>


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
        center={{lat: marker?.lat,
          lng: marker.lng}}
        zoom={10}
       
      >
       { /* Child components, such as markers, info windows, etc. */ 


<MarkerF position={{lat: marker.lat, lng: marker.lng}} options={{
  label: {
    text: marker.label,
    color: 'black',
    fontSize: '15px',
    fontWeight: '600'
  }        
 }}/>
         
         /*
         
         portsMarker.map((portMarker, index) => (

          <MarkerF key={index}  position={{lat: portMarker.lat, lng: portMarker.lng}} options={{
            label: {
              text: portMarker.label
            },
            
          }}/>
          /

         ))
          */

        
       
        
        
        }
        <></>
      </GoogleMap>
  ) : <></> }

   <h1>{marker.label}</h1>

  </div> 

}
export default Map;