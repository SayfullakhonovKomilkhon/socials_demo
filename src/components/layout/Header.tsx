import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const HeaderWrapper = styled(motion.header)<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  padding: ${({ $scrolled }) => $scrolled ? '16px 0' : '28px 0'};
  background: ${({ $scrolled }) => $scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent'};
  backdrop-filter: ${({ $scrolled }) => $scrolled ? 'blur(20px)' : 'none'};
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
`

const HeaderContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing['3xl']};
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.xl};
  }
`

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colors.text.white};
  letter-spacing: 0.02em;
  
  span {
    font-style: italic;
  }
`

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing['2xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`

const NavLink = styled(Link)<{ $active: boolean }>`
  font-size: 13px;
  font-weight: ${({ theme }) => theme.fontWeights.normal};
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${({ $active, theme }) => $active ? theme.colors.primary.accent : theme.colors.text.cream};
  opacity: ${({ $active }) => $active ? 1 : 0.7};
  transition: all ${({ theme }) => theme.transitions.fast};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${({ $active }) => $active ? '100%' : '0'};
    height: 1px;
    background: ${({ theme }) => theme.colors.primary.accent};
    transition: width ${({ theme }) => theme.transitions.normal};
  }
  
  &:hover {
    opacity: 1;
    &::after { width: 100%; }
  }
`

const ReserveButton = styled(Link)`
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.xl}`};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${({ theme }) => theme.colors.dark.main};
  background: ${({ theme }) => theme.colors.primary.main};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: all ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`

const MobileReserveHeaderButton = styled(Link)`
  display: none;
  padding: ${({ theme }) => `6px ${theme.spacing.md}`};
  font-size: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: ${({ theme }) => theme.colors.dark.main};
  background: ${({ theme }) => theme.colors.primary.accent};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  white-space: nowrap;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: block;
  }
`

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.sm};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }
`

const MenuLine = styled.span`
  width: 28px;
  height: 1px;
  background: ${({ theme }) => theme.colors.text.cream};
`

const MobileMenu = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.dark.main};
  z-index: ${({ theme }) => theme.zIndex.overlay};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing['2xl']};
`

const MobileNavLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colors.text.white};
  
  span { font-style: italic; }
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary.accent};
  }
`

const MobileCloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing['2xl']};
  right: ${({ theme }) => theme.spacing['2xl']};
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text.cream};
  font-size: 28px;
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeights.light};
`


export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileMenuOpen])
  
  const navLinks = [
    { path: '/', label: 'Главная' },
    { path: '/menu', label: 'Меню' },
    { path: '/locations', label: 'Локации' },
    { path: '/contact', label: 'Контакты' },
  ]
  
  return (
    <>
      <HeaderWrapper
        $scrolled={scrolled}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <HeaderContainer>
          <Logo to="/">Socials <span>Cafe</span></Logo>
          
          <Nav>
            {navLinks.map(link => (
              <NavLink key={link.path} to={link.path} $active={location.pathname === link.path}>
                {link.label}
              </NavLink>
            ))}
          </Nav>
          
          <ReserveButton to="/reservation">Забронировать</ReserveButton>
          <MobileReserveHeaderButton to="/reservation">Забронировать</MobileReserveHeaderButton>
          
          <MobileMenuButton onClick={() => setMobileMenuOpen(true)}>
            <MenuLine />
            <MenuLine />
          </MobileMenuButton>
        </HeaderContainer>
      </HeaderWrapper>
      
      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <MobileCloseButton onClick={() => setMobileMenuOpen(false)}>✕</MobileCloseButton>
            {navLinks.map((link, i) => (
              <motion.div
                key={link.path}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <MobileNavLink to={link.path} onClick={() => setMobileMenuOpen(false)}>
                  {link.label === 'Главная' ? <span>Главная</span> : link.label}
                </MobileNavLink>
              </motion.div>
            ))}
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  )
}
