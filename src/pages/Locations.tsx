import React, { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { motion, useScroll, useTransform } from 'framer-motion'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Elegant minimal marker - "S" monogram style
const createLogoIcon = (isActive: boolean) => L.divIcon({
  className: 'custom-logo-marker',
  html: `
    <div style="
      width: 36px;
      height: 46px;
      position: relative;
    ">
      <!-- Elegant rounded square with S -->
      <div style="
        width: 36px;
        height: 36px;
        background: ${isActive ? 'linear-gradient(135deg, #C9A87C 0%, #B8956A 100%)' : 'linear-gradient(135deg, #1A1A1A 0%, #0A0A0A 100%)'};
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 6px 18px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1);
        position: relative;
        transform: rotate(-8deg);
      ">
        <!-- Letter S -->
        <span style="
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 20px;
          font-weight: 300;
          font-style: italic;
          color: ${isActive ? '#0A0A0A' : '#C9A87C'};
          transform: rotate(8deg);
          text-shadow: 0 1px 2px rgba(0,0,0,0.2);
        ">S</span>
        
        <!-- Shine -->
        <div style="
          position: absolute;
          top: 3px;
          left: 3px;
          right: 50%;
          bottom: 50%;
          background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 100%);
          border-radius: 7px 3px 7px 3px;
        "></div>
      </div>
      
      <!-- Bottom pointer -->
      <div style="
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 10px;
        height: 10px;
        background: ${isActive ? '#B8956A' : '#0A0A0A'};
        clip-path: polygon(50% 100%, 0 0, 100% 0);
      "></div>
      
      ${isActive ? `
        <!-- Active ring -->
        <div style="
          position: absolute;
          top: -5px;
          left: -5px;
          width: 46px;
          height: 46px;
          border: 2px solid #C9A87C;
          border-radius: 14px;
          transform: rotate(-8deg);
          animation: pulse 2s ease-out infinite;
        "></div>
      ` : ''}
    </div>
  `,
  iconSize: [36, 46],
  iconAnchor: [18, 46],
  popupAnchor: [0, -42],
})

// Component to fit bounds
const FitBounds: React.FC<{ locations: Location[] }> = ({ locations }) => {
  const map = useMap()
  
  useEffect(() => {
    if (locations.length > 0) {
      const bounds = L.latLngBounds(locations.map(loc => [loc.lat, loc.lng]))
      map.fitBounds(bounds, { padding: [80, 80], maxZoom: 13 })
    }
  }, [map, locations])
  
  return null
}

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

// ============ MAIN SECTION ============
const MainSection = styled.section`
  display: grid;
  grid-template-columns: 450px 1fr;
  min-height: 70vh;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`

const LocationsList = styled.div`
  background: ${({ theme }) => theme.colors.background.cream};
  padding: ${({ theme }) => theme.spacing['3xl']};
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => theme.spacing['2xl']};
  }
`

const LocationCard = styled(motion.div)<{ $active: boolean }>`
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ $active, theme }) => $active ? theme.colors.dark.main : theme.colors.background.primary};
  color: ${({ $active, theme }) => $active ? theme.colors.text.white : theme.colors.text.primary};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.lg};
  border: 1px solid ${({ $active, theme }) => $active ? theme.colors.primary.accent : 'transparent'};
  
  &:hover {
    background: ${({ $active, theme }) => $active ? theme.colors.dark.main : theme.colors.background.secondary};
    transform: translateX(4px);
  }
`

const LocationIcon = styled.a<{ $active: boolean }>`
  width: 44px;
  height: 44px;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background: ${({ $active, theme }) => $active ? theme.colors.primary.accent : theme.colors.background.cream};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;
  text-decoration: none;
  
  span {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 18px;
    font-style: italic;
    color: ${({ $active, theme }) => $active ? theme.colors.dark.main : theme.colors.primary.accent};
    transition: all 0.3s ease;
  }
  
  &:hover {
    transform: scale(1.08);
    box-shadow: 0 4px 15px rgba(201, 168, 124, 0.4);
  }
`

const LocationInfo = styled.div`
  flex: 1;
  min-width: 0;
`

const LocationHeader = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: 4px;
`

const LocationName = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const LocationBadge = styled.span`
  font-size: 8px;
  padding: 2px 6px;
  background: ${({ theme }) => theme.colors.primary.accent};
  color: ${({ theme }) => theme.colors.dark.main};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  flex-shrink: 0;
`

const LocationAddress = styled.p<{ $active: boolean }>`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ $active, theme }) => $active ? theme.colors.text.cream : theme.colors.text.light};
  opacity: 0.8;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const LocationMeta = styled.div<{ $active: boolean }>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: 6px;
  font-size: 11px;
  color: ${({ $active, theme }) => $active ? theme.colors.text.cream : theme.colors.text.muted};
  
  span {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`

const LocationArrow = styled.div<{ $active: boolean }>`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ $active, theme }) => $active ? theme.colors.primary.accent : theme.colors.text.muted};
  font-size: 18px;
  flex-shrink: 0;
  transition: all 0.3s ease;
