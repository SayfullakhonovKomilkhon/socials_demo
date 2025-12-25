import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'

const StyledCard = styled(motion.div)<{ $hoverable?: boolean }>`
  background: ${({ theme }) => theme.colors.background.primary};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  overflow: hidden;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  transition: all ${({ theme }) => theme.transitions.normal};
  
  ${({ $hoverable, theme }) => $hoverable && `
    cursor: pointer;
    
    &:hover {
      transform: translateY(-8px);
      box-shadow: ${theme.shadows.xl};
      border-color: transparent;
    }
  `}
`

interface CardProps {
  children: React.ReactNode
  hoverable?: boolean
  className?: string
  onClick?: () => void
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverable = false,
  className,
  onClick
}) => {
  return (
    <StyledCard
      $hoverable={hoverable}
      className={className}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </StyledCard>
  )
}

// Product Card Component
const ProductCardWrapper = styled(StyledCard)`
  cursor: pointer;
`

const ProductImageContainer = styled.div`
  position: relative;
  aspect-ratio: 4/3;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
  }
  
  ${ProductCardWrapper}:hover & img {
    transform: scale(1.1);
  }
`

const ProductBadge = styled.span`
  position: absolute;
  top: ${({ theme }) => theme.spacing.md};
  left: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => `${theme.spacing.xs} ${theme.spacing.md}`};
  background: ${({ theme }) => theme.colors.primary.accent};
  color: ${({ theme }) => theme.colors.dark.main};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  text-transform: uppercase;
  letter-spacing: 0.1em;
  border-radius: ${({ theme }) => theme.borderRadius.full};
`

const ProductContent = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
`

const ProductCategory = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${({ theme }) => theme.colors.primary.accent};
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`

const ProductName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const ProductDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.light};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const ProductFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const ProductPrice = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.text.primary};
`

interface ProductCardProps {
  name: string
  description: string
  price: string
  image: string
  category?: string
  badge?: string
  onClick?: () => void
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  description,
  price,
  image,
  category,
  badge,
  onClick
}) => {
  return (
    <ProductCardWrapper
      $hoverable
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <ProductImageContainer>
        <img src={image} alt={name} />
        {badge && <ProductBadge>{badge}</ProductBadge>}
      </ProductImageContainer>
      <ProductContent>
        {category && <ProductCategory>{category}</ProductCategory>}
        <ProductName>{name}</ProductName>
        <ProductDescription>{description}</ProductDescription>
        <ProductFooter>
          <ProductPrice>{price} сум</ProductPrice>
        </ProductFooter>
      </ProductContent>
    </ProductCardWrapper>
  )
}
