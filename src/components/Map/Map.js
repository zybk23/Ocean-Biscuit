import React,{useState} from 'react';
import MapGL from 'react-map-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

const MAPBOX_TOKEN = 'pk.eyJ1IjoienliazIzIiwiYSI6ImNrZ2trNnZtbzA2a3gyc21zbjhlM2x6OTAifQ.EnP3MujV-Lh1nlobrp_PGw';

const Map = () => {
	const [viewport, setViewport] = useState({
		latitude:41.097309 ,
		longitude: 28.810583,
		zoom: 14,
		bearing: 0,
		pitch: 0
	  });
	return (
		<MapGL
      {...viewport}
      width="400px"
      height="400px"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    />
	);
};

export default Map;