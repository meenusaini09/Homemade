import React from 'react';
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';

const LocationMap = ({ location }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
  });

  const mapContainerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: location.latitude,
    lng: location.longitude,
  };

  return (
    isLoaded && (
      <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={15}>
        <Marker position={center} icon={<FontAwesomeIcon icon={faMapMarker} />} />
      </GoogleMap>
    )
  );
};

export default LocationMap;