import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { motion, useScroll, useTransform } from 'framer-motion'

// ============ HERO ============
const HeroSection = styled(motion.section)`
  position: relative;
  height: 50vh;
  min-height: 400px;
  display: flex;
  align-items: flex-end;
  background: ${({ theme }) => theme.colors.dark.main};
  overflow: hidden;
`

const HeroMedia = styled(motion.div)`
  position: absolute;
  inset: -100px;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(10, 10, 10, 0.4) 0%, rgba(10, 10, 10, 0.8) 100%);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing['4xl']} ${theme.spacing['3xl']}`};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing['3xl']} ${theme.spacing.xl}`};
  }
`

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 8vw, ${({ theme }) => theme.fontSizes['6xl']});
  color: ${({ theme }) => theme.colors.text.white};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  
  span { font-style: italic; color: ${({ theme }) => theme.colors.primary.accent}; }
`

// ============ MAIN SECTION ============
const MainSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`

// ============ INFO ============
const InfoSection = styled.div`
  background: ${({ theme }) => theme.colors.background.cream};
  padding: ${({ theme }) => `${theme.spacing['4xl']} ${theme.spacing['3xl']}`};
  position: relative;
  overflow: hidden;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing['2xl']} ${theme.spacing.lg}`};
  }
  
  /* Decorative circle */
  &::before {
    content: '';
    position: absolute;
    top: -200px;
    right: -200px;
    width: 500px;
    height: 500px;
    border: 1px solid ${({ theme }) => theme.colors.primary.accent};
    border-radius: 50%;
    opacity: 0.1;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      display: none;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing['3xl']} ${theme.spacing.xl}`};
  }
`

const InfoInner = styled.div`
  max-width: 500px;
  position: relative;
  z-index: 1;
`

const SectionTag = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: 11px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${({ theme }) => theme.colors.primary.accent};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  &::before {
    content: '';
    width: 30px;
    height: 1px;
    background: ${({ theme }) => theme.colors.primary.accent};
  }
`

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, ${({ theme }) => theme.fontSizes['4xl']});
  font-weight: ${({ theme }) => theme.fontWeights.light};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.2;
  
  span { 
    font-style: italic; 
    color: ${({ theme }) => theme.colors.primary.accent};
  }
`

const InfoText = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.8;
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
`

const ContactItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`

const ContactItem = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.background.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  text-decoration: none;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 3px;
    background: ${({ theme }) => theme.colors.primary.accent};
    transform: scaleY(0);
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateX(8px);
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
    
    &::before {
      transform: scaleY(1);
    }
  }
`

const ContactIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary.accent} 0%, #B8956A 100%);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  flex-shrink: 0;
  
  svg {
    width: 22px;
    height: 22px;
    stroke: ${({ theme }) => theme.colors.dark.main};
    stroke-width: 1.5;
    fill: none;
  }
`

const ContactInfo = styled.div`
  flex: 1;
`

const ContactLabel = styled.span`
  display: block;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${({ theme }) => theme.colors.text.muted};
  margin-bottom: 4px;
`

const ContactValue = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.text.primary};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`

const ContactArrow = styled.span`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.text.muted};
  transition: all 0.3s ease;
  
  ${ContactItem}:hover & {
    color: ${({ theme }) => theme.colors.primary.accent};
    transform: translateX(4px);
  }
`

const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  margin: ${({ theme }) => theme.spacing['2xl']} 0;
  
  &::before, &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: ${({ theme }) => theme.colors.divider};
  }
  
  span {
    font-size: 10px;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    color: ${({ theme }) => theme.colors.text.muted};
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`

const SocialLink = styled(motion.a)`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.dark.main};
  border-radius: 50%;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  svg {
    width: 20px;
    height: 20px;
    stroke: ${({ theme }) => theme.colors.text.cream};
    stroke-width: 1.5;
    fill: none;
    position: relative;
    z-index: 1;
    transition: all 0.3s ease;
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: ${({ theme }) => theme.colors.primary.accent};
    transform: scale(0);
    border-radius: 50%;
    transition: transform 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-4px);
    
    &::before {
      transform: scale(1);
    }
    
    svg {
      stroke: ${({ theme }) => theme.colors.dark.main};
    }
  }
`

// ============ FORM ============
const FormSection = styled.div`
  background: ${({ theme }) => theme.colors.dark.main};
  padding: ${({ theme }) => `${theme.spacing['4xl']} ${theme.spacing['3xl']}`};
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Large S watermark */
  &::before {
    content: 'S';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 400px;
    font-style: italic;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.02);
    pointer-events: none;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing['3xl']} ${theme.spacing.xl}`};
  }
`

const FormInner = styled(motion.form)`
  max-width: 420px;
  width: 100%;
  position: relative;
  z-index: 1;
`

const FormHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`

const FormIcon = styled.div`
  width: 64px;
  height: 64px;
  margin: 0 auto ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary.accent} 0%, #B8956A 100%);
  border-radius: 50%;
  
  svg {
    width: 28px;
    height: 28px;
    stroke: ${({ theme }) => theme.colors.dark.main};
    stroke-width: 1.5;
    fill: none;
  }
`

const FormTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colors.text.white};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  
  span {
    font-style: italic;
    color: ${({ theme }) => theme.colors.primary.accent};
  }
`

const FormSubtitle = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.muted};
`

const FormGrid = styled.div`
  display: grid;
  gap: ${({ theme }) => theme.spacing.lg};
`

const FormGroup = styled.div`
  position: relative;
`

const FormLabel = styled.label`
  position: absolute;
  left: 16px;
  top: -8px;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${({ theme }) => theme.colors.primary.accent};
  background: ${({ theme }) => theme.colors.dark.main};
  padding: 0 8px;
`

const FormInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing.lg}`};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.text.white};
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  outline: none;
  transition: all 0.3s ease;
  
  &::placeholder { 
    color: ${({ theme }) => theme.colors.text.muted}; 
    opacity: 0.5;
  }
  
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.accent};
    box-shadow: 0 0 0 3px rgba(201, 168, 124, 0.1);
  }
`

const FormTextarea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-family: ${({ theme }) => theme.fonts.body};
  color: ${({ theme }) => theme.colors.text.white};
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.15);
  border-radius: ${({ theme }) => theme.borderRadius.md};
  outline: none;
  resize: none;
  min-height: 120px;
  transition: all 0.3s ease;
  
  &::placeholder { 
    color: ${({ theme }) => theme.colors.text.muted}; 
    opacity: 0.5;
  }
  
  &:focus {
    border-color: ${({ theme }) => theme.colors.primary.accent};
    box-shadow: 0 0 0 3px rgba(201, 168, 124, 0.1);
  }
`

const SubmitButton = styled(motion.button)`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
  margin-top: ${({ theme }) => theme.spacing.xl};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${({ theme }) => theme.colors.dark.main};
  background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary.accent} 0%, #D4B896 100%);
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(201, 168, 124, 0.3);
  }
  
  &:active {
    transform: translateY(0);
  }
`

const SuccessMessage = styled(motion.div)`
  background: rgba(201, 168, 124, 0.1);
  border: 1px solid ${({ theme }) => theme.colors.primary.accent};
  color: ${({ theme }) => theme.colors.primary.accent};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
`

// ============ COMPONENT ============
const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  
  // Parallax
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <>
      <HeroSection ref={heroRef}>
        <HeroMedia style={{ y: heroY, scale: heroScale }}>
          <img src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=1920&q=80" alt="" />
        </HeroMedia>
        <HeroContent
          initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroTitle>Связаться с <span>нами</span></HeroTitle>
        </HeroContent>
      </HeroSection>
      
      <MainSection>
        <InfoSection>
          <InfoInner>
            <SectionTag
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Контакты
            </SectionTag>
            <SectionTitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Давайте начнём <span>разговор</span>
            </SectionTitle>
            <InfoText
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Есть вопрос или пожелание? Будем рады услышать вас. 
              Заходите, звоните или пишите.
            </InfoText>
            
            <ContactItems>
              <ContactItem
                href="https://maps.google.com/?q=41.311081,69.279737"
                target="_blank"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <ContactIcon>
                  <svg viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                </ContactIcon>
                <ContactInfo>
                  <ContactLabel>Адрес</ContactLabel>
                  <ContactValue>ул. Тараса Шевченко 36А, Ташкент</ContactValue>
                </ContactInfo>
                <ContactArrow>→</ContactArrow>
              </ContactItem>
              
              <ContactItem
                href="tel:+998999014433"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <ContactIcon>
                  <svg viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </ContactIcon>
                <ContactInfo>
                  <ContactLabel>Телефон</ContactLabel>
                  <ContactValue>+998 99 901 44 33</ContactValue>
                </ContactInfo>
                <ContactArrow>→</ContactArrow>
              </ContactItem>
              
              <ContactItem
                href="mailto:info@socialscafe.uz"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <ContactIcon>
                  <svg viewBox="0 0 24 24">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </ContactIcon>
                <ContactInfo>
                  <ContactLabel>Почта</ContactLabel>
                  <ContactValue>info@socialscafe.uz</ContactValue>
                </ContactInfo>
                <ContactArrow>→</ContactArrow>
              </ContactItem>
            </ContactItems>
            
            <Divider><span>Мы в соцсетях</span></Divider>
            
            <SocialLinks>
              <SocialLink 
                href="https://instagram.com/socials_uz" 
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Instagram"
              >
                <svg viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </SocialLink>
              <SocialLink 
                href="https://t.me/socialscafe" 
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Telegram"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M21.2 4.4L2.4 10.8c-.6.2-.6 1.1.1 1.3l4.9 1.5 1.9 6c.1.4.6.5.9.3l2.8-2.3 5.5 4c.4.3 1 .1 1.1-.4L22.8 5.5c.2-.7-.5-1.3-1.1-1.1zM9.6 13.4l-.3 3.3-.9-4.2 10.6-6.5-9.4 7.4z"/>
                </svg>
              </SocialLink>
              <SocialLink 
                href="https://facebook.com/socialscafe" 
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title="Facebook"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </SocialLink>
            </SocialLinks>
          </InfoInner>
        </InfoSection>
        
        <FormSection>
          <FormInner
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            onSubmit={handleSubmit}
          >
            <FormHeader>
              <FormIcon>
                <svg viewBox="0 0 24 24">
                  <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
                </svg>
              </FormIcon>
              <FormTitle>Напишите <span>нам</span></FormTitle>
              <FormSubtitle>Ответим в течение 24 часов</FormSubtitle>
            </FormHeader>
            
            {submitted && (
              <SuccessMessage 
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }}
              >
                ✓ Сообщение отправлено!
              </SuccessMessage>
            )}
            
            <FormGrid>
              <FormGroup>
                <FormLabel>Имя</FormLabel>
                <FormInput 
                  type="text"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Email</FormLabel>
                <FormInput 
                  type="email"
                  placeholder="ваш@email.com"
                  value={formData.email}
                  onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                  required
                />
              </FormGroup>
              <FormGroup>
                <FormLabel>Сообщение</FormLabel>
                <FormTextarea 
                  placeholder="Что бы вы хотели нам сказать?"
                  value={formData.message}
                  onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                  required
                />
              </FormGroup>
            </FormGrid>
            
            <SubmitButton 
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Отправить →
            </SubmitButton>
          </FormInner>
        </FormSection>
      </MainSection>
    </>
  )
}

export default Contact
