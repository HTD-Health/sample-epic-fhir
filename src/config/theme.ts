export const theme = {
  palette: {
    primary: {
      main: '#377166',
      light: '#448B7E',
      grey: '#DFE8E5',
    },
    g: {
      g1: '#E5DBD8',
      g2: '#BEA59D',
      g3: '#967063',
      g4: '#5B443C',
      gActive: '#3F2C26',
    },
    background: {
      primaryBcg: '#AAD5CE',
      primaryDarkBcg: '#515A59',
      primaryLightBcg: '#F5F1F0',
      grayBcg: '#f8f8f8',
      info: '#E8F1F8',
      success: '#EBF1EA',
      error: '#F8E3E3',
    },
    system: {
      default: '#8C8C8C',
      red: '#F1786C',
      error: '#C62828',
      success: '#2E7D32',
      info: '#1E6FBB',
    },
    text: {
      primary: '#313133',
      grey: '#F5F1F0',
      brown: '#3F2C26',
      disabled: '#8C8C8C',
      error: '#C62828',
    },
    neutral: {
      white: '#fff',
      blak: '#000',
    },
  },
  textStyles: {
    body2: {
      fontSize: 14,
      lineHeight: '23px',
      fontWeight: 400,
    },
    body: {
      fontSize: 16,
      lineHeight: '26px',
      fontWeight: 400,
    },
    h3: {
      fontSize: 14,
      lineHeight: '23px',
      fontWeight: 600,
    },
    h2: {
      fontSize: 16,
      lineHeight: '26px',
      fontWeight: 600,
    },
    h1: {
      fontSize: 24,
      lineHeight: '39px',
      fontWeight: 600,
    },
  },
  space: new Array(25).fill(null).map((value, index) => index * 4),
  // those are needed here for styled-system to work correctly.
};
