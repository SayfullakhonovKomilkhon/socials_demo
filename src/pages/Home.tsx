import React, { useRef } from 'react'
import styled, { keyframes } from 'styled-components'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

// ============ KEYFRAMES ============
const shimmer = keyframes`
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
`

// ============ HERO SECTION ============
const HeroSection = styled(motion.section)`
  position: relative;
  height: 100vh;
  min-height: 700px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.dark.main};
  overflow: hidden;
`

const HeroBackground = styled(motion.div)`
  position: absolute;
  inset: -100px;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      180deg,
      rgba(10, 10, 10, 0.3) 0%,
      rgba(10, 10, 10, 0.5) 50%,
      rgba(10, 10, 10, 0.8) 100%
    );
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 1000px;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`

const HeroTitle = styled.h1`
  font-size: clamp(3rem, 10vw, ${({ theme }) => theme.fontSizes['8xl']});
  color: ${({ theme }) => theme.colors.text.white};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  line-height: 0.95;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const HeroTitleAccent = styled.span`
  display: block;
  font-style: italic;
  background: linear-gradient(
    90deg,
    ${({ theme }) => theme.colors.primary.accent} 0%,
    ${({ theme }) => theme.colors.primary.main} 50%,
    ${({ theme }) => theme.colors.primary.accent} 100%
  );
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: ${shimmer} 3s linear infinite;
`

const HeroDescription = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text.cream};
  max-width: 600px;
  margin: 0 auto ${({ theme }) => theme.spacing['2xl']};
  line-height: 1.8;
  opacity: 0.9;
`

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  justify-content: center;
  flex-wrap: wrap;
`

const HeroButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing['3xl']}`};
  background: ${({ theme }) => theme.colors.primary.main};
  color: ${({ theme }) => theme.colors.dark.main};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-transform: uppercase;
  letter-spacing: 0.15em;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: all 0.4s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows.glow};
  }
`

const HeroButtonOutline = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing['3xl']}`};
  background: transparent;
  color: ${({ theme }) => theme.colors.text.white};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 0.15em;
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: ${({ theme }) => theme.borderRadius.full};
  backdrop-filter: blur(10px);
  transition: all 0.4s ease;
  
  &:hover {
    background: rgba(255,255,255,0.1);
    border-color: rgba(255,255,255,0.6);
  }
`

const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: ${({ theme }) => theme.spacing['3xl']};
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text.cream};
  opacity: 0.5;
`

const ScrollText = styled.span`
  font-size: 10px;
  letter-spacing: 0.3em;
  text-transform: uppercase;
`

const ScrollDot = styled(motion.div)`
  width: 6px;
  height: 6px;
  background: ${({ theme }) => theme.colors.primary.accent};
  border-radius: 50%;
`

// ============ MARQUEE ============
const MarqueeSection = styled.section`
  background: ${({ theme }) => theme.colors.dark.main};
  padding: ${({ theme }) => `${theme.spacing['2xl']} 0`};
  overflow: hidden;
  border-top: 1px solid rgba(255,255,255,0.05);
`

const MarqueeTrack = styled(motion.div)`
  display: flex;
  width: fit-content;
`

const MarqueeText = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(1.5rem, 4vw, ${({ theme }) => theme.fontSizes['3xl']});
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colors.text.cream};
  white-space: nowrap;
  padding: 0 ${({ theme }) => theme.spacing['2xl']};
  opacity: 0.3;
  
  .accent {
    color: ${({ theme }) => theme.colors.primary.accent};
    font-style: italic;
  }
`

// ============ ABOUT SECTION ============
const AboutSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`

const AboutImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    height: 60vh;
    min-height: 400px;
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: ${({ theme }) => `${theme.spacing['4xl']} ${theme.spacing['3xl']}`};
  background: ${({ theme }) => theme.colors.background.cream};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing['3xl']} ${theme.spacing.xl}`};
  }
`

const AboutInner = styled.div`
  max-width: 520px;
`

const SectionTag = styled(motion.span)`
  display: inline-block;
  font-size: 11px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: ${({ theme }) => theme.colors.primary.accent};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 4vw, ${({ theme }) => theme.fontSizes['4xl']});
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.2;
  
  span {
    font-style: italic;
  }
`

