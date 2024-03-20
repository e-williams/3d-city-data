import { Suspense, lazy } from 'react';
const Map = lazy(() => import('react-map-gl'));
  // lazy import allows rendering of map to happen on the client side
  // import of Map component is suspended until code is sent to client side

export default function City() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Map
        mapboxAccessToken="pk.eyJ1IjoiZS13aWxsaWFtcyIsImEiOiJjbHR6MmhqdTAwbm5rMmt1a3B4NW5sbTl5In0.USzDUJuw69haMQgOoGESbQ"
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14
        }}
        style={{width: '100%', height: '100%'}}
        mapStyle="mapbox://styles/mapbox/dark-v9"
      />
    </Suspense>
  );
}