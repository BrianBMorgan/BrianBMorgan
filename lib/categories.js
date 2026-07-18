// Work taxonomy — pure data, safe to import from client components.
export const WORK_CATEGORIES = [
  {
    slug: 'development',
    label: 'Development',
    description: 'Products and platforms shipped to production: the code side of the practice.',
    color: 'var(--blue-700)',
    tint: 'var(--blue-500)',
  },
  {
    slug: 'events',
    label: 'Events',
    description: 'Talks, workshops, and produced gatherings: the work of a room.',
    color: 'var(--rust-700)',
    tint: 'var(--rust-500)',
  },
  {
    slug: 'design',
    label: 'Design',
    description: 'Identity, systems, and editorial work: the visual voice.',
    color: 'var(--sage-700)',
    tint: 'var(--sage-500)',
  },
];

export function getWorkCategory(slug) {
  return WORK_CATEGORIES.find((c) => c.slug === slug);
}
