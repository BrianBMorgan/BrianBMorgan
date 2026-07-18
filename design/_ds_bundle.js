/* @ds-bundle: {"format":4,"namespace":"BrianBMorganDesignSystem_219fa3","components":[{"name":"Badge","sourcePath":"components/content/Badge.jsx"},{"name":"Card","sourcePath":"components/content/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/content/Eyebrow.jsx"},{"name":"Stat","sourcePath":"components/content/Stat.jsx"},{"name":"Tag","sourcePath":"components/content/Tag.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Avatar","sourcePath":"components/media/Avatar.jsx"},{"name":"Icon","sourcePath":"components/media/Icon.jsx"}],"sourceHashes":{"components/content/Badge.jsx":"028841ec0180","components/content/Card.jsx":"93fc322c9bfb","components/content/Eyebrow.jsx":"21af114af34a","components/content/Stat.jsx":"d99141e8aa29","components/content/Tag.jsx":"dadacaabb5cd","components/forms/Button.jsx":"531ece93d63f","components/forms/IconButton.jsx":"a12570680857","components/forms/Input.jsx":"b24b36e682d8","components/forms/Select.jsx":"1b656d3f250b","components/forms/Textarea.jsx":"9c3d511ab1c0","components/media/Avatar.jsx":"57a1c8c750fc","components/media/Icon.jsx":"c3d72b99077b","ui_kits/portfolio/About.jsx":"67c935415b15","ui_kits/portfolio/Contact.jsx":"971a2d6c7c34","ui_kits/portfolio/Footer.jsx":"0c60c51b9e57","ui_kits/portfolio/Hero.jsx":"cfdec993476c","ui_kits/portfolio/Nav.jsx":"146cfb60e258","ui_kits/portfolio/Work.jsx":"cadc9ee7ad6e"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BrianBMorganDesignSystem_219fa3 = window.BrianBMorganDesignSystem_219fa3 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/content/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: {
    dot: 'var(--charcoal-400)',
    text: 'var(--charcoal-600)'
  },
  success: {
    dot: 'var(--success)',
    text: 'var(--success)'
  },
  warning: {
    dot: 'var(--warning)',
    text: 'var(--warning)'
  },
  danger: {
    dot: 'var(--danger)',
    text: 'var(--danger)'
  },
  info: {
    dot: 'var(--info)',
    text: 'var(--info)'
  }
};

/**
 * Badge — a status marker with an optional leading dot. Use for availability,
 * project state ("Live", "Archived"), etc.
 */
function Badge({
  tone = 'neutral',
  dot = true,
  solid = false,
  className = '',
  style = {},
  children,
  ...rest
}) {
  const t = tones[tone];
  if (solid) {
    return /*#__PURE__*/React.createElement("span", _extends({
      className: className,
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 'var(--space-2)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--weight-semibold)',
        padding: '3px var(--space-3)',
        borderRadius: 'var(--radius-pill)',
        background: t.dot,
        color: 'var(--white)',
        ...style
      }
    }, rest), children);
  }
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      color: t.text,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: t.dot,
      flex: 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Badge.jsx", error: String((e && e.message) || e) }); }

// components/content/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const variants = {
  paper: {
    background: 'var(--surface-card)',
    border: '1px solid var(--border-subtle)',
    boxShadow: 'var(--shadow-sm)'
  },
  sunken: {
    background: 'var(--surface-sunken)',
    border: '1px solid var(--border-subtle)',
    boxShadow: 'none'
  },
  outline: {
    background: 'transparent',
    border: '1px solid var(--border-default)',
    boxShadow: 'none'
  },
  inverse: {
    background: 'var(--charcoal-900)',
    border: '1px solid var(--charcoal-700)',
    boxShadow: 'var(--shadow-md)',
    color: 'var(--text-on-dark)'
  }
};
const pads = {
  none: 0,
  sm: 'var(--space-4)',
  md: 'var(--space-5)',
  lg: 'var(--space-7)'
};

/**
 * Card — the primary content container. Paper by default; hoverable lifts on
 * hover for clickable project tiles.
 */
