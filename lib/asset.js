// Deploy-aware asset URLs. Next.js prefixes its own links and bundled assets
// with basePath, but plain <img>/<video> srcs are passed through untouched —
// on a GitHub Pages project site (served under /<repo>/) they would 404.
// The Pages workflow sets NEXT_PUBLIC_BASE_PATH from configure-pages'
// base_path output; locally and on root-domain deploys it is empty.
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function asset(path) {
  if (typeof path !== 'string') return path;
  return path.startsWith('/') && !path.startsWith('//') ? `${BASE}${path}` : path;
}
