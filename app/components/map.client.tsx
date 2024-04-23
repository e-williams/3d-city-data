import GLMap from "react-map-gl";
import { DeckGL } from "@deck.gl/react";
import { HexagonLayer, HeatmapLayer } from "@deck.gl/aggregation-layers";
import { DataOptionType } from "~/data";
import { getPositions } from "~/utils/map.utils";
import { Box, CircularProgress } from "@mui/joy";
import { useEffect, useState } from "react";

export default function Map({
  mapboxToken,
  data,
}: {
  mapboxToken: string;
  data: DataOptionType;
}) {
  const [layer, setLayer] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (data.id === "sf-mobile-food-permit-data") {
      setLayer(
        new HexagonLayer({
          id: data.id,
          data: data.dataUrl,
          getPosition: getPositions(data.id),
          pickable: true,
          extruded: true,
          radius: 200,
          elevationScale: 15,
          colorRange: [
            [239, 243, 255],
            [198, 219, 239],
            [158, 202, 225],
            [107, 174, 214],
            [49, 130, 189],
            [8, 81, 156],
          ],
          onDataLoad: () => setLoading(false),
          // Callback function of HexagonLayer - passed as parameter to another
          // function & executed at some point after outer function is invoked
          // (placed at the "back").
          // Will set loading to false after HexagonLayer is invoked.
        })
      );
    } else {
      setLayer(
        new HeatmapLayer({
          id: data.id,
          data: data.dataUrl,
          getPosition: getPositions(data.id),
          aggregation: "SUM",
          radiusPixels: 200,
          onDataLoad: () => setLoading(false),
        })
      );
    }
  }, [data.id]);

  useEffect(() => {
    setLoading(true);
  }, [data.id]); // executed when data.id changes

  return (
    <Box position="relative" height="100%">
      <Box position="relative" height="100%">
        <DeckGL
          initialViewState={data.initialViewState}
          controller={true}
          layers={[layer]}
        >
          <GLMap
            mapboxAccessToken={mapboxToken}
            mapStyle="mapbox://styles/mapbox/light-v9"
          />
          <Box
            position="absolute"
            bottom={8}
            left={8}
            borderRadius={8}
            bgcolor="rgb(174, 214, 241, 0.7)"
            style={{ maxWidth: "302px" }}
          >
            <Box px={2} pb={2} fontSize={14}>
              <h2>{data.label}</h2>
              <p>{data.description}</p>
              <a href={data.referenceUrl} target="_blank" rel="noreferrer">
                Reference data
              </a>
            </Box>
          </Box>
        </DeckGL>
      </Box>
      {loading ? (
        <Box
          position="absolute"
          top="0"
          left="0"
          width="100%"
          height="100%"
          bgcolor="rgb(169, 169, 169, 0.5)" // .5 transparency
          alignItems="center"
          justifyContent="center"
          display="flex"
        >
          {/* shaded screen to indicate loading state */}
          <CircularProgress />
        </Box>
      ) : null}
    </Box>
  );
}
