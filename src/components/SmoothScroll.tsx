import React, { useEffect, useRef } from 'react'
import Lenis from '@studio-freight/lenis'
import { useLocation } from 'react-router-dom'

interface SmoothScrollProps {
  children: React.ReactNode
}

export const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null)
  const location = useLocation()
  
  useEffect(() => {
    try {
      lenisRef.current = new Lenis({
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: 'vertical',
        gestureOrientation: 'vertical',
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
      })
      
      function raf(time: number) {
        lenisRef.current?.raf(time)
        requestAnimationFrame(raf)
      }
      
      requestAnimationFrame(raf)
    } catch (error) {
      console.warn('Lenis initialization failed:', error)
    }
    
    return () => {
      lenisRef.current?.destroy()
    }
  }, [])
  
  // Scroll to top on route change
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true })
    } else {
      window.scrollTo(0, 0)
    }
  }, [location.pathname])
  
  return <>{children}</>
}
