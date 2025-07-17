import React from 'react';
import { GoogleMap, Marker, InfoWindow, useJsApiLoader, MarkerF } from '@react-google-maps/api';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: -23.55052,
  lng: -46.633308
};

const Map1 = () => {
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyDKhBBIdo-9CFMlcObXeRstXDO8712dPqQ"
    });
  const [isOpen, setIsOpen] = React.useState(true); // InfoWindow aberto automaticamente

  if (!isLoaded) return <div>Carregando mapa...</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={12}
    >
      <MarkerF
        position={center}
        onClick={() => setIsOpen(true)} // Clica e reabre
      >
        {isOpen && (
          <InfoWindow onCloseClick={() => setIsOpen(false)}>
            <div>
              <h4>São Paulo</h4>
              <p>InfoWindow aberto automaticamente</p>
            </div>
          </InfoWindow>
        )}
      </MarkerF>
    </GoogleMap>
  );
};

export default Map1;
