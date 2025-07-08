import { GoogleMap, InfoWindowF, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { ChangeEvent, useContext, useEffect, useState } from "react";
import { IPortMarker } from "../models/IPortMarker";
import { IPortState } from "../models/IPortState";
import { PortType } from "../models/Enums/PortType";
import { SHIP_SVG } from "./SHIP_SVG";
import { PLANE_SVG } from "./PLANE_SVG";
import { MapControl } from "./MapControl";
import { CounterAirPort } from "./CounterAirPort";
import { CounterWaterPort } from "./CounterWaterPort";
import { useNav } from "../Hooks/useNav";
import { LanguageContext } from "../contexts/LanguageContext";
import styles from "./Map.module.css";
import multiLang from "../multiLang.json"
import axios from "axios";

export const Map = () => {

    const { language } = useContext(LanguageContext);
    const portsBrazilRef = useNav(`${(language === "pt" && multiLang.pt.navItem.brazilPorts) || (language === "en" && multiLang.en.navItem.brazilPorts) || (language === "es" && multiLang.es.navItem.brazilPorts)}`)

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

    const [states, setStates] = useState<IPortMarker[]>([]);
    const [selectedState, setSelectedState] = useState<IPortState | null>();

    const [countAirPorts, setCountAirPorts] = useState<number>(0);
    const [countWaterPorts, setCountWaterPorts] = useState<number>(0);

    const getStates = async () => {
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/states`);
        setStates(response.data);
    }
    const getPortMarkers = async () => {

        if (selectedState?.id) {
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/markers/state/${selectedState.id}`);
            setPortMarkers(response.data);

            const responseAir = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/markers/air/state/${selectedState.id}`);
            setCountAirPorts(responseAir.data);

            const responseWater = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/markers/water/state/${selectedState.id}`);
            setCountWaterPorts(responseWater.data);

        } else {
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/markers`);
            setPortMarkers(response.data);

            const responseAir = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/markers/air`);
            setCountAirPorts(responseAir.data);

            const responseWater = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/markers/water`);
            setCountWaterPorts(responseWater.data);
        }
    }

    const onSelectChangeState = async (e: ChangeEvent<HTMLSelectElement>) => {

        const selectedStateById = e.target.value
        setZoom(5);
        if (selectedStateById) {
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/states/${selectedStateById}`);
            console.log(response.data)
            setSelectedState(response.data)

            setTimeout(() => {
                const targetZoom = 6.5;
                const currentZoom = 3.5
                const zoomStep = (targetZoom - currentZoom) / 6.5;

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
            setCenter({ lat: -14.240, lng: -53.180 })
            setSelectedState(null);
            setSelectedPortMarker(null);
        }
    }

    const onSelectChangePortMarker = async (e: ChangeEvent<HTMLSelectElement>) => {
        const selectedPortMarkerById = e.target.value;
        const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/markers/${selectedPortMarkerById}`);
        setZoom(5);

        if (selectedPortMarkerById) {
            setTimeout(() => {
                const targetZoom = 15;
                const currentZoom = 5;
                const zoomStep = (targetZoom - currentZoom) / 15;

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


        } else if (selectedState) {
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/markers/state/${selectedState?.id}`);

            setTimeout(() => {
                const targetZoom = 6.5;
                const currentZoom = 3.5
                const zoomStep = (targetZoom - currentZoom) / 6.5;

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
            setCenter({ lat: -14.240, lng: -53.180 })
            setSelectedState(null);
            setSelectedPortMarker(null);
        }
    }

    useEffect(() => {
        getStates();
        getPortMarkers();

    }, [selectedState])

    return (
        <section ref={portsBrazilRef} id={`${(language === "pt" && multiLang.pt.navItem.brazilPorts.toLowerCase()) || (language === "en" && multiLang.en.navItem.brazilPorts.toLowerCase()) || (language === "es" && multiLang.es.navItem.brazilPorts.toLowerCase())}Section`}>
            <h2>Portos do Brasil </h2>
            {isLoaded && (
                <GoogleMap
                    mapContainerStyle={{ width: "100%", height: "850px", borderRadius: "10px" }}
                    center={center}
                    zoom={zoom}               
                    >
                    <MapControl position="RIGHT_TOP">
                            <h2>{selectedState?.label ? selectedState?.label : "Brasil"} </h2>
                            <div style={{ display: "flex", gap: "8px", alignItems: "center", justifyContent: "center" }}>

                                <CounterAirPort targetNumber={countAirPorts} />
                                <CounterWaterPort targetNumber={countWaterPorts} />
                            </div>

                            <div style={{ display: "flex", gap: "5px", alignItems: "center", justifyContent: "center" }}>
                                <select className={`${styles.selectState}`} onChange={(e) => onSelectChangeState(e)}>

                                    <option value="">Todos os estados do Brasil</option>

                                    {states.map((state, index) => (
                                        <option key={index} value={state.id}>{state.label}</option>
                                    ))}

                                </select>
                                 <select className={`${styles.selectPortMarker}`} key={selectedPortMarker?.id} value={selectedPortMarker?.id} onChange={(e) => onSelectChangePortMarker(e)}>

                                    {selectedState ? <option value="">{`Todos os portos do estado ${selectedState?.label}`} </option> : <option value="">{`Todos os portos do Brasil`} </option>} 

                                    {portMarkers.map((portMarker, index) => (
                                        <option key={index} value={portMarker.id}>{portMarker.label}</option>
                                    ))}
                                </select>
                            </div>
                    </MapControl>

                    {portMarkers.map((portMarker, index) => (
                        (portMarker.portType === PortType.WATER ? 
                        
                        <MarkerF 
                            key={index}
                            cursor={"default"}
                            position={{ lat: portMarker.lat, lng: portMarker.lng }}
                            label={{
                                text: portMarker.label,
                                className: `${styles.map_marker_label}`,
                                color: 'rgb(0, 0 ,0)',
                                fontSize: '10px',
                                fontWeight: '600',
                            }} icon={{
                                path: SHIP_SVG,
                                strokeColor: 'rgb(255, 255, 255)',
                                strokeWeight: 1,
                                fillColor: `${portMarker.color}`,
                                fillOpacity: 1,
                                scale: 0.7,
                            }}>

                            {selectedPortMarker?.id === portMarker.id &&
                                <InfoWindowF position={{ lat: portMarker.lat, lng: portMarker.lng }} onCloseClick={() => setSelectedPortMarker(portMarker)}>

                                    <>
                                        <img src={portMarker.image} style={{ borderRadius: '5px', width: '380px', height: '220px' }} alt={portMarker.label} />
                                        <p>{portMarker.label}</p>
                                        <p>
                                            <svg viewBox="0 0 24 24" fill="none" height="25" width="25" xmlns="http://www.w3.org/2000/svg"> <circle cx="12" cy="10" r="3" stroke="#00afef" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle> <path d="M19 9.75C19 15.375 12 21 12 21C12 21 5 15.375 5 9.75C5 6.02208 8.13401 3 12 3C15.866 3 19 6.02208 19 9.75Z" stroke="#00afef" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                            {portMarker.address}
                                        </p>

                                    </>

                                </InfoWindowF>}
                        </MarkerF>

                            : <MarkerF 
                                key={index} 
                                cursor={"default"}
                                position={{ lat: portMarker.lat, lng: portMarker.lng }}

                                label={{
                                    text: portMarker.label,
                                    className: `${styles.map_marker_label}`,
                                    color: 'rgb(0, 0 ,0)',
                                    fontSize: '10px',
                                    fontWeight: '600',
                                }}

                                icon={{
                                    path: PLANE_SVG,
                                    strokeColor: 'rgb(255, 255, 255)',
                                    strokeWeight: 1,
                                    fillColor: `${portMarker.color}`,
                                    fillOpacity: 1,
                                    scale: 0.7,
                                }}>

                                {selectedPortMarker?.id === portMarker.id &&
                                    <InfoWindowF position={{ lat: portMarker.lat, lng: portMarker.lng }} onCloseClick={() => setSelectedPortMarker(portMarker)}>

                                        <>
                                            <img src={portMarker.image} style={{ borderRadius: '5px', width: '380px', height: '220px' }} alt={portMarker.label} />
                                            <p>{portMarker.label}</p>
                                            <p>
                                                <svg viewBox="0 0 24 24" fill="none" height="25" width="25" xmlns="http://www.w3.org/2000/svg"> <circle cx="12" cy="10" r="3" stroke="#00afef" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></circle> <path d="M19 9.75C19 15.375 12 21 12 21C12 21 5 15.375 5 9.75C5 6.02208 8.13401 3 12 3C15.866 3 19 6.02208 19 9.75Z" stroke="#00afef" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                                {portMarker.address}
                                            </p>

                                        </>

                                    </InfoWindowF>}

                            </MarkerF>)
                    ))}
                </GoogleMap>
            )}
        </section>
    )
}