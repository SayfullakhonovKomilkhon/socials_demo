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
              Где моменты становятся воспоминаниями. Часть Memories Group, 
              объединяющая еду, людей и связи с 2019 года.
            </FooterDescription>
            <SocialLinks>
              <SocialLink href="https://instagram.com/socials_uz" target="_blank" rel="noopener noreferrer" title="Instagram">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.5" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </SocialLink>
              <SocialLink href="https://t.me/socialscafe" target="_blank" rel="noopener noreferrer" title="Telegram">
                <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.5" fill="none">
                  <path d="M21.2 4.4L2.4 10.8c-.6.2-.6 1.1.1 1.3l4.9 1.5 1.9 6c.1.4.6.5.9.3l2.8-2.3 5.5 4c.4.3 1 .1 1.1-.4L22.8 5.5c.2-.7-.5-1.3-1.1-1.1zM9.6 13.4l-.3 3.3-.9-4.2 10.6-6.5-9.4 7.4z"/>
                </svg>
              </SocialLink>
            </SocialLinks>
          </FooterBrand>
          
          <FooterColumn>
            <FooterColumnTitle>Навигация</FooterColumnTitle>
            <FooterLinks>
              <li><FooterLink to="/">Главная</FooterLink></li>
              <li><FooterLink to="/menu">Меню</FooterLink></li>
              <li><FooterLink to="/locations">Локации</FooterLink></li>
              <li><FooterLink to="/contact">Контакты</FooterLink></li>
              <li><FooterLink to="/reservation">Бронирование</FooterLink></li>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterColumnTitle>Доставка</FooterColumnTitle>
            <FooterLinks>
              <li><FooterExternalLink href="https://wolt.com" target="_blank" rel="noopener noreferrer">Wolt</FooterExternalLink></li>
              <li><FooterExternalLink href="https://yandex.uz/eda" target="_blank" rel="noopener noreferrer">Yandex Eats</FooterExternalLink></li>
              <li><FooterExternalLink href="https://express24.uz" target="_blank" rel="noopener noreferrer">Express24</FooterExternalLink></li>
            </FooterLinks>
          </FooterColumn>
          
          <FooterColumn>
            <FooterColumnTitle>Контакты</FooterColumnTitle>
            <FooterInfo>
              <p>+998 99 901 44 33</p>
              <p>info@socialscafe.uz</p>
              <br />
              <p>ул. Тараса Шевченко 36А</p>
              <p>Ташкент, Узбекистан</p>
            </FooterInfo>
          </FooterColumn>
        </FooterContainer>
      </FooterTop>
      
      <FooterBottom>
        <FooterBottomContent>
          <Copyright>© {new Date().getFullYear()} Socials Cafe. Все права защищены.</Copyright>
          <MemoriesGroup href="https://memoriesgroup.uz" target="_blank" rel="noopener noreferrer">
            Часть Memories Group
          </MemoriesGroup>
        </FooterBottomContent>
      </FooterBottom>
    </FooterWrapper>
  )
}
