import React from 'react'
import styled, { css } from 'styled-components'

const inputStyles = css<{ $hasError?: boolean; $hasIcon?: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  padding-left: ${({ $hasIcon, theme }) => $hasIcon ? theme.spacing['3xl'] : theme.spacing.md};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.background.secondary};
  border: 1px solid ${({ theme, $hasError }) => 
    $hasError ? theme.colors.error : theme.colors.divider};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all ${({ theme }) => theme.transitions.fast};
  outline: none;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.muted};
  }
  
  &:focus {
    border-color: ${({ theme, $hasError }) => 
      $hasError ? theme.colors.error : theme.colors.primary.main};
    box-shadow: 0 0 0 3px ${({ $hasError }) => 
      $hasError ? 'rgba(193, 127, 89, 0.15)' : 'rgba(232, 222, 209, 0.3)'};
  }
  
  &:disabled {
    background: ${({ theme }) => theme.colors.background.cream};
    cursor: not-allowed;
    opacity: 0.7;
  }
`

const StyledInput = styled.input<{ $hasError?: boolean; $hasIcon?: boolean }>`
  ${inputStyles}
`

const StyledTextarea = styled.textarea<{ $hasError?: boolean }>`
  ${inputStyles}
  resize: vertical;
  min-height: 120px;
`

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`

const IconWrapper = styled.span`
  position: absolute;
  left: ${({ theme }) => theme.spacing.md};
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.text.muted};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  pointer-events: none;
`

const Label = styled.label`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text.primary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const ErrorMessage = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.error};
  margin-top: ${({ theme }) => theme.spacing.xs};
`

const HelperText = styled.span`
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text.muted};
  margin-top: ${({ theme }) => theme.spacing.xs};
`

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  helperText?: string
  icon?: React.ReactNode
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  helperText?: string
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  icon,
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`
  
  return (
    <InputWrapper>
      {label && <Label htmlFor={inputId}>{label}</Label>}
      <div style={{ position: 'relative' }}>
        {icon && <IconWrapper>{icon}</IconWrapper>}
        <StyledInput
          id={inputId}
          $hasError={!!error}
          $hasIcon={!!icon}
          {...props}
        />
      </div>
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {helperText && !error && <HelperText>{helperText}</HelperText>}
    </InputWrapper>
  )
}

export const Textarea: React.FC<TextareaProps> = ({
  label,
  error,
  helperText,
  id,
  ...props
}) => {
  const textareaId = id || `textarea-${Math.random().toString(36).substr(2, 9)}`
  
  return (
    <InputWrapper>
      {label && <Label htmlFor={textareaId}>{label}</Label>}
      <StyledTextarea
        id={textareaId}
        $hasError={!!error}
        {...props}
      />
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {helperText && !error && <HelperText>{helperText}</HelperText>}
    </InputWrapper>
  )
}
