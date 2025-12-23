import { useState, useRef, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Heart, Info, Search, Filter } from 'lucide-react'

// Types
interface Product {
  id: number
  name: string
  price: number
  image: string
  description: string
  category: string
  ingredients?: string[]
  allergens?: string[]
  weight?: string
}

// Page Header
const PageHeader = styled.section`
  padding-top: ${({ theme }) => theme.spacing['5xl']};
  padding-bottom: ${({ theme }) => theme.spacing['3xl']};
  background: 
    linear-gradient(rgba(139, 69, 87, 0.85), rgba(167, 107, 91, 0.85)),
    url('https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=1920') center/cover no-repeat;
  position: relative;
`

const HeaderContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing['3xl']} ${theme.spacing.xl}`};
  text-align: center;
`

const PageTitle = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const PageSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.primary.lighter};
  max-width: 600px;
  margin: 0 auto;
`

// Menu Content
const MenuContent = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  background: ${({ theme }) => theme.colors.background.primary};
`

const MenuContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`

// Filters - New Design
const FiltersBar = styled.div`
  margin-bottom: 50px;
`

const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  flex-wrap: wrap;
  
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 24px;
  }
`

const CategoryTabsWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 20px;
  
  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`

const CategoryTabs = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  
  @media (max-width: 900px) {
    justify-content: center;
  }
`

const CategoryTab = styled.button<{ $active: boolean }>`
  padding: 14px 32px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 15px;
  font-weight: 400;
  letter-spacing: 0.03em;
  color: ${({ $active }) => $active ? '#fff' : '#4a2c34'};
  background: ${({ $active }) => 
    $active 
      ? 'linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%)' 
      : 'transparent'};
  border: ${({ $active }) => $active ? 'none' : '2px solid #d4c4bc'};
  border-radius: 0;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  
  ${({ $active }) => $active && `
    box-shadow: 0 6px 20px rgba(122, 74, 90, 0.35);
    
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      border: 2px solid #C9A86C;
    }
    
    &::before {
      top: -4px;
      left: -4px;
      border-right: none;
      border-bottom: none;
    }
    
    &::after {
      bottom: -4px;
      right: -4px;
      border-left: none;
      border-top: none;
    }
  `}
  
  ${({ $active }) => !$active && `
    &::before {
      content: '';
      position: absolute;
      bottom: 8px;
      left: 50%;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      background: #C9A86C;
      transition: width 0.3s ease;
    }
    
    &:hover::before {
      width: 60%;
    }
  `}
  
  &:hover {
    color: ${({ $active }) => $active ? '#fff' : '#7a4a5a'};
    border-color: ${({ $active }) => $active ? 'transparent' : '#7a4a5a'};
  }
  
  @media (max-width: 600px) {
    padding: 12px 24px;
    font-size: 14px;
  }
`

const CategoryDivider = styled.div`
  width: 1px;
  height: 30px;
  background: linear-gradient(180deg, transparent, #C9A86C, transparent);
  
  @media (max-width: 900px) {
    display: none;
  }
`

const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 320px;
  
  @media (max-width: 900px) {
    max-width: 100%;
  }
`

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: transparent;
  border: 2px solid #d4c4bc;
  padding: 0;
  transition: all 0.3s ease;
  
  &:focus-within {
    border-color: #7a4a5a;
    
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      border: 2px solid #C9A86C;
    }
    
    &::before {
      top: -4px;
      left: -4px;
      border-right: none;
      border-bottom: none;
    }
    
    &::after {
      bottom: -4px;
      right: -4px;
      border-left: none;
      border-top: none;
    }
  }
`

const SearchIcon = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #a08080;
  flex-shrink: 0;
  border-right: 1px solid #d4c4bc;
`

const SearchInput = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  padding: 14px 16px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 15px;
  color: #4a2c34;
  
  &::placeholder {
    color: #a08080;
    font-weight: 400;
  }
  
  &:focus {
    outline: none;
  }
`

const SearchDivider = styled.div`
  display: none;
`

