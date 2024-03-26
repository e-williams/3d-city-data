import { ClientOnly } from 'remix-utils/client-only';
import { Suspense } from 'react';
  // import of Map component is suspended until code is sent to client side

import Map from '../components/map.client';

export default function City() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Map />
    </Suspense>
  );
}