const SectionText = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 1.9;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const TextLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: ${({ theme }) => theme.spacing.lg};
  transition: color 0.3s ease;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primary.accent};
  }
`

// ============ FEATURES SECTION ============
const FeaturesSection = styled(motion.section)`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.dark.main};
  padding: ${({ theme }) => `${theme.spacing['6xl']} 0`};
  overflow: hidden;
`

const FeaturesBgText = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: clamp(150px, 25vw, 400px);
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: rgba(255, 255, 255, 0.02);
  white-space: nowrap;
  pointer-events: none;
  user-select: none;
  letter-spacing: -0.05em;
`

const FeaturesContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing['3xl']};
  width: 100%;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 0 ${({ theme }) => theme.spacing.xl};
  }
`

const FeaturesHeader = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['4xl']};
`

const FeaturesTitle = styled(motion.h2)`
  font-size: clamp(2.5rem, 6vw, ${({ theme }) => theme.fontSizes['5xl']});
  color: ${({ theme }) => theme.colors.text.white};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  span {
    color: ${({ theme }) => theme.colors.primary.accent};
    font-style: italic;
  }
`

const FeaturesSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.text.cream};
  opacity: 0.5;
  max-width: 500px;
  margin: 0 auto;
`

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing['2xl']};
    max-width: 500px;
    margin: 0 auto;
  }
`

const FeatureCard = styled(motion.div)`
  position: relative;
  background: linear-gradient(180deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0) 100%);
  border: 1px solid rgba(255,255,255,0.05);
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  padding: ${({ theme }) => theme.spacing['3xl']};
  text-align: center;
  transition: all 0.5s ease;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, ${({ theme }) => theme.colors.primary.accent}, transparent);
    opacity: 0;
    transition: opacity 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-10px);
    border-color: rgba(255,255,255,0.1);
    background: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
    
    &::before {
      opacity: 1;
    }
  }
`

const FeatureIconWrapper = styled(motion.div)`
  position: relative;
  width: 100px;
  height: 100px;
  margin: 0 auto ${({ theme }) => theme.spacing['2xl']};
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.primary.accent}20 0%, transparent 100%);
    border-radius: 50%;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 10px;
    background: ${({ theme }) => theme.colors.dark.main};
    border-radius: 50%;
    border: 1px solid ${({ theme }) => theme.colors.primary.accent}40;
  }
`

const FeatureIcon = styled.span`
  position: relative;
  z-index: 1;
  font-size: 2.5rem;
`

const FeatureNumber = styled(motion.span)`
  position: absolute;
  top: 16px;
  right: 20px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colors.primary.accent};
  opacity: 0.2;
  font-style: italic;
  line-height: 1;
`

const FeatureTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.text.white};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  letter-spacing: 0.02em;
`

const FeatureText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.text.cream};
  opacity: 0.5;
  line-height: 1.8;
`

const FeatureLine = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 1px;
  background: linear-gradient(90deg, transparent, ${({ theme }) => theme.colors.primary.accent}, transparent);
`

// ============ MENU PREVIEW ============
const MenuSection = styled.section`
  padding: ${({ theme }) => `${theme.spacing['5xl']} 0`};
  background: ${({ theme }) => theme.colors.background.primary};
`

const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  max-width: 1600px;
  margin: 0 auto ${({ theme }) => theme.spacing['3xl']};
  padding: 0 ${({ theme }) => theme.spacing['3xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing.xl};
    padding: 0 ${({ theme }) => theme.spacing.xl};
  }
`

const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.wide}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const MenuItem = styled(motion.div)`
  position: relative;
  aspect-ratio: 3/4;
  overflow: hidden;
  cursor: pointer;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 40%, rgba(10, 10, 10, 0.9) 100%);
    z-index: 1;
  }
  
  &:hover img {
    transform: scale(1.1);
  }
`

const MenuItemInfo = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: ${({ theme }) => theme.spacing['2xl']};
  z-index: 2;
`

const MenuItemCategory = styled.span`
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  color: ${({ theme }) => theme.colors.primary.accent};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  display: block;
`

const MenuItemName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  color: ${({ theme }) => theme.colors.text.white};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const MenuItemPrice = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.text.cream};
  font-style: italic;
`

