import * as React from 'react';

/**
 * Lucide icon wrapper — the system's only icon set. Requires the Lucide UMD
 * script on the page. `name` is any Lucide kebab-case icon name.
 */
export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  size?: number;
  strokeWidth?: number;
  color?: string;
}
export declare function Icon(props: IconProps): React.JSX.Element;
