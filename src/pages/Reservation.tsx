import React, { useState, useRef } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'

// ============ HERO ============
const HeroSection = styled(motion.section)`
  position: relative;
  height: 50vh;
  min-height: 400px;
  display: flex;
  align-items: flex-end;
  background: ${({ theme }) => theme.colors.dark.main};
  overflow: hidden;
`

const HeroMedia = styled(motion.div)`
  position: absolute;
  inset: -100px;
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(10, 10, 10, 0.4) 0%, rgba(10, 10, 10, 0.8) 100%);
  }
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

const HeroContent = styled(motion.div)`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing['4xl']} ${theme.spacing['3xl']}`};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  padding: ${({ theme }) => `${theme.spacing['3xl']} ${theme.spacing.xl}`};
  }
`

const HeroTitle = styled.h1`
  font-size: clamp(2.5rem, 8vw, ${({ theme }) => theme.fontSizes['6xl']});
  color: ${({ theme }) => theme.colors.text.white};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  
  span { font-style: italic; color: ${({ theme }) => theme.colors.primary.accent}; }
`

const HeroDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.text.cream};
  opacity: 0.7;
  margin-top: ${({ theme }) => theme.spacing.md};
`

// ============ MAIN ============
const MainSection = styled.section`
  background: ${({ theme }) => theme.colors.background.cream};
  padding: ${({ theme }) => `${theme.spacing['4xl']} ${theme.spacing['3xl']}`};
  min-height: 60vh;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing['3xl']} ${theme.spacing.xl}`};
  }
`

const MainContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

// ============ STEPS ============
const Steps = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing['3xl']};
  margin-bottom: ${({ theme }) => theme.spacing['3xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap: ${({ theme }) => theme.spacing.xl};
  }
`

const Step = styled.div<{ $active: boolean; $done: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    top: 20px;
    left: calc(50% + 32px);
    width: 70px;
    height: 1px;
    background: ${({ $done, theme }) => $done ? theme.colors.dark.main : theme.colors.divider};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      width: 40px;
      left: calc(50% + 25px);
    }
  }
  
  &:last-child::after { display: none; }
`

const StepNumber = styled.div<{ $active: boolean; $done: boolean }>`
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-style: italic;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  transition: all ${({ theme }) => theme.transitions.normal};
  
  ${({ $active, $done, theme }) => {
    if ($done) return `background: ${theme.colors.dark.main}; color: ${theme.colors.text.white};`
    if ($active) return `background: ${theme.colors.dark.main}; color: ${theme.colors.text.white}; box-shadow: 0 0 0 4px ${theme.colors.primary.light};`
    return `background: ${theme.colors.background.primary}; color: ${theme.colors.text.muted}; border: 1px solid ${theme.colors.divider};`
  }}
`

const StepLabel = styled.span<{ $active: boolean }>`
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  color: ${({ $active, theme }) => $active ? theme.colors.text.primary : theme.colors.text.muted};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
`

// ============ FORM CARD ============
const FormCard = styled(motion.div)`
  background: ${({ theme }) => theme.colors.background.primary};
  padding: ${({ theme }) => theme.spacing['3xl']};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing['2xl']};
  }
`

const FormTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
`

// ============ LOCATION ============
const LocationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const LocationOption = styled.button<{ $selected: boolean }>`
  padding: ${({ theme }) => theme.spacing.xl};
  text-align: left;
  background: ${({ $selected, theme }) => $selected ? theme.colors.dark.main : theme.colors.background.cream};
  color: ${({ $selected, theme }) => $selected ? theme.colors.text.white : theme.colors.text.primary};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ $selected, theme }) => $selected ? theme.colors.dark.main : theme.colors.dark.light};
    color: ${({ theme }) => theme.colors.text.white};
  }
`

const LocationName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  margin-bottom: 4px;
`

const LocationAddress = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  opacity: 0.7;
`

// ============ DATE/TIME ============
const DateTimeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing['2xl']};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const SectionLabel = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`

const Calendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`

const CalendarDay = styled.button<{ $selected: boolean; $disabled: boolean; $header?: boolean }>`
  padding: ${({ theme }) => theme.spacing.sm};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: ${({ $disabled, $header }) => $disabled || $header ? 'default' : 'pointer'};
  transition: all ${({ theme }) => theme.transitions.fast};
  background: transparent;
  
  ${({ $selected, $disabled, $header, theme }) => {
    if ($header) return `font-weight: ${theme.fontWeights.medium}; color: ${theme.colors.text.muted}; font-size: 10px;`
    if ($disabled) return `color: ${theme.colors.text.muted}; opacity: 0.4;`
    if ($selected) return `background: ${theme.colors.dark.main}; color: ${theme.colors.text.white};`
    return `color: ${theme.colors.text.primary}; &:hover { background: ${theme.colors.background.cream}; }`
  }}
`

const TimeSlots = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${({ theme }) => theme.spacing.sm};
`

