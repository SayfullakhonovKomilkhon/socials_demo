import { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Send, Instagram, MessageCircle } from 'lucide-react'

// Page Header with Background Image
const PageHeader = styled.section`
  padding-top: ${({ theme }) => theme.spacing['5xl']};
  padding-bottom: ${({ theme }) => theme.spacing['3xl']};
  background: 
    linear-gradient(rgba(139, 69, 87, 0.85), rgba(167, 107, 91, 0.85)),
    url('https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920') center/cover no-repeat;
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

// Page Content
const PageWrapper = styled.div`
  background: linear-gradient(135deg, #f5ebe6 0%, #ede3dc 100%);
  padding: 80px 40px;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`

const ContentContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 60px;
  
  h2 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 42px;
    color: #4a2c34;
    font-weight: 400;
    margin-bottom: 15px;
    
    span {
      color: #C9A86C;
    }
  }
  
  &::after {
    content: '✦ ✦ ✦';
    display: block;
    font-size: 12px;
    color: #C9A86C;
    letter-spacing: 8px;
    margin-top: 20px;
  }
`

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 50px;
  
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

// Contact Info Cards
const ContactInfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const ContactCard = styled(motion.div)`
  background: linear-gradient(145deg, #fff 0%, #faf7f5 100%);
  padding: 30px;
  display: flex;
  align-items: flex-start;
  gap: 24px;
  border: 1px solid rgba(201, 168, 108, 0.2);
  position: relative;
  transition: all 0.4s ease;
  
  &:hover {
    border-color: #C9A86C;
    transform: translateX(10px);
    
    &::before,
    &::after {
      opacity: 1;
    }
  }
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 10px;
    height: 10px;
    border: 2px solid #C9A86C;
    opacity: 0;
    transition: opacity 0.3s ease;
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
`

const ContactIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-shrink: 0;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: 3px;
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`

const ContactDetails = styled.div`
  flex: 1;
  
  h4 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 20px;
    color: #4a2c34;
    margin-bottom: 10px;
    font-weight: 400;
  }
  
  p {
    font-family: ${({ theme }) => theme.fonts.body};
    font-size: 15px;
    color: #6b5055;
    line-height: 1.7;
    margin: 0;
  }
  
  a {
    color: #7a4a5a;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #C9A86C;
    }
  }
`

// Social Links
const SocialSection = styled.div`
  margin-top: 20px;
  padding-top: 30px;
  border-top: 1px solid rgba(201, 168, 108, 0.2);
`

const SocialTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 18px;
  color: #4a2c34;
  font-weight: 400;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 12px;
  
  &::before,
  &::after {
    content: '◆';
    font-size: 8px;
    color: #C9A86C;
  }
`

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
`

const SocialLink = styled(motion.a)`
  width: 55px;
  height: 55px;
  background: linear-gradient(135deg, #C9A86C 0%, #b89a5a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  position: relative;
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    inset: 3px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(201, 168, 108, 0.4);
    
    &::before {
      inset: 5px;
    }
  }
`

// Contact Form
const FormSection = styled(motion.div)`
  background: linear-gradient(145deg, #fff 0%, #faf7f5 100%);
  padding: 50px;
  border: 1px solid rgba(201, 168, 108, 0.2);
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 20px;
    height: 20px;
    border: 2px solid #C9A86C;
  }
  
  &::before {
    top: -10px;
    left: -10px;
    border-right: none;
    border-bottom: none;
  }
  
  &::after {
    bottom: -10px;
    right: -10px;
    border-left: none;
    border-top: none;
  }
  
  @media (max-width: 600px) {
    padding: 30px;
  }
`

const FormTitle = styled.h3`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 32px;
  color: #4a2c34;
  font-weight: 400;
  margin-bottom: 10px;
  text-align: center;
  
  span {
    color: #C9A86C;
  }
`

const FormSubtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 14px;
  color: #8b6b6b;
  text-align: center;
  margin-bottom: 35px;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const Label = styled.label`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 12px;
  color: #7a4a5a;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  display: flex;
  align-items: center;
  gap: 8px;
  
  &::before {
    content: '◆';
    font-size: 6px;
    color: #C9A86C;
  }
`

const Input = styled.input`
  padding: 16px 20px;
  border: 2px solid #d4c4bc;
  background: transparent;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 15px;
  color: #4a2c34;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #7a4a5a;
    background: rgba(255, 255, 255, 0.5);
  }
  
  &::placeholder {
    color: #a08080;
    font-style: italic;
  }
`

const Textarea = styled.textarea`
  padding: 16px 20px;
  border: 2px solid #d4c4bc;
  background: transparent;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 15px;
  color: #4a2c34;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: #7a4a5a;
    background: rgba(255, 255, 255, 0.5);
  }
  
  &::placeholder {
    color: #a08080;
    font-style: italic;
  }
`

const SubmitButton = styled.button`
  padding: 20px 50px;
  background: linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%);
  border: none;
  color: #fff;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 14px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  cursor: pointer;
  transition: all 0.4s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  position: relative;
  overflow: hidden;
  margin-top: 10px;
  
  &::before {
    content: '';
    position: absolute;
    inset: 4px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.3s ease;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(122, 74, 90, 0.35);
    
    &::before {
      inset: 6px;
    }
    
    &::after {
      left: 100%;
    }
  }