function Card({
  variant = 'paper',
  padding = 'md',
  hoverable = false,
  as = 'div',
  className = '',
  style = {},
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: className,
    onMouseEnter: () => hoverable && setHover(true),
    onMouseLeave: () => hoverable && setHover(false),
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: pads[padding],
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
      ...variants[variant],
      ...(hoverable && hover ? {
        boxShadow: 'var(--shadow-lg)',
        transform: 'translateY(-3px)',
        borderColor: 'var(--gold-400)'
      } : {}),
      ...(hoverable ? {
        cursor: 'pointer'
      } : {}),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Card.jsx", error: String((e && e.message) || e) }); }

// components/content/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Eyebrow — the monospaced, uppercase kicker used above headings throughout
 * the brand. Optionally prefixed by a short rule.
 */
function Eyebrow({
  rule = false,
  color = 'var(--accent-primary)',
  as = 'div',
  className = '',
  style = {},
  children,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-3)',
      fontFamily: 'var(--font-mono)',
      fontWeight: 'var(--weight-medium)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-wider)',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, rest), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 2,
      background: 'currentColor',
      flex: 'none',
      opacity: 0.7
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Stat — a large serif figure over a monospaced label. Used in about/impact
 * sections ("12 yrs", "40+ projects").
 */
function Stat({
  value,
  label,
  sub,
  align = 'left',
  accent = 'var(--text-strong)',
  className = '',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-1)',
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: 'var(--text-3xl)',
      lineHeight: 1,
      color: accent,
      letterSpacing: 'var(--tracking-tight)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-body)'
    }
  }, sub));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Stat.jsx", error: String((e && e.message) || e) }); }

// components/content/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const tones = {
  neutral: {
    background: 'var(--parchment-200)',
    color: 'var(--charcoal-700)',
    border: 'var(--border-subtle)'
  },
  gold: {
    background: 'var(--gold-200)',
    color: 'var(--gold-700)',
    border: 'var(--gold-400)'
  },
  sage: {
    background: 'var(--sage-100)',
    color: 'var(--sage-700)',
    border: 'var(--sage-300)'
  },
  rust: {
    background: 'var(--rust-100)',
    color: 'var(--rust-700)',
    border: 'var(--rust-300)'
  },
  blue: {
    background: 'var(--blue-100)',
    color: 'var(--blue-700)',
    border: 'var(--blue-300)'
  }
};

/**
 * Tag — a small pill for skills, tech stack, categories. Outline by default,
 * solid-tint when filled.
 */
function Tag({
  tone = 'neutral',
  filled = false,
  size = 'md',
  className = '',
  style = {},
  children,
  ...rest
}) {
  const t = tones[tone];
  const s = size === 'sm' ? {
    fontSize: 'var(--text-2xs)',
    padding: '2px var(--space-2)'
  } : {
    fontSize: 'var(--text-xs)',
    padding: '4px var(--space-3)'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 'var(--space-1)',
      fontFamily: 'var(--font-mono)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      borderRadius: 'var(--radius-sm)',
      border: `1px solid ${filled ? 'transparent' : t.border}`,
      background: filled ? t.background : 'transparent',
      color: t.color,
      ...s,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Tag.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const base = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 'var(--weight-semibold)',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 'var(--space-2)',
  border: '1px solid transparent',
  borderRadius: 'var(--radius-md)',
  cursor: 'pointer',
  textDecoration: 'none',
  lineHeight: 1,
  whiteSpace: 'nowrap',
  letterSpacing: 'var(--tracking-snug)',
  transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)'
};
const sizes = {
  sm: {
    fontSize: 'var(--text-sm)',
    padding: '0 var(--space-3)',
    height: 34
  },
  md: {
    fontSize: 'var(--text-sm)',
    padding: '0 var(--space-5)',
    height: 42
  },
  lg: {
    fontSize: 'var(--text-md)',
    padding: '0 var(--space-6)',
    height: 52
  }
};
const variants = {
  primary: {
    background: 'var(--gold-600)',
    color: 'var(--text-on-gold)',
    borderColor: 'var(--gold-600)'
  },
  secondary: {
    background: 'var(--surface-card)',
    color: 'var(--charcoal-800)',
    borderColor: 'var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--charcoal-700)',
    borderColor: 'transparent'
  },
  inverse: {
    background: 'var(--charcoal-900)',
    color: 'var(--text-on-dark)',
    borderColor: 'var(--charcoal-900)'
  },
  link: {
    background: 'transparent',
    color: 'var(--link)',
    borderColor: 'transparent',
    padding: 0,
    height: 'auto'
  }
};

