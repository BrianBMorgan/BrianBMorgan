'use client';
import Link from 'next/link';
import { Button } from '@/components/ds';

/** Design-system Button rendered as a Next.js Link for client-side navigation. */
export function LinkButton({ href, ...rest }) {
  return <Button as={Link} href={href} {...rest} />;
}
