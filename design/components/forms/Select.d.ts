import * as React from 'react';

export interface SelectOption { value: string; label: string; }

/** Labelled native dropdown styled to match the form family. */
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'children'> {
  label?: string;
  hint?: string;
  error?: string;
  placeholder?: string;
  options?: (SelectOption | string)[];
}
export declare function Select(props: SelectProps): React.JSX.Element;
