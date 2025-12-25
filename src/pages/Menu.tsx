import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { MagneticButton } from '../components/animations/MagneticButton'

// ============ HERO ============
const HeroSection = styled(motion.section)`
  position: relative;
  height: 60vh;
  min-height: 500px;
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
    background: linear-gradient(
      180deg,
      rgba(10, 10, 10, 0.5) 0%,
      rgba(10, 10, 10, 0.8) 100%
    );
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

const HeroTitleLine = styled(motion.span)`
  display: block;
  overflow: hidden;
`

const HeroTitle = styled.h1`
  font-size: clamp(3rem, 10vw, ${({ theme }) => theme.fontSizes['7xl']});
  color: ${({ theme }) => theme.colors.text.white};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  .italic { 
    font-style: italic; 
    color: ${({ theme }) => theme.colors.primary.accent}; 
  }
`

const HeroDescription = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.text.cream};
  opacity: 0.7;
  max-width: 500px;
`

// ============ MENU SECTION ============
const MenuSection = styled.section`
  position: relative;
  padding: ${({ theme }) => `${theme.spacing['4xl']} ${theme.spacing['3xl']}`};
  overflow: hidden;
  min-height: 100vh;
  background: linear-gradient(135deg, #FDFCFA 0%, #F0E6D8 100%);
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing['3xl']} ${theme.spacing.xl}`};
  }
`

/* ===== BACKGROUND EFFECTS (z-index: 0) - Hidden on mobile for performance ===== */

/* Animated border frame - BACKGROUND */
const AnimatedFrame = styled(motion.div)`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  border: 2px solid transparent;
  border-radius: 30px;
  pointer-events: none;
  z-index: 0;
  
  @media (max-width: 768px) {
    display: none;
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: 32px;
    padding: 2px;
    background: linear-gradient(
      90deg,
      rgba(201, 168, 124, 0) 0%,
      rgba(201, 168, 124, 0.6) 25%,
      rgba(201, 168, 124, 0.8) 50%,
      rgba(201, 168, 124, 0.6) 75%,
      rgba(201, 168, 124, 0) 100%
    );
    background-size: 300% 100%;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: borderMove 4s linear infinite;
  }
  
  @keyframes borderMove {
    0% { background-position: 0% 50%; }
    100% { background-position: 300% 50%; }
  }
`

/* Flying sparkles - BACKGROUND */
const Sparkle = styled(motion.div)`
  position: absolute;
  width: 8px;
  height: 8px;
  background: #C9A87C;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  box-shadow: 
    0 0 15px #C9A87C,
    0 0 30px #C9A87C,
    0 0 45px rgba(201, 168, 124, 0.8),
    0 0 60px rgba(201, 168, 124, 0.6);
  
  @media (max-width: 768px) {
    display: none;
  }
`

/* Floating icons - BACKGROUND */
const FloatingIcon = styled(motion.div)`
  position: absolute;
  font-size: 60px;
  pointer-events: none;
  z-index: 0;
  opacity: 0.15;
  
  @media (max-width: 768px) {
    display: none;
  }
