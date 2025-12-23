import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Instagram, Send, MessageCircle, MapPin, Phone, Mail, ChevronRight } from 'lucide-react'

const FooterWrapper = styled.footer`
  background: linear-gradient(135deg, #5a3545 0%, #4a2c34 100%);
  color: #fff;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #C9A86C 0%, #e8d4a8 50%, #C9A86C 100%);
  }
`

const FooterTop = styled.div`
  padding: 50px 40px 40px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(201, 168, 108, 0.4), transparent);
  }
  
  @media (max-width: 768px) {
    padding: 40px 20px 30px;
  }
`

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1.2fr;
  gap: 35px;
  
  @media (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    gap: 30px;
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 25px;
  }
`

const FooterSection = styled.div``

const SectionTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 16px;
  color: #fff;
  margin-bottom: 18px;
  font-weight: 400;
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  
  &::before {
    content: '◆';
    font-size: 6px;
    color: #C9A86C;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 30px;
    height: 1px;
    background: linear-gradient(90deg, #C9A86C, transparent);
  }
`

// Logo Section
const LogoSection = styled.div`
  text-align: left;
`

const FooterLogo = styled(Link)`
  font-family: 'IM Fell English', Georgia, serif;
  font-size: 26px;
  font-style: italic;
  color: #fff;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 12px;
  
  span {
    color: #C9A86C;
  }
`

const LogoDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 13px;
  color: rgba(255, 255, 255, 0.7);
  line-height: 1.6;
  margin-bottom: 15px;
`

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
  margin-bottom: 8px;
  
  svg {
    color: #C9A86C;
    flex-shrink: 0;
  }
  
  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #C9A86C;
    }
  }
`

// Links Section
const FooterLinks = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const FooterLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 14px;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    width: 0;
    height: 1px;
    background: #C9A86C;
    transition: width 0.3s ease;
  }
  
  &:hover {
    color: #C9A86C;
    transform: translateX(5px);
    
    &::before {
      width: 15px;
    }
  }
`

// Social Section
const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
`

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background: transparent;
  border: 1px solid rgba(201, 168, 108, 0.4);
  color: #C9A86C;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    height: 6px;
    border: 1px solid #C9A86C;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &::before {
    top: -3px;
    left: -3px;
    border-right: none;
    border-bottom: none;
  }
  
  &::after {
    bottom: -3px;
    right: -3px;
    border-left: none;
    border-top: none;
  }
  
  &:hover {
    background: #C9A86C;
    color: #4a2c34;
    border-color: #C9A86C;
    transform: translateY(-3px);
    
    &::before,
    &::after {
      opacity: 1;
    }
  }
`

const SocialText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
`

// Newsletter Section
const NewsletterForm = styled.form`
  margin-bottom: 12px;
`

const InputWrapper = styled.div`
  display: flex;
  border: 1px solid rgba(201, 168, 108, 0.4);
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;
  
  &:focus-within {
    border-color: #C9A86C;
    background: rgba(255, 255, 255, 0.1);
  }
`

const NewsletterInput = styled.input`
  flex: 1;
  padding: 10px 14px;
  border: none;
  background: transparent;
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 13px;
  
  &::placeholder {
    color: rgba(255, 255, 255, 0.5);
    font-style: italic;
  }
  
  &:focus {
    outline: none;
  }
`

const NewsletterButton = styled.button`
  padding: 10px 18px;
  background: linear-gradient(135deg, #C9A86C 0%, #b89a5a 100%);
  border: none;
  color: #4a2c34;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  
  &:hover {
    background: linear-gradient(135deg, #d4b87a 0%, #C9A86C 100%);
  }
`

const NewsletterText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 1.5;
`

// Footer Bottom
const FooterBottom = styled.div`
  padding: 20px 40px;
  
  @media (max-width: 768px) {
    padding: 15px 20px;
  }
`

const FooterBottomContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  
  @media (max-width: 600px) {
    flex-direction: column;
    text-align: center;
  }
`

