import Map from "../components/map.client";
// Import of Map component is suspended until code sent to client side by using
// ClientOnly tag.
import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getData } from "~/data";
import { ClientOnly } from "remix-utils/client-only";

export const loader = ({ params }: LoaderFunctionArgs) => {
  invariant(params.dataId, "Missing dataId param");
  const data = getData(params.dataId);
  if (!data) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ data, mapboxToken: process.env.MAPBOX_ACCESS_TOKEN });
  // Use loader function to make environment variable available in client-side
  // rather than in server-side which is default case.
};

export default function Data() {
  const { mapboxToken, data } = useLoaderData<typeof loader>();
  if (!mapboxToken) {
    throw new Error("Mapbox token is not defined");
  }

  return (
    <ClientOnly fallback={<div>Loading...</div>}>
      {() => <Map mapboxToken={mapboxToken} data={data} />}
    </ClientOnly>
  );
}
