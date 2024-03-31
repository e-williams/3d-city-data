import GLMap from "react-map-gl";
import { DeckGL } from "@deck.gl/react";
import { HexagonLayer } from "@deck.gl/aggregation-layers";

// Viewport settings
const INITIAL_VIEW_STATE = {
  longitude: -122.437186,
  latitude: 37.759101,
  zoom: 11.5,
  pitch: 0,
  bearing: 0,
};

// Hexagon Layer Data
const SFMobileFoodPermitDataUrl =
  "https://data.sfgov.org/resource/rqzj-sfat.json";

export default function Map({ mapboxToken }: { mapboxToken: string }) {
  const layers = [
    new HexagonLayer({
      id: "hexagon-layer",
      data: SFMobileFoodPermitDataUrl,
      getPosition: (d: any) => [Number(d.longitude), Number(d.latitude)],
      pickable: true,
      extruded: true,
      radius: 200,
      elevationScale: 20,
      colorRange: [
        [239, 243, 255],
        [198, 219, 239],
        [158, 202, 225],
        [107, 174, 214],
        [49, 130, 189],
        [8, 81, 156],
      ],
    }),
  ];
  return (
    <div style={{ position: "relative", height: "100%" }}>
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
