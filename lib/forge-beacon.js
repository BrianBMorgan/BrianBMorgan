// Forge My Website first-party beacon config for thought-leadership articles.
// Beacon keys are designed for browser JS (not the forge_pub publish token).
// Map key = frontmatter `brand` from mailforge forge-publish (source: forge).
//
// data-brand must be the Forge Intelligence brand_profiles.id for that brand
// or events 401 / land on the wrong Performance tab.

export const FORGE_BEACONS = {
  // Agentcy Core → FI brand f11df1f0-b1b2-4688-94f9-5e0f85d99977
  'agentcy-core': {
    brandId: 'f11df1f0-b1b2-4688-94f9-5e0f85d99977',
    key: 'forge_beacon_d72b09b9093bd31c787660436474d80252085ed6965f98840592b2684dbbc59c',
  },
  // Brian B. Morgan personal brand — generate beacon in FI when ready
  brianbmorgan: {
    brandId: 'e6f79032-51ed-4d0c-83ee-d39a648cea0b',
    key: '', // paste forge_beacon_… from FI → Integrations → My Website
  },
};

export function beaconForArticle(article) {
  if (!article || article.source !== 'forge') return null;
  const brandKey = article.brand || 'brianbmorgan';
  const cfg = FORGE_BEACONS[brandKey];
  if (!cfg?.brandId || !cfg?.key) return null;
  return cfg;
}
