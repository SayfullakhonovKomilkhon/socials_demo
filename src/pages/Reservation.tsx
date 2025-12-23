import { useState } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Clock, Users, User, Phone, Mail, Check, ChevronLeft, ChevronRight } from 'lucide-react'
import { Input, Textarea } from '../components/ui'

// Types
interface ReservationData {
  date: string
  time: string
  guests: number
  name: string
  phone: string
  email: string
  notes: string
}

// Page Header
const PageHeader = styled.section`
  padding-top: ${({ theme }) => theme.spacing['5xl']};
  padding-bottom: ${({ theme }) => theme.spacing['3xl']};
  background: 
    linear-gradient(rgba(139, 69, 87, 0.85), rgba(167, 107, 91, 0.85)),
    url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920') center/cover no-repeat;
  position: relative;
`

const HeaderContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: ${({ theme }) => `${theme.spacing['3xl']} ${theme.spacing.xl}`};
  text-align: center;
`

const PageTitle = styled(motion.h1)`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: ${({ theme }) => theme.fontSizes['5xl']};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`

const PageSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.primary.lighter};
  max-width: 600px;
  margin: 0 auto;
`

// Main Content
const ReservationContent = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0 ${({ theme }) => theme.spacing['5xl']};
  background: ${({ theme }) => theme.colors.background.primary};
`

const ReservationContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.xl};
`

// Progress Steps - Creative Design
const ProgressBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 60px;
  position: relative;
`

const ProgressStep = styled.div<{ $active: boolean; $completed: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    top: 28px;
    left: calc(50% + 35px);
    width: 100px;
    height: 2px;
    background: ${({ $completed }) => 
      $completed 
        ? 'linear-gradient(90deg, #C9A86C, #C9A86C)' 
        : 'linear-gradient(90deg, #d4c4bc, #d4c4bc)'};
    
    @media (max-width: 600px) {
      width: 60px;
      left: calc(50% + 30px);
    }
  }
`

const StepNumber = styled.div<{ $active: boolean; $completed: boolean }>`
  width: 56px;
  height: 56px;
  background: ${({ $active, $completed }) => 
    $completed 
      ? 'linear-gradient(135deg, #C9A86C 0%, #b89a5a 100%)'
      : $active 
        ? 'linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%)' 
        : 'transparent'};
  color: ${({ $active, $completed }) => 
    $active || $completed ? '#fff' : '#7a4a5a'};
  border: ${({ $active, $completed }) => 
    $active || $completed ? 'none' : '2px solid #d4c4bc'};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 20px;
  font-weight: 400;
  transition: all 0.3s ease;
  position: relative;
  
  ${({ $active }) => $active && `
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 10px;
      height: 10px;
      border: 2px solid #C9A86C;
    }
    
    &::before {
      top: -5px;
      left: -5px;
      border-right: none;
      border-bottom: none;
    }
    
    &::after {
      bottom: -5px;
      right: -5px;
      border-left: none;
      border-top: none;
    }
  `}
  
  svg {
    stroke-width: 3;
  }
`

const StepLabel = styled.span<{ $active: boolean }>`
  margin-top: 16px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 13px;
  letter-spacing: 0.05em;
  color: ${({ $active }) => $active ? '#4a2c34' : '#a08080'};
  text-align: center;
  transition: color 0.3s ease;
  
  @media (max-width: 600px) {
    font-size: 11px;
  }
`

const StepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 140px;
  
  @media (max-width: 600px) {
    width: 100px;
  }
`

// Form Card - Creative Design
const FormCard = styled(motion.div)`
  background: linear-gradient(145deg, #fff 0%, #faf7f5 100%);
  border-radius: 30px;
  padding: 50px;
  box-shadow: 0 20px 60px rgba(122, 74, 90, 0.12);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: 15px;
    border: 1px solid rgba(201, 168, 108, 0.2);
    border-radius: 22px;
    pointer-events: none;
  }
  
  @media (max-width: 600px) {
    padding: 30px 20px;
  }
`

const FormTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 32px;
  color: #4a2c34;
  margin-bottom: 40px;
  text-align: center;
  font-weight: 400;
  position: relative;
  
  &::after {
    content: '✦';
    display: block;
    margin-top: 15px;
    font-size: 12px;
    color: #C9A86C;
  }
`

