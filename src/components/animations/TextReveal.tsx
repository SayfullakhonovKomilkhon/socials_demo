import React from 'react'
import styled from 'styled-components'
import { motion, Variants } from 'framer-motion'

const Container = styled.span`
  display: inline-block;
  overflow: hidden;
`

const Word = styled(motion.span)`
  display: inline-block;
  margin-right: 0.3em;
  
  &:last-child {
    margin-right: 0;
  }
`

const Char = styled(motion.span)`
  display: inline-block;
`

interface TextRevealProps {
  children: string
  delay?: number
  duration?: number
  type?: 'words' | 'chars'
  className?: string
}

const wordVariants: Variants = {
  hidden: { 
    y: '100%',
    opacity: 0,
    rotateX: -90,
  },
  visible: (i: number) => ({
    y: '0%',
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.08,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

const charVariants: Variants = {
  hidden: { 
    y: '100%',
    opacity: 0,
  },
  visible: (i: number) => ({
    y: '0%',
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: i * 0.03,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
}

export const TextReveal: React.FC<TextRevealProps> = ({ 
  children, 
  delay = 0, 
  type = 'words',
  className 
}) => {
  const words = children.split(' ')
  
  if (type === 'chars') {
    const chars = children.split('')
    return (
      <Container className={className}>
        {chars.map((char, i) => (
          <Char
            key={i}
            custom={i + delay * 10}
            variants={charVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {char === ' ' ? '\u00A0' : char}
          </Char>
        ))}
      </Container>
    )
  }
  
  return (
    <Container className={className}>
      {words.map((word, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden' }}>
          <Word
            custom={i + delay * 10}
            variants={wordVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {word}
          </Word>
        </span>
      ))}
    </Container>
  )
}

