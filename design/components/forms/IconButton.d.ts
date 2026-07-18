import * as React from 'react';

export type IconButtonVariant = 'primary' | 'secondary' | 'ghost' | 'inverse';
export type IconButtonSize = 'sm' | 'md' | 'lg';

/** Square, icon-only control for toolbars, cards and nav. */
export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: IconButtonVariant;
  size?: IconButtonSize;
  round?: boolean;
  disabled?: boolean;
  /** Accessible label (also the tooltip title). */
  label?: string;
  children?: React.ReactNode;
}
export declare function IconButton(props: IconButtonProps): React.JSX.Element;
