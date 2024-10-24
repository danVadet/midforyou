import { GoogleMap, MarkerF, useJsApiLoader } from '@react-google-maps/api';
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
    lat: -14.2350,
    lng: -51.9253
  });
  const [markers, setMarkers] = useState<MarkerModel[]>([]);
  const [marker, setMarker] = useState<MarkerModel>({
    id: 0,
    label: "",
    lat: 0,
    lng: 0
  });
  const [selectedState, setSelectedState] = useState<MarkerModel>({
    id: 0,
    label: "",
    lat: 0,
    lng: 0
  });

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

      if (value) {
        const response = await axios.get(`http://localhost:5077/markers/states/${value}`);
        console.log(response.data);
        setSelectedState(response.data);
        setCenter({ lat: response.data.lat, lng: response.data.lng });
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

      } else {
        const response = await axios.get(`http://localhost:5077/markers/states`);
        setSelectedState(response.data);
        setCenter({
          lat: -14.2350,
          lng: -51.9253
        });
        setZoom(5);
      }
    } catch (error) {
      console.log(error);
    }
  }
  const handleChangeSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value) {
      setSearch(value);
    } else {
      setSearch("")
      const response = await axios.get(`http://localhost:5077/markers/states/${marker.id}`);
      setMarker(response.data);
      setCenter({ lat: response.data.lat, lng: response.data.lng });
      setZoom(5);

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
    }
  }
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();

    if (search) {
      const response = await axios.get(`http://localhost:5077/markers/ports?search=${search}`);

      setPortsMarker(response.data);
      setZoom(5);

      setTimeout(() => {

        const targetZoom = 10;
        const currentZoom = 5;
        const zoomStep = (targetZoom - currentZoom) / 10;

        setCenter({ lat: response.data[0].lat, lng: response.data[0].lng });

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
    } else {
      const response = await axios.get(`http://localhost:5077/markers/states`);
      setSelectedState(response.data);
      setCenter({
        lat: -14.2350,
        lng: -51.9253
      });
      setZoom(5);
    }
  }


  const onClickMarker = (e: google.maps.MapMouseEvent) => {
    setZoom(5);

    setTimeout(() => {
      const targetZoom = 10;
      const currentZoom = 5;
      const zoomStep = (targetZoom - currentZoom) / 10;

      setCenter({ lat: e.latLng?.lat() || center.lat, lng: e.latLng?.lng() || center.lng });

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
    <form className={`${styles.searchContent}`} onSubmit={(e) => handleSearch(e)}>
      <input type="text" value={search} onChange={(e) => handleChangeSearch(e)} placeholder='Pesquisa o porto...' />
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0,0,256,256">
          <g fill="rgb(255, 255, 255)" ><g transform="scale(8.53333,8.53333)"><path d="M13,3c-5.511,0 -10,4.489 -10,10c0,5.511 4.489,10 10,10c2.39651,0 4.59738,-0.85101 6.32227,-2.26367l5.9707,5.9707c0.25082,0.26124 0.62327,0.36648 0.97371,0.27512c0.35044,-0.09136 0.62411,-0.36503 0.71547,-0.71547c0.09136,-0.35044 -0.01388,-0.72289 -0.27512,-0.97371l-5.9707,-5.9707c1.41266,-1.72488 2.26367,-3.92576 2.26367,-6.32227c0,-5.511 -4.489,-10 -10,-10zM13,5c4.43012,0 8,3.56988 8,8c0,4.43012 -3.56988,8 -8,8c-4.43012,0 -8,-3.56988 -8,-8c0,-4.43012 3.56988,-8 8,-8z"></path></g></g>
        </svg></button>

      <select onChange={(e) => onChangeSelectState(e)}>
        <option value={""}>Estados do Brasil</option>
        {markers.map((marker, index) => (
          <option value={marker.id} key={index}>{marker.label}</option>
        ))}
      </select>
    </form>
    <div className={`${styles.listPorts}`}>

      {portsMarker.map((portMarker, index) => (

        <div className={`${styles.content}`} key={portMarker.id}>
          {selectedState.id ? <>  {selectedState.id === portMarker.markerId && <div className={`${styles.infoPorts}`}>
            <img src={`${portMarker.urlImage}`} width={40} height={40} alt="" />
            <h1>{portMarker.label}</h1>

          </div>

          }</> : <>  <div className={`${styles.infoPorts}`}>
            <img src={`${portMarker.urlImage}`} width={40} height={40} alt="" />
            <h1>{portMarker.label}</h1>

          </div></>}
        </div>

      ))}

    </div>


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

    <div>

    </div>

  </div>

}
export default Map;