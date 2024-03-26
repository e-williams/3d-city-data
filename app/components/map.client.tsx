import GLMap from 'react-map-gl';

export default function Map() {
  return (
      <GLMap
        mapboxAccessToken="pk.eyJ1IjoiZS13aWxsaWFtcyIsImEiOiJjbHR6MmhqdTAwbm5rMmt1a3B4NW5sbTl5In0.USzDUJuw69haMQgOoGESbQ"
        initialViewState={{
          longitude: -122.4,
          latitude: 37.8,
          zoom: 14
        }}
        style={{width: '100%', height: '100%'}}
        mapStyle="mapbox://styles/mapbox/dark-v9"
      />
  );
}