const TimeSlot = styled.button<{ $selected: boolean }>`
  padding: ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  background: ${({ $selected, theme }) => $selected ? theme.colors.dark.main : 'transparent'};
  color: ${({ $selected, theme }) => $selected ? theme.colors.text.white : theme.colors.text.primary};
  border: 1px solid ${({ $selected, theme }) => $selected ? theme.colors.dark.main : theme.colors.divider};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    border-color: ${({ theme }) => theme.colors.dark.main};
  }
`

// ============ GUESTS ============
const GuestSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing['2xl']};
  padding: ${({ theme }) => theme.spacing['3xl']};
`

const GuestButton = styled.button`
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background.cream};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  color: ${({ theme }) => theme.colors.text.primary};
  
  &:hover { background: ${({ theme }) => theme.colors.dark.main}; color: ${({ theme }) => theme.colors.text.white}; }
  &:disabled { opacity: 0.3; cursor: not-allowed; }
`

const GuestCount = styled.div`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  min-width: 100px;
  text-align: center;
`

// ============ DETAILS ============
const FormGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

const FormGroup = styled.div<{ $full?: boolean }>`
  grid-column: ${({ $full }) => $full ? 'span 2' : 'span 1'};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-column: span 1;
  }
`

const FormLabel = styled.label`
  display: block;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: ${({ theme }) => theme.colors.text.muted};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`

const FormInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-family: ${({ theme }) => theme.fonts.body};
  background: ${({ theme }) => theme.colors.background.cream};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  outline: none;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:focus { box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.dark.main}; }
`

const FormTextarea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-family: ${({ theme }) => theme.fonts.body};
  background: ${({ theme }) => theme.colors.background.cream};
  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  outline: none;
  resize: vertical;
  min-height: 100px;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:focus { box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.dark.main}; }
`

// ============ NAV ============
const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${({ theme }) => theme.spacing['2xl']};
`

const NavButton = styled.button<{ $primary?: boolean }>`
  padding: ${({ theme }) => `${theme.spacing.md} ${theme.spacing['2xl']}`};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-transform: uppercase;
  letter-spacing: 0.15em;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.normal};
  
  ${({ $primary, theme }) => $primary ? `
    background: ${theme.colors.dark.main};
    color: ${theme.colors.text.white};
    border: none;
    &:hover { transform: scale(1.02); }
  ` : `
    background: transparent;
    color: ${theme.colors.text.secondary};
    border: 1px solid ${theme.colors.divider};
    &:hover { border-color: ${theme.colors.text.secondary}; }
  `}
  
  &:disabled { opacity: 0.4; cursor: not-allowed; transform: none; }
`

// ============ SUCCESS ============
const Success = styled(motion.div)`
  text-align: center;
  padding: ${({ theme }) => theme.spacing['2xl']};
`

const SuccessIcon = styled.div`
  width: 80px;
  height: 80px;
  margin: 0 auto ${({ theme }) => theme.spacing.xl};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.dark.main};
  color: ${({ theme }) => theme.colors.primary.accent};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: 36px;
`

const SuccessTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const SuccessText = styled.p`
  color: ${({ theme }) => theme.colors.text.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`

