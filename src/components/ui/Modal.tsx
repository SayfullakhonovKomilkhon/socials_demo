import React, { useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${({ theme }) => theme.colors.background.overlay};
  z-index: ${({ theme }) => theme.zIndex.modal};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xl};
`

const ModalContainer = styled(motion.div)<{ $size?: 'sm' | 'md' | 'lg' }>`
  background: ${({ theme }) => theme.colors.background.primary};
  border-radius: ${({ theme }) => theme.borderRadius['2xl']};
  width: 100%;
  max-width: ${({ $size }) => {
    switch ($size) {
      case 'sm': return '400px'
      case 'lg': return '800px'
      default: return '600px'
    }
  }};
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`

const CloseButton = styled.button`
  position: absolute;
  top: ${({ theme }) => theme.spacing.lg};
  right: ${({ theme }) => theme.spacing.lg};
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background.secondary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  z-index: 1;
  
  &:hover {
    background: ${({ theme }) => theme.colors.background.cream};
    transform: rotate(90deg);
  }
`

const ModalHeader = styled.div`
  padding: ${({ theme }) => theme.spacing['2xl']};
  padding-bottom: 0;
`

const ModalTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  padding-right: ${({ theme }) => theme.spacing['3xl']};
`

const ModalBody = styled.div`
  padding: ${({ theme }) => theme.spacing['2xl']};
`

const ModalFooter = styled.div`
  padding: ${({ theme }) => theme.spacing['2xl']};
  padding-top: 0;
  display: flex;
  justify-content: flex-end;
  gap: ${({ theme }) => theme.spacing.md};
`

interface ModalProps {
  isOpen: boolean
  onClose: () => void
  title?: string
  children: React.ReactNode
  footer?: React.ReactNode
  size?: 'sm' | 'md' | 'lg'
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  size = 'md'
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])
  
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
    }
    
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])
  
  return (
    <AnimatePresence>
      {isOpen && (
        <Overlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
        >
          <ModalContainer
            $size={size}
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={e => e.stopPropagation()}
          >
            <CloseButton onClick={onClose} aria-label="Close modal">
              ✕
            </CloseButton>
            
            {title && (
              <ModalHeader>
                <ModalTitle>{title}</ModalTitle>
              </ModalHeader>
            )}
            
            <ModalBody>
              {children}
            </ModalBody>
            
            {footer && (
              <ModalFooter>
                {footer}
              </ModalFooter>
            )}
          </ModalContainer>
        </Overlay>
      )}
    </AnimatePresence>
  )
}
