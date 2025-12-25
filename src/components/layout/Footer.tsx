import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background: ${({ theme }) => theme.colors.dark.main};
  color: ${({ theme }) => theme.colors.text.cream};
`

const FooterTop = styled.div`
  padding: ${({ theme }) => `${theme.spacing['4xl']} ${theme.spacing['3xl']}`};
  border-bottom: 1px solid ${({ theme }) => theme.colors.dividerLight};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing['3xl']} ${theme.spacing.xl}`};
  }
`

const FooterContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['3xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
    gap: ${({ theme }) => theme.spacing['2xl']};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const FooterBrand = styled.div`
  max-width: 350px;
`

const FooterLogo = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colors.text.white};
  display: inline-block;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  span { font-style: italic; }
`

const FooterDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.cream};
  opacity: 0.6;
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`

const SocialLink = styled.a`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.colors.dividerLight};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  color: ${({ theme }) => theme.colors.text.cream};
  font-size: 18px;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary.main};
    border-color: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.dark.main};
  }
`

const FooterColumn = styled.div``

const FooterColumnTitle = styled.h4`
  font-size: 11px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${({ theme }) => theme.colors.primary.accent};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const FooterLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`

const FooterLink = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.cream};
  opacity: 0.6;
  transition: opacity ${({ theme }) => theme.transitions.fast};
  
  &:hover { opacity: 1; }
`

const FooterExternalLink = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.cream};
  opacity: 0.6;
  transition: opacity ${({ theme }) => theme.transitions.fast};
  
  &:hover { opacity: 1; }
`

const FooterInfo = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.cream};
  opacity: 0.6;
  line-height: 2;
`

const FooterBottom = styled.div`
  padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing['3xl']}`};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing.xl} ${theme.spacing.xl}`};
  }
`

const FooterBottomContent = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.lg};
    text-align: center;
  }
`

const Copyright = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.text.cream};
  opacity: 0.4;
`

const MemoriesGroup = styled.a`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.text.cream};
  opacity: 0.4;
  transition: opacity ${({ theme }) => theme.transitions.fast};
  
  &:hover { opacity: 0.8; color: ${({ theme }) => theme.colors.primary.accent}; }
`

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterTop>
        <FooterContainer>
          <FooterBrand>
            <FooterLogo to="/">Socials <span>Cafe</span></FooterLogo>
            <FooterDescription>
              Where moments become memories. Part of the Memories Group, 
              celebrating food, people, and connection since 2019.
            </FooterDescription>
            <SocialLinks>
              <SocialLink href="https://instagram.com/socials_uz" target="_blank" rel="noopener noreferrer">📷</SocialLink>
              <SocialLink href="https://t.me/socialscafe" target="_blank" rel="noopener noreferrer">✈️</SocialLink>
            </SocialLinks>
          </FooterBrand>
          
          <FooterColumn>
            <FooterColumnTitle>Navigate</FooterColumnTitle>
            <FooterLinks>
              <li><FooterLink to="/">Home</FooterLink></li>
              <li><FooterLink to="/menu">Menu</FooterLink></li>
              <li><FooterLink to="/locations">Locations</FooterLink></li>
              <li><FooterLink to="/contact">Contact</FooterLink></li>
              <li><FooterLink to="/reservation">Reservation</FooterLink></li>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterColumnTitle>Delivery</FooterColumnTitle>
            <FooterLinks>
              <li><FooterExternalLink href="https://wolt.com" target="_blank" rel="noopener noreferrer">Wolt</FooterExternalLink></li>
              <li><FooterExternalLink href="https://yandex.uz/eda" target="_blank" rel="noopener noreferrer">Yandex Eats</FooterExternalLink></li>
              <li><FooterExternalLink href="https://express24.uz" target="_blank" rel="noopener noreferrer">Express24</FooterExternalLink></li>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterColumnTitle>Contact</FooterColumnTitle>
            <FooterInfo>
              <p>+998 99 901 44 33</p>
              <p>info@socialscafe.uz</p>
              <br />
              <p>36 A Taras Shevchenko street</p>
              <p>Tashkent, Uzbekistan</p>
            </FooterInfo>
          </FooterColumn>
        </FooterContainer>
      </FooterTop>
      
      <FooterBottom>
        <FooterBottomContent>
          <Copyright>© {new Date().getFullYear()} Socials Cafe. All rights reserved.</Copyright>
          <MemoriesGroup href="https://memoriesgroup.uz" target="_blank" rel="noopener noreferrer">
            Part of Memories Group
          </MemoriesGroup>
        </FooterBottomContent>
      </FooterBottom>
    </FooterWrapper>
  )
}
