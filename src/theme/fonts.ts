export const FONTS = {
  fRegular: 'PlusJakartaSans-Regular',
  fMedium: 'PlusJakartaSans-Medium',
  fSemibold: 'PlusJakartaSans-SemiBold',
  fBold: 'PlusJakartaSans-Bold',
  fLight: 'PlusJakartaSans-Light',
  fExtraLight: 'PlusJakartaSans-ExtraLight',
  fExtraBold: 'PlusJakartaSans-ExtraBold',
};

const size = {
  h1: 41,
  h2: 34,
  h3: 30,
  h4: 24,
  h5: 20,
  h6: 18,
  regular: 16,
  medium: 14,
  small: 12,
  sub: 10,
  tiny: 8,
};

const style = {
  h1: {
    fontFamily: FONTS.fSemibold,
    fontSize: size.h1,
  },
  h2: {
    fontSize: size.h2,
    fontFamily: FONTS.fBold,
  },
  h3: {
    fontSize: size.h3,
    fontFamily: FONTS.fExtraBold,
  },
  h4: {
    fontSize: size.h4,
    fontFamily: FONTS.fBold,
  },
  h5: {
    fontSize: size.h5,
    fontFamily: FONTS.fSemibold,
  },
  h6: {
    fontSize: size.h6,
    fontFamily: FONTS.fSemibold,
  },
  h6Bold: {
    fontSize: size.h6,
    fontFamily: FONTS.fBold,
  },

  regularBold: {
    fontSize: size.regular,
    fontFamily: FONTS.fBold,
  },
  regularSemibold: {
    fontSize: size.regular,
    fontFamily: FONTS.fSemibold,
  },
  normal: {
    fontSize: size.regular,
    fontFamily: FONTS.fRegular,
  },
  text: {
    fontSize: size.regular,
    fontFamily: FONTS.fRegular,
  },
  regular: {
    fontSize: size.medium,
    fontFamily: FONTS.fRegular,
  },
  mediumRegular: {
    fontSize: size.regular,
    fontFamily: FONTS.fMedium,
  },
  mediumSemibold: {
    fontSize: size.medium,
    fontFamily: FONTS.fSemibold,
  },
  mediumBold: {
    fontSize: size.medium,
    fontFamily: FONTS.fBold,
  },
  mediummedium: {
    fontSize: size.medium,
    fontFamily: FONTS.fMedium,
  },
  description: {
    fontSize: size.medium,
    fontFamily: FONTS.fRegular,
  },
  smallMedium: {
    fontSize: size.small,
    fontFamily: FONTS.fMedium,
  },
  smallBold: {
    fontSize: size.small,
    fontFamily: FONTS.fBold,
  },
  smallRegular: {
    fontSize: size.small,
    fontFamily: FONTS.fRegular,
  },
  smallSemibold: {
    fontSize: size.small,
    fontFamily: FONTS.fSemibold,
  },
  link: {
    fontSize: 15,
    fontFamily: FONTS.fRegular,
  },
  small: {
    fontSize: size.small,
    fontFamily: FONTS.fMedium,
  },
  tiny: {
    fontSize: size.tiny,
    fontFamily: FONTS.fLight,
  },
  tinyRegular: {
    fontSize: size.tiny,
    fontFamily: FONTS.fRegular,
  },
  CongratulationText: {
    fontSize: 21,
    fontFamily: FONTS.fSemibold,
  },
  subRegular: {
    fontSize: size.sub,
    fontFamily: FONTS.fRegular,
  },
  balanceValue: {
    fontSize: 22,
    fontFamily: FONTS.fBold,
  },
  customButton: {
    fontSize: 13,
    fontFamily: FONTS.fRegular,
  },
};

export default {
  FONTS,
  size,
  style,
};
