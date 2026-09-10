'use client';

import { useEffect } from 'react';

// Injects forge-beacon.js after mount so document.currentScript is set when
// the external script evaluates (next/script and RSC <script> both break that).
export function ForgeBeacon({ brandId, beaconKey, slug }) {
  useEffect(() => {
    if (!brandId || !beaconKey) return;
    if (typeof navigator !== 'undefined' && navigator.doNotTrack === '1') return;

    const existing = document.querySelector(
      'script[data-forge-beacon="1"][data-brand="' + brandId + '"]'
    );
    if (existing) return;

    const s = document.createElement('script');
    s.src = 'https://forgeintelligence.ai/forge-beacon.js';
    s.async = true;
    s.dataset.forgeBeacon = '1';
    s.dataset.brand = brandId;
    s.dataset.key = beaconKey;
    if (slug) s.dataset.slug = slug;
    document.body.appendChild(s);

    return () => {
      // leave the script in place across client navigations; beacon is idempotent enough
    };
  }, [brandId, beaconKey, slug]);

  return null;
}
