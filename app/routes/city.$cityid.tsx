import { ClientOnly } from 'remix-utils/client-only';
import { Suspense } from 'react';
  // import of Map component is suspended until code is sent to client side
import Map from '../components/map.client';
import { json } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

// Use loader function to make environment variable available in client-side
// rather than in server-side which is default case.
export const loader = async () => {
  return json({ mapboxToken: process.env.MAPBOX_ACCESS_TOKEN });
};

export default function City() {
  const { mapboxToken } = useLoaderData<typeof loader>();
  if (!mapboxToken) {
    throw new Error('Mapbox token is not defined');
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Map mapboxToken={mapboxToken}/>
    </Suspense>
  );
}