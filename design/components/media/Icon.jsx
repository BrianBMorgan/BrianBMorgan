import React from 'react';

/**
 * Icon — thin wrapper around Lucide icons (the system's only icon set).
 * Requires the Lucide UMD script to be present on the page; it renders an
 * <i data-lucide> placeholder and asks Lucide to hydrate it.
 */
export function Icon({ name, size = 20, strokeWidth = 1.75, color = 'currentColor', className = '', style = {}, ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const lucide = typeof window !== 'undefined' ? window.lucide : null;
    if (lucide && ref.current) {
      // hydrate just this node
      lucide.createIcons({ nameAttr: 'data-lucide', icons: lucide.icons, attrs: {}, root: ref.current.parentNode });
    }
  });
  return (
    <i
      ref={ref}
      data-lucide={name}
      className={className}
      style={{
        display: 'inline-flex',
        width: size,
        height: size,
        color,
        ['--lucide-stroke-width']: strokeWidth,
        strokeWidth,
        verticalAlign: 'middle',
        ...style,
      }}
      {...rest}
    />
  );
}
