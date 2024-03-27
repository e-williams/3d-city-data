import GLMap from 'react-map-gl';
import { DeckGL } from '@deck.gl/react';
import { LineLayer } from '@deck.gl/layers';

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -122.41669,
  latitude: 37.7853,
  zoom: 13,
  pitch: 0,
  bearing: 0
};

// Data to be used by the LineLayer
const data = [
  {sourcePosition: [-122.41669, 37.7853], targetPosition: [-122.41669, 37.781]}
];

export default function Map() {
  const layers = [
    new LineLayer({id: 'line-layer', data})
  ];
  return (
    <DeckGL
      initialViewState={INITIAL_VIEW_STATE}
      controller={true}
      layers={layers}
    >
      <GLMap
        mapboxAccessToken="pk.eyJ1IjoiZS13aWxsaWFtcyIsImEiOiJjbHR6MmhqdTAwbm5rMmt1a3B4NW5sbTl5In0.USzDUJuw69haMQgOoGESbQ"
        // initialViewState={{
        // longitude: -122.4,
        // latitude: 37.8,
        // zoom: 14
        // }}
        // style={{width: '100%', height: '100%'}}
        mapStyle="mapbox://styles/mapbox/dark-v9"
      />
    </DeckGL>
  );
}