/**
 * Button — the primary call to action. Gold-primary leads; secondary is a
 * hairline-bordered paper button; ghost and link recede; inverse sits on
 * light sections.
 */
function Button({
  variant = 'primary',
  size = 'md',
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  as = 'button',
  className = '',
  style = {},
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const Tag = as;
  const hoverStyle = !disabled && hover ? {
    primary: {
      background: 'var(--gold-700)',
      borderColor: 'var(--gold-700)'
    },
    secondary: {
      borderColor: 'var(--charcoal-500)',
      background: 'var(--parchment-50)'
    },
    ghost: {
      background: 'var(--parchment-200)'
    },
    inverse: {
      background: 'var(--charcoal-800)'
    },
    link: {
      color: 'var(--link-hover)'
    }
  }[variant] : {};
  const composed = {
    ...base,
    ...sizes[size],
    ...variants[variant],
    ...hoverStyle,
    ...(fullWidth ? {
      width: '100%'
    } : {}),
    ...(active && !disabled && variant !== 'link' ? {
      transform: 'translateY(1px)'
    } : {}),
    ...(disabled ? {
      opacity: 0.45,
      cursor: 'not-allowed'
    } : {}),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: className,
    style: composed,
    disabled: Tag === 'button' ? disabled : undefined,
    "aria-disabled": disabled || undefined,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setActive(false);
    },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false)
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 34,
  md: 42,
  lg: 52
};
const variants = {
  primary: {
    background: 'var(--gold-600)',
    color: 'var(--text-on-gold)',
    borderColor: 'var(--gold-600)'
  },
  secondary: {
    background: 'var(--surface-card)',
    color: 'var(--charcoal-800)',
    borderColor: 'var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--charcoal-600)',
    borderColor: 'transparent'
  },
  inverse: {
    background: 'var(--charcoal-900)',
    color: 'var(--text-on-dark)',
    borderColor: 'var(--charcoal-900)'
  }
};

/**
 * IconButton — a square, icon-only control for toolbars, cards and nav.
 * Pass a single Icon as children.
 */
function IconButton({
  variant = 'ghost',
  size = 'md',
  round = false,
  disabled = false,
  label,
  className = '',
  style = {},
  children,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = sizes[size];
  const hoverStyle = !disabled && hover ? {
    primary: {
      background: 'var(--gold-700)',
      borderColor: 'var(--gold-700)'
    },
    secondary: {
      borderColor: 'var(--charcoal-500)',
      background: 'var(--parchment-50)'
    },
    ghost: {
      background: 'var(--parchment-200)',
      color: 'var(--charcoal-800)'
    },
    inverse: {
      background: 'var(--charcoal-800)'
    }
  }[variant] : {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    className: className,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid transparent',
      borderRadius: round ? 'var(--radius-pill)' : 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
      ...variants[variant],
      ...hoverStyle,
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — labelled single-line text field with optional hint & error.
 */
function Input({
  label,
  hint,
  error,
  id,
  type = 'text',
  leadingIcon,
  disabled = false,
  className = '',
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--focus-ring)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      background: disabled ? 'var(--parchment-200)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: '0 var(--space-3)',
      boxShadow: focus ? 'var(--focus-ring-shadow)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)'
    }
  }, leadingIcon && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-subtle)',
      display: 'inline-flex'
    }
  }, leadingIcon), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      flex: 1,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      padding: 'var(--space-3) 0',
      minWidth: 0
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — labelled native dropdown styled to match the form family.
 * Pass options as [{value,label}] or plain strings.
 */
function Select({
  label,
  hint,
  error,
  id,
  options = [],
  placeholder,
  disabled = false,
  className = '',
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--focus-ring)' : 'var(--border-default)';
  const norm = options.map(o => typeof o === 'string' ? {
    value: o,
    label: o
  } : o);
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      background: disabled ? 'var(--parchment-200)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-3) var(--space-7) var(--space-3) var(--space-4)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      outline: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      boxShadow: focus ? 'var(--focus-ring-shadow)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)'
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), norm.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label))), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      right: 'var(--space-4)',
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-subtle)',
      fontSize: 12
    }
  }, "\u25BE")), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Textarea — labelled multi-line text field, matching Input's chrome.
 */