const Copyright = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  
  span {
    color: #C9A86C;
  }
`

const BottomLinks = styled.div`
  display: flex;
  gap: 30px;
`

const BottomLink = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  transition: color 0.3s ease;
  
  &:hover {
    color: #C9A86C;
  }
`

const DecorElement = styled.div`
  position: absolute;
  font-size: 10px;
  color: rgba(201, 168, 108, 0.2);
  letter-spacing: 4px;
  
  &.top-right {
    top: 30px;
    right: 40px;
  }
  
  &.bottom-left {
    bottom: 80px;
    left: 40px;
  }
`

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Subscribe:', email)
    setEmail('')
  }

  return (
    <FooterWrapper>
      <DecorElement className="top-right">✦ ✦ ✦ ✦ ✦</DecorElement>
      <DecorElement className="bottom-left">✦ ✦ ✦ ✦ ✦</DecorElement>
      
      <FooterTop>
        <FooterContainer>
          <FooterGrid>
            <LogoSection>
              <FooterLogo to="/">
                Socials
              </FooterLogo>
              <LogoDescription>
                Изысканные десерты ручной работы, созданные с любовью и вниманием к каждой детали.
              </LogoDescription>
              <ContactItem>
                <MapPin size={16} />
                <span>г. Москва, ул. Арбат, д. 10</span>
              </ContactItem>
              <ContactItem>
                <Phone size={16} />
                <a href="tel:+74951234567">+7 (495) 123-45-67</a>
              </ContactItem>
              <ContactItem>
                <Mail size={16} />
                <a href="mailto:info@bellepatisserie.ru">info@bellepatisserie.ru</a>
              </ContactItem>
            </LogoSection>

            <FooterSection>
              <SectionTitle>Навигация</SectionTitle>
              <FooterLinks>
                <li><FooterLink to="/">Главная</FooterLink></li>
                <li><FooterLink to="/menu">Меню</FooterLink></li>
                <li><FooterLink to="/reservation">Бронирование</FooterLink></li>
                <li><FooterLink to="/locations">Филиалы</FooterLink></li>
                <li><FooterLink to="/contact">Контакты</FooterLink></li>
              </FooterLinks>
            </FooterSection>

            <FooterSection>
              <SectionTitle>Соцсети</SectionTitle>
              <SocialLinks>
                <SocialLink href="https://instagram.com" target="_blank" rel="noopener">
                  <Instagram size={20} />
                </SocialLink>
                <SocialLink href="https://t.me" target="_blank" rel="noopener">
                  <Send size={20} />
                </SocialLink>
                <SocialLink href="https://wa.me" target="_blank" rel="noopener">
                  <MessageCircle size={20} />
                </SocialLink>
              </SocialLinks>
              <SocialText>
                Подписывайтесь на нас, чтобы быть<br />
                в курсе новинок и акций
              </SocialText>
            </FooterSection>

            <FooterSection>
              <SectionTitle>Рассылка</SectionTitle>
              <NewsletterForm onSubmit={handleSubmit}>
                <InputWrapper>
                  <NewsletterInput 
                    type="email" 
                    placeholder="Ваш email..."
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <NewsletterButton type="submit">
                    <ChevronRight size={16} />
                  </NewsletterButton>
                </InputWrapper>
              </NewsletterForm>
              <NewsletterText>
                Подпишитесь на нашу рассылку<br />
                и получите скидку 10% на первый заказ
              </NewsletterText>
            </FooterSection>
          </FooterGrid>
        </FooterContainer>
      </FooterTop>

      <FooterBottom>
        <FooterBottomContent>
          <Copyright>
            © 2024 <span>Socials</span>. Все права защищены.
          </Copyright>
          <BottomLinks>
            <BottomLink to="/privacy">Политика конфиденциальности</BottomLink>
            <BottomLink to="/terms">Условия использования</BottomLink>
          </BottomLinks>
        </FooterBottomContent>
      </FooterBottom>
    </FooterWrapper>
  )
}
