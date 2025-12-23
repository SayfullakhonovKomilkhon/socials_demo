import styled, { css } from 'styled-components'
import { forwardRef, InputHTMLAttributes, TextareaHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  icon?: React.ReactNode
}

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
}

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
  width: 100%;
`

const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.text.secondary};
`

const inputStyles = css<{ $hasError?: boolean; $hasIcon?: boolean }>`
  width: 100%;
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing.lg}`};
  padding-left: ${({ $hasIcon, theme }) => $hasIcon ? theme.spacing['3xl'] : theme.spacing.lg};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.text.primary};
  background: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme, $hasError }) => 
    $hasError ? theme.colors.error : theme.colors.primary.lighter};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  transition: all ${({ theme }) => theme.transitions.fast};
  outline: none;
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.light};
  }
  
  &:focus {
    border-color: ${({ theme, $hasError }) => 
      $hasError ? theme.colors.error : theme.colors.accent.gold};
    box-shadow: 0 0 0 3px ${({ theme, $hasError }) => 
      $hasError ? 'rgba(184, 80, 80, 0.1)' : 'rgba(201, 168, 108, 0.15)'};
  }
  
  &:disabled {
    background: ${({ theme }) => theme.colors.background.secondary};
    cursor: not-allowed;
  }
`

const StyledInput = styled.input<{ $hasError?: boolean; $hasIcon?: boolean }>`
  ${inputStyles}
`

const StyledTextarea = styled.textarea<{ $hasError?: boolean }>`
  ${inputStyles}
  min-height: 120px;
  resize: vertical;
`

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`

const IconWrapper = styled.div`
  position: absolute;
  left: ${({ theme }) => theme.spacing.md};
  top: 50%;
  transform: translateY(-50%);
  color: ${({ theme }) => theme.colors.text.light};
  display: flex;
  align-items: center;
  justify-content: center;
`

const ErrorText = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.error};
`

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon, ...props }, ref) => {
    return (
      <InputWrapper>
        {label && <Label>{label}</Label>}
        <InputContainer>
          {icon && <IconWrapper>{icon}</IconWrapper>}
          <StyledInput 
            ref={ref} 
            $hasError={!!error} 
            $hasIcon={!!icon}
            {...props} 
          />
        </InputContainer>
        {error && <ErrorText>{error}</ErrorText>}
      </InputWrapper>
    )
  }
)

Input.displayName = 'Input'

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <InputWrapper>
        {label && <Label>{label}</Label>}
        <StyledTextarea 
          ref={ref} 
          $hasError={!!error} 
          {...props} 
        />
        {error && <ErrorText>{error}</ErrorText>}
      </InputWrapper>
    )
  }
)

Textarea.displayName = 'Textarea'

