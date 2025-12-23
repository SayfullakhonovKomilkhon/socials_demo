import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, ChefHat, Heart, Gift, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import { LinkButton } from '../components/ui'

// Hero Section
const HeroSection = styled.section`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background.gradient};
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=1920') center/cover;
    opacity: 0.15;
  }
  
  @media (max-width: 768px) {
    min-height: auto;
    padding: 120px 0 60px;
  }
`

const HeroContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing['5xl']} ${theme.spacing.xl}`};
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['4xl']};
  align-items: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
  
  @media (max-width: 768px) {
    padding: 20px 15px;
    gap: 20px;
    display: flex;
    flex-direction: column;
  }
`

const HeroContent = styled(motion.div)`
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    order: 2;
    text-align: center;
  }
  
  @media (max-width: 768px) {
    padding: 0 15px;
    order: 1;
  }
`

const HeroTitle = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['7xl']};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.white};
  line-height: 1;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  
  span {
    color: ${({ theme }) => theme.colors.accent.gold};
    font-style: italic;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes['5xl']};
  }
  
  @media (max-width: 768px) {
    font-size: 32px;
    text-align: center;
    margin-bottom: 20px;
  }
`

const HeroSlogan = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.primary.lighter};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  max-width: 500px;
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    margin: 0 auto ${({ theme }) => theme.spacing['2xl']};
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 0;
    max-width: 100%;
    margin-bottom: 25px;
    text-align: center;
  }
`

const HeroButtons = styled(motion.div)`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    justify-content: center;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
    width: 100%;
    padding: 0 20px;
    
    a, button {
      width: 100% !important;
      max-width: 280px !important;
      text-align: center;
      display: flex;
      justify-content: center;
      font-size: 13px !important;
      padding: 14px 24px !important;
    }
  }
`

const HeroImage = styled(motion.div)`
  position: relative;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    order: 1;
  }
  
  @media (max-width: 768px) {
    display: none !important;
  }
  
  img {
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
    display: block;
    filter: drop-shadow(0 40px 80px rgba(0, 0, 0, 0.3));
  }
`

const FloatingBadge = styled(motion.div)`
  position: absolute;
  background: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.md} ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  box-shadow: ${({ theme }) => theme.shadows.xl};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  
  &.top-left {
    top: 10%;
    left: -5%;
  }
  
  &.bottom-right {
    bottom: 15%;
    right: 0;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    display: none;
  }
`

const BadgeIcon = styled.span`
  width: 40px;
  height: 40px;
  background: ${({ theme }) => theme.colors.accent.goldLight};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.accent.goldDark};
`

const BadgeText = styled.div`
  h4 {
    font-size: ${({ theme }) => theme.fontSizes.sm};
    font-weight: ${({ theme }) => theme.fontWeights.bold};
    color: ${({ theme }) => theme.colors.text.primary};
    margin: 0;
  }
  
  span {
    font-size: ${({ theme }) => theme.fontSizes.xs};
    color: ${({ theme }) => theme.colors.text.light};
  }
`

// Features Section
const FeaturesSection = styled.section`
  padding: 100px 40px;
  background: #f4cbcd;
`

const FeaturesSectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const FeaturesGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  
  @media (max-width: 1000px) {
    flex-wrap: wrap;
  }
`

const FeatureCard = styled(motion.div)`
  text-align: center;
  padding: 0;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  position: relative;
  
  &:hover {
    .feature-inner {
      transform: translateY(-8px);
      box-shadow: 0 20px 50px rgba(74, 44, 52, 0.25);
    }
    
    .icon-wrapper {
      transform: scale(1.05);
    }
  }
