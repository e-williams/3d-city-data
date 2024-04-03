import GLMap from "react-map-gl";
import { DeckGL } from "@deck.gl/react";
import { HexagonLayer } from "@deck.gl/aggregation-layers";
import { DataOptionType } from "~/data";
import { getPositions } from "~/utils/map.utils";

export default function Map({
  mapboxToken,
  data,
}: {
  mapboxToken: string;
  data: DataOptionType;
}) {
  const layers = [
    new HexagonLayer({
      id: data.id,
      data: data.dataUrl,
      getPosition: getPositions(data.id),
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
        initialViewState={data.initialViewState}
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
