/**
 * OpenerText — the opening paragraph of a post, set larger than body copy.
 *
 * Renders a <div>, not a <p>. Written across lines, MDX wraps the children in
 * their own <p>, and a <p> inside a <p> makes the HTML parser close the outer
 * one early — which desynchronises SSR markup from React's tree and breaks
 * hydration. Written on one line, the children arrive as bare inline content.
 * The styles give the div a paragraph's bottom margin and drop the inner
 * paragraph's, so both forms render identically: same flow, same margins,
 * same measure. Only the size differs, and the weight stays normal — this is
 * a paragraph that happens to be large, not a heading.
 *
 * The size is --ifm-h4-font-size, Infima's own token, raised from its stock
 * 1rem to 1.25rem in custom.css. Stock would have rendered this identically to
 * body text, since `.markdown` enlarges only h1, h2 and h3.
 */
import React, {type ReactNode} from 'react';
import clsx from 'clsx';

import styles from './styles.module.css';

type Props = {
  children: ReactNode;
  className?: string;
};

export function OpenerText({children, className}: Props): ReactNode {
  return <div className={clsx(styles.opener, className)}>{children}</div>;
}
