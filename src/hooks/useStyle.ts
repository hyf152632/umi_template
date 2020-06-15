import { useMedia } from 'react-use';

export const lightColors = {
  mainColor: '#193BDE',
};

export const darkColors = {
  mainColor: '#193BDE',
};

export default function() {
  const isDarkMode = useMedia('(prefers-color-scheme: dark)');

  return Object.assign({}, { colors: isDarkMode ? darkColors : lightColors });
}
