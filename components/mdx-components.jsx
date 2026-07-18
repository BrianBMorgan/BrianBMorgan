import { Figure } from '@/components/media/Figure';
import { Video } from '@/components/media/Video';
import { Badge, Stat, Tag } from '@/components/ds';

// Components available inside MDX bodies. Markdown primitives (headings,
// links, lists, code) are styled globally via base.css + .prose.
export const mdxComponents = {
  Figure,
  Video,
  Badge,
  Stat,
  Tag,
};