`

const MapPanel = styled.div`
  position: relative;
  z-index: 1; /* Keep below navigation */
  
  .leaflet-container {
    height: 100%;
    width: 100%;
    min-height: 500px;
    z-index: 1 !important; /* Override Leaflet's default z-index */
  }
  
  /* Custom marker animation */
  @keyframes pulse {
    0% { transform: scale(1); opacity: 1; }
    100% { transform: scale(1.8); opacity: 0; }
  }
  
  .custom-logo-marker {
    background: transparent !important;
    border: none !important;
  }
  
  /* Custom map styling */
  .leaflet-control-zoom {
    border: none !important;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15) !important;
    border-radius: 12px !important;
    overflow: hidden;
  }
  
  .leaflet-control-zoom-in,
  .leaflet-control-zoom-out {
    background: ${({ theme }) => theme.colors.dark.main} !important;
    color: ${({ theme }) => theme.colors.text.white} !important;
    border: none !important;
    width: 36px !important;
    height: 36px !important;
    line-height: 36px !important;
    font-size: 18px !important;
    
    &:hover {
      background: ${({ theme }) => theme.colors.primary.accent} !important;
      color: ${({ theme }) => theme.colors.dark.main} !important;
    }
  }
  
  .leaflet-popup-content-wrapper {
    background: ${({ theme }) => theme.colors.dark.main};
    color: ${({ theme }) => theme.colors.text.white};
    border-radius: 12px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    padding: 8px;
  }
  
  .leaflet-popup-content {
    margin: 12px 16px;
    font-family: inherit;
    
    strong {
      color: ${({ theme }) => theme.colors.primary.accent};
      font-size: 14px;
      display: block;
      margin-bottom: 4px;
    }
  }
  
  .leaflet-popup-tip {
    background: ${({ theme }) => theme.colors.dark.main};
  }
  
  .leaflet-popup-close-button {
    color: ${({ theme }) => theme.colors.text.cream} !important;
    
    &:hover {
      color: ${({ theme }) => theme.colors.primary.accent} !important;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.desktop}) {
    min-height: 400px;
    .leaflet-container { min-height: 400px; }
  }
`

// ============ DELIVERY ============
const DeliverySection = styled.section`
  background: ${({ theme }) => theme.colors.dark.main};
  padding: ${({ theme }) => `${theme.spacing['4xl']} ${theme.spacing['3xl']}`};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: ${({ theme }) => `${theme.spacing['3xl']} ${theme.spacing.xl}`};
  }
`

const DeliveryContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`

const DeliveryTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['3xl']};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  color: ${({ theme }) => theme.colors.text.white};
  margin-bottom: ${({ theme }) => theme.spacing['2xl']};
  
  span { font-style: italic; color: ${({ theme }) => theme.colors.primary.accent}; }
`

const DeliveryGrid = styled.div`
  display: flex;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xl};
  flex-wrap: wrap;
