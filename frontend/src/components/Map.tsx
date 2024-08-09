import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import mapWrapper from './Map.module.css';

const containerStyle = {
  width: '500px',
  height: '400px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const Map =() => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDKhBBIdo-9CFMlcObXeRstXDO8712dPqQ"
  })



    return <div className={`${mapWrapper.map}`}>


      <h1>Portos do Brasil</h1>

      <select>
        <option>Seleciona o estado
          
        </option>
      
            </select>

{isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
       
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></> }

  </div> 

}
export default Map;