`

// Success Message
const SuccessMessage = styled(motion.div)`
  text-align: center;
  padding: 50px 30px;
`

const SuccessIcon = styled(motion.div)`
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%);
  margin: 0 auto 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 40px;
  position: relative;
  
  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    border: 2px solid #C9A86C;
  }
  
  &::before {
    top: -6px;
    left: -6px;
    border-right: none;
    border-bottom: none;
  }
  
  &::after {
    bottom: -6px;
    right: -6px;
    border-left: none;
    border-top: none;
  }
`

const SuccessTitle = styled.h4`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 28px;
  color: #4a2c34;
  font-weight: 400;
  margin-bottom: 15px;
`

const SuccessText = styled.p`
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 16px;
  color: #6b5055;
  line-height: 1.7;
`

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
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
            Контакты
          </PageTitle>
          <PageSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Свяжитесь с нами любым удобным способом
          </PageSubtitle>
        </HeaderContainer>
      </PageHeader>

      <PageWrapper>
        <ContentContainer>
          <SectionTitle>
            <h2>Свяжитесь с <span>нами</span></h2>
          </SectionTitle>
          
          <ContactGrid>
            <ContactInfoSection>
              <ContactCard
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <ContactIcon>
                  <MapPin size={26} />
                </ContactIcon>
                <ContactDetails>
                  <h4>Главный офис</h4>
                  <p>
                    г. Москва, ул. Арбат, д. 10<br />
                    Ежедневно: 09:00 — 22:00
                  </p>
                </ContactDetails>
              </ContactCard>
              
              <ContactCard
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <ContactIcon>
                  <Phone size={26} />
                </ContactIcon>
                <ContactDetails>
                  <h4>Телефоны</h4>
                  <p>
                    <a href="tel:+74951234567">+7 (495) 123-45-67</a><br />
                    <a href="tel:+74959876543">+7 (495) 987-65-43</a>
                  </p>
                </ContactDetails>
              </ContactCard>
              
              <ContactCard
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <ContactIcon>
                  <Mail size={26} />
                </ContactIcon>
                <ContactDetails>
                  <h4>Email</h4>
                  <p>
                    <a href="mailto:info@bellepatisserie.ru">info@bellepatisserie.ru</a><br />
                    <a href="mailto:order@bellepatisserie.ru">order@bellepatisserie.ru</a>
                  </p>
                </ContactDetails>
              </ContactCard>
              
              <ContactCard
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <ContactIcon>
                  <Clock size={26} />
                </ContactIcon>
                <ContactDetails>
                  <h4>Часы работы</h4>
                  <p>
                    Пн-Пт: 08:00 — 22:00<br />
                    Сб-Вс: 09:00 — 21:00
                  </p>
                </ContactDetails>
              </ContactCard>
              
              <SocialSection>
                <SocialTitle>Мы в соцсетях</SocialTitle>
                <SocialLinks>
                  <SocialLink 
                    href="https://instagram.com" 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Instagram size={24} />
                  </SocialLink>
                  <SocialLink 
                    href="https://t.me" 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Send size={24} />
                  </SocialLink>
                  <SocialLink 
                    href="https://wa.me" 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle size={24} />
                  </SocialLink>
                </SocialLinks>
              </SocialSection>
            </ContactInfoSection>

            <FormSection
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {!isSubmitted ? (
                <>
                  <FormTitle>Напишите <span>нам</span></FormTitle>
                  <FormSubtitle>Мы ответим в течение 24 часов</FormSubtitle>
                  
                  <Form onSubmit={handleSubmit}>
                    <FormRow>
                      <FormGroup>
                        <Label>Ваше имя</Label>
                        <Input
                          type="text"
                          name="name"
                          placeholder="Как вас зовут?"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label>Email</Label>
                        <Input
                          type="email"
                          name="email"
                          placeholder="email@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </FormGroup>
                    </FormRow>
                    
                    <FormRow>
                      <FormGroup>
                        <Label>Телефон</Label>
                        <Input
                          type="tel"
                          name="phone"
                          placeholder="+7 (___) ___-__-__"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <Label>Тема</Label>
                        <Input
                          type="text"
                          name="subject"
                          placeholder="О чём хотите спросить?"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </FormGroup>
                    </FormRow>
                    
                    <FormGroup>
                      <Label>Сообщение</Label>
                      <Textarea
                        name="message"
                        placeholder="Ваше сообщение..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </FormGroup>
                    
                    <SubmitButton type="submit">
                      <Send size={18} />
                      Отправить сообщение
                    </SubmitButton>
                  </Form>
                </>
              ) : (
                <SuccessMessage
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <SuccessIcon
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: 'spring' }}
                  >
                    ✓
                  </SuccessIcon>
                  <SuccessTitle>Сообщение отправлено!</SuccessTitle>
                  <SuccessText>
                    Спасибо за обращение! Мы свяжемся с вами в ближайшее время.
                  </SuccessText>
                </SuccessMessage>
              )}
            </FormSection>
          </ContactGrid>
        </ContentContainer>
      </PageWrapper>
    </>
  )
}