`

const DeliveryItem = styled(motion.a)`
  padding: ${({ theme }) => `${theme.spacing.lg} ${theme.spacing['2xl']}`};
  border: 1px solid ${({ theme }) => theme.colors.dividerLight};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  color: ${({ theme }) => theme.colors.text.cream};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background: ${({ theme }) => theme.colors.primary.main};
    border-color: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.dark.main};
    transform: scale(1.05);
  }
`

// ============ COMPONENT ============
interface Location {
  id: number
  name: string
  address: string
  hours: string
  phone: string
  lat: number
  lng: number
  flagship?: boolean
}

const Locations: React.FC = () => {
  const locations: Location[] = [
    { id: 1, name: 'Socials Шевченко', address: 'ул. Тараса Шевченко 36А, Ташкент', hours: '08:00 - 23:00', phone: '+998 99 901 44 33', lat: 41.311081, lng: 69.279737, flagship: true },
    { id: 2, name: 'Socials Мирзо Улугбек', address: 'ул. Мирзо Улугбека 15, Ташкент', hours: '08:00 - 22:00', phone: '+998 99 901 44 34', lat: 41.338540, lng: 69.334890 },
  ]
  
  const [activeLocation, setActiveLocation] = useState(locations[0])
  
  // Parallax
  const heroRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150])
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  
  return (
    <>
      <HeroSection ref={heroRef}>
        <HeroMedia style={{ y: heroY, scale: heroScale }}>
          <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&q=80" alt="" />
        </HeroMedia>
        <HeroContent
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <HeroTitle>Найдите <span>нас</span></HeroTitle>
        </HeroContent>
      </HeroSection>
      
      <MainSection>
        <LocationsList>
          {locations.map((location, i) => (
            <LocationCard
              key={location.id}
              $active={activeLocation.id === location.id}
              onClick={() => setActiveLocation(location)}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <LocationIcon 
                $active={activeLocation.id === location.id}
                href={`https://maps.google.com/maps/dir/?api=1&destination=${location.lat},${location.lng}`}
                target="_blank"
                onClick={(e) => e.stopPropagation()}
                title="Построить маршрут"
              >
                <span>S</span>
              </LocationIcon>
              
              <LocationInfo>
                <LocationHeader>
                  <LocationName>{location.name}</LocationName>
                  {location.flagship && <LocationBadge>★</LocationBadge>}
                </LocationHeader>
                <LocationAddress $active={activeLocation.id === location.id}>
                  {location.address}
                </LocationAddress>
                <LocationMeta $active={activeLocation.id === location.id}>
                  <span>🕐 {location.hours}</span>
                  <span>📞 {location.phone}</span>
                </LocationMeta>
              </LocationInfo>
              
              <LocationArrow $active={activeLocation.id === location.id}>
                →
              </LocationArrow>
            </LocationCard>
          ))}
        </LocationsList>
        
        <MapPanel>
          <MapContainer 
            center={[41.32, 69.30]} 
            zoom={12} 
            scrollWheelZoom={false}
            zoomControl={true}
          >
            <FitBounds locations={locations} />
            <TileLayer
              attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
            />
            {locations.map(loc => (
              <Marker 
                key={loc.id} 
                position={[loc.lat, loc.lng]} 
                icon={createLogoIcon(activeLocation.id === loc.id)}
                eventHandlers={{
                  click: () => setActiveLocation(loc)
                }}
              >
                <Popup>
                  <strong>{loc.name}</strong>
                  <br />
                  {loc.address}
                  <br />
                  <span style={{ opacity: 0.7, fontSize: '12px' }}>🕐 {loc.hours}</span>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </MapPanel>
      </MainSection>
      
      <DeliverySection>
        <DeliveryContainer>
          <DeliveryTitle>Заказать <span>доставку</span></DeliveryTitle>
          <DeliveryGrid>
            {['Wolt', 'Yandex Eats', 'Express24'].map((service, i) => (
              <DeliveryItem
                key={service}
                href="#"
                target="_blank"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                {service}
              </DeliveryItem>
            ))}
          </DeliveryGrid>
        </DeliveryContainer>
      </DeliverySection>
    </>
  )
}

export default Locations