const SearchButton = styled.button`
  width: 48px;
  height: 48px;
  background: linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%);
  border: none;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  flex-shrink: 0;
  
  &:hover {
    background: linear-gradient(135deg, #8a5a6a 0%, #6a4555 100%);
  }
`

// Products Grid - Creative Design
const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 50px;
  
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

// Product Card - Creative Vintage Style
const ProductCardWrapper = styled(motion.div)`
  position: relative;
  cursor: pointer;
  
  &:hover {
    .card-frame {
      transform: rotate(-1deg) scale(1.02);
    }
    
    .card-inner {
      box-shadow: 0 30px 60px rgba(74, 44, 52, 0.25);
    }
    
    .card-image img {
      transform: scale(1.1);
    }
    
    .card-stamp {
      transform: rotate(-15deg) scale(1.1);
    }
    
    .action-buttons {
      opacity: 1;
      transform: translateY(0);
    }
    
    .price-ribbon {
      transform: scale(1.05);
    }
  }
`

const CardFrame = styled.div`
  position: relative;
  padding: 15px;
  background: linear-gradient(135deg, #f5ebe6 0%, #ede3dc 100%);
  border-radius: 8px;
  transition: all 0.4s ease;
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 1px solid rgba(201, 168, 108, 0.3);
    border-radius: 8px;
    pointer-events: none;
  }
`

const CardInner = styled.div`
  position: relative;
  background: #fff;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(74, 44, 52, 0.12);
  transition: box-shadow 0.4s ease;
`

const ProductImageWrapper = styled.div`
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
  background: linear-gradient(135deg, #f5ebe6 0%, #e8ddd5 100%);
  
  &::before {
    content: '✦';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 40px;
    color: #d4c4bc;
    z-index: 0;
  }
`

const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
  position: relative;
  z-index: 1;
  background: linear-gradient(135deg, #f5ebe6 0%, #e8ddd5 100%);
  
  &[data-error="true"] {
    visibility: hidden;
  }
`

const ProductOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    rgba(74, 44, 52, 0.1) 0%,
    transparent 30%,
    transparent 60%,
    rgba(74, 44, 52, 0.4) 100%
  );
  pointer-events: none;
  z-index: 2;
`

const ActionButtons = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  display: flex;
  gap: 0;
  opacity: 0;
  transition: all 0.4s ease;
  pointer-events: auto;
  z-index: 10;
`

const ActionButtonsContainer = styled.div`
  display: flex;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.98) 0%, rgba(248, 243, 240, 0.98) 100%);
  border-radius: 30px;
  padding: 6px;
  box-shadow: 0 8px 30px rgba(74, 44, 52, 0.25);
  border: 2px solid #C9A86C;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 3px;
    background: #C9A86C;
    border-radius: 2px;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 3px;
    background: #C9A86C;
    border-radius: 2px;
  }
`

const OverlayButton = styled.button<{ $variant?: 'heart' | 'info' }>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${({ $variant }) => 
    $variant === 'heart' 
      ? 'linear-gradient(135deg, #f8e8e8 0%, #f0d8d8 100%)'
      : 'linear-gradient(135deg, #e8e8f0 0%, #d8d8e8 100%)'
  };
  color: #7a4a5a;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: none;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: 3px;
    border: 1px dashed rgba(201, 168, 108, 0.5);
    border-radius: 50%;
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: scale(1.15) rotate(5deg);
    
    &::before {
      border-style: solid;
      border-color: #C9A86C;
    }
  }
  
  &:first-child {
    margin-right: 8px;
  }
`

const ButtonDivider = styled.div`
  width: 1px;
  background: linear-gradient(180deg, transparent, #C9A86C, transparent);
  margin: 8px 0;
`

const PriceRibbon = styled.div`
  position: absolute;
  top: 20px;
  left: -8px;
  background: linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%);
  color: #fff;
  padding: 10px 20px 10px 16px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 20px;
  font-weight: 400;
  box-shadow: 0 4px 15px rgba(74, 44, 52, 0.3);
  transition: transform 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -8px;
    border: 4px solid transparent;
    border-top-color: #3d2525;
    border-right-color: #3d2525;
  }
  
  &::after {
    content: '';
    position: absolute;
    right: -12px;
    top: 0;
    bottom: 0;
    border: 21px solid transparent;
    border-left-color: #5a3545;
    border-left-width: 12px;
  }
`

