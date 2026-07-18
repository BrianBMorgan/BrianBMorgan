import { notFound } from 'next/navigation';
import { PageHeader, Section } from '@/components/Section';
import { WorkCard } from '@/components/WorkCard';
import { WORK_CATEGORIES, getWorkCategory, getWorkItems } from '@/lib/content';

export function generateStaticParams() {
  return WORK_CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }) {
  const { category } = await params;
  const cat = getWorkCategory(category);
  if (!cat) return {};
  return { title: `${cat.label} — Work`, description: cat.description };
}

export default async function WorkCategoryPage({ params }) {
  const { category } = await params;
  const cat = getWorkCategory(category);
  if (!cat) notFound();

  const items = getWorkItems(cat.slug);

  return (
    <>
      <div style={{ paddingTop: 'var(--space-9)' }}>
        <PageHeader eyebrow={`Work · ${cat.label}`} title={cat.label} lede={cat.description} />
      </div>
      <Section style={{ paddingTop: 'var(--space-7)' }}>
        {items.length ? (
          <div className="grid-2">
            {items.map((item) => (
              <WorkCard key={item.slug} item={item} />
            ))}
          </div>
        ) : (
          <p style={{ color: 'var(--text-muted)' }}>
            Nothing published here yet — drop a file into{' '}
            <code>content/work/{cat.slug}/</code> to add the first project.
          </p>
        )}
      </Section>
    </>
  );
}
