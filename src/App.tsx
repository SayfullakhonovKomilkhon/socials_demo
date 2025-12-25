import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Layout } from './components/layout'
import { Home, Menu, Reservation, Locations, Contact } from './pages'
import { useEffect } from 'react'

// Scroll to top on route change
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

// Page transition variants - cinematic effect
const pageVariants = {
  initial: { 
    opacity: 0,
    y: 40,
  },
  enter: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    }
  },
  exit: { 
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 1, 1]
    }
  }
}

// Page transition wrapper
const PageTransition: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      {children}
    </motion.div>
  )
}

function App() {
  const location = useLocation()

  return (
    <Layout>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route 
            path="/" 
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            } 
          />
          <Route 
            path="/menu" 
            element={
              <PageTransition>
                <Menu />
              </PageTransition>
            } 
          />
          <Route 
            path="/reservation" 
            element={
              <PageTransition>
                <Reservation />
              </PageTransition>
            } 
          />
          <Route 
            path="/locations" 
            element={
              <PageTransition>
                <Locations />
              </PageTransition>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <PageTransition>
                <Contact />
              </PageTransition>
            } 
          />
        </Routes>
      </AnimatePresence>
    </Layout>
  )
}

export default App
