import * as React from 'react';

/** Large serif figure over a mono label for impact/about sections. */
export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  value: React.ReactNode;
  label: React.ReactNode;
  sub?: React.ReactNode;
  align?: 'left' | 'center' | 'right';
  accent?: string;
}
export declare function Stat(props: StatProps): React.JSX.Element;