`

/* Corner decorative brackets - BACKGROUND */
const CornerBracket = styled(motion.div)<{ $corner: string }>`
  position: absolute;
  width: 120px;
  height: 120px;
  pointer-events: none;
  z-index: 0;
  
  @media (max-width: 768px) {
    display: none;
  }
  
  &::before, &::after {
    content: '';
    position: absolute;
    background: linear-gradient(90deg, rgba(201, 168, 124, 0.5), rgba(201, 168, 124, 0.1));
  }
  
  ${({ $corner }) => {
    switch ($corner) {
      case 'top-left':
        return `
          top: 40px;
          left: 40px;
          &::before { top: 0; left: 0; width: 100px; height: 4px; }
          &::after { top: 0; left: 0; width: 4px; height: 100px; }
        `
      case 'top-right':
        return `
          top: 40px;
          right: 40px;
          &::before { top: 0; right: 0; width: 100px; height: 4px; background: linear-gradient(270deg, rgba(201, 168, 124, 0.5), rgba(201, 168, 124, 0.1)); }
          &::after { top: 0; right: 0; width: 4px; height: 100px; }
        `
      case 'bottom-left':
        return `
          bottom: 40px;
          left: 40px;
          &::before { bottom: 0; left: 0; width: 100px; height: 4px; }
          &::after { bottom: 0; left: 0; width: 4px; height: 100px; background: linear-gradient(0deg, rgba(201, 168, 124, 0.5), rgba(201, 168, 124, 0.1)); }
        `
      case 'bottom-right':
        return `
          bottom: 40px;
          right: 40px;
          &::before { bottom: 0; right: 0; width: 100px; height: 4px; background: linear-gradient(270deg, rgba(201, 168, 124, 0.5), rgba(201, 168, 124, 0.1)); }
          &::after { bottom: 0; right: 0; width: 4px; height: 100px; background: linear-gradient(0deg, rgba(201, 168, 124, 0.5), rgba(201, 168, 124, 0.1)); }
        `
      default:
        return ''
    }
  }}
`

/* Marquee text banner - BACKGROUND */
const MarqueeBanner = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: -10%;
  right: -10%;
  height: 80px;
  background: rgba(201, 168, 124, 0.08);
  display: flex;
  align-items: center;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
  transform: rotate(-5deg);
  
  @media (max-width: 768px) {
    display: none;
  }
`

const MarqueeText = styled(motion.div)`
  display: flex;
  white-space: nowrap;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 48px;
  font-weight: 300;
  font-style: italic;
  color: rgba(201, 168, 124, 0.15);
  letter-spacing: 0.1em;
  
  span {
    margin: 0 80px;
  }
`

/* Glowing lines - BACKGROUND */
const CrossingLine = styled(motion.div)`
  position: absolute;
  height: 3px;
  background: linear-gradient(90deg, transparent, rgba(201, 168, 124, 0.4), transparent);
  pointer-events: none;
  z-index: 0;
  box-shadow: 0 0 30px rgba(201, 168, 124, 0.3);
  
  @media (max-width: 768px) {
    display: none;
  }
`

/* Pulsing dot indicators - BACKGROUND */
const PulsingDot = styled(motion.div)`
  position: absolute;
  width: 16px;
  height: 16px;
  background: rgba(201, 168, 124, 0.4);
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  
  @media (max-width: 768px) {
    display: none;
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: -8px;
    border: 2px solid rgba(201, 168, 124, 0.3);
    border-radius: 50%;
    animation: pulse 2s ease-out infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: -20px;
    border: 1px solid rgba(201, 168, 124, 0.2);
    border-radius: 50%;
    animation: pulse 2s ease-out infinite 0.5s;
  }
  
  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(2.5); opacity: 0; }
  }
`

/* Large floating circles - BACKGROUND */
const FloatingCircle = styled(motion.div)<{ $size: number }>`
  position: absolute;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  border: 2px solid rgba(201, 168, 124, 0.2);
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  
  @media (max-width: 768px) {
    display: none;
  }
`

/* Gradient blobs - BACKGROUND */
const GradientBlob = styled(motion.div)<{ $size: number }>`
  position: absolute;
  width: ${({ $size }) => $size}px;
  height: ${({ $size }) => $size}px;
  background: radial-gradient(circle, rgba(201, 168, 124, 0.2) 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
  filter: blur(40px);
  
  @media (max-width: 768px) {
    display: none;
  }
`

const MenuContainer = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1400px;
  margin: 0 auto;
`

// ============ CATEGORIES ============
const Categories = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  overflow-x: auto;
  padding-bottom: ${({ theme }) => theme.spacing.md};
  justify-content: center;
  
  &::-webkit-scrollbar { display: none; }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: flex-start;
  }
`

const CategoryButton = styled(motion.button)<{ $active: boolean }>`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
  font-size: 11px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 0.2em;
  white-space: nowrap;
  background: ${({ $active, theme }) => $active ? theme.colors.dark.main : 'transparent'};
  color: ${({ $active, theme }) => $active ? theme.colors.text.white : theme.colors.text.light};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
  
  &:hover {
    color: ${({ theme }) => theme.colors.text.primary};
    transform: translateY(-2px);
  }
`

