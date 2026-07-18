import * as React from 'react';

/** Labelled single-line text field with optional hint & error. */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  hint?: string;
  error?: string;
  leadingIcon?: React.ReactNode;
  disabled?: boolean;
}
export declare function Input(props: InputProps): React.JSX.Element;
