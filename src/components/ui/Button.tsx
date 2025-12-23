import styled, { css } from 'styled-components'
import { motion, HTMLMotionProps } from 'framer-motion'
import { Link } from 'react-router-dom'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold'
type ButtonSize = 'sm' | 'md' | 'lg'

interface BaseButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  isLoading?: boolean
}

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.primary.dark};
    color: ${({ theme }) => theme.colors.white};
    
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.primary.darker};
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme.shadows.lg};
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.background.card};
    color: ${({ theme }) => theme.colors.text.primary};
    
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.background.cardHover};
    }
  `,
  outline: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.primary.dark};
    border: 2px solid ${({ theme }) => theme.colors.primary.dark};
    
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.primary.dark};
      color: ${({ theme }) => theme.colors.white};
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.text.primary};
    
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.background.secondary};
    }
  `,
  gold: css`
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.accent.gold} 0%, ${({ theme }) => theme.colors.accent.goldDark} 100%);
    color: ${({ theme }) => theme.colors.white};
    box-shadow: ${({ theme }) => theme.shadows.glow};
    
    &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 0 30px rgba(201, 168, 108, 0.5);
    }
  `,
}

const sizes = {
  sm: css`
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  `,
  md: css`
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
    font-size: ${({ theme }) => theme.fontSizes.md};
  `,
  lg: css`
    padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing['2xl']}`};
    font-size: ${({ theme }) => theme.fontSizes.lg};
  `,
}

const baseStyles = css<BaseButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: none;
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  white-space: nowrap;
  text-decoration: none;
  
  ${({ variant = 'primary' }) => variants[variant]}
  ${({ size = 'md' }) => sizes[size]}
  
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  ${({ isLoading }) => isLoading && css`
    position: relative;
    color: transparent !important;
    
    &::after {
      content: '';
      position: absolute;
      width: 20px;
      height: 20px;
      border: 2px solid currentColor;
      border-right-color: transparent;
      border-radius: 50%;
      animation: spin 0.8s linear infinite;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `}
`

const StyledButton = styled(motion.button)<BaseButtonProps>`
  ${baseStyles}
`

export const StyledLinkButton = styled(Link)<BaseButtonProps>`
  ${baseStyles}
`

type ButtonProps = BaseButtonProps & Omit<HTMLMotionProps<'button'>, keyof BaseButtonProps> & {
  children: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary',
  size = 'md',
  fullWidth,
  isLoading,
  ...props 
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      isLoading={isLoading}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

interface LinkButtonProps extends BaseButtonProps {
  children: React.ReactNode
  to: string
  style?: React.CSSProperties
}

export const LinkButton: React.FC<LinkButtonProps> = ({ 
  children, 
  variant = 'primary',
  size = 'md',
  to,
  style,
  ...props 
}) => {
  return (
    <StyledLinkButton
      variant={variant}
      size={size}
      to={to}
      style={style}
      {...props}
    >
      {children}
    </StyledLinkButton>
  )
}
