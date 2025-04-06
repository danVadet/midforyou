import { GoogleMap, InfoWindowF, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { ChangeEvent, useEffect, useState } from "react";
import { IPortMarker } from "../models/IPortMarker";
import { IState } from "../models/IState";
import { PortType } from "../models/Enums/PortType";
import { SHIP_SVG } from "./SHIP_SVG";
import { PLANE_SVG } from "./PLANE_SVG";
import axios from "axios";
import { MapControl } from "./MapControl";
import { CounterAirPort } from "./CounterAirPort";
import { CounterWaterPort } from "./CounterWaterPort";

export const Map = () => {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDKhBBIdo-9CFMlcObXeRstXDO8712dPqQ"
    });
    const [center, setCenter] = useState({
        lat: -14.240,
        lng: -53.180
    });
    

    const [zoom, setZoom] = useState<number>(5);
    

    const [portMarkers, setPortMarkers] = useState<IPortMarker[]>([]);
    const [selectedPortMarker, setSelectedPortMarker] = useState<IPortMarker | null>();

    const [states, setStates] = useState<IState[]>([]);
    const [selectedState, setSelectedState] = useState<IState | null >();

    const [countAirPorts, setCountAirPorts] = useState<number>(0);
    const [countWaterPorts, setCountWaterPorts] = useState<number>(0);

    const getStates = async () => {
        const response = await axios.get('http://localhost:5262/states');
        setStates(response.data);
    }
    const getPortMarkers = async () => {

        if (selectedState?.id) {
            const response = await axios.get(`http://localhost:5262/markers/state/${selectedState.id}`);
            setPortMarkers(response.data);

            const responseAir = await axios.get(`http://localhost:5262/markers/air/state/${selectedState.id}`);
            setCountAirPorts(responseAir.data);

            const responseWater = await axios.get(`http://localhost:5262/markers/water/state/${selectedState.id}`);
            setCountWaterPorts(responseWater.data);

        } else {
            const response = await axios.get('http://localhost:5262/markers');
            setPortMarkers(response.data);

            const responseAir = await axios.get('http://localhost:5262/markers/air');
            setCountAirPorts(responseAir.data);

            const responseWater = await axios.get('http://localhost:5262/markers/water');
            setCountWaterPorts(responseWater.data);
        }
    }

    const onSelectChangeState = async (e: ChangeEvent<HTMLSelectElement>) => {

        const selectedStateById = e.target.value
        setZoom(5);
        if(selectedStateById) {
            const response = await axios.get(`http://localhost:5262/states/${selectedStateById}`);
            console.log(response.data)
            setSelectedState(response.data)
            
            setTimeout(() => {
                const targetZoom = 10;
                const currentZoom = 5;
                const zoomStep = (targetZoom - currentZoom) / 10;
    
                setCenter({ lat: response.data.lat, lng: response.data.lng });
    
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
            setCenter({lat: -14.240, lng: -53.180})
            setSelectedState(null);
            setSelectedPortMarker(null);  
        }
    }

    const onSelectChangePortMarker = async (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedPortMarkerById = e.target.value;
        setZoom(5);
        if(selectedPortMarkerById) {
            const response = await axios.get(`http://localhost:5262/markers/${selectedPortMarkerById}`);


    
            setTimeout(() => {
                const targetZoom = 10;
                const currentZoom = 5;
                const zoomStep = (targetZoom - currentZoom) / 10;
    
                setCenter({ lat: response.data.lat, lng: response.data.lng });
    
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
    
            setSelectedPortMarker(response.data);

        } else {
            setCenter({   lat: -14.240, lng: -53.180})
            setSelectedPortMarker(null);  
        }
    }

    const onClickMarker = async (id: number) => {

        const response = await axios.get(`http://localhost:5262/markers/${id}`);
        setZoom(5);
        setTimeout(() => {
            const targetZoom = 10;
            const currentZoom = 5;
            const zoomStep = (targetZoom - currentZoom) / 10;

            setCenter({ lat: response.data.lat, lng: response.data.lng });

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

        setSelectedPortMarker(response.data);
    }

    useEffect(() => {
        getStates();
        getPortMarkers();

    }, [selectedState])

    return (
        <>
           <h2>Portos do Brasil </h2>
            {isLoaded && (
                <GoogleMap
                    mapContainerStyle={{width: "100%", height: "850px", borderRadius: "10px" }}
                    center={center}
                    zoom={zoom}>

                    <MapControl position="RIGHT_TOP">
                        <div style={{backgroundColor: "rgba(255, 255, 255, 0.5)", padding: '2px', margin: '2px', borderRadius: '5px', borderColor: 'red'}}>
                        <h2>{selectedState?.label ? selectedState?.label : "Brasil"} </h2>
                        <div style={{display: "flex", gap: "8px", alignItems: "center", justifyContent: "center"}}>

                           <CounterAirPort targetNumber={countAirPorts}/>
                           <CounterWaterPort targetNumber={countWaterPorts}/>
                        </div>
                        <select onChange={(e) => onSelectChangeState(e)}>
                            <option hidden>Estados do Brasil</option>
                            <option value="">Todos os estados</option>
                            {states.map((state, index) => (
                                <option key={index} value={state.id}>{state.label}</option>
                            ))}

                        </select>
                        <select  name="port" id="port" value={selectedPortMarker?.id} onChange={(e) => onSelectChangePortMarker(e)}>
                        <option value="">Todos os portos</option>
                            {portMarkers.map((portMarker, index) => (
                                <option key={index} value={portMarker.id}>{portMarker.label}</option>
                            ))}
                        </select>

                        </div>
                       
                    </MapControl>

                    {portMarkers.map((portMarker, index) => (
                        (portMarker.portType === PortType.WATER ? <MarkerF key={index}
                            position={{ lat: portMarker.lat, lng: portMarker.lng }}
                            label={{
                                text: portMarker.label,
                                className: 'map-marker-label',
                                color: 'rgb(0, 0 ,0)',
                                fontSize: '10px',
                                fontWeight: '600',
                            }} icon={{
                                path: SHIP_SVG,
                                strokeColor: 'rgb(255, 255, 255)',
                                strokeWeight: 2,
                                fillColor: `${portMarker.color}`,
                                fillOpacity: 1,
                                scale: 0.7,
                            }} onClick={() => onClickMarker(portMarker.id)}>

                            {selectedPortMarker?.id === portMarker.id &&
                                <InfoWindowF position={{ lat: portMarker.lat, lng: portMarker.lng }}>

                                    <>
                                        <img src={portMarker.image} style={{ borderRadius: '5px', width: '480px', height: '320px' }} alt={portMarker.label} />
                                        <p>{portMarker.label}</p>
                                    </>

                                </InfoWindowF>}
                        </MarkerF>

                            : <MarkerF key={index}
                                position={{ lat: portMarker.lat, lng: portMarker.lng }}

                                label={{
                                    text: portMarker.label,
                                    className: 'map-marker-label',
                                    color:'rgb(0, 0 ,0)',
                                    fontSize: '10px',
                                    fontWeight: '600',
                                }}

                                icon={{
                                    path: PLANE_SVG,
                                    strokeColor: 'rgb(255, 255, 255)',
                                    strokeWeight: 2,
                                    fillColor: `${portMarker.color}`,
                                    fillOpacity: 1,
                                    scale: 0.7,
                                }} onClick={() => onClickMarker(portMarker.id)}>

                                {selectedPortMarker?.id === portMarker.id &&
                                    <InfoWindowF position={{ lat: portMarker.lat, lng: portMarker.lng }}>

                                        <>
                                            <img src={portMarker.image} style={{ borderRadius: '5px', width: '480px', height: '320px' }} alt={portMarker.label} />
                                            <p>{portMarker.label}</p>
                                        </>

                                    </InfoWindowF>}


                            </MarkerF>)
                    ))}
                </GoogleMap>
            )}
        </>
    )

}