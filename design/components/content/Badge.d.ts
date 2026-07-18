import * as React from 'react';

export type BadgeTone = 'neutral' | 'success' | 'warning' | 'danger' | 'info';

/** Status marker with optional leading dot ("Live", "Available"). */
export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone;
  dot?: boolean;
  solid?: boolean;
  children?: React.ReactNode;
}
export declare function Badge(props: BadgeProps): React.JSX.Element;