// ============ MENU GRID ============
const MenuGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing['2xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    max-width: 450px;
    margin: 0 auto;
  }
`

// ============ STUNNING CARD DESIGN ============
const Card = styled(motion.div)`
  position: relative;
  cursor: pointer;
  perspective: 1000px;
`

const CardInner = styled(motion.div)`
  position: relative;
  transform-style: preserve-3d;
`

const CardImageWrapper = styled(motion.div)`
  position: relative;
  aspect-ratio: 4/5;
  border-radius: 24px;
  overflow: hidden;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    border-radius: 16px;
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 24px;
    padding: 2px;
    background: linear-gradient(
      135deg,
      rgba(201, 168, 124, 0.5) 0%,
      transparent 50%,
      rgba(201, 168, 124, 0.3) 100%
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    opacity: 0;
    transition: opacity 0.5s ease;
    z-index: 3;
    pointer-events: none;
  }
`

const CardImage = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: saturate(0.9);
  transition: filter 0.5s ease;
`

const CardGradient = styled(motion.div)`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    transparent 30%,
    rgba(10, 10, 10, 0.4) 60%,
    rgba(10, 10, 10, 0.95) 100%
  );
  z-index: 1;
`

const CardGlow = styled(motion.div)`
  position: absolute;
  inset: -2px;
  border-radius: 26px;
  background: linear-gradient(
    135deg,
    rgba(201, 168, 124, 0.4) 0%,
    transparent 40%,
    transparent 60%,
    rgba(201, 168, 124, 0.2) 100%
  );
  filter: blur(15px);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.5s ease;
`

const CardBadge = styled(motion.div)`
  position: absolute;
  top: 20px;
  left: 20px;
  padding: 8px 16px;
  background: rgba(201, 168, 124, 0.9);
  backdrop-filter: blur(10px);
  color: #0A0A0A;
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  border-radius: 50px;
  z-index: 5;
  box-shadow: 0 4px 20px rgba(201, 168, 124, 0.4);
`

const CardPriceFloat = styled(motion.div)`
  position: absolute;
  top: 20px;
  right: 20px;
  padding: 12px 18px;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  z-index: 5;
  text-align: right;
`

const FloatPrice = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: 300;
  font-style: italic;
  color: #FDFCFA;
  line-height: 1;
  
  span {
    font-size: 10px;
    font-style: normal;
    opacity: 0.5;
    letter-spacing: 0.1em;
    display: block;
    margin-top: 2px;
  }
`

const CardOverlayContent = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 30px;
  z-index: 2;
`

const CardCategory = styled(motion.div)`
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: ${({ theme }) => theme.colors.primary.accent};
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &::before {
    content: '';
    width: 20px;
    height: 1px;
    background: ${({ theme }) => theme.colors.primary.accent};
  }
`

const CardName = styled(motion.h3)`
  font-size: 28px;
  font-weight: 300;
  color: #FDFCFA;
  margin-bottom: 8px;
  line-height: 1.2;
`

const CardDescription = styled(motion.p)`
  font-size: 14px;
  color: rgba(253, 252, 250, 0.6);
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 20px;
`

const CardActions = styled(motion.div)`
  display: flex;
  gap: 12px;
`

const ActionButton = styled(motion.button)<{ $primary?: boolean }>`
  flex: 1;
  padding: 14px 20px;
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${({ $primary }) => $primary ? `
    background: linear-gradient(135deg, #C9A87C 0%, #E8DED1 100%);
    color: #0A0A0A;
    box-shadow: 0 4px 20px rgba(201, 168, 124, 0.4);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 30px rgba(201, 168, 124, 0.5);
    }
  ` : `
    background: rgba(255, 255, 255, 0.1);
    color: #FDFCFA;
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
      border-color: rgba(255, 255, 255, 0.3);
    }
  `}
`

