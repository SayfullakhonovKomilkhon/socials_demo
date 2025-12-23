export const theme = {
  colors: {
    // Primary Rose/Pink palette (from Figma design)
    primary: {
      main: '#A76B5B',
      light: '#C89B8E',
      lighter: '#E8C4B8',
      lightest: '#F5E6E0',
      dark: '#8B4557',
      darker: '#6E3344',
    },
    // Accent Gold
    accent: {
      gold: '#C9A86C',
      goldLight: '#E4D4A5',
      goldDark: '#9A7B4F',
    },
    // Backgrounds
    background: {
      primary: '#F5E6E0',
      secondary: '#EDD5CC',
      card: '#DEB8A8',
      cardHover: '#D4A898',
      dark: '#8B4557',
      gradient: 'linear-gradient(135deg, #8B4557 0%, #A76B5B 50%, #C89B8E 100%)',
    },
    // Text
    text: {
      primary: '#4A2C34',
      secondary: '#6E4A4A',
      light: '#8B6B6B',
      white: '#FFFFFF',
      gold: '#C9A86C',
    },
    // UI States
    success: '#6B8E6B',
    error: '#B85050',
    warning: '#D4A555',
    // Misc
    white: '#FFFFFF',
    black: '#1A1A1A',
    overlay: 'rgba(74, 44, 52, 0.7)',
  },
  
  fonts: {
    heading: '"Cormorant Garamond", "IM Fell English", Georgia, serif',
    body: '"Inconsolata", sans-serif',
    accent: '"Cormorant Garamond", "IM Fell English SC", Georgia, serif',
  },
  
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
  },
  
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  lineHeights: {
    tight: 1.1,
    snug: 1.25,
    normal: 1.5,
    relaxed: 1.75,
  },
  
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
    '5xl': '8rem',
  },
  
  borderRadius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    full: '9999px',
  },
  
  shadows: {
    sm: '0 1px 2px rgba(74, 44, 52, 0.05)',
    md: '0 4px 6px rgba(74, 44, 52, 0.07)',
    lg: '0 10px 15px rgba(74, 44, 52, 0.1)',
    xl: '0 20px 25px rgba(74, 44, 52, 0.15)',
    inner: 'inset 0 2px 4px rgba(74, 44, 52, 0.06)',
    glow: '0 0 20px rgba(201, 168, 108, 0.3)',
  },
  
  transitions: {
    fast: '0.15s ease',
    normal: '0.3s ease',
    slow: '0.5s ease',
    spring: '0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
  },
  
  breakpoints: {
    mobile: '375px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
  },
  
  zIndex: {
    dropdown: 100,
    sticky: 200,
    modal: 300,
    overlay: 400,
    toast: 500,
  },
} as const

export type Theme = typeof theme

