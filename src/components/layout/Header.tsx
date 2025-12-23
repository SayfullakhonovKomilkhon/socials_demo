import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const HeaderWrapper = styled(motion.header)<{ $scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.sticky};
  background: ${({ $scrolled }) => $scrolled ? '#7a4a5a' : 'transparent'};
  border-top: ${({ $scrolled }) => $scrolled ? '4px solid #5a3545' : 'none'};
  transition: all 0.3s ease;
  padding: ${({ theme }) => theme.spacing.md} 0;
`

const HeaderContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Logo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-style: italic;
  color: ${({ theme }) => theme.colors.accent.gold};
  text-decoration: none;
  
  span {
    color: #fff;
  }
`

const NavPill = styled.nav<{ $scrolled: boolean }>`
  display: flex;
  align-items: center;
  background: ${({ $scrolled }) => $scrolled ? '#9a6a7a' : 'rgba(120, 100, 100, 0.4)'};
  border-radius: 50px;
  padding: 6px 8px;
  border: 1px solid rgba(100, 80, 80, 0.3);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: none;
  }
`

const NavLink = styled(Link)<{ $active?: boolean }>`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ $active }) => $active ? '#2d1f1f' : '#f5e8e8'};
  text-decoration: none;
  padding: 8px 24px;
  border-radius: 50px;
  transition: all ${({ theme }) => theme.transitions.fast};
  background: ${({ $active }) => $active ? '#e8d5d5' : 'transparent'};
  
  &:hover {
    background: #e8d5d5;
    color: #2d1f1f;
  }
`

const MobileMenuButton = styled.button`
  display: none;
  width: 44px;
  height: 44px;
  color: #f5e8e8;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #7a4a5a;
  z-index: ${({ theme }) => theme.zIndex.modal};
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.spacing['3xl']};
`

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
`

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`

const MobileNavLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent.gold};
  }
`

const navItems = [
  { path: '/', label: 'Главная' },
  { path: '/menu', label: 'Меню' },
  { path: '/reservation', label: 'Бронирование' },
  { path: '/locations', label: 'Филиалы' },
  { path: '/contact', label: 'Контакты' },
]

export const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  return (
    <>
      <HeaderWrapper $scrolled={scrolled}>
        <HeaderContainer>
          <Logo to="/">
            Socials
          </Logo>
          
          <NavPill $scrolled={scrolled}>
            {navItems.map((item) => (
              <NavLink 
                key={item.path} 
                to={item.path}
                $active={location.pathname === item.path}
              >
                {item.label}
              </NavLink>
            ))}
          </NavPill>
          
          <MobileMenuButton onClick={() => setMobileMenuOpen(true)}>
            <Menu size={28} />
          </MobileMenuButton>
        </HeaderContainer>
      </HeaderWrapper>

      <AnimatePresence>
        {mobileMenuOpen && (
          <MobileMenu
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
          >
            <MobileMenuHeader>
              <Logo to="/">
                Socials
              </Logo>
              <MobileMenuButton onClick={() => setMobileMenuOpen(false)}>
                <X size={28} />
              </MobileMenuButton>
            </MobileMenuHeader>
            
            <MobileNav>
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <MobileNavLink to={item.path}>
                    {item.label}
                  </MobileNavLink>
                </motion.div>
              ))}
            </MobileNav>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  )
}