function Textarea({
  label,
  hint,
  error,
  id,
  rows = 4,
  disabled = false,
  className = '',
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  const borderColor = error ? 'var(--danger)' : focus ? 'var(--focus-ring)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    className: className,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-2)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-semibold)',
      color: 'var(--text-strong)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    disabled: disabled,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      resize: 'vertical',
      background: disabled ? 'var(--parchment-200)' : 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      padding: 'var(--space-3) var(--space-4)',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-body)',
      lineHeight: 'var(--leading-normal)',
      outline: 'none',
      boxShadow: focus ? 'var(--focus-ring-shadow)' : 'none',
      transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)'
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--danger)' : 'var(--text-muted)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/media/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: 32,
  md: 44,
  lg: 64,
  xl: 96
};

/**
 * Avatar — a circular portrait or monogram fallback. Warm parchment ring by
 * default; used for the author and testimonial faces.
 */
function Avatar({
  src,
  alt = '',
  name = '',
  size = 'md',
  ring = true,
  className = '',
  style = {},
  ...rest
}) {
  const d = sizes[size] || size;
  const initials = name.split(' ').map(n => n[0]).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    className: className,
    style: {
      width: d,
      height: d,
      flex: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      overflow: 'hidden',
      background: 'var(--sage-100)',
      color: 'var(--sage-700)',
      fontFamily: 'var(--font-display)',
      fontWeight: 'var(--weight-semibold)',
      fontSize: d * 0.4,
      border: ring ? '2px solid var(--parchment-50)' : 'none',
      boxShadow: ring ? 'var(--shadow-sm)' : 'none',
      ...style
    }
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/media/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Icon — thin wrapper around Lucide icons (the system's only icon set).
 * Requires the Lucide UMD script to be present on the page; it renders an
 * <i data-lucide> placeholder and asks Lucide to hydrate it.
 */
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  color = 'currentColor',
  className = '',
  style = {},
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const lucide = typeof window !== 'undefined' ? window.lucide : null;
    if (lucide && ref.current) {
      // hydrate just this node
      lucide.createIcons({
        nameAttr: 'data-lucide',
        icons: lucide.icons,
        attrs: {},
        root: ref.current.parentNode
      });
    }
  });
  return /*#__PURE__*/React.createElement("i", _extends({
    ref: ref,
    "data-lucide": name,
    className: className,
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      color,
      ['--lucide-stroke-width']: strokeWidth,
      strokeWidth,
      verticalAlign: 'middle',
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Icon.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/About.jsx
try { (() => {
// About — dark editorial band with portrait, bio and client logos strip.
const {
  Eyebrow,
  Stat,
  Tag,
  Avatar,
  Icon
} = window.BrianBMorganDesignSystem_219fa3;
function About() {
  const skills = ['Design systems', 'Product design', 'Brand identity', 'Front-end (React)', 'Motion', 'Art direction', 'Typography', 'Prototyping'];
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      background: 'var(--charcoal-900)',
      color: 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '80px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '300px 1fr',
      gap: 64,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '3/4',
      borderRadius: 14,
      background: 'linear-gradient(160deg, var(--gold-500), var(--rust-700))',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 20,
      boxShadow: 'var(--shadow-xl)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user",
    size: 110,
    color: "rgba(0,0,0,0.15)",
    style: {
      position: 'absolute',
      top: 26,
      right: 18
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 600,
      color: 'var(--charcoal-900)'
    }
  }, "Brian B. Morgan")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true,
    color: "var(--gold-400)"
  }, "About"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 38,
      margin: '14px 0 20px',
      color: 'var(--parchment-50)',
      letterSpacing: '-0.02em'
    }
  }, "A designer who codes, and a maker who cares about the last five percent."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.75,
      color: 'var(--text-on-dark-muted)',
      maxWidth: '62ch'
    }
  }, "I've spent twelve years helping teams turn ambitious ideas into products people trust. My work sits between disciplines \u2014 enough design sensibility to set direction, enough engineering to ship it \u2014 and I care most about the quiet details that make an interface feel considered."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      flexWrap: 'wrap',
      margin: '24px 0 34px'
    }
  }, skills.map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s,
    tone: "sage",
    filled: true
  }, s))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 48,
      borderTop: '1px solid var(--charcoal-700)',
      paddingTop: 26
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "12",
    label: "Years shipping",
    accent: "var(--gold-400)"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "40+",
    label: "Projects delivered",
    accent: "var(--parchment-100)"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "9",
    label: "Industries",
    accent: "var(--sage-300)"
  }))))));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Contact.jsx