// Step 1: Date & Time - Creative Design
const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  margin-bottom: 40px;
  background: linear-gradient(145deg, #f5ebe6 0%, #ede3dc 100%);
  padding: 20px;
  border-radius: 20px;
  border: 1px solid rgba(201, 168, 108, 0.2);
`

const CalendarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

const CalendarMonth = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 24px;
  color: #4a2c34;
  font-weight: 400;
`

const CalendarNavButton = styled.button`
  width: 44px;
  height: 44px;
  background: transparent;
  border: 2px solid #d4c4bc;
  color: #7a4a5a;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover:not(:disabled) {
    background: linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%);
    border-color: transparent;
    color: #fff;
  }
  
  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`

const WeekDayLabel = styled.div`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 12px;
  font-weight: 500;
  color: #7a4a5a;
  padding: 10px 0;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`

const DayButton = styled.button<{ $selected: boolean; $disabled: boolean; $today: boolean }>`
  aspect-ratio: 1;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 16px;
  font-weight: 400;
  background: ${({ $selected }) => 
    $selected ? 'linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%)' : 'transparent'};
  color: ${({ $selected, $disabled, $today }) => 
    $selected ? '#fff' : 
    $disabled ? '#c0b0a8' : 
    $today ? '#C9A86C' : '#4a2c34'};
  border: ${({ $today, $selected }) => 
    $today && !$selected ? '2px solid #C9A86C' : 'none'};
  cursor: ${({ $disabled }) => $disabled ? 'not-allowed' : 'pointer'};
  opacity: ${({ $disabled }) => $disabled ? 0.5 : 1};
  transition: all 0.3s ease;
  position: relative;
  
  ${({ $selected }) => $selected && `
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 6px;
      height: 6px;
      border: 1px solid #C9A86C;
    }
    
    &::before {
      top: 2px;
      left: 2px;
      border-right: none;
      border-bottom: none;
    }
    
    &::after {
      bottom: 2px;
      right: 2px;
      border-left: none;
      border-top: none;
    }
  `}
  
  &:hover:not(:disabled) {
    background: ${({ $selected }) => 
      $selected ? 'linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%)' : 'rgba(122, 74, 90, 0.1)'};
  }
`

const TimeSlotsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 40px;
  
  @media (max-width: 600px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const TimeSlot = styled.button<{ $selected: boolean; $disabled: boolean }>`
  padding: 16px;
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 16px;
  font-weight: 400;
  background: ${({ $selected }) => 
    $selected 
      ? 'linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%)' 
      : 'transparent'};
  color: ${({ $selected, $disabled }) => 
    $selected ? '#fff' : 
    $disabled ? '#c0b0a8' : '#4a2c34'};
  border: ${({ $selected }) => $selected ? 'none' : '2px solid #d4c4bc'};
  cursor: ${({ $disabled }) => $disabled ? 'not-allowed' : 'pointer'};
  opacity: ${({ $disabled }) => $disabled ? 0.5 : 1};
  transition: all 0.3s ease;
  position: relative;
  
  ${({ $selected }) => $selected && `
    box-shadow: 0 6px 20px rgba(122, 74, 90, 0.3);
    
    &::before,
    &::after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      border: 2px solid #C9A86C;
    }
    
    &::before {
      top: -4px;
      left: -4px;
      border-right: none;
      border-bottom: none;
    }
    
    &::after {
      bottom: -4px;
      right: -4px;
      border-left: none;
      border-top: none;
    }
  `}
  
  &:hover:not(:disabled) {
    border-color: ${({ $selected }) => $selected ? 'transparent' : '#7a4a5a'};
    color: ${({ $selected }) => $selected ? '#fff' : '#7a4a5a'};
  }
`

const GuestsSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
  margin-bottom: 40px;
  padding: 30px;
  background: linear-gradient(145deg, #f5ebe6 0%, #ede3dc 100%);
  border-radius: 20px;
  border: 1px solid rgba(201, 168, 108, 0.2);
`

const GuestButton = styled.button<{ $disabled?: boolean }>`
  width: 56px;
  height: 56px;
  background: ${({ $disabled }) => $disabled ? 'transparent' : 'linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%)'};
  border: ${({ $disabled }) => $disabled ? '2px solid #d4c4bc' : 'none'};
  color: ${({ $disabled }) => $disabled ? '#c0b0a8' : '#fff'};
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: ${({ $disabled }) => $disabled ? 'not-allowed' : 'pointer'};
  
  &:hover:not(:disabled) {
    transform: scale(1.1);
    box-shadow: 0 6px 20px rgba(122, 74, 90, 0.3);
  }
`

const GuestCount = styled.div`
  text-align: center;
  min-width: 100px;
  
  span {
    display: block;
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 56px;
    font-weight: 400;
    color: #C9A86C;
    line-height: 1;
  }
  
  small {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 14px;
    color: #8b6b6b;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
`

const SectionTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 18px;
  color: #4a2c34;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 400;
  
  &::before {
    content: '';
    width: 30px;
    height: 1px;
    background: #C9A86C;
  }
  
  svg {
    color: #C9A86C;
  }
`

// Step 2: Details
const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`

// Step 3: Confirmation - Creative Design
const ConfirmationCard = styled.div`
  background: linear-gradient(145deg, #f5ebe6 0%, #ede3dc 100%);
  border-radius: 20px;
  padding: 30px;
  margin-bottom: 30px;
  border: 1px solid rgba(201, 168, 108, 0.2);
`

const ConfirmationRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid rgba(201, 168, 108, 0.2);
  
  &:last-child {
    border-bottom: none;
  }
`

const ConfirmationLabel = styled.span`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 14px;
  color: #8b6b6b;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`

const ConfirmationValue = styled.span`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 18px;
  font-weight: 400;
  color: #4a2c34;
`

// Success Screen - Creative Design
const SuccessWrapper = styled(motion.div)`
  text-align: center;
  padding: 40px 20px;
`

const SuccessIcon = styled(motion.div)`
  width: 120px;
  height: 120px;
  margin: 0 auto 30px;
  background: linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border: 3px solid #C9A86C;
  }
  
  &::before {
    top: -8px;
    left: -8px;
    border-right: none;
    border-bottom: none;
  }
  
  &::after {
    bottom: -8px;
    right: -8px;
    border-left: none;
    border-top: none;
  }
`

const SuccessTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 36px;
  color: #4a2c34;
  margin-bottom: 16px;
  font-weight: 400;
`

const SuccessMessage = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 16px;
  color: #6b5055;
  margin-bottom: 30px;
  line-height: 1.7;
`

const BookingNumber = styled.div`
  background: linear-gradient(145deg, #f5ebe6 0%, #ede3dc 100%);
  padding: 25px;
  border-radius: 15px;
  margin-bottom: 30px;
  border: 1px solid rgba(201, 168, 108, 0.3);
  
  span {
    display: block;
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 12px;
    color: #8b6b6b;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin-bottom: 10px;
  }
  
  strong {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 28px;
    color: #C9A86C;
    font-weight: 400;
  }
`

// Navigation Buttons - Creative Design
const FormActions = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 40px;
`

const ActionButton = styled.button<{ $variant?: 'primary' | 'secondary' }>`
  padding: 16px 36px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  ${({ $variant }) => $variant === 'primary' ? `
    background: linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%);
    border: none;
    color: #fff;
    box-shadow: 0 6px 20px rgba(122, 74, 90, 0.3);
    
    &:hover:not(:disabled) {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(122, 74, 90, 0.4);
    }
    
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  ` : `
    background: transparent;
    border: 2px solid #d4c4bc;
    color: #7a4a5a;
    
    &:hover {
      border-color: #7a4a5a;
      background: rgba(122, 74, 90, 0.05);
    }
  `}
`

const steps = [
  { id: 1, label: 'Дата и время' },
  { id: 2, label: 'Детали' },
  { id: 3, label: 'Подтверждение' },
]

const timeSlots = [
  '12:00', '12:30', '13:00', '13:30',
  '14:00', '14:30', '15:00', '15:30',
  '18:00', '18:30', '19:00', '19:30',
  '20:00', '20:30', '21:00', '21:30',
]

const weekDays = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']

const monthNames = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
]

export const Reservation: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1)
  const [isComplete, setIsComplete] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [reservationData, setReservationData] = useState<ReservationData>({
    date: '',
    time: '',
    guests: 2,
    name: '',
    phone: '',
    email: '',
    notes: '',
  })

  const today = new Date()
  today.setHours(0, 0, 0, 0)

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    
    // Get the day of week for the first day (0 = Sunday, adjust for Monday start)
    let startDay = firstDay.getDay() - 1
    if (startDay < 0) startDay = 6
    
    const days: (number | null)[] = []
    
    // Add empty cells for days before the first day
    for (let i = 0; i < startDay; i++) {
      days.push(null)
    }
    
    // Add the actual days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i)
    }
    
    return days
  }

  const isDateDisabled = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    return date < today
  }

  const isToday = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    return date.toDateString() === today.toDateString()
  }

  const formatSelectedDate = () => {
    if (!reservationData.date) return ''
    const date = new Date(reservationData.date)
    return date.toLocaleDateString('ru-RU', { 
      weekday: 'long', 
      day: 'numeric', 
      month: 'long' 
    })
  }

  const handleDateSelect = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day)
    setReservationData(prev => ({
      ...prev,
      date: date.toISOString().split('T')[0]
    }))
  }

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(prev => prev + 1)
    } else {
      setIsComplete(true)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return reservationData.date && reservationData.time && reservationData.guests > 0
      case 2:
        return reservationData.name && reservationData.phone && reservationData.email
      default:
        return true
    }
  }

  const generateBookingNumber = () => {
    return `BP-${Date.now().toString(36).toUpperCase()}`
  }

  return (
    <>
      <PageHeader>
        <HeaderContainer>
          <PageTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Бронирование Столика
          </PageTitle>
          <PageSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Забронируйте столик за 3 простых шага
          </PageSubtitle>
        </HeaderContainer>
      </PageHeader>

      <ReservationContent>
        <ReservationContainer>
          {!isComplete ? (
            <>
              <ProgressBar>
                {steps.map((step) => (
                  <ProgressStep 
                    key={step.id}
                    $active={currentStep === step.id}
                    $completed={currentStep > step.id}
                  >
                    <StepWrapper>
                      <StepNumber 
                        $active={currentStep === step.id}
                        $completed={currentStep > step.id}
                      >
                        {currentStep > step.id ? <Check size={20} /> : step.id}
                      </StepNumber>
                      <StepLabel $active={currentStep === step.id}>
                        {step.label}
                      </StepLabel>
                    </StepWrapper>
                  </ProgressStep>
                ))}
              </ProgressBar>

              <AnimatePresence mode="wait">
                <FormCard
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentStep === 1 && (
                    <>
                      <FormTitle>Выберите дату и время</FormTitle>
                      
                      <SectionTitle>
                        <Calendar size={20} />
                        Дата
                      </SectionTitle>
                      
                      <CalendarHeader>
                        <CalendarNavButton
                          onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                          disabled={currentMonth.getMonth() === today.getMonth() && currentMonth.getFullYear() === today.getFullYear()}
                        >
                          <ChevronLeft size={20} />
                        </CalendarNavButton>
                        <CalendarMonth>
                          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                        </CalendarMonth>
                        <CalendarNavButton
                          onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                        >
                          <ChevronRight size={20} />
                        </CalendarNavButton>
                      </CalendarHeader>
                      
                      <CalendarGrid>
                        {weekDays.map(day => (
                          <WeekDayLabel key={day}>{day}</WeekDayLabel>
                        ))}
                        {getDaysInMonth(currentMonth).map((day, index) => (
                          <div key={index}>
                            {day && (
                              <DayButton
                                $selected={reservationData.date === new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day).toISOString().split('T')[0]}
                                $disabled={isDateDisabled(day)}
                                $today={isToday(day)}
                                onClick={() => !isDateDisabled(day) && handleDateSelect(day)}
                                disabled={isDateDisabled(day)}
                              >
                                {day}
                              </DayButton>
                            )}
                          </div>
                        ))}
                      </CalendarGrid>

                      <SectionTitle>
                        <Clock size={20} />
                        Время
                      </SectionTitle>
                      
                      <TimeSlotsGrid>
                        {timeSlots.map(time => (
                          <TimeSlot
                            key={time}
                            $selected={reservationData.time === time}
                            $disabled={false}
                            onClick={() => setReservationData(prev => ({ ...prev, time }))}
                          >
                            {time}
                          </TimeSlot>
                        ))}
                      </TimeSlotsGrid>

                      <SectionTitle>
                        <Users size={20} />
                        Количество гостей
                      </SectionTitle>
                      
                      <GuestsSelector>
                        <GuestButton
                          onClick={() => setReservationData(prev => ({ ...prev, guests: Math.max(1, prev.guests - 1) }))}
                          $disabled={reservationData.guests <= 1}
                          disabled={reservationData.guests <= 1}
                        >
                          −
                        </GuestButton>
                        <GuestCount>
                          <span>{reservationData.guests}</span>
                          <small>{reservationData.guests === 1 ? 'гость' : reservationData.guests < 5 ? 'гостя' : 'гостей'}</small>
                        </GuestCount>
                        <GuestButton
                          onClick={() => setReservationData(prev => ({ ...prev, guests: Math.min(8, prev.guests + 1) }))}
                          $disabled={reservationData.guests >= 8}
                          disabled={reservationData.guests >= 8}
                        >
                          +
                        </GuestButton>
                      </GuestsSelector>
                    </>
                  )}

                  {currentStep === 2 && (
                    <>
                      <FormTitle>Введите ваши данные</FormTitle>
                      
                      <FormGrid>
                        <Input
                          label="Имя"
                          placeholder="Ваше имя"
                          value={reservationData.name}
                          onChange={(e) => setReservationData(prev => ({ ...prev, name: e.target.value }))}
                          icon={<User size={20} />}
                        />
                        <Input
                          label="Телефон"
                          placeholder="+7 (___) ___-__-__"
                          value={reservationData.phone}
                          onChange={(e) => setReservationData(prev => ({ ...prev, phone: e.target.value }))}
                          icon={<Phone size={20} />}
                        />
                      </FormGrid>
                      
                      <div style={{ marginBottom: '1.5rem' }}>
                        <Input
                          label="Email"
                          type="email"
                          placeholder="email@example.com"
                          value={reservationData.email}
                          onChange={(e) => setReservationData(prev => ({ ...prev, email: e.target.value }))}
                          icon={<Mail size={20} />}
                        />
                      </div>
                      
                      <Textarea
                        label="Особые пожелания"
                        placeholder="Столик у окна, детский стульчик, аллергии..."
                        value={reservationData.notes}
                        onChange={(e) => setReservationData(prev => ({ ...prev, notes: e.target.value }))}
                      />
                    </>
                  )}

                  {currentStep === 3 && (
                    <>
                      <FormTitle>Подтверждение брони</FormTitle>
                      
                      <ConfirmationCard>
                        <ConfirmationRow>
                          <ConfirmationLabel>Дата</ConfirmationLabel>
                          <ConfirmationValue>{formatSelectedDate()}</ConfirmationValue>
                        </ConfirmationRow>
                        <ConfirmationRow>
                          <ConfirmationLabel>Время</ConfirmationLabel>
                          <ConfirmationValue>{reservationData.time}</ConfirmationValue>
                        </ConfirmationRow>
                        <ConfirmationRow>
                          <ConfirmationLabel>Гостей</ConfirmationLabel>
                          <ConfirmationValue>{reservationData.guests}</ConfirmationValue>
                        </ConfirmationRow>
                        <ConfirmationRow>
                          <ConfirmationLabel>Имя</ConfirmationLabel>
                          <ConfirmationValue>{reservationData.name}</ConfirmationValue>
                        </ConfirmationRow>
                        <ConfirmationRow>
                          <ConfirmationLabel>Телефон</ConfirmationLabel>
                          <ConfirmationValue>{reservationData.phone}</ConfirmationValue>
                        </ConfirmationRow>
                        <ConfirmationRow>
                          <ConfirmationLabel>Email</ConfirmationLabel>
                          <ConfirmationValue>{reservationData.email}</ConfirmationValue>
                        </ConfirmationRow>
                        {reservationData.notes && (
                          <ConfirmationRow>
                            <ConfirmationLabel>Пожелания</ConfirmationLabel>
                            <ConfirmationValue>{reservationData.notes}</ConfirmationValue>
                          </ConfirmationRow>
                        )}
                      </ConfirmationCard>
                    </>
                  )}

                  <FormActions>
                    {currentStep > 1 ? (
                      <ActionButton $variant="secondary" onClick={handlePrevStep}>
                        <ChevronLeft size={18} />
                        Назад
                      </ActionButton>
                    ) : (
                      <div />
                    )}
                    <ActionButton 
                      $variant="primary" 
                      onClick={handleNextStep}
                      disabled={!canProceed()}
                    >
                      {currentStep === 3 ? 'Подтвердить бронь' : 'Далее'}
                      {currentStep < 3 && <ChevronRight size={18} />}
                    </ActionButton>
                  </FormActions>
                </FormCard>
              </AnimatePresence>
            </>
          ) : (
            <FormCard>
              <SuccessWrapper
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <SuccessIcon
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                >
                  <Check size={50} />
                </SuccessIcon>
                <SuccessTitle>Бронь подтверждена!</SuccessTitle>
                <SuccessMessage>
                  Мы отправили детали бронирования на ваш email. 
                  Ждём вас {formatSelectedDate()} в {reservationData.time}!
                </SuccessMessage>
                <BookingNumber>
                  <span>Номер бронирования</span>
                  <strong>{generateBookingNumber()}</strong>
                </BookingNumber>
                <ActionButton as="a" href="/" $variant="primary" style={{ justifyContent: 'center', textDecoration: 'none' }}>
                  Вернуться на главную
                </ActionButton>
              </SuccessWrapper>
            </FormCard>
          )}
        </ReservationContainer>
      </ReservationContent>
    </>
  )
}

