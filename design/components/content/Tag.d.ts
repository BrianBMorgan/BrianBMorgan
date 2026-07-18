import * as React from 'react';

export type TagTone = 'neutral' | 'gold' | 'sage' | 'rust' | 'blue';

/** Small mono pill for skills, tech stack and categories. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: TagTone;
  filled?: boolean;
  size?: 'sm' | 'md';
  children?: React.ReactNode;
}
export declare function Tag(props: TagProps): React.JSX.Element;
