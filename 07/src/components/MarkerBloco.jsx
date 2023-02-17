import { Marker } from '@react-google-maps/api';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TOKEN_MAPS from '../../tokenGoogle';

const MarkerBloco = ({ region, options, title }) => {
  const [position, setPosition] = useState({
    lat: 0,
    lng: 0,
  });

  useEffect(() => {
    async function getPosition(region) {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${region}&key=${TOKEN_MAPS}`,
      );

      if (response) {
        const location = response.data.results[0].geometry.location;
        setPosition({ lat: location.lat, lng: location.lng });
      }
    }

    getPosition(region);
  }, []);

  return (
    <Marker title={title} position={position} options={options} icon="a" />
  );
};

export default MarkerBloco;
