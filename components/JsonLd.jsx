// Renders one or more JSON-LD structured-data blocks. Server component — the
// script tags are emitted into the static HTML, which is exactly what crawlers
// and AI search engines read. Accepts a single object or an array.
export function JsonLd({ data }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((d, i) => (
        <script
          key={d['@id'] || d['@type'] || i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(d) }}
        />
      ))}
    </>
  );
}