const CardNumber = styled(motion.div)`
  position: absolute;
  bottom: 30px;
  right: 30px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 80px;
  font-weight: 200;
  font-style: italic;
  color: rgba(253, 252, 250, 0.05);
  line-height: 1;
  z-index: 1;
  pointer-events: none;
`

// ============ MODAL ============
const ModalOverlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: ${({ theme }) => theme.colors.background.overlay};
  z-index: ${({ theme }) => theme.zIndex.modal};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl};
`

const ModalContent = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background.primary};
  max-width: 1000px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    max-height: 85vh;
    overflow-y: auto;
  }
`

const ModalImage = styled.div`
  position: relative;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 350px;
  }
`

const ModalBadge = styled.div`
  position: absolute;
  top: ${({ theme }) => theme.spacing.xl};
  left: ${({ theme }) => theme.spacing.xl};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
  background: ${({ theme }) => theme.colors.primary.accent};
  color: ${({ theme }) => theme.colors.dark.main};
  font-size: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-transform: uppercase;
  letter-spacing: 0.15em;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
`

const ModalBody = styled.div`
  padding: ${({ theme }) => theme.spacing['3xl']};
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing['2xl']};
  }
`

const ModalCategory = styled.span`
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.3em;
  color: ${({ theme }) => theme.colors.primary.accent};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  display: block;
`

const ModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: 1.2;
`

const ModalDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.text.secondary};
  line-height: 2;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`

const ModalPriceRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: ${({ theme }) => theme.spacing.xl};
  border-top: 1px solid ${({ theme }) => theme.colors.divider};
`

const ModalPrice = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-style: italic;
  color: ${({ theme }) => theme.colors.text.primary};
  
  span {
    font-size: ${({ theme }) => theme.fontSizes.md};
    font-style: normal;
    opacity: 0.5;
    margin-left: 4px;
  }
`

const ModalButton = styled.button`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing['2xl']}`};
  background: ${({ theme }) => theme.colors.dark.main};
  color: ${({ theme }) => theme.colors.text.white};
  font-size: 11px;
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-transform: uppercase;
  letter-spacing: 0.15em;
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`

const ModalClose = styled(motion.button)`
  position: absolute;
  top: ${({ theme }) => theme.spacing.xl};
  right: ${({ theme }) => theme.spacing.xl};
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.dark.main};
  color: ${({ theme }) => theme.colors.text.white};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
