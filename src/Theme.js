import { color, font, fontSize, weight } from '@edma/design-tokens';

const Theme = {
  typography: {
    body1: {
      fontFamily: font.body,
      maxWidth: 600
    },
    body2: {
      fontFamily: font.body
    },
    h1: {
      fontFamily: font.heading,
      fontSize: fontSize['h1'],
      fontWeight: weight['bold'],
    },
    h2: {
      fontFamily: font.heading,
      fontSize: fontSize['h2'],
      fontWeight: weight['bold'],
      maxWidth: 600,
    },
    h3: {
      fontFamily: font.body,
      fontWeight: 'normal',
      minWidth: 260,
      maxWidth: 600,
      fontSize: fontSize['h3'],
      lineHeight: 1.33,
      letterSpacing: 0
    },
    h4: {
      fontFamily: font.heading,
      maxWidth: 600
    },
    h5: {
      fontFamily: font.heading,
      maxWidth: 600
    },
    h6: {
      fontFamily: font.heading,
      letterSpacing: 1.5,
      fontSize: fontSize['body1'],
      maxWidth: 600,
      textTransform: 'uppercase',
      fontWeight: weight['bold'],
      marginTop: '0.3rem'
    }
  },
  palette: {
    type: 'light',
    primary: {
      light: color.b300,
      main: color.b700,
      dark: color.b900
    },
    secondary: {
      light: color.b300,
      main: color.white,
      dark: color.b700
    },
    error: {
      light: color.r300,
      main: color.r600,
      dark: color.r900
    }
  }
};

export default Theme;
