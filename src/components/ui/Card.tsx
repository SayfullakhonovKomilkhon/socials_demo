import styled from 'styled-components'
import { motion } from 'framer-motion'

interface CardProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
  hoverable?: boolean
}

const StyledCard = styled(motion.div)<{ $hoverable?: boolean }>`
  background: ${({ theme }) => theme.colors.background.card};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  overflow: hidden;
  transition: all ${({ theme }) => theme.transitions.normal};
  
  ${({ $hoverable, theme }) => $hoverable && `
    cursor: pointer;
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: ${theme.shadows.xl};
      background: ${theme.colors.background.cardHover};
    }
  `}
`

export const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  onClick,
  hoverable = false 
}) => {
  return (
    <StyledCard 
      className={className}
      onClick={onClick}
      $hoverable={hoverable}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </StyledCard>
  )
}

// Product Card for menu items
interface ProductCardProps {
  image: string
  name: string
  price?: number
  description?: string
  onClick?: () => void
}

const ProductCardWrapper = styled(motion.div)`
  background: transparent;
  cursor: pointer;
  width: 100%;
  max-width: 380px;
  position: relative;
  
  &:hover {
    .product-image-container {
      transform: translateY(-12px);
      
      &::before {
        opacity: 1;
      }
    }
    
    .product-overlay {
      opacity: 1;
    }
    
    img {
      transform: scale(1.1);
    }
    
    .view-btn {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`

const ProductImageContainer = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 0.85;
  overflow: hidden;
  border-radius: 30px;
  box-shadow: 0 15px 40px rgba(74, 44, 52, 0.25);
  transition: transform 0.5s ease;
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
  
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border: 3px solid rgba(201, 168, 108, 0.5);
    border-radius: 30px;
    z-index: 3;
    opacity: 0;
    transition: opacity 0.4s ease;
  }
`

const ProductOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg, 
    transparent 0%, 
    transparent 40%,
    rgba(74, 44, 52, 0.7) 100%
  );
  z-index: 1;
  opacity: 0;
  transition: opacity 0.4s ease;
  border-radius: 30px;
`

const ViewButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.8);
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  opacity: 0;
  transition: all 0.4s ease;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '→';
    font-size: 28px;
    color: #4a2c34;
  }
`

const ProductImage = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }
`

const ProductInfo = styled.div`
  padding: 28px 20px 20px;
  text-align: center;
  position: relative;
`

const ProductName = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 32px;
  font-weight: 400;
  color: #4a2c34;
  text-transform: capitalize;
  letter-spacing: 0.03em;
  position: relative;
  display: inline-block;
  
  &::before,
  &::after {
    content: '◈';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 10px;
    color: #C9A86C;
  }
  
  &::before {
    left: -24px;
  }
  
  &::after {
    right: -24px;
  }
`

const ProductPrice = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.accent.gold};
  display: none;
`

const ProductDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-top: ${({ theme }) => theme.spacing.sm};
  line-height: ${({ theme }) => theme.lineHeights.relaxed};
  display: none;
`

export const ProductCard: React.FC<ProductCardProps> = ({
  image,
  name,
  price,
  description,
  onClick
}) => {
  return (
    <ProductCardWrapper
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4 }}
    >
      <ProductImageContainer className="product-image-container">
        <ProductImage>
          <img 
            src={image} 
            alt={name} 
            loading="lazy"
            onError={(e) => { e.currentTarget.style.visibility = 'hidden'; }}
          />
        </ProductImage>
        <ProductOverlay className="product-overlay" />
        <ViewButton className="view-btn" />
      </ProductImageContainer>
      <ProductInfo>
        <ProductName>{name}</ProductName>
        {price && <ProductPrice>{price.toLocaleString('uz-UZ')} сум</ProductPrice>}
        {description && <ProductDescription>{description}</ProductDescription>}
      </ProductInfo>
    </ProductCardWrapper>
  )
}

