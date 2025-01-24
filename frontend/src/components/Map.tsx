import { GoogleMap, InfoWindowF, MarkerF, useJsApiLoader } from '@react-google-maps/api';
import styles from './Map.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { State } from '../models/State';
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
  const [states, setStates] = useState<State[]>([]);
  const [countAllPortsByWater, setCountAllPortsByWater] = useState(0);
  const [countAllPortsByAir, setCountAllPortsByAir] = useState(0);
  const [portsMarker, setPortsMarker] = useState<PortMarker[]>([]);
  
  const [selectedPort, setSelectedPort] = useState<PortMarker>({
    id: 0,
    color: "",
    label: "",
    address: "",
    portType: "",
    portImage: "",
    lat: 0,
    lng: 0,
    stateId: 0
  });

  const [state, setState] = useState<State>({
    id: 0,
    label: "",
    lat: 0,
    lng: 0,
  });
  
  const [showLegend, setShowLegend] = useState<boolean>(false);


  const getStates = async () => {
    try {
      const response = await axios.get(`http://localhost:5077/markers/states`);
      setStates(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  const getMarkersPort = async () => {
    try {
      const response = await axios.get(`http://localhost:5077/markers/ports`);
      setPortsMarker(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  const onChangeSelectState = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    try {
      const value = e.target.value;

      if (value) {
        const response = await axios.get(`http://localhost:5077/markers/states/${value}`);
        const responsePorts = await axios.get(`http://localhost:5077/markers/${value}/ports`);
        const responseAir = await axios.get(`http://localhost:5077/markers/ports/${value}/air`);
        const responseSea = await axios.get(`http://localhost:5077/markers/ports/${value}/sea`);

        setShowLegend(true);
        setState(response.data);

        setPortsMarker(responsePorts.data);
        setCountAllPortsByAir(responseAir.data);
        setCountAllPortsByWater(responseSea.data);

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

        const response = await axios.get(`http://localhost:5077/markers/ports`);
        setShowLegend(false);

        setCenter({
          lat: -14.2350,
          lng: -51.9253
        });
        setPortsMarker(response.data);

        setTimeout(() => {
          const targetZoom = 5;
          const currentZoom = 5;
          const zoomStep = (targetZoom - currentZoom) / 10;

          let currentZoomLevel = currentZoom;
          const zoomInterval = setInterval(() => {
            currentZoomLevel -= zoomStep;
            if (currentZoomLevel <= targetZoom) {
              clearInterval(zoomInterval);
              currentZoomLevel = targetZoom;
            }
            setZoom(currentZoomLevel);
          }, 50);
        }, 500);
      }
    } catch (error) {
      console.log(error);
    }
  }
  const onChangeSelectPort = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    try {
      const value = e.target.value;

      if (value) {
        const response = await axios.get(`http://localhost:5077/markers/ports/${value}`);
        console.log(response.data);
        setSelectedPort(response.data[0]);
        setCenter({ lat: response.data[0].lat, lng: response.data[0].lng });
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

    } catch (error) {
      console.log(error);
    }

  }
  const onClickMarker = async (id: number) => {
    setZoom(5);
    const response = await axios.get(`http://localhost:5077/markers/ports/${id}`);

    setTimeout(() => {
      const targetZoom = 10;
      const currentZoom = 5;
      const zoomStep = (targetZoom - currentZoom) / 10;

      setSelectedPort(response.data[0]);
      setCenter({ lat: response.data[0].lat, lng: response.data[0].lng});

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
    getStates();
    getMarkersPort();
  }, []);

  return ( <>

    <h1>Portos do Brasil</h1>

    <div className={`${styles.searchContent}`}>
    <img className={`${styles.airplane}`} src={`./assets/airplane.png`} alt="" />
    <img  className={`${styles.ship}`} src={`./assets/ship-2.png`} alt="" />

      <select onChange={(e) => onChangeSelectState(e)}>
        <option hidden>Seleciona o estado....</option>
        <option value={""}>Todos os estados</option>

        {states.map((state, index) => (
          <option value={state.id} key={index}>{state.label}</option>
        ))}
      </select>

      <select onChange={(e) => onChangeSelectPort(e)}>
        <option hidden>Seleciona o  porto....</option>
        {portsMarker.length === 0 ? <option>Porto não encontrado</option> : portsMarker.map((port, index) => (
          <option value={port.id} key={index}>{port.label}</option>
        ))}
      </select>
    </div>

    {isLoaded ? (
      <GoogleMap
        mapContainerClassName={`${styles.mapContainer}`}
        center={center}
        zoom={zoom}
        options={{
          mapTypeControl: false, 
          fullscreenControl: false,
          
        }}
        >
        { /* Child components, such as markers, info windows, etc. */

          portsMarker.map(portMarker => (

            (portMarker.portType === "AIR" ? <MarkerF key={portMarker.id}
              position={{ lat: portMarker.lat, lng: portMarker.lng }}
              icon={{
                path: `M 33.885822,1.7366442e-4 c -1.660081,0 -3.230813,0.61250318558 -4.410531,1.79232903558 L 23.957732,7.3100614 6.9745505,2.4514439 C 6.7908342,2.3987483 6.5280146,2.3284475 6.210176,2.3284475 c -0.7339427,0 -1.4356273,0.2934788 -1.9504759,0.8083034 L 1.6239292,5.7549586 C 1.0069349,6.371929 0.7386242,7.2742223 0.85076415,8.0832264 0.96304183,8.8936497 1.4863397,9.6831025 2.2389414,10.103985 L 14.372296,16.895503 9.7596896,21.499325 4.0136952,20.392297 c -0.2783288,-0.0521 -0.4643206,-0.03533 -0.5183935,-0.03533 -0.6882173,0 -1.4126269,0.253059 -1.9504699,0.790735 v 0.009 l -0.74680522,0.75559 c -0.59037101,0.597257 -0.88986199,1.468675 -0.77315907,2.310692 0.117667,0.848843 0.65266566,1.60914 1.38817129,2.020765 l 6.3697912,3.567083 3.567083,6.369791 c 0.472464,0.844346 1.386105,1.414531 2.389772,1.414531 0.734254,0 1.442148,-0.291024 1.95926,-0.808303 v -0.009 l 0.738015,-0.738008 c 0.631869,-0.631941 0.915383,-1.57687 0.746805,-2.460061 h 0.009 l -1.08947,-5.772348 4.586252,-4.577463 6.782728,12.11578 c 0.486896,0.870389 1.40404,1.414537 2.407341,1.414537 0.734524,0 1.442233,-0.291084 1.959261,-0.808303 l 2.618201,-2.618208 c 0.713973,-0.713697 0.959457,-1.759568 0.685301,-2.71485 L 30.28375,13.635744 35.792524,8.1181912 C 36.656146,7.2545633 37.188905,6.1497389 37.45306,4.9289003 37.717197,3.7080617 37.7257,2.1704563 36.574468,1.019164 35.84434,0.28901773 34.845679,1.0180671e-4 33.885977,0 Z`,
                strokeColor: 'rgb(255, 255, 255)',
                fillOpacity: 1,
                strokeWeight: 2,
                fillColor: `${portMarker.color}`,
                scale: 0.8
              }}

              options={{
                label: {
                  text: portMarker.label,
                  className: `${styles.portMapLabel}`,
                  color: 'black',
                  fontSize: '10px',
                  fontWeight: '600',
                },

              }} onClick={() => onClickMarker(portMarker.id)} >
                 {selectedPort.id === portMarker.id  && (
                  <InfoWindowF position={{lat: selectedPort.lat, lng: selectedPort.lng}}>
                      <div>
                      <img src={portMarker.portImage} className={`${styles.portImageContainer}`}/>
                        
                    <div className={`${styles.localContent}`}>
                    <p>{portMarker.label}</p>

                    </div>
                    
                      <div  className={`${styles.addressContent}`}>
                      <svg viewBox="0 0 24 24" fill="none" width="20" height="20" xmlns="http://www.w3.org/2000/svg"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="rgb(0, 178, 239)"  strokeWidth="2" /></svg>
                       <p>{portMarker.address}</p>

                      </div>
                  
                      </div>
                    </InfoWindowF>
                  )}

              </MarkerF> 
              
              : <MarkerF key={portMarker.id}
                position={{ lat: portMarker.lat, lng: portMarker.lng }}
                icon={{
                  path: `M14.211,17.7763 C15.2667188,17.2483938 16.4976914,17.2153996 17.5753169,17.6773176 L17.7887,17.7763 L20.4471,19.1055 C20.941,19.3525 21.1413,19.9531 20.8943,20.4471 C20.6649429,20.9058143 20.1306097,21.111201 19.6599225,20.9404396 L19.5526,20.8943 L16.8943,19.5651 C16.38751,19.31175 15.800044,19.286415 15.2771188,19.489095 L15.1054,19.5651 L13.7887,20.2235 C12.7329813,20.7514063 11.5020086,20.7844004 10.4243831,20.3224824 L10.211,20.2235 L8.89428,19.5651 C8.387526,19.31175 7.8000312,19.286415 7.27713633,19.489095 L7.10543,19.5651 L4.44707,20.8943 C3.95309,21.1413 3.35241,20.9411 3.10543,20.4471 C2.87608214,19.9883857 3.03233883,19.4377561 3.45133939,19.1636731 L3.55264,19.1055 L6.211,17.7763 C7.26672813,17.2483938 8.49769258,17.2153996 9.57532524,17.6773176 L9.78871,17.7763 L11.1054,18.4347 C11.61219,18.68805 12.199656,18.713385 12.7225812,18.510705 L12.8943,18.4347 L14.211,17.7763 Z M12.9999,2 C13.5522,2 13.9999,2.44772 13.9999,3 L13.9999,4.31954 L17.3287,4.87434 C18.2931,5.03507 18.9999,5.86945 18.9999,6.84713 L18.9999,10.2792 L21.0584,10.9654 C21.7521,11.1967 22.1001,11.9715 21.812,12.6437 L19.6434,17.7037 L17.7887,16.7763 C16.6626,16.2132 15.3371,16.2132 14.211,16.7763 L12.8943,17.4347 C12.3312,17.7162 11.6685,17.7162 11.1054,17.4347 L9.78871,16.7763 C8.6626,16.2132 7.33711,16.2132 6.211,16.7763 L4.94046,17.4116 L2.28294,12.7609 C1.89158,12.076 2.22463,11.2043 2.97296,10.9549 L4.99988,10.2792 L4.99988,6.84713 C4.99988,5.86945 5.70671,5.03507 6.67109,4.87434 L9.99988,4.31954 L9.99988,3 C9.99988,2.44772 10.4476,2 10.9999,2 L12.9999,2 Z M11.9999,6.01379 L6.99988,6.84713 L6.99988,9.61257 L11.3674,8.15673 C11.778,8.01988 12.2218,8.01988 12.6323,8.15673 L16.9999,9.61257 L16.9999,6.84713 L11.9999,6.01379 Z`,
                  strokeColor: 'rgb(255, 255, 255)',
                  fillOpacity: 1,
                  strokeWeight: 2,
                  fillColor: `${portMarker.color}`,
                  scale: 1.5
                }}
                
                options={{
                  label: {
                    text: portMarker.label,
                    className: `${styles.portMapLabel}`,
                        color: 'black',
                  fontSize: '10px',
                  fontWeight: '600',
                  },

                }} onClick={() => onClickMarker(portMarker.id)} > 
                
                
                  {selectedPort.id === portMarker.id  ? (
                  <InfoWindowF position={{lat: selectedPort.lat, lng: selectedPort.lng}}>                      
                    <div className={`${styles.infowindow}`}>
                      <img src={portMarker.portImage} className={`${styles.portImageContainer}`}/>
                        <p>{portMarker.label}</p>
                        <p>                       <svg viewBox="0 0 24 24" fill="none" width="25" height="25" xmlns="http://www.w3.org/2000/svg"> <path d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" stroke="rgb(0, 178, 239)"  strokeWidth="2" /></svg>
                        {portMarker.address}</p>
                      </div>
                    </InfoWindowF>
                  ) : null}
              
                </MarkerF>)

          ))
        }
        
        <>

        {showLegend &&   <div className={`${styles.countInfo}`}>

          <h3>{state.label}</h3>
          <svg viewBox="0 0 45 45" width="25" height="25" fill="rgb(255, 255, 255)" xmlns="http://www.w3.org/2000/svg">
       <path d="M 33.885822,1.7366442e-4 c -1.660081,0 -3.230813,0.61250318558 -4.410531,1.79232903558 L 23.957732,7.3100614 6.9745505,2.4514439 C 6.7908342,2.3987483 6.5280146,2.3284475 6.210176,2.3284475 c -0.7339427,0 -1.4356273,0.2934788 -1.9504759,0.8083034 L 1.6239292,5.7549586 C 1.0069349,6.371929 0.7386242,7.2742223 0.85076415,8.0832264 0.96304183,8.8936497 1.4863397,9.6831025 2.2389414,10.103985 L 14.372296,16.895503 9.7596896,21.499325 4.0136952,20.392297 c -0.2783288,-0.0521 -0.4643206,-0.03533 -0.5183935,-0.03533 -0.6882173,0 -1.4126269,0.253059 -1.9504699,0.790735 v 0.009 l -0.74680522,0.75559 c -0.59037101,0.597257 -0.88986199,1.468675 -0.77315907,2.310692 0.117667,0.848843 0.65266566,1.60914 1.38817129,2.020765 l 6.3697912,3.567083 3.567083,6.369791 c 0.472464,0.844346 1.386105,1.414531 2.389772,1.414531 0.734254,0 1.442148,-0.291024 1.95926,-0.808303 v -0.009 l 0.738015,-0.738008 c 0.631869,-0.631941 0.915383,-1.57687 0.746805,-2.460061 h 0.009 l -1.08947,-5.772348 4.586252,-4.577463 6.782728,12.11578 c 0.486896,0.870389 1.40404,1.414537 2.407341,1.414537 0.734524,0 1.442233,-0.291084 1.959261,-0.808303 l 2.618201,-2.618208 c 0.713973,-0.713697 0.959457,-1.759568 0.685301,-2.71485 L 30.28375,13.635744 35.792524,8.1181912 C 36.656146,7.2545633 37.188905,6.1497389 37.45306,4.9289003 37.717197,3.7080617 37.7257,2.1704563 36.574468,1.019164 35.84434,0.28901773 34.845679,1.0180671e-4 33.885977,0 Z" stroke="rgb(0, 0, 0)" strokeWidth="2" />
     </svg>
          
         <h3>
  
          
          
          {countAllPortsByAir <= 1 ? `${countAllPortsByAir} porto aéreo` : `${countAllPortsByAir} portos aéreos`}</h3>
          <svg viewBox="0 0 25 25" width="25" height="25"  fill="rgb(255, 255, 255)" xmlns="http://www.w3.org/2000/svg">
       <path d="M14.211,17.7763 C15.2667188,17.2483938 16.4976914,17.2153996 17.5753169,17.6773176 L17.7887,17.7763 L20.4471,19.1055 C20.941,19.3525 21.1413,19.9531 20.8943,20.4471 C20.6649429,20.9058143 20.1306097,21.111201 19.6599225,20.9404396 L19.5526,20.8943 L16.8943,19.5651 C16.38751,19.31175 15.800044,19.286415 15.2771188,19.489095 L15.1054,19.5651 L13.7887,20.2235 C12.7329813,20.7514063 11.5020086,20.7844004 10.4243831,20.3224824 L10.211,20.2235 L8.89428,19.5651 C8.387526,19.31175 7.8000312,19.286415 7.27713633,19.489095 L7.10543,19.5651 L4.44707,20.8943 C3.95309,21.1413 3.35241,20.9411 3.10543,20.4471 C2.87608214,19.9883857 3.03233883,19.4377561 3.45133939,19.1636731 L3.55264,19.1055 L6.211,17.7763 C7.26672813,17.2483938 8.49769258,17.2153996 9.57532524,17.6773176 L9.78871,17.7763 L11.1054,18.4347 C11.61219,18.68805 12.199656,18.713385 12.7225812,18.510705 L12.8943,18.4347 L14.211,17.7763 Z M12.9999,2 C13.5522,2 13.9999,2.44772 13.9999,3 L13.9999,4.31954 L17.3287,4.87434 C18.2931,5.03507 18.9999,5.86945 18.9999,6.84713 L18.9999,10.2792 L21.0584,10.9654 C21.7521,11.1967 22.1001,11.9715 21.812,12.6437 L19.6434,17.7037 L17.7887,16.7763 C16.6626,16.2132 15.3371,16.2132 14.211,16.7763 L12.8943,17.4347 C12.3312,17.7162 11.6685,17.7162 11.1054,17.4347 L9.78871,16.7763 C8.6626,16.2132 7.33711,16.2132 6.211,16.7763 L4.94046,17.4116 L2.28294,12.7609 C1.89158,12.076 2.22463,11.2043 2.97296,10.9549 L4.99988,10.2792 L4.99988,6.84713 C4.99988,5.86945 5.70671,5.03507 6.67109,4.87434 L9.99988,4.31954 L9.99988,3 C9.99988,2.44772 10.4476,2 10.9999,2 L12.9999,2 Z M11.9999,6.01379 L6.99988,6.84713 L6.99988,9.61257 L11.3674,8.15673 C11.778,8.01988 12.2218,8.01988 12.6323,8.15673 L16.9999,9.61257 L16.9999,6.84713 L11.9999,6.01379 Z" stroke="rgb(0, 0, 0)" strokeWidth="1" />
     </svg>
         <h3>{countAllPortsByWater <= 1 ? `${countAllPortsByWater} porto aquaviário` : `${countAllPortsByWater} portos  aquaviários`}</h3>
     </div>}
     
        </>
      </GoogleMap>
    ) : <></>}

    <div>

    </div>
  </>
  );

}
export default Map;