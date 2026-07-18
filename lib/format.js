// Pure formatting helpers — safe to import from client components.
export function readingTime(text) {
  const words = String(text).trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 220));
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });
}
