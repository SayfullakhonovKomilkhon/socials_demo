import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500&family=Inter:wght@300;400;500;600&display=swap');
  
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  html {
    scroll-behavior: smooth;
    font-size: 16px;
  }
  
  body {
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: ${({ theme }) => theme.fontWeights.normal};
    line-height: ${({ theme }) => theme.lineHeights.normal};
    color: ${({ theme }) => theme.colors.text.primary};
    background-color: ${({ theme }) => theme.colors.background.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-weight: ${({ theme }) => theme.fontWeights.light};
    line-height: ${({ theme }) => theme.lineHeights.tight};
    letter-spacing: -0.02em;
  }
  
  p {
    line-height: ${({ theme }) => theme.lineHeights.relaxed};
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  button {
    font-family: ${({ theme }) => theme.fonts.body};
    cursor: pointer;
  }
  
  img, video {
    max-width: 100%;
    height: auto;
    display: block;
  }
  
  /* Hide scrollbar but keep functionality */
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
  
  ::selection {
    background: ${({ theme }) => theme.colors.dark.main};
    color: ${({ theme }) => theme.colors.text.white};
  }
  
  /* Smooth page transitions */
  .page-transition-enter {
    opacity: 0;
    transform: translateY(20px);
  }
  
  .page-transition-enter-active {
    opacity: 1;
    transform: translateY(0);
    transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideUp {
    from { opacity: 0; transform: translateY(60px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }
  
  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-20px); }
  }
`
