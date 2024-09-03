import { GoogleMap, Marker, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import styles from './Map.module.css';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import { MarkerModel } from '../models/MarkerModel';
import { PortMarker } from '../models/PortMarker';





const Map =() => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDKhBBIdo-9CFMlcObXeRstXDO8712dPqQ"

  })

 
  const [center, setCenter] = useState({
    lat:  -3.745,
    lng: -38.523
  });

  const [zoom, setZoom] = useState(5);

  const [markers, setMarkers] = useState<MarkerModel[]>([]);
  const [marker, setMarker] = useState<MarkerModel>({
    id: 0,
    label: "",
    lat: 0,
    lng: 0
  });
  
 const [portsMarker, setPortsMarker] = useState<PortMarker[]>([]);
 const [search, setSearch] = useState("")

 const [portMarker, setPortMarker] = useState<PortMarker>({
  id: 0,
  label: "",
  portType: "",
  lat: 0,
  lng: 0,
  markerId: 0,
  urlImage: ""
 });

  const getMarkers = async () => {
    try {
        const response = await axios.get(`http://localhost:5077/markers/states`);
        console.log(response.data);
        setMarkers(response.data);
    } catch (error) {
        console.log(error);
    }

 }
 const getMarkersPort = async () => {
  try {

      if(search){
        const response = await axios.get(`http://localhost:5077/markers/ports?search=${search}`);
            setPortsMarker(response.data);
            console.log(response.data);


      } else {
        const response = await axios.get(`http://localhost:5077/markers/ports`);
        console.log(response.data);
        setPortsMarker(response.data);

      }
   
  } catch (error) {
      console.log(error);
  }

}

 const onChangeSelectState = async  (e: React.ChangeEvent<HTMLSelectElement>) => {
  try {
  const value =  e.target.value;
  const response = await axios.get(`http://localhost:5077/markers/states/${value}`);
      console.log(response.data);
      setMarker(response.data);
      setTimeout(() => {
        const targetZoom = 10;
        const currentZoom = 5;
        const zoomStep = (targetZoom - currentZoom) / 10;
  
        setMarker(response.data);
  
        let currentZoomLevel = currentZoom;
        const zoomInterval = setInterval(() => {
          currentZoomLevel += zoomStep;
          if (currentZoomLevel >= targetZoom) {
            clearInterval(zoomInterval);
            currentZoomLevel = targetZoom;
          }
          setZoom(currentZoomLevel);
        }, 50);
      }, 500);
  } catch (error) {
      console.log(error);
  }
}
const handleChangeSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
  const value =  e.target.value;
  setSearch(value);
}
const onClickMarker = async  (id: number) => {
    

  const response = await axios.get(`http://localhost:5077/markers/ports/${id}`); 

  

  setTimeout(() => {
    const targetZoom = 10;
    const currentZoom = 5;
    const zoomStep = (targetZoom - currentZoom) / 10;
    setPortMarker(response.data)
    console.log(response.data)

    let currentZoomLevel = currentZoom;
    const zoomInterval = setInterval(() => {
      currentZoomLevel += zoomStep;
      if (currentZoomLevel >= targetZoom) {
        clearInterval(zoomInterval);
        currentZoomLevel = targetZoom;
      }
      setZoom(currentZoomLevel);
    }, 50);
  }, 500);

}
 useEffect(() => {
  getMarkers();
  getMarkersPort();
}, [search]);

    return <div className={`${styles.map}`}>


      <h1>Portos do Brasil</h1>

      <select  onChange={(e) => onChangeSelectState(e)} >
        <option selected disabled hidden>Estados do Brasil</option>
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
        zoom={zoom}
       
      >
       { /* Child components, such as markers, info windows, etc. */ 

         portsMarker.map((portMarker, index) => (
    
         <div>

            <MarkerF key={index}    
            position={{lat: portMarker.lat, lng:  portMarker.lng}} 

            icon={{
            url: `${portMarker.urlImage}`,
              scaledSize: new window.google.maps.Size(25, 25)
            }}
            
            options={{
            label: {
              text: portMarker.label
            },
            
          }} onClick={() => onClickMarker(portMarker.id)}/>
         </div>
         ))
        }

        <>
        
        </>
      </GoogleMap>
  ) : <></> }


<div className={`${styles.searchContent}`}>
                    
                    <input type="text" value={search} onChange={(e) => handleChangeSearch(e)} placeholder='Pesquisar o porto...' />
  </div>

   <h1>{marker.label}</h1>

    <div className={`${styles.listPorts}`}>
        
   { portsMarker.length === 0  ? (<td>Porto não encontrado</td>) : portsMarker.map((portsMarker, index) =>(
   <div className={`${styles.content}`} key={index}>
     {marker.id === portsMarker.markerId && portsMarker.portType === "SEA" ?  <>
      <div className={`${styles.infoPorts}`}>
        <img src={`${portsMarker.urlImage}`} width={40} height={40} alt="" />
     <h1>{portsMarker.label}</h1>
  
      </div>

     </>: <></>}

     {marker.id === portsMarker.markerId && portsMarker.portType === "AIR" ?  <>

<div className={`${styles.infoPorts}`}>

<img src={`${portsMarker.urlImage}`} width={40} height={40} alt="" />
<h1>{portsMarker.label}</h1>

</div>

</>: <></>}
   </div>
      
   ))}

    </div>



   <div>

   </div>
   
  </div> 

}
export default Map;