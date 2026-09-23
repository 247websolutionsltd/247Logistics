/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { Colors } from '@/constants/theme';
import { useAppTheme } from '@/context/PageContext';
import { useColorScheme } from '@/hooks/use-color-scheme';

export function useTheme() {
  const { themeMode } = useAppTheme();
  const scheme = useColorScheme();
  const theme = themeMode || (scheme === 'unspecified' ? 'light' : scheme);

  return Colors[theme];
}
