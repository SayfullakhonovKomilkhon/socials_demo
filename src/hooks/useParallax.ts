import { useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ParallaxOptions {
  offset?: number
  direction?: 'up' | 'down'
}

export const useParallax = (options: ParallaxOptions = {}) => {
  const { offset = 50, direction = 'up' } = options
  const ref = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    direction === 'up' ? [offset, -offset] : [-offset, offset]
  )
  
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])
  
  return { ref, y, opacity, scale, scrollYProgress }
}

export const useImageParallax = (strength: number = 100) => {
  const ref = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength])
  
  return { ref, y }
}

export const useHeroParallax = () => {
  const { scrollY } = useScroll()
  
  const y = useTransform(scrollY, [0, 1000], [0, 400])
  const opacity = useTransform(scrollY, [0, 600], [1, 0])
  const scale = useTransform(scrollY, [0, 600], [1, 1.2])
  const textY = useTransform(scrollY, [0, 600], [0, 150])
  
  return { y, opacity, scale, textY }
}

export const useScrollReveal = () => {
  const ref = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.4']
  })
  
  const clipPath = useTransform(
    scrollYProgress,
    [0, 1],
    ['inset(100% 0% 0% 0%)', 'inset(0% 0% 0% 0%)']
  )
  
  return { ref, clipPath, scrollYProgress }
}

