import * as React from 'react';

/** Monospaced uppercase kicker used above headings. */
export interface EyebrowProps extends React.HTMLAttributes<HTMLElement> {
  rule?: boolean;
  color?: string;
  as?: any;
  children?: React.ReactNode;
}
export declare function Eyebrow(props: EyebrowProps): React.JSX.Element;
