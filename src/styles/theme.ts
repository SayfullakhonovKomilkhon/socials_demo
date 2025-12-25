export const theme = {
  colors: {
    // Dramatic, Sophisticated Palette
    primary: {
      main: '#E8DED1',        // Warm cream
      light: '#F5F0E8',
      lighter: '#FAF8F5',
      dark: '#D4C4B0',
      accent: '#C9A87C',      // Warm gold accent
    },
    // Dark tones for drama
    dark: {
      main: '#0A0A0A',        // Near black
      lighter: '#141414',
      light: '#1E1E1E',
      medium: '#2A2A2A',
    },
    // Backgrounds
    background: {
      primary: '#FDFCFA',     // Warm white
      secondary: '#F8F6F3',
      cream: '#F5F0E8',
      dark: '#0A0A0A',
      overlay: 'rgba(10, 10, 10, 0.85)',
    },
    // Text
    text: {
      primary: '#0A0A0A',
      secondary: '#3D3D3D',
      light: '#6B6B6B',
      muted: '#9A9A9A',
      white: '#FDFCFA',
      cream: '#E8DED1',
    },
    // States
    success: '#4A7C59',
    error: '#C45B5B',
    // Utility
    white: '#FFFFFF',
    black: '#000000',
    divider: 'rgba(10, 10, 10, 0.08)',
    dividerLight: 'rgba(253, 252, 250, 0.1)',
  },
  
  fonts: {
    heading: '"Cormorant Garamond", "Playfair Display", Georgia, serif',
    body: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
    accent: '"Cormorant Garamond", Georgia, serif',
  },
  
  fontSizes: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    md: '1rem',         // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '2rem',      // 32px
    '4xl': '2.5rem',    // 40px
    '5xl': '3.5rem',    // 56px
    '6xl': '4.5rem',    // 72px
    '7xl': '6rem',      // 96px
    '8xl': '8rem',      // 128px
    '9xl': '12rem',     // 192px
  },
  
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  lineHeights: {
    none: 1,
    tight: 1.1,
    snug: 1.2,
    normal: 1.5,
    relaxed: 1.7,
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
    '6xl': '12rem',
    '7xl': '16rem',
  },
  
  borderRadius: {
    none: '0',
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    '2xl': '24px',
    '3xl': '40px',
    full: '9999px',
  },
  
  shadows: {
    sm: '0 2px 8px rgba(0, 0, 0, 0.04)',
    md: '0 8px 30px rgba(0, 0, 0, 0.08)',
    lg: '0 20px 50px rgba(0, 0, 0, 0.12)',
    xl: '0 30px 70px rgba(0, 0, 0, 0.15)',
    glow: '0 0 80px rgba(201, 168, 124, 0.3)',
  },
  
  transitions: {
    fast: '0.2s cubic-bezier(0.4, 0, 0.2, 1)',
    normal: '0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    slow: '0.6s cubic-bezier(0.4, 0, 0.2, 1)',
    slower: '0.8s cubic-bezier(0.4, 0, 0.2, 1)',
    smooth: '1.2s cubic-bezier(0.16, 1, 0.3, 1)',
  },
  
  breakpoints: {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1440px',
    ultrawide: '1920px',
  },
  
  zIndex: {
    base: 0,
    dropdown: 100,
    sticky: 200,
    modal: 300,
    overlay: 400,
    toast: 500,
  },
} as const

export type Theme = typeof theme
