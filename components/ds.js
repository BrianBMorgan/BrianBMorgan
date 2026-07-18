'use client';
// Client boundary for the design system primitives. They use hover/focus state
// internally but ship without the 'use client' directive, so consumers import
// them through this barrel instead of from design/ directly.
export { Button } from '@/design/components/forms/Button';
export { IconButton } from '@/design/components/forms/IconButton';
export { Input } from '@/design/components/forms/Input';
export { Select } from '@/design/components/forms/Select';
export { Textarea } from '@/design/components/forms/Textarea';
export { Badge } from '@/design/components/content/Badge';
export { Card } from '@/design/components/content/Card';
export { Eyebrow } from '@/design/components/content/Eyebrow';
export { Stat } from '@/design/components/content/Stat';
export { Tag } from '@/design/components/content/Tag';
export { Avatar } from '@/design/components/media/Avatar';
