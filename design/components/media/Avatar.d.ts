import * as React from 'react';

/** Circular portrait or monogram fallback. */
export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string;
  alt?: string;
  name?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  ring?: boolean;
}
export declare function Avatar(props: AvatarProps): React.JSX.Element;
