import { Theme } from '../types';

const BASE = 6;

export function spacing(): typeof BASE
export function spacing(multiplier: number): number
export function spacing(top: number, right: number): string
export function spacing(top: number, right: number, bottom: number): string
export function spacing(top: number, right: number, bottom: number, left: number): string
export function spacing(...args: number[]): number | string {
  if (args.length <= 1) {
    return (args[0] || 1) * BASE;
  }
  return args.map(num => `${BASE * num}px`).join(' ');
}

export function roundness(multiplier: number = 1) {
  return multiplier * BASE;
}

const main: Theme = {
  colors: {
    green: 'var(--green-color)',
    red: 'var(--red-color)',
    
    primary: 'var(--primary-color)',
    accent: 'var(--accent-color)',
    text: 'var(--text-color)',
    textMuted: 'var(--text-muted-color)',
    spinner: 'var(--spinner-color)',
    background: 'var(--background-color)',
    transparentBackground: 'var(--transparent-background-color)',
    surface: 'var(--surface-color)',
    divider: 'var(--divider-color)',
    touchableHighlight: 'var(--touchable-highlight-color)',
    button: 'var(--button-color)'
  },
  font: {
    light: '',
    regular: '',
    medium: '',
    bold: ''
  },
  roundness,
  spacing
}

const code = {
  "code[class*=\"language-\"]": {
    "color": "var(--code-variable2)",
    "direction": "ltr",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none"
  },
  "pre[class*=\"language-\"]": {
    "color": "var(--code-variable2)",
    "direction": "ltr",
    "textAlign": "left",
    "whiteSpace": "pre",
    "wordSpacing": "normal",
    "wordBreak": "normal",
    "lineHeight": "1.5",
    "MozTabSize": "4",
    "OTabSize": "4",
    "tabSize": "4",
    "WebkitHyphens": "none",
    "MozHyphens": "none",
    "msHyphens": "none",
    "hyphens": "none",
    "padding": "12px",
    "margin": ".5em 0",
    "overflow": "auto",
    "borderRadius": "6px",
    "background": "var(--code-background)"
  },
  ":not(pre) > code[class*=\"language-\"]": {
    "background": "#1d1f21",
    "padding": ".1em",
    "borderRadius": ".3em"
  },
  "comment": {
    "color": "var(--code-comment)"
  },
  "prolog": {
    "color": "#7C7C7C"
  },
  "doctype": {
    "color": "#7C7C7C"
  },
  "cdata": {
    "color": "#7C7C7C"
  },
  "punctuation": {
    "color": "var(--code-text)"
  },
  ".namespace": {
    "Opacity": ".7"
  },
  "property-access": {
    "color": "var(--code-property)"
  },
  "keyword": {
    "color": "var(--code-keyword)"
  },
  "tag": {
    "color": "var(--code-tag)"
  },
  "class-name": {
    "color": "var(--code-variable)"
  },
  "boolean": {
    "color": "var(--code-number)"
  },
  "constant": {
    "color": "#99CC99"
  },
  "symbol": {
    "color": "#f92672"
  },
  "deleted": {
    "color": "#f92672"
  },
  "number": {
    "color": "var(--code-number)"
  },
  "selector": {
    "color": "#A8FF60"
  },
  "attr-name": {
    "color": "var(--code-attribute)"
  },
  "string": {
    "color": "var(--code-string)"
  },
  "char": {
    "color": "#A8FF60"
  },
  "builtin": {
    "color": "#A8FF60"
  },
  "inserted": {
    "color": "#A8FF60"
  },
  "operator": {
    "color": "var(--code-operator)"
  },
  "entity": {
    "color": "#FFFFB6",
    "cursor": "help"
  },
  "url": {
    "color": "#96CBFE"
  },
  ".language-css .token.string": {
    "color": "#87C38A"
  },
  ".style .token.string": {
    "color": "#87C38A"
  },
  "atrule": {
    "color": "#F9EE98"
  },
  "attr-value": {
    "color": "var(--code-meta)"
  },
  "function": {
    "color": "var(--code-variable2)"
  },
  "variable": {
    "color": "var(--code-variable)"
  },
  "parameter": {
  "color": "var(--code-variable)"
  },
  "regex": {
    "color": "#E9C062"
  },
  "important": {
    "color": "#fd971f",
    "fontWeight": "bold"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "italic": {
    "fontStyle": "italic"
  }
}

export const themes = {
  main,
  code
}