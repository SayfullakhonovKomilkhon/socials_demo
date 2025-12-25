import React from 'react'
import styled, { css } from 'styled-components'
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
    background: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.dark.main};
    border: none;
    
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.primary.dark};
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme.shadows.glow};
    }
  `,
  secondary: css`
    background: ${({ theme }) => theme.colors.dark.main};
    color: ${({ theme }) => theme.colors.text.white};
    border: none;
    
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.black};
      transform: translateY(-2px);
    }
  `,
  outline: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.text.primary};
    border: 1px solid ${({ theme }) => theme.colors.text.primary};
    
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.text.primary};
      color: ${({ theme }) => theme.colors.text.white};
    }
  `,
  ghost: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.text.primary};
    border: none;
    
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.background.secondary};
    }
  `,
  gold: css`
    background: ${({ theme }) => theme.colors.primary.accent};
    color: ${({ theme }) => theme.colors.dark.main};
    border: none;
    
    &:hover:not(:disabled) {
      background: ${({ theme }) => theme.colors.primary.main};
      transform: translateY(-2px);
      box-shadow: ${({ theme }) => theme.shadows.glow};
    }
  `,
}

const sizes = {
  sm: css`
    padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.lg}`};
    font-size: ${({ theme }) => theme.fontSizes.xs};
  `,
  md: css`
    padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.xl}`};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  `,
  lg: css`
    padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing['2xl']}`};
    font-size: ${({ theme }) => theme.fontSizes.md};
  `,
}

const baseStyles = css<BaseButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.fonts.body};
  font-weight: ${({ theme }) => theme.fontWeights.semibold};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};
  text-transform: uppercase;
  letter-spacing: 0.1em;
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
    transform: none;
  }
  
  ${({ isLoading }) => isLoading && css`
    position: relative;
    color: transparent !important;
    
    &::after {
      content: '';
      position: absolute;
      width: 18px;
      height: 18px;
      border: 2px solid currentColor;
      border-right-color: transparent;
      border-radius: 50%;
      animation: spin 0.6s linear infinite;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
  `}
`

const StyledButton = styled.button<BaseButtonProps>`
  ${baseStyles}
`

const StyledLinkButton = styled(Link)<BaseButtonProps>`
  ${baseStyles}
`

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, BaseButtonProps {
  children: React.ReactNode
}

export interface LinkButtonProps extends BaseButtonProps {
  children: React.ReactNode
  to: string
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  disabled,
  ...props
}) => {
  return (
    <StyledButton
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      isLoading={isLoading}
      disabled={disabled || isLoading}
      {...props}
    >
      {children}
    </StyledButton>
  )
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  children,
  to,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  isLoading = false,
  ...props
}) => {
  return (
    <StyledLinkButton
      to={to}
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      isLoading={isLoading}
      {...props}
    >
      {children}
    </StyledLinkButton>
  )
}
