import { useMedia } from 'react-use';

export const lightColors = {
  baseColor: '#193BDE',
};

export const darkColors = {
  baseColor: '#193BDE',
};

export default function() {
  const isDarkMode = useMedia('(prefers-color-scheme: dark)');

  return Object.assign({}, { colors: isDarkMode ? darkColors : lightColors });
}