try { (() => {
// Contact — form that validates & shows a thank-you state on submit.
const {
  Card,
  Input,
  Textarea,
  Select,
  Button,
  Eyebrow,
  Badge,
  Icon
} = window.BrianBMorganDesignSystem_219fa3;
function Contact() {
  const [sent, setSent] = React.useState(false);
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [err, setErr] = React.useState(false);
  const submit = () => {
    if (!name || !email) {
      setErr(true);
      return;
    }
    setErr(false);
    setSent(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '80px 32px 96px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 72,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Contact"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 46,
      margin: '14px 0 18px',
      letterSpacing: '-0.025em',
      lineHeight: 1.05
    }
  }, "Let's make something worth keeping."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.7,
      color: 'var(--text-body)',
      maxWidth: '42ch',
      marginBottom: 28
    }
  }, "I take on a handful of projects each quarter. Tell me what you're building and I'll get back within two days."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, [['mail', 'hello@brianmorgan.design'], ['map-pin', 'Portland, Oregon'], ['clock', 'Replies within 48 hours']].map(([ic, t]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 18,
    color: "var(--gold-600)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16
    }
  }, t))))), /*#__PURE__*/React.createElement(Card, {
    variant: "paper",
    padding: "lg"
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      padding: '32px 12px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 56,
      height: 56,
      borderRadius: '50%',
      background: 'var(--sage-100)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 26,
    color: "var(--sage-700)"
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 26,
      margin: '0 0 8px'
    }
  }, "Message sent"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-muted)',
      margin: '0 0 20px'
    }
  }, "Thanks, ", name.split(' ')[0] || 'friend', " \u2014 I'll be in touch soon."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => {
      setSent(false);
      setName('');
      setEmail('');
    }
  }, "Send another")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Name",
    placeholder: "Your name",
    value: name,
    onChange: e => setName(e.target.value),
    error: err && !name ? 'Please add your name' : ''
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "you@studio.com",
    value: email,
    onChange: e => setEmail(e.target.value),
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: 15
    }),
    error: err && !email ? 'Please add an email' : ''
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Project type",
    placeholder: "Select one",
    options: ['Design system', 'Product design', 'Brand & site', 'Advisory']
  }), /*#__PURE__*/React.createElement(Textarea, {
    label: "Brief",
    rows: 4,
    placeholder: "A sentence or two about the work\u2026"
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    fullWidth: true,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "send",
      size: 17
    }),
    onClick: submit
  }, "Send message")))));
}
window.Contact = Contact;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Footer.jsx
try { (() => {
// Footer — wordmark, nav echo, social icons, colophon.
const {
  IconButton,
  Icon,
  Eyebrow
} = window.BrianBMorganDesignSystem_219fa3;
function Footer({
  onNav
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--charcoal-900)',
      color: 'var(--text-on-dark-muted)',
      borderTop: '1px solid var(--charcoal-700)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '56px 32px 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      gap: 32,
      paddingBottom: 36,
      borderBottom: '1px solid var(--charcoal-700)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 360
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 24,
      color: 'var(--parchment-50)',
      letterSpacing: '-0.02em',
      marginBottom: 10
    }
  }, "Brian B. Morgan"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 15,
      lineHeight: 1.6,
      margin: 0
    }
  }, "Design engineer building considered products at the seam of craft and code.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 64
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--gold-400)"
  }, "Explore"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      marginTop: 14
    }
  }, [['work', 'Work'], ['about', 'About'], ['contact', 'Contact']].map(([id, l]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => onNav(id),
    style: {
      background: 'none',
      border: 'none',
      textAlign: 'left',
      cursor: 'pointer',
      color: 'var(--text-on-dark-muted)',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      padding: 0
    }
  }, l)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    color: "var(--gold-400)"
  }, "Elsewhere"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "GitHub",
    variant: "inverse"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "github",
    size: 18
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "LinkedIn",
    variant: "inverse"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "linkedin",
    size: 18
  })), /*#__PURE__*/React.createElement(IconButton, {
    label: "Email",
    variant: "inverse"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 18
  })))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingTop: 24,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      letterSpacing: '0.04em'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2024 Brian B. Morgan"), /*#__PURE__*/React.createElement("span", null, "Portland, OR \xB7 Made with care"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
