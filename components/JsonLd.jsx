// Renders one or more JSON-LD structured-data blocks. Server component — the
// script tags are emitted into the static HTML, which is exactly what crawlers
// and AI search engines read. Accepts a single object or an array.

// Escape the characters that could let a value break out of the <script>
// element (e.g. a "</script>" or "<!--" sequence inside a title/summary).
// The replacements are valid JSON string escapes, so the payload still parses
// identically as JSON-LD.
function serialize(obj) {
  return JSON.stringify(obj)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');
}

export function JsonLd({ data }) {
  const items = (Array.isArray(data) ? data : [data]).filter(Boolean);
  return (
    <>
      {items.map((d, i) => (
        <script
          key={d['@id'] || d['@type'] || i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: serialize(d) }}
        />
      ))}
    </>
  );
}