// ============ CTA SECTION ============
const CTASection = styled.section`
  position: relative;
  padding: ${({ theme }) => `${theme.spacing['6xl']} ${theme.spacing['3xl']}`};
  background: ${({ theme }) => theme.colors.background.cream};
  text-align: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing['4xl']} ${theme.spacing.xl}`};
  }
`

const CTAContent = styled(motion.div)`
  max-width: 700px;
  margin: 0 auto;
`

const CTATitle = styled.h2`
  font-size: clamp(2rem, 5vw, ${({ theme }) => theme.fontSizes['4xl']});
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  span { 
    font-style: italic; 
  }
`

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing['3xl']}`};
  background: ${({ theme }) => theme.colors.dark.main};
  color: ${({ theme }) => theme.colors.text.white};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-transform: uppercase;
  letter-spacing: 0.15em;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: all 0.4s ease;
  
  &:hover {
    transform: scale(1.05);
    box-shadow: ${({ theme }) => theme.shadows.xl};
  }
`

// ============ COMPONENT ============
const Home: React.FC = () => {
  // Parallax для Hero
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  const heroY = useTransform(heroProgress, [0, 1], [0, 200])
  const heroScale = useTransform(heroProgress, [0, 1], [1, 1.1])
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0])
  
  const aboutRef = useRef<HTMLElement>(null)
  const aboutInView = useInView(aboutRef, { once: true, margin: "-100px" })
  
  // Parallax для Features
  const featuresRef = useRef<HTMLElement>(null)
  const { scrollYProgress: featuresProgress } = useScroll({
    target: featuresRef,
    offset: ["start end", "end start"]
  })
  const featuresBgY = useTransform(featuresProgress, [0, 1], [-100, 100])
  const featuresBgScale = useTransform(featuresProgress, [0, 0.5, 1], [0.8, 1, 1.2])
  
  const menuItems = [
    { name: 'Фирменный Латте', category: 'Кофе', price: '45,000 сум', image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=800&q=80' },
    { name: 'Тост с авокадо', category: 'Завтраки', price: '68,000 сум', image: 'https://images.unsplash.com/photo-1603046891726-36bfd957e0bf?w=800&q=80' },
    { name: 'Панкейки с ягодами', category: 'Завтраки', price: '58,000 сум', image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800&q=80' },
    { name: 'Круассан', category: 'Выпечка', price: '35,000 сум', image: 'https://images.unsplash.com/photo-1623334044303-241021148842?w=800&q=80' },
  ]
  
  const features = [
    { icon: '☕', num: '01', title: 'Авторский кофе', text: 'Тщательно отобранные зёрна, мастерская обжарка, идеальное приготовление.' },
    { icon: '🍳', num: '02', title: 'Авторская кухня', text: 'От фирменных завтраков до изысканных десертов — кулинарное искусство.' },
    { icon: '✨', num: '03', title: 'Тёплая атмосфера', text: 'Пространство, вдохновляющее на общение и творчество.' },
  ]
  
  return (
    <>
      {/* HERO */}
      <HeroSection ref={heroRef}>
        <HeroBackground style={{ y: heroY, scale: heroScale }}>
          <img src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1920&q=80" alt="" />
        </HeroBackground>
        
        <motion.div style={{ opacity: heroOpacity }}>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <HeroTitle>
              Там, где кофе<br />
              <HeroTitleAccent>встречает искусство</HeroTitleAccent>
            </HeroTitle>
          </motion.div>
          
          <HeroDescription
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.9, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Добро пожаловать в Socials — место для ценителей кофе и гастрономии. 
            Испытайте идеальное сочетание исключительных вкусов и тёплого гостеприимства.
          </HeroDescription>
          
          <HeroButtons
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <HeroButton to="/menu">Смотреть меню</HeroButton>
            <HeroButtonOutline to="/reservation">Забронировать</HeroButtonOutline>
          </HeroButtons>
        </HeroContent>
        </motion.div>
        
        <ScrollIndicator
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ delay: 1 }}
        >
          <ScrollText>Листайте</ScrollText>
          <ScrollDot
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </ScrollIndicator>
      </HeroSection>
      
      {/* MARQUEE */}
      <MarqueeSection>
        <MarqueeTrack
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          {[...Array(4)].map((_, i) => (
            <MarqueeText key={i}>
              Авторский кофе <span className="accent">✦</span> Ремесленная выпечка <span className="accent">✦</span> Фирменные завтраки <span className="accent">✦</span> 
            </MarqueeText>
          ))}
        </MarqueeTrack>
      </MarqueeSection>
      
      {/* ABOUT */}
      <AboutSection ref={aboutRef}>
        <AboutImageWrapper>
          <motion.img 
            src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=1200&q=80" 
            alt=""
            initial={{ scale: 1.2 }}
            animate={aboutInView ? { scale: 1 } : {}}
            transition={{ duration: 1.2 }}
          />
        </AboutImageWrapper>
        
        <AboutContent>
          <AboutInner>
            <SectionTag
              initial={{ opacity: 0, x: -20 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              Наша история
            </SectionTag>
            
            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Создано с <span>любовью</span>, подано с душой
            </SectionTitle>
            
            <SectionText
              initial={{ opacity: 0, y: 30 }}
              animate={aboutInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Основано в 2019 году Давроном Хамидовым и Зиёвуддином Алихоновым. 
              Socials Cafe стало одним из самых любимых мест в Ташкенте. 
              Часть семьи Memories Group.
            </SectionText>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={aboutInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <TextLink to="/contact">Узнать больше →</TextLink>
            </motion.div>
          </AboutInner>
        </AboutContent>
      </AboutSection>
      
      {/* FEATURES */}
      <FeaturesSection ref={featuresRef}>
        <FeaturesBgText style={{ y: featuresBgY, scale: featuresBgScale }}>
          SOCIALS
        </FeaturesBgText>
        
        <FeaturesContent>
          <FeaturesHeader>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionTag style={{ color: '#C9A87C' }}>Почему мы</SectionTag>
            </motion.div>
            <FeaturesTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Создаём <span>моменты</span> радости
            </FeaturesTitle>
            <FeaturesSubtitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 0.5, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Каждая чашка рассказывает историю, каждое блюдо — шедевр
            </FeaturesSubtitle>
          </FeaturesHeader>
          
          <FeaturesGrid>
            {features.map((feature, i) => (
              <FeatureCard
                key={feature.num}
                initial={{ opacity: 0, y: 60, rotateX: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.2, ease: [0.16, 1, 0.3, 1] }}
              >
                <FeatureNumber>{feature.num}</FeatureNumber>
                <FeatureIconWrapper
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 + 0.3, type: "spring" }}
                >
                  <FeatureIcon>{feature.icon}</FeatureIcon>
                </FeatureIconWrapper>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureText>{feature.text}</FeatureText>
                <FeatureLine
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: 60, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: i * 0.2 + 0.5 }}
                />
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </FeaturesContent>
      </FeaturesSection>
      
      {/* MENU */}
      <MenuSection>
        <MenuHeader>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTag>Наше меню</SectionTag>
            <SectionTitle>Почувствуйте <span>разницу</span></SectionTitle>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TextLink to="/menu">Полное меню →</TextLink>
          </motion.div>
        </MenuHeader>
        
        <MenuGrid>
          {menuItems.map((item, i) => (
            <MenuItem
              key={item.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <img src={item.image} alt={item.name} />
              <MenuItemInfo>
                <MenuItemCategory>{item.category}</MenuItemCategory>
                <MenuItemName>{item.name}</MenuItemName>
                <MenuItemPrice>{item.price}</MenuItemPrice>
              </MenuItemInfo>
            </MenuItem>
          ))}
        </MenuGrid>
      </MenuSection>
      
      {/* CTA */}
      <CTASection>
        <CTAContent
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <SectionTag>Бронирование</SectionTag>
          <CTATitle>
            Готовы к <span>незабываемому</span> опыту?
          </CTATitle>
          <CTAButton to="/reservation">Забронировать столик</CTAButton>
        </CTAContent>
      </CTASection>
    </>
  )
}

export default Home