// ============ COMPONENT ============
const Reservation: React.FC = () => {
  const [step, setStep] = useState(1)
  const [location, setLocation] = useState('')
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedTime, setSelectedTime] = useState('')
  const [guests, setGuests] = useState(2)
  const [contactInfo, setContactInfo] = useState({ name: '', phone: '', email: '', notes: '' })
  const [completed, setCompleted] = useState(false)
  
  const locations = [
    { id: 'shevchenko', name: 'Socials Shevchenko', address: '36 A Taras Shevchenko street' },
    { id: 'mirzo', name: 'Socials Mirzo Ulugbek', address: '15 Mirzo Ulugbek street' },
  ]
  
  const times = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00']
  
  // Parallax
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  
  const handleNext = () => step < 4 ? setStep(step + 1) : setCompleted(true)
  const handleBack = () => step > 1 && setStep(step - 1)

  const canProceed = () => {
    switch (step) {
      case 1: return location !== ''
      case 2: return selectedDate !== null && selectedTime !== ''
      case 3: return guests > 0
      case 4: return contactInfo.name !== '' && contactInfo.phone !== ''
      default: return false
    }
  }
  
  const today = new Date()
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate()
  const firstDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay()
  
  const days = []
  for (let i = 0; i < firstDay; i++) days.push(<CalendarDay key={`e-${i}`} $selected={false} $disabled={true}>{''}</CalendarDay>)
  for (let i = 1; i <= daysInMonth; i++) {
    const isPast = i < today.getDate()
    days.push(<CalendarDay key={i} $selected={selectedDate === i} $disabled={isPast} onClick={() => !isPast && setSelectedDate(i)}>{i}</CalendarDay>)
  }
  
  if (completed) {
    return (
      <>
        <HeroSection ref={heroRef}>
          <HeroMedia style={{ y: heroY, scale: heroScale }}><img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&q=80" alt="" /></HeroMedia>
          <HeroContent initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <HeroTitle>Reservation <span>Confirmed</span></HeroTitle>
          </HeroContent>
        </HeroSection>
        <MainSection>
          <MainContainer>
            <FormCard initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <Success>
                <SuccessIcon>✓</SuccessIcon>
                <SuccessTitle>See You Soon!</SuccessTitle>
                <SuccessText>Your reservation has been confirmed. We look forward to hosting you.</SuccessText>
              </Success>
            </FormCard>
          </MainContainer>
        </MainSection>
      </>
    )
  }

  return (
    <>
      <HeroSection ref={heroRef}>
        <HeroMedia style={{ y: heroY, scale: heroScale }}><img src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=1920&q=80" alt="" /></HeroMedia>
        <HeroContent initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <HeroTitle>Reserve a <span>Table</span></HeroTitle>
          <HeroDescription>Book your spot for an unforgettable experience</HeroDescription>
        </HeroContent>
      </HeroSection>
      
      <MainSection>
        <MainContainer>
          <Steps>
            {['Location', 'Date', 'Guests', 'Details'].map((label, i) => (
              <Step key={label} $active={step === i + 1} $done={step > i + 1}>
                <StepNumber $active={step === i + 1} $done={step > i + 1}>
                  {step > i + 1 ? '✓' : i + 1}
                      </StepNumber>
                <StepLabel $active={step === i + 1}>{label}</StepLabel>
              </Step>
            ))}
          </Steps>

              <AnimatePresence mode="wait">
            <FormCard key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.3 }}>
              {step === 1 && (
                <>
                  <FormTitle>Choose Location</FormTitle>
                  <LocationGrid>
                    {locations.map(loc => (
                      <LocationOption key={loc.id} $selected={location === loc.id} onClick={() => setLocation(loc.id)}>
                        <LocationName>{loc.name}</LocationName>
                        <LocationAddress>{loc.address}</LocationAddress>
                      </LocationOption>
                    ))}
                  </LocationGrid>
                </>
              )}
              
              {step === 2 && (
                <>
                  <FormTitle>Select Date & Time</FormTitle>
                  <DateTimeGrid>
                    <div>
                      <SectionLabel>Date</SectionLabel>
                      <Calendar>
                        {['S','M','T','W','T','F','S'].map((d,i) => <CalendarDay key={`h-${i}`} $selected={false} $disabled={false} $header>{d}</CalendarDay>)}
                        {days}
                      </Calendar>
                    </div>
                    <div>
                      <SectionLabel>Time</SectionLabel>
                      <TimeSlots>
                        {times.map(t => <TimeSlot key={t} $selected={selectedTime === t} onClick={() => setSelectedTime(t)}>{t}</TimeSlot>)}
                      </TimeSlots>
                          </div>
                  </DateTimeGrid>
                    </>
                  )}

              {step === 3 && (
                <>
                  <FormTitle>Number of Guests</FormTitle>
                  <GuestSelector>
                    <GuestButton onClick={() => setGuests(Math.max(1, guests - 1))} disabled={guests <= 1}>−</GuestButton>
                    <GuestCount>{guests}</GuestCount>
                    <GuestButton onClick={() => setGuests(Math.min(20, guests + 1))} disabled={guests >= 20}>+</GuestButton>
                  </GuestSelector>
                    </>
                  )}

              {step === 4 && (
                <>
                  <FormTitle>Your Details</FormTitle>
                  <FormGrid>
                    <FormGroup><FormLabel>Name *</FormLabel><FormInput placeholder="Your name" value={contactInfo.name} onChange={e => setContactInfo(p => ({ ...p, name: e.target.value }))} /></FormGroup>
                    <FormGroup><FormLabel>Phone *</FormLabel><FormInput placeholder="+998" value={contactInfo.phone} onChange={e => setContactInfo(p => ({ ...p, phone: e.target.value }))} /></FormGroup>
                    <FormGroup $full><FormLabel>Email</FormLabel><FormInput placeholder="your@email.com" value={contactInfo.email} onChange={e => setContactInfo(p => ({ ...p, email: e.target.value }))} /></FormGroup>
                    <FormGroup $full><FormLabel>Notes</FormLabel><FormTextarea placeholder="Any special requests..." value={contactInfo.notes} onChange={e => setContactInfo(p => ({ ...p, notes: e.target.value }))} /></FormGroup>
                  </FormGrid>
                    </>
                  )}

              <Navigation>
                <NavButton onClick={handleBack} disabled={step === 1}>Back</NavButton>
                <NavButton $primary onClick={handleNext} disabled={!canProceed()}>
                  {step === 4 ? 'Confirm' : 'Continue'}
                </NavButton>
              </Navigation>
            </FormCard>
          </AnimatePresence>
        </MainContainer>
      </MainSection>
    </>
  )
}

export default Reservation
