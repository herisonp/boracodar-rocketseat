import React, { useContext, useState } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { BlocosContext } from '../BlocosContext';
import MarkerBloco from './MarkerBloco';
import TOKEN_MAPS from '../../tokenGoogle';

const BlocoMaps = () => {
  const { nameInput, localInput, blocosDB } = useContext(BlocosContext);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: TOKEN_MAPS,
  });

  const containerStyle = {
    width: '100%',
    height: '650px',
  };

  const center = {
    lat: -9.9461077,
    lng: -49.5213915,
  };

  return (
    <div style={{ width: '100%' }}>
      {isLoaded ? (
        <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={4}>
          {blocosDB
            .filter(
              ({ name, local }) =>
                name.toLowerCase().includes(nameInput.toLowerCase()) &&
                local.toLowerCase().includes(localInput.toLowerCase()),
            )
            .map((item) => (
              <MarkerBloco
                key={item.id}
                region={item.local}
                options={{
                  label: {
                    text: item.name,
                    className: 'label-marker',
                  },
                }}
                title={item.name}
              />
            ))}
        </GoogleMap>
      ) : (
        <></>
      )}
    </div>
  );
};

export default BlocoMaps;