`

const FeatureCardInner = styled.div`
  background: linear-gradient(145deg, #fff 0%, #f8e8e8 100%);
  border-radius: 0 0 30px 30px;
  padding: 100px 30px 40px;
  width: 100%;
  box-shadow: 0 10px 40px rgba(74, 44, 52, 0.15);
  transition: all 0.4s ease;
  position: relative;
  margin-top: 80px;
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: 30px;
    right: 30px;
    height: 4px;
    background: linear-gradient(90deg, #C9A86C, #e8d4a8, #C9A86C);
    border-radius: 2px;
  }
`

const FeatureIconWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
  transition: transform 0.4s ease;
`

const FeatureIconCircle = styled.div`
  width: 160px;
  height: 160px;
  background: linear-gradient(145deg, #8b6b6b 0%, #6d4f4f 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fce4e4;
  box-shadow: 0 8px 30px rgba(74, 44, 52, 0.3);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: 8px;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
  }
  
  svg {
    width: 70px;
    height: 70px;
    stroke-width: 1.5;
  }
`

const FeatureTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 26px;
  color: #4a2c34;
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 400;
`

const FeatureSubtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.accent};
  font-size: 16px;
  color: #8b6b6b;
  margin-bottom: 24px;
  font-style: italic;
  font-weight: 400;
  
  &::after {
    content: '?';
    display: block;
    font-size: 8px;
    color: #C9A86C;
    margin-top: 16px;
    letter-spacing: 12px;
    text-indent: 12px;
  }
`

const FeatureButton = styled.button`
  padding: 12px 36px;
  background: transparent;
  border: 2px solid #C9A86C;
  border-radius: 30px;
  color: #C9A86C;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  
  &:hover {
    background: #C9A86C;
    color: #fff;
    box-shadow: 0 4px 15px rgba(201, 168, 108, 0.4);
  }
`

// Products Section - Auto Slider
const ProductsSection = styled.section`
  padding: 100px 0;
  background: #f4cbcd;
  overflow: hidden;
  position: relative;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
`

const ProductsSectionTitle = styled(motion.h2)`
  font-family: 'Cormorant Garamond', 'IM Fell English', Georgia, serif;
  font-size: 90px;
  font-weight: 400;
  color: #d4a5a6;
  text-align: center;
  margin-bottom: 60px;
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.15);
  letter-spacing: 0.02em;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 30px;
    padding: 0 20px;
  }
`

const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    width: 150px;
    z-index: 2;
    pointer-events: none;
  }
  
  &::before {
    left: 0;
    background: linear-gradient(90deg, #f4cbcd 0%, transparent 100%);
  }
  
  &::after {
    right: 0;
    background: linear-gradient(90deg, transparent 0%, #f4cbcd 100%);
  }
  
  @media (max-width: 768px) {
    &::before,
    &::after {
      width: 30px;
    }
  }
`

const SliderTrack = styled(motion.div)`
  display: flex;
  gap: 40px;
  width: fit-content;
  
  @media (max-width: 768px) {
    gap: 15px;
  }
`

const CategorySlide = styled(motion.div)`
  flex-shrink: 0;
  width: 350px;
  text-align: center;
  cursor: pointer;
  
  @media (max-width: 768px) {
    width: 160px;
  }
`

const CategoryImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 0.85;
  border-radius: 30px;
  overflow: hidden;
  margin-bottom: 24px;
  box-shadow: 0 15px 40px rgba(74, 44, 52, 0.2);
  transition: all 0.4s ease;
  background: linear-gradient(135deg, #f5ebe6 0%, #e8ddd5 100%);
  
  &::after {
    content: '✦';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    color: #d4c4bc;
    z-index: 0;
  }
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 25px 50px rgba(74, 44, 52, 0.3);
    
    img {
      transform: scale(1.08);
    }
    
    .slide-overlay {
      opacity: 1;
    }
    
    .slide-button {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  @media (max-width: 768px) {
    border-radius: 15px;
    margin-bottom: 12px;
    box-shadow: 0 8px 20px rgba(74, 44, 52, 0.15);
    
    .slide-button {
      display: none;
    }
  }
`

const SlideOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 0%,
    transparent 50%,
    rgba(74, 44, 52, 0.5) 100%
  );
  opacity: 0;
  transition: opacity 0.4s ease;
  border-radius: 30px;
`

const SlideButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  width: 70px;
  height: 70px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: all 0.4s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  z-index: 10;
  
  &::before {
    content: '→';
    font-size: 24px;
    color: #4a2c34;
  }
`

const CategoryName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 28px;
  font-weight: 400;
  color: #4a2c34;
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  
  &::before,
  &::after {
    content: '✦';
    font-size: 10px;
    color: #C9A86C;
  }
  
  @media (max-width: 768px) {
    font-size: 14px;
    gap: 6px;
    
    &::before,
    &::after {
      font-size: 6px;
    }
  }
`



// Promo Section - New Design
const PromoSection = styled.section`
  padding: 100px 40px;
  background: linear-gradient(135deg, #f5e6e0 0%, #e8d4cc 50%, #dcc4bc 100%);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(201, 168, 108, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(122, 74, 90, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`

const PromoContainer = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
`

const PromoCard = styled(motion.div)`
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 240, 235, 0.95) 100%);
  border-radius: 40px;
  padding: 60px;
  box-shadow: 
    0 30px 80px rgba(122, 74, 90, 0.15),
    0 10px 30px rgba(0, 0, 0, 0.08);
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 60px;
  align-items: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 20px;
    left: 20px;
    right: 20px;
    bottom: 20px;
    border: 1px solid rgba(201, 168, 108, 0.3);
    border-radius: 30px;
    pointer-events: none;
  }
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 40px;
  }
