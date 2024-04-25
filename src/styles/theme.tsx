import * as React from 'react';

import {ThemeProvider as TP} from 'styled-components/native';

const units = Array(201)
  .fill(0)
  .map((_, i) => i * 5);

const space = {
  ...units,
};

const input = {
  horizontalPadding: 12,
  verticalPadding: 10,
};

const sizes = {
  navSubMenuHeightNew: 55,
  navSubMenuHeight: 36,
  centeredContentMinWidth: 600,
  centeredContentMaxWidth: 872,
  tableHeightItem: 85,
  tableHeightHeader: 60,
  inputHeight: 40,
  mediaInputHeight: 145,
  mediaInputContentHeight: 105,
  mediaInputNumberSize: 24,
  defaultImageThumbnail: 150,
  imageCarouselImageWidth: 344,
  imageCarouselImageHeight: 258,
};

type Sizes = {[key: string]: number} & typeof sizes;

const mergedSizes: Sizes = {
  ...(units as unknown as {[key: string]: number}),
  ...sizes,
};

const radii = {
  sm: 2,
  md: 4,
  lg: 10,
  xlg: 14,
  xxlg: 18,
};

const colors = {
  clear: 'rgba(0, 0, 0, 0)',
  blackAlt: '#444444',
  darkBlue: '#25293F',
  darkBlueBlockedModal: '#25293FB3',
  darkBlueOpacityHalf: '#25293F80',
  darkBlueOpacity: '#25293F33',
  lightGrey1: '#F1F3F8',
  inactiveGrey: '#B4B4B4',
  neutralGrey: '#D9DDE4',
  lightGrey2: '#FAFAFA',
  shadowColor: '#171717',
  secondaryYellow: '#FFF282',
  lightBlue: '#A1E3F2',
  lightBlue1: '#A1E3F24D',
  lightBlue2: '#DEF3F9',
  greyBlue: '#83c1d0',
  blue: '#12AED2',
  blueView: '#6BD8F1',
  blueDisabled: '#B8E7F1',
  blueLightened: '#3ABCDA',
  blueDarkened: '#119dbd',
  blueDarkenedDisabled: '#B7E2EB',
  blueDeep: '#4359CE',
  blueMore: '#0E99B9',
  mint: '#6EDED180',
  lightPink: '#FAA6AB',
  red: '#E46169',
  pinkAlert: '#E4616980',
  pinkClub: '#FF9F8A',
  redDarkened: '#AD4D53',
  redLightened: '#ED757C',
  darkGrey: '#737B86',
  grey: '#D9DDE4',
  bgGrey: '#F2F2F2',
  white: '#FFFFFF',
  black: '#000000',
  transBlack: '#00000020',
  orange: '#EE8E36',
  orangeLow: '#FFDA7980',
  green: '#20B326',
  secondaryGreen: '#AFDC5C',
  greenActive: '#AFDC5C80',
  greenLightened: '#4DC151',
  greenDarkened: '#1DA022',
  purple: '#C460C6',
  nappies: '#4359CE80',
  nap: '#EBBEEC80',
  inputDisabledText: '#B4B6C1',
  none: 'rgba(0, 0, 0, 0)',
  highlighted: 'rgba(0, 0, 0, 0.3)',
  highlightedActive: 'rgba(0, 0, 0, 0.4)',
  semiOpaqueWhite: 'rgba(255, 255, 255, 0.75)',
  semiOpaqueDarkBlue: 'rgba(37, 41, 63, 0.85)',
  semiDemiOpaqueDarkBlue: 'rgba(37, 41, 63, 0.7)',
  boxShadow: 'rgba(0, 0, 0, 0.1)',
  boxShadow2: 'rgba(0, 0, 0, 0.6)',
  passThroughGrey: 'rgba(217, 221, 228, 0.2)',
  primaryDark: '#3A5E6D',
  green3: '#DFF7C2',
  lightYellow: '#FCF9E4',
  pink2: '#FFC4D2',
  pink1: '#FFA7A7',
};

const commonTextStyle = {
  fontFamily: 'Asap',
};

// TODO: Look into a better way to handle line height. React native doesn't
// support dynamic values, so we have to hard-code them all.
// https://github.com/styled-components/styled-components/issues/2546

const textStyles = {
  h1: {
    ...commonTextStyle,
    fontWeight: '700',
    fontSize: '32px',
    lineHeight: '38px',
  },
  h2: {
    ...commonTextStyle,
    fontWeight: '700',
    fontSize: '24px',
    lineHeight: '29px',
  },
  h3: {
    ...commonTextStyle,
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '19px',
  },
  h4: {
    ...commonTextStyle,
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '17px',
  },
  body: {
    ...commonTextStyle,
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '19px',
  },
  bodyBold: {
    ...commonTextStyle,
    fontWeight: '700',
    fontSize: '16px',
    lineHeight: '19px',
  },
  small: {
    ...commonTextStyle,
    fontWeight: '400',
    fontSize: '14px',
    lineHeight: '17px',
  },
  smallBold: {
    ...commonTextStyle,
    fontWeight: '700',
    fontSize: '14px',
    lineHeight: '17px',
  },
  extraSmall: {
    ...commonTextStyle,
    fontWeight: '400',
    fontSize: '12px',
    lineHeight: '14px',
  },
};

const shadow = {
  subtle: '0 2px 4px rgba(0,0,0,0.1)',
};

const primaryColor: {
  default: keyof typeof colors;
  alt: keyof typeof colors;
  dark: keyof typeof colors;
} = {
  default: 'black',
  alt: 'blackAlt',
  dark: 'darkGrey',
};

const secondaryColor: {
  default: keyof typeof colors;
  alt: keyof typeof colors;
  dark: keyof typeof colors;
} = {
  default: 'blue',
  alt: 'blueDarkened',
  dark: 'darkBlue',
};

const theme = {
  textStyles,
  space,
  sizes: mergedSizes,
  colors,
  input,
  radii,
  button,
  shadow,
  primaryColor,
  secondaryColor,
};

const ThemeProvider = (props: Omit<React.ComponentProps<typeof TP>, 'theme'>) => (
  <TP theme={theme}>{props.children}</TP>
);

export {theme, ThemeProvider};