// Hero — editorial intro with eyebrow, serif headline, availability badge, stats.
const {
  Button,
  Badge,
  Eyebrow,
  Stat,
  Tag,
  Icon
} = window.BrianBMorganDesignSystem_219fa3;
function Hero({
  onNav
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '96px 32px 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.35fr 1fr',
      gap: 64,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Portfolio \xB7 2024"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 68,
      lineHeight: 1.04,
      letterSpacing: '-0.025em',
      margin: '18px 0 22px',
      color: 'var(--charcoal-900)'
    }
  }, "I design and build", /*#__PURE__*/React.createElement("br", null), "things that ", /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      color: 'var(--gold-600)'
    }
  }, "endure"), "."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      lineHeight: 1.65,
      color: 'var(--text-body)',
      maxWidth: '48ch',
      margin: '0 0 28px'
    }
  }, "Design engineer with a decade of shipping considered products \u2014 from brand systems to the interfaces that carry them. Currently building at the seam of craft and code."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      marginBottom: 34
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "lg",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 18
    }),
    onClick: () => onNav('work')
  }, "View selected work"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "lg",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "download",
      size: 17
    })
  }, "R\xE9sum\xE9")), /*#__PURE__*/React.createElement(Badge, {
    tone: "success"
  }, "Available for select projects \u2014 Q3 2024")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '4/5',
      borderRadius: 14,
      background: 'linear-gradient(160deg, var(--sage-500), var(--sage-700))',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 22,
      boxShadow: 'var(--shadow-lg)',
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "user",
    size: 120,
    color: "rgba(255,255,255,0.16)",
    style: {
      position: 'absolute',
      top: 24,
      right: 20
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      color: 'var(--parchment-50)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      opacity: 0.85
    }
  }, "Based in"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 600
    }
  }, "Portland, OR"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '4px 6px'
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "12",
    label: "Years"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "40+",
    label: "Projects",
    accent: "var(--gold-600)"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "6",
    label: "Awards",
    accent: "var(--rust-600)"
  })))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Nav.jsx