`

const PromoImageWrapper = styled(motion.div)`
  position: relative;
  
  @media (max-width: 900px) {
    order: 1;
  }
`

const PromoImageFrame = styled.div`
  position: relative;
  padding: 20px;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #C9A86C;
    border-radius: 30px;
    transform: rotate(-3deg);
    opacity: 0.5;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 2px solid #7a4a5a;
    border-radius: 30px;
    transform: rotate(3deg);
    opacity: 0.3;
  }
`

const PromoImage = styled.div`
  position: relative;
  z-index: 1;
  background: linear-gradient(135deg, #f5ebe6 0%, #e8ddd5 100%);
  border-radius: 25px;
  min-height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &::after {
    content: '✦';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 50px;
    color: #d4c4bc;
    z-index: 0;
  }
  
  img {
    width: 100%;
    max-width: 380px;
    border-radius: 25px;
    box-shadow: 0 20px 50px rgba(74, 44, 52, 0.25);
    display: block;
    margin: 0 auto;
    position: relative;
    z-index: 1;
  }
`

const PromoContent = styled(motion.div)`
  @media (max-width: 900px) {
    order: 2;
    text-align: center;
  }
`

const PromoLabel = styled.span`
  display: inline-block;
  background: #7a4a5a;
  color: #fff;
  padding: 10px 28px;
  border-radius: 30px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 12px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  margin-bottom: 24px;
`

const PromoTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 48px;
  color: #4a2c34;
  margin-bottom: 20px;
  font-weight: 400;
  line-height: 1.2;
  
  @media (max-width: 600px) {
    font-size: 36px;
  }
`

const PromoDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 16px;
  color: #6b5055;
  line-height: 1.8;
  margin-bottom: 32px;
  max-width: 400px;
  
  @media (max-width: 900px) {
    margin: 0 auto 32px;
  }
`

const PromoPrice = styled.div`
  display: flex;
  align-items: baseline;
  gap: 16px;
  margin-bottom: 32px;
  
  @media (max-width: 900px) {
    justify-content: center;
  }
`

const OldPrice = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 20px;
  color: #a08080;
  text-decoration: line-through;
`

const NewPrice = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 42px;
  color: #C9A86C;
  font-weight: 400;
`

const PromoButton = styled.button`
  padding: 18px 50px;
  background: linear-gradient(135deg, #C9A86C 0%, #b89a5a 100%);
  border: none;
  border-radius: 35px;
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 25px rgba(201, 168, 108, 0.4);
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 12px 35px rgba(201, 168, 108, 0.5);
  }
`

const SliderNavigation = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
`

const SliderButton = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #fff;
  border: 2px solid rgba(201, 168, 108, 0.3);
  color: #7a4a5a;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  
  &:hover {
    background: #C9A86C;
    border-color: #C9A86C;
    color: #fff;
    transform: scale(1.08);
  }
`

const SliderDots = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`

const SliderDot = styled.button<{ $active: boolean }>`
  width: ${({ $active }) => $active ? '32px' : '12px'};
  height: 12px;
  border-radius: 6px;
  background: ${({ $active }) => $active ? '#C9A86C' : 'rgba(122, 74, 90, 0.25)'};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${({ $active }) => $active ? '#C9A86C' : 'rgba(122, 74, 90, 0.4)'};
  }
`

const PromoDecor = styled.div`
  position: absolute;
  font-size: 14px;
  color: #C9A86C;
  letter-spacing: 8px;
  
  &.top-left {
    top: 30px;
    left: 40px;
  }
  
  &.bottom-right {
    bottom: 30px;
    right: 40px;
  }
`

// Sample data
const promoSlides = [
  {
    id: 1,
    label: 'Хит сезона',
    title: 'Торт "Matcha Bliss"',
    description: 'Изысканный торт с нежнейшим кремом матча, белым шоколадом и хрустящим слоем из лесных орехов. Настоящий вкусовой шедевр в каждом кусочке.',
    oldPrice: '320 000 сум',
    newPrice: '259 000 сум',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500',
  },
  {
    id: 2,
    label: 'Новинка',
    title: 'Тартлет "Сан-Тропе"',
    description: 'Классический французский тартлет с лёгким кремом маскарпоне и свежайшими ягодами из Прованса. Подаётся с ванильным соусом.',
    oldPrice: '280 000 сум',
    newPrice: '229 000 сум',
    image: 'https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=500',
  },
  {
    id: 3,
    label: 'Топ продаж',
    title: 'Набор макарон',
    description: 'Ассорти из 6 макарон с лучшими вкусами: малина, фисташка, карамель, шоколад, манго и роза. Идеальный подарок.',
    oldPrice: '180 000 сум',
    newPrice: '149 000 сум',
    image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=500',
  },
]
const features = [
  {
    icon: <Sparkles size={60} />,
    title: 'Качество',
    subtitle: 'Только лучшее',
    description: 'Используем только лучшие ингредиенты премиального качества.',
  },
  {
    icon: <ChefHat size={60} />,
    title: 'Мастерство',
    subtitle: 'Профессионализм',
    description: 'Наши кондитеры — профессионалы с многолетним опытом и безупречной репутацией.',
  },
  {
    icon: <Heart size={60} />,
    title: 'С любовью',
    subtitle: 'В каждой детали',
    description: 'Каждый десерт создаётся с душой и вниманием к каждой детали.',
  },
]

const categorySlides = [
  {
    id: 1,
    name: 'Cakes',
    slug: 'cakes',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500',
  },
  {
    id: 2,
    name: 'Muffins',
    slug: 'pastries',
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=500',
  },
  {
    id: 3,
    name: 'Cookies',
    slug: 'cookies',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500',
  },
  {
    id: 4,
    name: 'Pastries',
    slug: 'pastries',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=500',
  },
  {
    id: 5,
    name: 'Eclairs',
    slug: 'eclairs',
    image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=500',
  },
  {
    id: 6,
    name: 'Macarons',
    slug: 'macarons',
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=500',
  },
]

// Duplicate slides for infinite scroll effect
const infiniteSlides = [...categorySlides, ...categorySlides, ...categorySlides]

export const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const navigate = useNavigate()

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promoSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + promoSlides.length) % promoSlides.length)
  }

  const handleCategoryClick = (slug: string) => {
    navigate(`/menu?category=${slug}`)
  }

  return (
    <>
      {/* Hero Section */}
      <HeroSection>
        <HeroContainer>
          <HeroContent>
            <HeroTitle
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Bake the<br />
              World a<br />
              <span>Better Place</span>
            </HeroTitle>
            <HeroSlogan
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Откройте для себя мир изысканных десертов, 
              где каждое блюдо — настоящее произведение искусства.
            </HeroSlogan>
            <HeroButtons
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <LinkButton to="/menu" variant="gold" size="lg">
                Смотреть меню
              </LinkButton>
              <LinkButton to="/reservation" variant="outline" size="lg" style={{ borderColor: 'white', color: 'white' }}>
                Забронировать
              </LinkButton>
            </HeroButtons>
          </HeroContent>
          
          <HeroImage
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=600" 
              alt="Праздничный торт"
              onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
            />
            <FloatingBadge 
              className="top-left"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <BadgeIcon><Gift size={20} /></BadgeIcon>
              <BadgeText>
                <h4>Доставка</h4>
                <span>Бесплатно от 200 000</span>
              </BadgeText>
            </FloatingBadge>
            <FloatingBadge 
              className="bottom-right"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <BadgeIcon><Star size={20} /></BadgeIcon>
              <BadgeText>
                <h4>4.9 ★</h4>
                <span>2000+ отзывов</span>
              </BadgeText>
            </FloatingBadge>
          </HeroImage>
        </HeroContainer>
      </HeroSection>

      {/* Features Section */}
      <FeaturesSection>
        <FeaturesSectionContainer>
          <FeaturesGrid>
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <FeatureIconWrapper className="icon-wrapper">
                  <FeatureIconCircle>{feature.icon}</FeatureIconCircle>
                </FeatureIconWrapper>
                <FeatureCardInner className="feature-inner">
                  <FeatureTitle>{feature.title}</FeatureTitle>
                  <FeatureSubtitle>{feature.subtitle}</FeatureSubtitle>
                  <FeatureButton>Подробнее</FeatureButton>
                </FeatureCardInner>
              </FeatureCard>
            ))}
          </FeaturesGrid>
        </FeaturesSectionContainer>
      </FeaturesSection>

      {/* Promo Section */}
      <PromoSection>
        <PromoContainer>
          <PromoCard
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <PromoDecor className="top-left">? ? ?</PromoDecor>
            <PromoDecor className="bottom-right">? ? ?</PromoDecor>
            
            <AnimatePresence mode="wait">
              <PromoImageWrapper
                key={`image-${currentSlide}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <PromoImageFrame>
                  <PromoImage>
                    <img 
                      src={promoSlides[currentSlide].image} 
                      alt={promoSlides[currentSlide].title}
                      onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
                    />
                  </PromoImage>
                </PromoImageFrame>
              </PromoImageWrapper>
            </AnimatePresence>
            
            <AnimatePresence mode="wait">
              <PromoContent
                key={`content-${currentSlide}`}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4 }}
              >
                <PromoLabel>{promoSlides[currentSlide].label}</PromoLabel>
                <PromoTitle>{promoSlides[currentSlide].title}</PromoTitle>
                <PromoDescription>
                  {promoSlides[currentSlide].description}
                </PromoDescription>
                <PromoPrice>
                  <OldPrice>{promoSlides[currentSlide].oldPrice}</OldPrice>
                  <NewPrice>{promoSlides[currentSlide].newPrice}</NewPrice>
                </PromoPrice>
                <PromoButton>Заказать сейчас</PromoButton>
              </PromoContent>
            </AnimatePresence>
          </PromoCard>
          
          <SliderNavigation>
            <SliderButton onClick={prevSlide}>
              <ChevronLeft size={24} />
            </SliderButton>
            <SliderDots>
              {promoSlides.map((_, index) => (
                <SliderDot 
                  key={index} 
                  $active={index === currentSlide}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </SliderDots>
            <SliderButton onClick={nextSlide}>
              <ChevronRight size={24} />
            </SliderButton>
          </SliderNavigation>
        </PromoContainer>
      </PromoSection>

      {/* Products Section - Auto Slider */}
      <ProductsSection>
        <ProductsSectionTitle
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Product
        </ProductsSectionTitle>
        
        <SliderContainer>
          <SliderTrack
            animate={{
              x: [0, -(categorySlides.length * 390)],
            }}
            transition={{
              x: {
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {infiniteSlides.map((category, index) => (
              <CategorySlide 
                key={`${category.id}-${index}`}
                onClick={() => handleCategoryClick(category.slug)}
              >
                <CategoryImageWrapper>
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
                  />
                  <SlideOverlay className="slide-overlay" />
                  <SlideButton className="slide-button" />
                </CategoryImageWrapper>
                <CategoryName>{category.name}</CategoryName>
              </CategorySlide>
            ))}
          </SliderTrack>
        </SliderContainer>
      </ProductsSection>
    </>
  )
}

