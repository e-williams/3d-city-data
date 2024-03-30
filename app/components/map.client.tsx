import GLMap from 'react-map-gl';
import { DeckGL } from '@deck.gl/react';
import { HexagonLayer } from '@deck.gl/aggregation-layers';

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -122.438065,
  latitude: 37.750562,
  zoom: 11.25,
  pitch: 0,
  bearing: 0
};

// Hexagon Layer Data
const SFMobileFoodPermitDataUrl = 'https://data.sfgov.org/resource/rqzj-sfat.json';

export default function Map({mapboxToken}: {mapboxToken: string}) {
  const layers = [
    new HexagonLayer({
      id: 'hexagon-layer',
      data:SFMobileFoodPermitDataUrl,
      radius: 100,
      pickable: true,
      getPosition: (d: any) => [Number(d.longitude), Number(d.latitude)],
    })
  ];
  return (
    <div style={{ position: 'relative', height: '100%' }}>
      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={layers}
      >
        <GLMap
          mapboxAccessToken={mapboxToken}
          mapStyle="mapbox://styles/mapbox/light-v9"
        />
      </DeckGL>
    </div>
  );
}