const CardStamp = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 70px;
  height: 70px;
  border: 3px solid #C9A86C;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.95);
  transform: rotate(-12deg);
  transition: transform 0.3s ease;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  
  span:first-child {
    font-family: ${({ theme }) => theme.fonts.accent};
    font-size: 10px;
    color: #7a4a5a;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  
  span:last-child {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 14px;
    color: #C9A86C;
    font-weight: 600;
  }
`

const ProductInfo = styled.div`
  padding: 24px;
  text-align: center;
  position: relative;
  background: linear-gradient(180deg, #fff 0%, #faf7f5 100%);
  
  &::before {
    content: '◆ ◆ ◆';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    font-size: 8px;
    color: #C9A86C;
    letter-spacing: 8px;
    background: #fff;
    padding: 0 15px;
  }
`

const ProductName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 24px;
  color: #4a2c34;
  margin-bottom: 10px;
  font-weight: 400;
  line-height: 1.3;
`

const ProductCategory = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 12px;
  color: #a08080;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  
  &::before,
  &::after {
    content: '';
    width: 20px;
    height: 1px;
    background: #d4c4bc;
  }
`


// Modal - Creative Design
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(74, 44, 52, 0.85);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${({ theme }) => theme.zIndex.modal};
  padding: 20px;
`

const ModalContent = styled(motion.div)`
  background: linear-gradient(145deg, #faf7f5 0%, #f0ebe8 100%);
  border-radius: 30px;
  max-width: 950px;
  width: 100%;
  max-height: 90vh;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.3);
  
  &::before {
    content: '';
    position: absolute;
    inset: 10px;
    border: 2px solid rgba(201, 168, 108, 0.3);
    border-radius: 24px;
    pointer-events: none;
    z-index: 10;
  }
  
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    max-height: 95vh;
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
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100px;
    background: linear-gradient(transparent, rgba(74, 44, 52, 0.3));
    pointer-events: none;
  }
  
  @media (max-width: 800px) {
    height: 350px;
  }
`

const ModalImageDecor = styled.div`
  position: absolute;
  bottom: 20px;
  left: 20px;
  right: 20px;
  display: flex;
  justify-content: center;
  z-index: 5;
  
  span {
    background: rgba(255, 255, 255, 0.9);
    padding: 8px 24px;
    border-radius: 20px;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 12px;
    color: #7a4a5a;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    backdrop-filter: blur(10px);
  }
`

const ModalCloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fff 0%, #f5f0ed 100%);
  color: #7a4a5a;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 15;
  transition: all 0.3s ease;
  border: 2px solid #C9A86C;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  
  &:hover {
    background: #7a4a5a;
    color: #fff;
    transform: rotate(90deg);
  }
`

const FavoriteButton = styled.button<{ $active: boolean }>`
  position: absolute;
  top: 20px;
  left: 20px;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: linear-gradient(135deg, #fff 0%, #f5f0ed 100%);
  color: ${({ $active }) => $active ? '#e74c3c' : '#7a4a5a'};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 15;
  transition: all 0.3s ease;
  border: 2px solid ${({ $active }) => $active ? '#e74c3c' : '#C9A86C'};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
  
  svg {
    fill: ${({ $active }) => $active ? '#e74c3c' : 'none'};
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: scale(1.1);
    border-color: #e74c3c;
    color: #e74c3c;
  }
`

const ModalDetails = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow-y: auto;
  
  &::before {
    content: '✦';
    position: absolute;
    top: 30px;
    right: 40px;
    font-size: 20px;
    color: #C9A86C;
  }
`

const ModalCategory = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%);
  color: #fff;
  padding: 10px 24px;
  border-radius: 25px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 24px;
  align-self: flex-start;
  box-shadow: 0 4px 15px rgba(122, 74, 90, 0.3);
  
  &::before {
    content: '◆';
    font-size: 8px;
  }
`

const ModalTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 36px;
  color: #4a2c34;
  margin-bottom: 16px;
  font-weight: 400;
  line-height: 1.2;
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, #C9A86C, transparent);
    margin-top: 16px;
  }
`

const ModalPrice = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  
  span {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 32px;
    font-weight: 400;
    color: #C9A86C;
  }
  
  &::after {
    content: '★★★★★';
    font-size: 12px;
    color: #C9A86C;
    letter-spacing: 2px;
  }
`

const ModalDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 15px;
  color: #6b5055;
  line-height: 1.8;
  margin-bottom: 28px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.6);
  border-radius: 15px;
  border-left: 3px solid #C9A86C;
  font-style: italic;
`

const ModalSection = styled.div`
  margin-bottom: 24px;
`

const ModalSectionTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 14px;
  font-weight: 400;
  color: #4a2c34;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  gap: 10px;
  
  &::before {
    content: '';
    width: 20px;
    height: 1px;
    background: #C9A86C;
  }
`

const IngredientsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const IngredientTag = styled.li`
  background: linear-gradient(135deg, #f5ebe6 0%, #ede3dc 100%);
  padding: 10px 18px;
  border-radius: 20px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 13px;
  color: #5a4045;
  border: 1px solid rgba(201, 168, 108, 0.2);
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #C9A86C;
    transform: translateY(-2px);
  }
`

// Category Section Title - Creative Design
const CategorySection = styled.div`
  margin-top: 80px;
  
  &:first-of-type {
    margin-top: 0;
  }
`

const CategoryTitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 60px;
  position: relative;
`

const CategoryTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 56px;
  color: #4a2c34;
  font-weight: 400;
  display: inline-block;
  position: relative;
  padding: 0 40px;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    width: 80px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #C9A86C);
  }
  
  &::before {
    right: 100%;
    background: linear-gradient(90deg, transparent, #C9A86C);
  }
  
  &::after {
    left: 100%;
    background: linear-gradient(90deg, #C9A86C, transparent);
  }
  
  @media (max-width: 700px) {
    font-size: 36px;
    
    &::before,
    &::after {
      width: 40px;
    }
  }
`

const CategoryDecor = styled.div`
  margin-top: 15px;
  font-size: 12px;
  color: #C9A86C;
  letter-spacing: 6px;
`

const CategoryCount = styled.span`
  display: block;
  margin-top: 20px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 13px;
  color: #a08080;
  letter-spacing: 0.2em;
  text-transform: uppercase;
`

// Sample data
const categories = [
  { id: 'all', name: 'Всё' },
  { id: 'cakes', name: 'Торты' },
  { id: 'pastries', name: 'Пирожные' },
  { id: 'cookies', name: 'Печенье' },
  { id: 'muffins', name: 'Маффины' },
  { id: 'drinks', name: 'Напитки' },
]

const products: Product[] = [
  {
    id: 1,
    name: 'Красный Бархат',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?w=400',
    description: 'Нежный красный бисквит с ванильным кремом из маскарпоне, украшенный белым шоколадом.',
    category: 'cakes',
    ingredients: ['Мука', 'Какао', 'Маскарпоне', 'Сливки', 'Ваниль', 'Белый шоколад'],
    allergens: ['Глютен', 'Молочные продукты'],
    weight: '1.2 кг'
  },
  {
    id: 2,
    name: 'Торт "Matcha Bliss"',
    price: 2590,
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400',
    description: 'Уникальный торт с японским чаем матча, нежным муссом и хрустящей основой.',
    category: 'cakes',
    ingredients: ['Матча', 'Сливки', 'Белый шоколад', 'Миндальное пралине'],
    allergens: ['Орехи', 'Молочные продукты'],
    weight: '1 кг'
  },
  {
    id: 3,
    name: 'Шоколадный Фондан',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?w=400',
    description: 'Классический шоколадный торт с жидким центром из горького шоколада.',
    category: 'cakes',
    ingredients: ['Темный шоколад', 'Сливочное масло', 'Яйца', 'Сахар'],
    allergens: ['Глютен', 'Яйца', 'Молочные продукты'],
    weight: '800 г'
  },
  {
    id: 4,
    name: 'Макарон Ассорти',
    price: 890,
    image: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=400',
    description: 'Набор из 12 французских макарон разных вкусов: малина, фисташка, шоколад, ваниль.',
    category: 'pastries',
    ingredients: ['Миндальная мука', 'Сахарная пудра', 'Яичные белки', 'Разные начинки'],
    allergens: ['Орехи', 'Яйца'],
    weight: '240 г'
  },
  {
    id: 5,
    name: 'Эклер Ваниль',
    price: 280,
    image: 'https://images.unsplash.com/photo-1525059696034-4967a8e1dca2?w=400',
    description: 'Классический французский эклер с нежным ванильным кремом и шоколадной глазурью.',
    category: 'pastries',
    ingredients: ['Заварное тесто', 'Ванильный крем', 'Темный шоколад'],
    allergens: ['Глютен', 'Яйца', 'Молочные продукты'],
    weight: '80 г'
  },
  {
    id: 6,
    name: 'Тарталетка с ягодами',
    price: 320,
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400',
    description: 'Хрустящая песочная корзиночка с заварным кремом и свежими сезонными ягодами.',
    category: 'pastries',
    ingredients: ['Песочное тесто', 'Заварной крем', 'Свежие ягоды'],
    allergens: ['Глютен', 'Яйца', 'Молочные продукты'],
    weight: '120 г'
  },
  {
    id: 7,
    name: 'Круассан с миндалем',
    price: 320,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400',
    description: 'Хрустящий французский круассан с миндальным кремом и карамелизированным миндалем.',
    category: 'pastries',
    ingredients: ['Слоеное тесто', 'Миндальный крем', 'Миндаль', 'Сахарная пудра'],
    allergens: ['Глютен', 'Орехи', 'Молочные продукты'],
    weight: '90 г'
  },
  {
    id: 8,
    name: 'Шоколадное печенье',
    price: 150,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400',
    description: 'Мягкое печенье с кусочками темного и молочного шоколада.',
    category: 'cookies',
    ingredients: ['Мука', 'Сливочное масло', 'Темный шоколад', 'Молочный шоколад'],
    allergens: ['Глютен', 'Молочные продукты'],
    weight: '70 г'
  },
  {
    id: 9,
    name: 'Имбирное печенье',
    price: 120,
    image: 'https://images.unsplash.com/photo-1610450949065-1f2841536c88?w=400',
    description: 'Хрустящее пряное печенье с имбирем и корицей.',
    category: 'cookies',
    ingredients: ['Мука', 'Имбирь', 'Корица', 'Мед', 'Сливочное масло'],
    allergens: ['Глютен', 'Молочные продукты'],
    weight: '50 г'
  },
  {
    id: 10,
    name: 'Маффин черничный',
    price: 220,
    image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=400',
    description: 'Пышный маффин со свежей черникой и хрустящим штрейзелем.',
    category: 'muffins',
    ingredients: ['Мука', 'Черника', 'Сливочное масло', 'Яйца', 'Штрейзель'],
    allergens: ['Глютен', 'Яйца', 'Молочные продукты'],
    weight: '100 г'
  },
  {
    id: 11,
    name: 'Маффин шоколадный',
    price: 220,
    image: 'https://images.unsplash.com/photo-1604882737321-e8cddbb25a20?w=400',
    description: 'Шоколадный маффин с жидким шоколадным центром.',
    category: 'muffins',
    ingredients: ['Мука', 'Какао', 'Темный шоколад', 'Сливочное масло'],
    allergens: ['Глютен', 'Молочные продукты'],
    weight: '100 г'
  },
  {
    id: 12,
    name: 'Латте Карамель',
    price: 350,
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400',
    description: 'Ароматный кофе латте с домашним карамельным сиропом и взбитыми сливками.',
    category: 'drinks',
    ingredients: ['Эспрессо', 'Молоко', 'Карамельный сироп', 'Взбитые сливки'],
    allergens: ['Молочные продукты'],
    weight: '350 мл'
  },
]

export const Menu: React.FC = () => {
  const [searchParams] = useSearchParams()
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [favorites, setFavorites] = useState<number[]>([])
  const sectionsRef = useRef<{ [key: string]: HTMLDivElement | null }>({})

  // Read category from URL on mount
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category')
    if (categoryFromUrl) {
      setSelectedCategory(categoryFromUrl)
    }
  }, [searchParams])

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const groupedProducts = filteredProducts.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = []
    }
    acc[product.category].push(product)
    return acc
  }, {} as { [key: string]: Product[] })

  const toggleFavorite = (productId: number) => {
    setFavorites(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    )
  }

  const getCategoryName = (categoryId: string) => {
    return categories.find(c => c.id === categoryId)?.name || categoryId
  }

  return (
    <>
      <PageHeader>
        <HeaderContainer>
          <PageTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Наше Меню
          </PageTitle>
          <PageSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Выберите из нашей коллекции изысканных десертов и выпечки
          </PageSubtitle>
        </HeaderContainer>
      </PageHeader>

      <MenuContent>
        <MenuContainer>
          <FiltersBar>
            <FiltersContainer>
              <CategoryTabsWrapper>
                <CategoryTabs>
                  {categories.map((category, index) => (
                    <>
                      <CategoryTab
                        key={category.id}
                        $active={selectedCategory === category.id}
                        onClick={() => setSelectedCategory(category.id)}
                      >
                        {category.name}
                      </CategoryTab>
                      {index < categories.length - 1 && <CategoryDivider key={`div-${category.id}`} />}
                    </>
                  ))}
                </CategoryTabs>
              </CategoryTabsWrapper>
              
              <SearchWrapper>
                <SearchContainer>
                  <SearchIcon>
                    <Search size={20} />
                  </SearchIcon>
                  <SearchInput
                    placeholder="Поиск по меню..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <SearchDivider />
                  <SearchButton>
                    <Filter size={18} />
                  </SearchButton>
                </SearchContainer>
              </SearchWrapper>
            </FiltersContainer>
          </FiltersBar>

          {selectedCategory === 'all' ? (
            // Show grouped by category
            Object.entries(groupedProducts).map(([category, categoryProducts]) => (
              <CategorySection key={category} ref={(el) => { sectionsRef.current[category] = el }}>
                <CategoryTitleWrapper>
                  <CategoryTitle>{getCategoryName(category)}</CategoryTitle>
                  <CategoryDecor>✦ ✦ ✦</CategoryDecor>
                  <CategoryCount>{categoryProducts.length} позиций в меню</CategoryCount>
                </CategoryTitleWrapper>
                <ProductsGrid>
                  {categoryProducts.map((product, index) => (
                    <ProductCardWrapper
                      key={product.id}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                      <CardFrame className="card-frame">
                        <CardInner className="card-inner">
                          <ProductImageWrapper className="card-image">
                            <ProductImage 
                              src={product.image} 
                              alt={product.name} 
                              loading="lazy"
                              onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
                            />
                            <ProductOverlay />
                            <ActionButtons className="action-buttons">
                              <ActionButtonsContainer>
                                <OverlayButton 
                                  $variant="heart"
                                  onClick={(e) => { e.stopPropagation(); toggleFavorite(product.id); }}
                                >
                                  <Heart 
                                    size={20} 
                                    fill={favorites.includes(product.id) ? 'currentColor' : 'none'} 
                                  />
                                </OverlayButton>
                                <ButtonDivider />
                                <OverlayButton 
                                  $variant="info"
                                  onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); }}
                                >
                                  <Info size={20} />
                                </OverlayButton>
                              </ActionButtonsContainer>
                            </ActionButtons>
                            <PriceRibbon className="price-ribbon">
                              {product.price.toLocaleString('uz-UZ')} сум
                            </PriceRibbon>
                            <CardStamp className="card-stamp">
                              <span>Socials</span>
                              <span>★★★</span>
                            </CardStamp>
                          </ProductImageWrapper>
                          <ProductInfo onClick={() => setSelectedProduct(product)}>
                            <ProductName>{product.name}</ProductName>
                            <ProductCategory>{getCategoryName(product.category)}</ProductCategory>
                          </ProductInfo>
                        </CardInner>
                      </CardFrame>
                    </ProductCardWrapper>
                  ))}
                </ProductsGrid>
              </CategorySection>
            ))
          ) : (
            // Show flat list for specific category
            <>
              <CategoryTitleWrapper>
                <CategoryTitle>{getCategoryName(selectedCategory)}</CategoryTitle>
                <CategoryDecor>✦ ✦ ✦</CategoryDecor>
                <CategoryCount>{filteredProducts.length} позиций в меню</CategoryCount>
              </CategoryTitleWrapper>
              <ProductsGrid>
                {filteredProducts.map((product, index) => (
                  <ProductCardWrapper
                    key={product.id}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                  >
                    <CardFrame className="card-frame">
                      <CardInner className="card-inner">
                        <ProductImageWrapper className="card-image">
                          <ProductImage 
                            src={product.image} 
                            alt={product.name} 
                            loading="lazy"
                            onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
                          />
                          <ProductOverlay />
                          <ActionButtons className="action-buttons">
                            <ActionButtonsContainer>
                              <OverlayButton 
                                $variant="heart"
                                onClick={(e) => { e.stopPropagation(); toggleFavorite(product.id); }}
                              >
                                <Heart 
                                  size={20} 
                                  fill={favorites.includes(product.id) ? 'currentColor' : 'none'} 
                                />
                              </OverlayButton>
                              <ButtonDivider />
                              <OverlayButton 
                                $variant="info"
                                onClick={(e) => { e.stopPropagation(); setSelectedProduct(product); }}
                              >
                                <Info size={20} />
                              </OverlayButton>
                            </ActionButtonsContainer>
                          </ActionButtons>
                          <PriceRibbon className="price-ribbon">
                            {product.price.toLocaleString('uz-UZ')} сум
                          </PriceRibbon>
                          <CardStamp className="card-stamp">
                            <span>Socials</span>
                            <span>★★★</span>
                          </CardStamp>
                        </ProductImageWrapper>
                        <ProductInfo onClick={() => setSelectedProduct(product)}>
                          <ProductName>{product.name}</ProductName>
                          <ProductCategory>{getCategoryName(product.category)}</ProductCategory>
                        </ProductInfo>
                      </CardInner>
                    </CardFrame>
                  </ProductCardWrapper>
                ))}
              </ProductsGrid>
            </>
          )}
        </MenuContainer>
      </MenuContent>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProduct(null)}
          >
            <ModalContent
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
            >
              <ModalImage>
                <img src={selectedProduct.image} alt={selectedProduct.name} />
                <ModalImageDecor>
                  <span>Socials</span>
                </ModalImageDecor>
              </ModalImage>
              
              <FavoriteButton 
                $active={favorites.includes(selectedProduct.id)}
                onClick={() => toggleFavorite(selectedProduct.id)}
              >
                <Heart size={22} />
              </FavoriteButton>
              
              <ModalCloseButton onClick={() => setSelectedProduct(null)}>
                <X size={22} />
              </ModalCloseButton>
              
              <ModalDetails>
                <ModalCategory>{getCategoryName(selectedProduct.category)}</ModalCategory>
                <ModalTitle>{selectedProduct.name}</ModalTitle>
                <ModalPrice>
                  <span>{selectedProduct.price.toLocaleString('uz-UZ')} сум</span>
                </ModalPrice>
                <ModalDescription>"{selectedProduct.description}"</ModalDescription>
                
                {selectedProduct.ingredients && (
                  <ModalSection>
                    <ModalSectionTitle>Состав</ModalSectionTitle>
                    <IngredientsList>
                      {selectedProduct.ingredients.map((ingredient, index) => (
                        <IngredientTag key={index}>{ingredient}</IngredientTag>
                      ))}
                    </IngredientsList>
                  </ModalSection>
                )}
              </ModalDetails>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </>
  )
}

