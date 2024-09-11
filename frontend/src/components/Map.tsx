import { GoogleMap, Marker, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import styles from './Map.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { MarkerModel } from '../models/MarkerModel';
import { PortMarker } from '../models/PortMarker';

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDKhBBIdo-9CFMlcObXeRstXDO8712dPqQ"
  });

  const [zoom, setZoom] = useState(5);

  const [center, setCenter] = useState({
    lat: -3.745,
    lng: -38.523
  });
  const [markers, setMarkers] = useState<MarkerModel[]>([]);
  const [marker, setMarker] = useState<MarkerModel>({
    id: 0,
    label: "",
    lat: 0,
    lng: 0
  });

  const [currentState, setCurrentState] = useState(false);
  const [portsMarker, setPortsMarker] = useState<PortMarker[]>([]);
  const [search, setSearch] = useState("")

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

      if (search) {
        const response = await axios.get(`http://localhost:5077/markers/ports?search=${search}`);
        setPortsMarker(response.data);

        portsMarker.map((portMarker) => {

          if(marker.id === portMarker.markerId) {
            setZoom(5);

            setTimeout(() => {
              
              const targetZoom = 10;
              const currentZoom = 5;
              const zoomStep = (targetZoom - currentZoom) / 10;
  
              setCenter({ lat: portMarker.lat, lng: portMarker.lng });
  
              let currentZoomLevel = currentZoom;
              const zoomInterval = setInterval(() => {
                currentZoomLevel += zoomStep;
                if (currentZoomLevel >= targetZoom) {
                  clearInterval(zoomInterval);
                  currentZoomLevel = targetZoom;
                }
                setZoom(currentZoomLevel);
              }, 50);
            }, 500)

          } 

        })

      } else {
        const response = await axios.get(`http://localhost:5077/markers/ports`);
        console.log(response.data);
        setPortsMarker(response.data);
      }

    } catch (error) {
      console.log(error);
    }
  }

  const onChangeSelectState = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    try {
      const value = e.target.value;
      const response = await axios.get(`http://localhost:5077/markers/states/${value}`);
      console.log(response.data);
      setMarker(response.data);
      setCenter({ lat: response.data.lat, lng: response.data.lng })
      setCurrentState(true);
      setTimeout(() => {
        const targetZoom = 10;
        const currentZoom = 5;
        const zoomStep = (targetZoom - currentZoom) / 10;

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
  const handleChangeSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearch(value);

  }


  const onClickMarker = (e: google.maps.MapMouseEvent) => {
    setZoom(5);

    setTimeout(() => {
      const targetZoom = 10;
      const currentZoom = 5;
      const zoomStep = (targetZoom - currentZoom) / 10;

      setCenter({ lat: e.latLng?.lat() || -3.745, lng: e.latLng?.lng() || -38.523 });

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
  };
  useEffect(() => {
    getMarkers();
    getMarkersPort();
  }, [search]);

  return <div className={`${styles.map}`}>

    <h1>Portos do Brasil</h1>

    <select onChange={(e) => onChangeSelectState(e)} >
      <option selected disabled hidden>Estados do Brasil</option>
      {markers.map((marker, index) => (
        <option value={marker.id} key={index}>{marker.label}</option>
      ))}

    </select>

    {isLoaded ? (
      <GoogleMap
        mapContainerStyle={{
          width: '90vw',
          height: '90vh', borderRadius: '10px', margin: '10px 50px'
        }}
        center={center}
        zoom={zoom}

      >
        { /* Child components, such as markers, info windows, etc. */

          portsMarker.map((portMarker, index) => (

            <div>

              <MarkerF key={index}
                position={{ lat: portMarker.lat, lng: portMarker.lng }}

                icon={{
                  url: `${portMarker.urlImage}`,
                  scaledSize: new window.google.maps.Size(25, 25)
                }}

                options={{
                  label: {
                    text: portMarker.label
                  },

                }} onClick={(e) => onClickMarker(e)} />
            </div>
          ))
        }

        <>

        </>
      </GoogleMap>
    ) : <></>}


    {currentState && <>

      <div className={`${styles.searchContent}`}>

        <input type="text" value={search} onChange={(e) => handleChangeSearch(e)} placeholder='Pesquisar o porto...' />
      </div>

      <div className={`${styles.listPorts}`}>

        {portsMarker.map((portMarker, index) => (
          
          <div className={`${styles.content}`} key={index}>
      
          
            {marker.id === portMarker.markerId && portMarker.portType === "SEA" ?  <>
              <div className={`${styles.infoPorts}`}>
                <img src={`${portMarker.urlImage}`} width={40} height={40} alt="" />
                <h1>{portMarker.label}</h1>

              </div>

            </> : <> </>}

            {marker.id === portMarker.markerId && portMarker.portType === "AIR" ? <>

              <div className={`${styles.infoPorts}`}>

                <img src={`${portMarker.urlImage}`} width={40} height={40} alt="" />
                <h1>{portMarker.label}</h1>
              </div>

            </> : <></>}
          </div>

        ))}

      </div>
    </>}
    <div>

    </div>

  </div>

}
export default Map;