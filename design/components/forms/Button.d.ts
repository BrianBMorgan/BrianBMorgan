import * as React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'inverse' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';

/**
 * Primary call-to-action button. Gold primary leads; secondary is a
 * hairline paper button; ghost/link recede; inverse for light sections.
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  /** Render as another element/component, e.g. 'a'. */
  as?: any;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): React.JSX.Element;