`

// ============ COMPONENT ============
interface MenuItem {
  id: number
  name: string
  description: string
  price: string
  category: string
  image: string
  popular?: boolean
}

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('Все')
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)
  
  // Parallax
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  
  const categories = ['Все', 'Кофе', 'Завтраки', 'Десерты', 'Напитки']
  
  const menuItems: MenuItem[] = [
    { id: 1, name: 'Фирменный Латте', description: 'Наш фирменный эспрессо с нежным молоком и изысканным латте-артом. Идеальный баланс насыщенности и мягкости.', price: '45,000', category: 'Кофе', image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=800&q=80', popular: true },
    { id: 2, name: 'Флэт Уайт', description: 'Двойной ристретто с бархатистой молочной пенкой. Насыщенный и мягкий для истинных ценителей.', price: '42,000', category: 'Кофе', image: 'https://images.unsplash.com/photo-1497935586351-b67a49e012bf?w=800&q=80' },
    { id: 3, name: 'Айс Американо', description: 'Освежающий двойной эспрессо со льдом и холодной водой. Идеален для жарких дней.', price: '38,000', category: 'Кофе', image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?w=800&q=80' },
    { id: 4, name: 'Тост с авокадо', description: 'Авокадо на хрустящем хлебе с яйцами пашот, черри и микрозеленью.', price: '68,000', category: 'Завтраки', image: 'https://images.unsplash.com/photo-1603046891726-36bfd957e0bf?w=800&q=80', popular: true },
    { id: 5, name: 'Яйца Бенедикт', description: 'Яйца пашот на английском маффине с голландским соусом и копчёным лососем.', price: '75,000', category: 'Завтраки', image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80' },
    { id: 6, name: 'Панкейки с ягодами', description: 'Пышные панкейки со свежими ягодами, кленовым сиропом и взбитыми сливками.', price: '58,000', category: 'Завтраки', image: 'https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=800&q=80', popular: true },
    { id: 7, name: 'Фисташковый круассан', description: 'Нежный французский круассан с фисташковым кремом и дроблёными фисташками.', price: '35,000', category: 'Десерты', image: 'https://images.unsplash.com/photo-1623334044303-241021148842?w=800&q=80', popular: true },
    { id: 8, name: 'Тирамису', description: 'Классические итальянские слои савоярди, пропитанных эспрессо, и крема из маскарпоне.', price: '48,000', category: 'Десерты', image: 'https://images.unsplash.com/photo-1586040140378-b5634cb4c8fc?w=800&q=80' },
    { id: 9, name: 'Свежий лимонад', description: 'Домашний лимонад со свежей мятой и ноткой имбиря.', price: '28,000', category: 'Напитки', image: 'https://images.unsplash.com/photo-1523677011781-c91d1bbe2f9e?w=800&q=80' },
  ]
  
  const filteredItems = activeCategory === 'Все' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory)
  
  return (
    <>
      <HeroSection ref={heroRef}>
        <HeroMedia style={{ y: heroY, scale: heroScale }}>
          <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=1920&q=80" alt="" />
        </HeroMedia>
        <HeroContent>
          <HeroTitle>
            <HeroTitleLine
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              Наше <span className="italic">Меню</span>
            </HeroTitleLine>
          </HeroTitle>
          <HeroDescription
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.7, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Каждое блюдо рассказывает историю. Откройте для себя нашу 
            коллекцию, созданную с любовью и лучшими ингредиентами.
          </HeroDescription>
        </HeroContent>
      </HeroSection>
      
      <MenuSection>
        {/* ===== ANIMATED BACKGROUND EFFECTS ===== */}
        
        {/* Large gradient blobs */}
        <GradientBlob 
          $size={600}
          style={{ top: '-10%', right: '-5%' }}
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <GradientBlob 
          $size={500}
          style={{ bottom: '10%', left: '-5%' }}
          animate={{ 
            x: [0, -40, 0],
            y: [0, -30, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
        />
        <GradientBlob 
          $size={400}
          style={{ top: '40%', left: '30%' }}
          animate={{ 
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 8 }}
        />
        
        {/* Floating circles */}
        <FloatingCircle 
          $size={300}
          style={{ top: '15%', right: '10%' }}
          animate={{ 
            rotate: 360,
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <FloatingCircle 
          $size={200}
          style={{ bottom: '20%', left: '15%' }}
          animate={{ 
            rotate: -360,
            scale: [1, 1.15, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
        <FloatingCircle 
          $size={150}
          style={{ top: '50%', left: '5%' }}
          animate={{ 
            rotate: 360,
            y: [0, -20, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        
        {/* Animated glowing frame */}
        <AnimatedFrame />
        
        {/* Corner brackets */}
        <CornerBracket $corner="top-left" />
        <CornerBracket $corner="top-right" />
        <CornerBracket $corner="bottom-left" />
        <CornerBracket $corner="bottom-right" />
        
        {/* Pulsing dots */}
        <PulsingDot style={{ top: '80px', left: '80px' }} />
        <PulsingDot style={{ top: '80px', right: '80px' }} />
        <PulsingDot style={{ bottom: '80px', left: '80px' }} />
        <PulsingDot style={{ bottom: '80px', right: '80px' }} />
        <PulsingDot style={{ top: '50%', left: '50px' }} />
        <PulsingDot style={{ top: '50%', right: '50px' }} />
        
        {/* Flying sparkles */}
        {[...Array(8)].map((_, i) => (
          <Sparkle
            key={i}
            style={{ 
              top: `${10 + (i % 4) * 20}%`,
              left: '-20px'
            }}
            animate={{ 
              x: [0, 1500],
              y: [0, Math.sin(i) * 20, 0]
            }}
            transition={{ 
              duration: 10 + i,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "linear"
            }}
          />
        ))}
        
        {/* Crossing glowing lines */}
        <CrossingLine 
          style={{ top: '25%', width: '100%', left: 0 }}
          animate={{ 
            scaleX: [0, 1, 1, 0],
            opacity: [0, 0.6, 0.6, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, repeatDelay: 4 }}
        />
        <CrossingLine 
          style={{ top: '50%', width: '100%', left: 0 }}
          animate={{ 
            scaleX: [0, 1, 1, 0],
            opacity: [0, 0.6, 0.6, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, repeatDelay: 4, delay: 2 }}
        />
        <CrossingLine 
          style={{ top: '75%', width: '100%', left: 0 }}
          animate={{ 
            scaleX: [0, 1, 1, 0],
            opacity: [0, 0.6, 0.6, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, repeatDelay: 4, delay: 4 }}
        />
        
        {/* Large floating icons */}
        <FloatingIcon 
          style={{ top: '20%', left: '8%' }}
          animate={{ 
            y: [0, -30, 0],
            rotate: [-10, 10, -10]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        >
          ☕
        </FloatingIcon>
        <FloatingIcon 
          style={{ top: '35%', right: '10%' }}
          animate={{ 
            y: [0, 25, 0],
            rotate: [10, -10, 10]
          }}
          transition={{ duration: 9, repeat: Infinity, delay: 2 }}
        >
          🍰
        </FloatingIcon>
        <FloatingIcon 
          style={{ top: '55%', left: '12%' }}
          animate={{ 
            y: [0, -20, 0],
            rotate: [-5, 5, -5]
          }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        >
          🥐
        </FloatingIcon>
        <FloatingIcon 
          style={{ top: '70%', right: '8%' }}
          animate={{ 
            y: [0, 20, 0],
            rotate: [5, -5, 5]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 3 }}
        >
          🍪
        </FloatingIcon>
        <FloatingIcon 
          style={{ bottom: '15%', left: '15%' }}
          animate={{ 
            y: [0, -25, 0],
            rotate: [-8, 8, -8]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 4 }}
        >
          🧁
        </FloatingIcon>
        
        {/* Diagonal marquee banner */}
        <MarqueeBanner>
          <MarqueeText
            animate={{ x: [0, -2000] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <span>✦ ФИРМЕННОЕ МЕНЮ</span>
            <span>✦ АВТОРСКИЙ КОФЕ</span>
            <span>✦ СВЕЖАЯ ВЫПЕЧКА</span>
            <span>✦ ОСОБЫЕ НАПИТКИ</span>
            <span>✦ АВТОРСКИЕ ДЕСЕРТЫ</span>
            <span>✦ ФИРМЕННОЕ МЕНЮ</span>
            <span>✦ АВТОРСКИЙ КОФЕ</span>
            <span>✦ СВЕЖАЯ ВЫПЕЧКА</span>
            <span>✦ ОСОБЫЕ НАПИТКИ</span>
            <span>✦ АВТОРСКИЕ ДЕСЕРТЫ</span>
          </MarqueeText>
        </MarqueeBanner>
        
        <MenuContainer>
          <Categories
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {categories.map((cat, i) => (
              <CategoryButton 
                key={cat} 
                $active={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                {cat}
              </CategoryButton>
            ))}
          </Categories>
          
          <MenuGrid layout>
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, i) => (
                <Card
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => setSelectedItem(item)}
                  onHoverStart={() => setHoveredCard(item.id)}
                  onHoverEnd={() => setHoveredCard(null)}
                >
                  <CardInner
                    animate={{
                      rotateY: hoveredCard === item.id ? 2 : 0,
                      rotateX: hoveredCard === item.id ? -2 : 0,
                    }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <CardGlow 
                      style={{ opacity: hoveredCard === item.id ? 1 : 0 }}
                    />
                    
                    <CardImageWrapper
                      animate={{
                        y: hoveredCard === item.id ? -15 : 0,
                        boxShadow: hoveredCard === item.id 
                          ? '0 40px 80px rgba(0, 0, 0, 0.3)' 
                          : '0 20px 50px rgba(0, 0, 0, 0.15)'
                      }}
                      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      style={{
                        // @ts-ignore
                        '--border-opacity': hoveredCard === item.id ? 1 : 0
                      }}
                    >
                      <CardImage 
                        src={item.image} 
                        alt={item.name}
                        animate={{
                          scale: hoveredCard === item.id ? 1.08 : 1,
                          filter: hoveredCard === item.id ? 'saturate(1.1)' : 'saturate(0.9)'
                        }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      />
                      
                      <CardGradient />
                      
                      {item.popular && (
                        <CardBadge
                          animate={{
                            scale: hoveredCard === item.id ? 1.05 : 1,
                            y: hoveredCard === item.id ? -3 : 0
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          ✦ Хит
                        </CardBadge>
                      )}
                      
                      <CardPriceFloat
                        animate={{
                          scale: hoveredCard === item.id ? 1.05 : 1,
                          y: hoveredCard === item.id ? -3 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <FloatPrice>
                          {item.price}
                          <span>сум</span>
                        </FloatPrice>
                      </CardPriceFloat>
                      
                      <CardNumber>0{i + 1}</CardNumber>
                      
                      <CardOverlayContent>
                        <CardCategory
                          animate={{ x: hoveredCard === item.id ? 10 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.category}
                        </CardCategory>
                        
                        <CardName
                          animate={{ 
                            y: hoveredCard === item.id ? -5 : 0,
                            letterSpacing: hoveredCard === item.id ? '0.02em' : '0'
                          }}
                          transition={{ duration: 0.4 }}
                        >
                          {item.name}
                        </CardName>
                        
                        <CardDescription
                          animate={{ 
                            opacity: hoveredCard === item.id ? 1 : 0.6,
                            y: hoveredCard === item.id ? -3 : 0
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {item.description}
                        </CardDescription>
                        
                        <CardActions
                          initial={{ opacity: 0, y: 20 }}
                          animate={{
                            opacity: hoveredCard === item.id ? 1 : 0,
                            y: hoveredCard === item.id ? 0 : 20
                          }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <MagneticButton strength={0.15}>
                            <ActionButton
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              Подробнее
                            </ActionButton>
                          </MagneticButton>
                          <MagneticButton strength={0.15}>
                            <ActionButton 
                              $primary
                              whileHover={{ scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              Заказать
                            </ActionButton>
                          </MagneticButton>
                        </CardActions>
                      </CardOverlayContent>
                    </CardImageWrapper>
                  </CardInner>
                </Card>
              ))}
            </AnimatePresence>
          </MenuGrid>
        </MenuContainer>
      </MenuSection>
      
      <AnimatePresence>
        {selectedItem && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
          >
            <ModalContent
              initial={{ opacity: 0, scale: 0.8, y: 50, rotateX: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              onClick={e => e.stopPropagation()}
              style={{ position: 'relative', perspective: 1000 }}
            >
              <ModalClose 
                onClick={() => setSelectedItem(null)}
                whileHover={{ rotate: 90, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                ✕
              </ModalClose>
              
              <ModalImage>
                <motion.img 
                  src={selectedItem.image} 
                  alt={selectedItem.name}
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                />
                {selectedItem.popular && <ModalBadge>Popular Choice</ModalBadge>}
              </ModalImage>
              
              <ModalBody>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <ModalCategory>{selectedItem.category}</ModalCategory>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <ModalTitle>{selectedItem.name}</ModalTitle>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <ModalDescription>{selectedItem.description}</ModalDescription>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                >
                  <ModalPriceRow>
                    <ModalPrice>
                      {selectedItem.price}<span>сум</span>
                    </ModalPrice>
                    <MagneticButton>
                      <ModalButton>Добавить в заказ</ModalButton>
                    </MagneticButton>
                  </ModalPriceRow>
                </motion.div>
              </ModalBody>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </>
  )
}

export default Menu
