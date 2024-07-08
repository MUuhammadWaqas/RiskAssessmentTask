import { StyleSheet } from 'react-native';
import { Alignment, useCustomTheme } from '.';

export default () => {
  const { colors, fonts } = useCustomTheme();
  return StyleSheet.create({
    flex: {
      flex: 1,
    },
    flexCentered: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    centerContent: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    flexRow: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    hitSlop: {
      top: 5,
      bottom: 5,
      left: 10,
      right: 10,
    },
    absoluteCentered: {
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0,
      bottom: 0,
    },
    descriptiveText: {
      ...fonts.style.description,
      color: colors.grayscale70,
    },
    bgWhite: {
      backgroundColor: colors.white,
    },
    whiteContainer: {
      flex: 1,
      backgroundColor: colors.white,
    },
    shadowGeneral: {
      shadowOffset: {
        width: 1,
        height: 1,
      },
      shadowOpacity: 1,
      shadowRadius: 6,
      shadowColor: colors.iconBorder,
      backgroundColor: colors.white,
      elevation: 5,
    },
    bottomShadowedContainer: {
      ...Alignment.PVmedium,
      ...Alignment.PHlarge,
      shadowColor: colors.iconBorder,
      shadowOpacity: 1,
      shadowRadius: 10,
      shadowOffset: { width: 0, height: 3 },
      backgroundColor: colors.white,
      elevation: 4,
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
    },
  });
};
