import { spacing, roundness } from '../constants/theme';

export interface Theme {
  colors: {
    green: string,
    red: string,
    primary: string,
    accent: string,
    text: string,
    textMuted: string,
    spinner: string,
    background: string,
    transparentBackground: string,
    surface: string,
    divider: string,
    touchableHighlight: string,
    button: string
  },
  font: {
    light: string,
    regular: string,
    medium: string,
    bold: string
  },
  /**
   * Insets set by safe area view context
   */
  roundness: typeof roundness,
  spacing: typeof spacing
}

export interface ComputedTheme extends Theme {};