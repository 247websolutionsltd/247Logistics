/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

import '@/global.css';

import { Platform } from 'react-native';

export const Colors = {
  primary: "#78A083",
  primaryTint: "#edf5f0",
  primaryDark: "#223226",
  light: {
    text: '#000000',
    background: '#ffffff',
    backgroundElement: '#f0f3f0',
    backgroundSelected: '#E0E1E6',
    tint: "#d6e7db",
    paper: '#f7fbf9',
    inkSoft: "#565660",
    line: "#EDEBE7",
    textSecondary: '#60646C',
    accentSurface: '#edf5f0',
    accentText: '#223226',
    controlOff: '#D9DDE1',
    controlThumb: '#FFFFFF',
  },
  dark: {
    text: '#ffffff',
    background: '#101311',
    backgroundElement: '#212225',
    backgroundSelected: '#2E3135',
    tint: "#344c3b",
    paper: '#171b18',
    inkSoft: "#7e7e85",
    line: "#3b443e",
    textSecondary: '#B0B4BA',
    accentSurface: '#26382d',
    accentText: '#d6e7db',
    controlOff: '#4A514C',
    controlThumb: '#FFFFFF',
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    /** iOS `UIFontDescriptorSystemDesignDefault` */
    sans: 'system-ui',
    /** iOS `UIFontDescriptorSystemDesignSerif` */
    serif: 'ui-serif',
    /** iOS `UIFontDescriptorSystemDesignRounded` */
    rounded: 'ui-rounded',
    /** iOS `UIFontDescriptorSystemDesignMonospaced` */
    mono: 'ui-monospace',
  },
  default: {
    sans: 'normal',
    serif: 'serif',
    rounded: 'normal',
    mono: 'monospace',
  },
  web: {
    sans: 'var(--font-display)',
    serif: 'var(--font-serif)',
    rounded: 'var(--font-rounded)',
    mono: 'var(--font-mono)',
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const Radius = {
  sm: 10,
  md: 16,
  lg: 24,
  pill: 999,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;
export const MaxContentWidth = 800;