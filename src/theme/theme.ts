import themeColors from './colors';
import typography from './fonts';

export default () => {
  const colors = {
    ...themeColors,
  };
  const fonts = {
    ...typography,
  };

  return {
    colors,
    fonts,
  };
};