try { (() => {
// Portfolio nav — sticky top bar with wordmark + links + CTA.
const {
  Button,
  IconButton,
  Icon
} = window.BrianBMorganDesignSystem_219fa3;
function Nav({
  current,
  onNav
}) {
  const links = [['work', 'Work'], ['about', 'About'], ['writing', 'Writing'], ['contact', 'Contact']];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 100,
      background: 'color-mix(in srgb, var(--parchment-100) 88%, transparent)',
      backdropFilter: 'var(--blur-panel)',
      WebkitBackdropFilter: 'var(--blur-panel)',
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 32px',
      height: 68,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      onNav('work');
    },
    style: {
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'baseline',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 22,
      color: 'var(--charcoal-900)',
      letterSpacing: '-0.02em'
    }
  }, "Brian B. Morgan"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: 'var(--accent-primary)'
    }
  }, "Design Engineer")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, links.map(([id, label]) => /*#__PURE__*/React.createElement("button", {
    key: id,
    onClick: () => onNav(id),
    style: {
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 500,
      padding: '8px 14px',
      borderRadius: 6,
      color: current === id ? 'var(--charcoal-900)' : 'var(--charcoal-500)'
    }
  }, label)), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 22,
      background: 'var(--border-default)',
      margin: '0 8px'
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: "GitHub",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "github",
    size: 19
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    }),
    onClick: () => onNav('contact')
  }, "Hire me"))));
}
window.Nav = Nav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Work.jsx
try { (() => {
// Work — selected-work grid; clicking a project opens an inline detail view.
const {
  Card,
  Tag,
  Eyebrow,
  Button,
  Badge,
  Icon
} = window.BrianBMorganDesignSystem_219fa3;
const PROJECTS = [{
  id: 'rivet',
  name: 'Rivet',
  kind: 'Brand & Design System',
  year: '2024',
  color: 'var(--blue-700)',
  accent: 'var(--blue-500)',
  tags: ['Design systems', 'Brand', 'React'],
  desc: 'Identity, tokens and a component library for a fintech infrastructure studio.',
  status: 'Live'
}, {
  id: 'foundry',
  name: 'Foundry OS',
  kind: 'Product Design',
  year: '2023',
  color: 'var(--charcoal-800)',
  accent: 'var(--gold-500)',
  tags: ['Product', 'Figma', 'Motion'],
  desc: 'End-to-end design for a developer operations platform used by 20k teams.',
  status: 'Live'
}, {
  id: 'meridian',
  name: 'Meridian',
  kind: 'Marketing Site',
  year: '2023',
  color: 'var(--sage-700)',
  accent: 'var(--sage-500)',
  tags: ['Web', 'Art direction'],
  desc: 'A restrained, typographic marketing site for a climate analytics firm.',
  status: 'Live'
}, {
  id: 'atlas',
  name: 'Atlas Field Guide',
  kind: 'Editorial / Print',
  year: '2022',
  color: 'var(--rust-700)',
  accent: 'var(--rust-500)',
  tags: ['Editorial', 'Print'],
  desc: 'A 120-page field guide pairing photography with a bespoke serif system.',
  status: 'Archived'
}];
function ProjectTile({
  p,
  onOpen
}) {
  return /*#__PURE__*/React.createElement(Card, {
    variant: "paper",
    padding: "none",
    hoverable: true,
    onClick: () => onOpen(p),
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16/10',
      background: p.color,
      position: 'relative',
      display: 'flex',
      alignItems: 'flex-end',
      padding: 20
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "square-dashed",
    size: 90,
    color: "rgba(255,255,255,0.12)",
    style: {
      position: 'absolute',
      top: 18,
      right: 18
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 30,
      fontWeight: 600,
      color: 'var(--parchment-50)',
      letterSpacing: '-0.02em'
    }
  }, p.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, p.kind), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-subtle)'
    }
  }, p.year)), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 16px',
      fontSize: 15,
      color: 'var(--text-body)',
      lineHeight: 1.55
    }
  }, p.desc), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    tone: "neutral"
  }, t)))));
}
function Work({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '40px 32px 72px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 34,
      borderTop: '3px solid var(--charcoal-900)',
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, "Selected Work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: 40,
      margin: '10px 0 0',
      letterSpacing: '-0.02em'
    }
  }, "Things I've built")), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 16
    })
  }, "All projects")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 28
    }
  }, PROJECTS.map(p => /*#__PURE__*/React.createElement(ProjectTile, {
    key: p.id,
    p: p,
    onOpen: onOpen
  }))));
}
function ProjectDetail({
  p,
  onBack
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 960,
      margin: '0 auto',
      padding: '40px 32px 80px'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 16
    }),
    onClick: onBack,
    style: {
      marginBottom: 24
    }
  }, "Back to work"), /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16/7',
      background: p.color,
      borderRadius: 14,
      display: 'flex',
      alignItems: 'flex-end',
      padding: 34,
      marginBottom: 32,
      position: 'relative',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "square-dashed",
    size: 160,
    color: "rgba(255,255,255,0.10)",
    style: {
      position: 'absolute',
      top: 24,
      right: 30
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 56,
      fontWeight: 600,
      color: 'var(--parchment-50)',
      letterSpacing: '-0.02em'
    }
  }, p.name)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 260px',
      gap: 48
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    rule: true
  }, p.kind), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 40,
      margin: '12px 0 18px'
    }
  }, p.desc), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.7,
      color: 'var(--text-body)'
    }
  }, "The engagement spanned strategy, identity and a production-ready component library. We defined a token architecture, drew the type system, and shipped the first surfaces in eight weeks \u2014 then handed off documentation the team still uses today."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      lineHeight: 1.7,
      color: 'var(--text-body)'
    }
  }, "The result reads as calm and deliberate: hairline rules, generous measure, and a restrained palette that lets the work carry the page.")), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 6
    }
  }, "Year"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: 'var(--text-strong)'
    }
  }, p.year)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 6
    }
  }, "Status"), /*#__PURE__*/React.createElement(Badge, {
    tone: p.status === 'Live' ? 'success' : 'neutral'
  }, p.status)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 8
    }
  }, "Stack"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, p.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t,
    tone: "gold"
  }, t)))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "external-link",
      size: 16
    })
  }, "Visit site"))));
}
window.Work = Work;
window.ProjectDetail = ProjectDetail;
window.PROJECTS = PROJECTS;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Work.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Icon = __ds_scope.Icon;

})();
