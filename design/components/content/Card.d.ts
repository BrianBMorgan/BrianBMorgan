import * as React from 'react';

export type CardVariant = 'paper' | 'sunken' | 'outline' | 'inverse';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

/**
 * Primary content container. Paper by default; hoverable lifts for clickable
 * project tiles.
 */
export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  variant?: CardVariant;
  padding?: CardPadding;
  hoverable?: boolean;
  as?: any;
  children?: React.ReactNode;
}
export declare function Card(props: CardProps): React.JSX.Element;
