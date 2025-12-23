import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Phone, Clock, Navigation, ChevronRight, Star } from 'lucide-react'
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Types
interface Location {
  id: number
  name: string
  address: string
  phone: string
  hours: string
  coordinates: [number, number]
  image: string
  rating: number
}

// Custom marker icons
const createCustomIcon = (isActive: boolean) => {
  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        width: ${isActive ? '50px' : '40px'};
        height: ${isActive ? '50px' : '40px'};
        background: ${isActive 
          ? 'linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%)' 
          : 'linear-gradient(135deg, #C9A86C 0%, #b89a5a 100%)'};
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 8px 25px rgba(74, 44, 52, 0.4);
        position: relative;
        ${isActive ? `
          border: 3px solid #C9A86C;
        ` : ''}
      ">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <circle cx="12" cy="10" r="3"></circle>
          <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 1 0-16 0c0 3 2.7 7 8 11.7z"></path>
        </svg>
        <div style="
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-top: 12px solid ${isActive ? '#5a3545' : '#b89a5a'};
        "></div>
      </div>
    `,
    iconSize: [isActive ? 50 : 40, isActive ? 60 : 50],
    iconAnchor: [isActive ? 25 : 20, isActive ? 60 : 50],
    popupAnchor: [0, -50],
  })
}

// Calculate bounds to fit all locations
const getAllLocationsBounds = (): [[number, number], [number, number]] => {
  const lats = locations.map(l => l.coordinates[0])
  const lngs = locations.map(l => l.coordinates[1])
  return [
    [Math.min(...lats) - 0.02, Math.min(...lngs) - 0.02],
    [Math.max(...lats) + 0.02, Math.max(...lngs) + 0.02]
  ]
}

// Component to fit all locations on initial load and update on selection
const MapController: React.FC<{ 
  selectedLocation: Location | null
  showAll: boolean 
}> = ({ selectedLocation, showAll }) => {
  const map = useMap()
  
  useEffect(() => {
    if (showAll) {
      // Fit all locations on initial load
      const bounds = getAllLocationsBounds()
      map.fitBounds(bounds, { padding: [50, 50], duration: 0.5 })
    }
  }, [map, showAll])
  
  useEffect(() => {
    if (selectedLocation && !showAll) {
      map.flyTo(selectedLocation.coordinates, 15, { duration: 1 })
    }
  }, [selectedLocation, map, showAll])
  
  return null
}

// Page Layout - Creative Design
const PageWrapper = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f5ebe6 0%, #ede3dc 100%);
`

const PageHeader = styled.section`
  padding-top: ${({ theme }) => theme.spacing['5xl']};
  padding-bottom: ${({ theme }) => theme.spacing['3xl']};
  background: 
    linear-gradient(rgba(139, 69, 87, 0.85), rgba(167, 107, 91, 0.85)),
    url('https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=1920') center/cover no-repeat;
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
  
  @media (max-width: 600px) {
    font-size: 36px;
  }
`

const PageSubtitle = styled(motion.p)`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.primary.lighter};
  max-width: 600px;
  margin: 0 auto;
`

// Main Content
const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 0;
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 40px 60px;
  
  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
  
  @media (max-width: 600px) {
    padding: 0 20px 40px;
  }
`

// Locations List
const LocationsPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const LocationCard = styled(motion.div)<{ $active: boolean }>`
  background: ${({ $active }) => $active 
    ? 'linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%)' 
    : 'linear-gradient(145deg, #fff 0%, #faf7f5 100%)'};
  padding: 30px;
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
  
  ${({ $active }) => $active && `
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
  `}
  
  ${({ $active }) => !$active && `
    border: 1px solid rgba(201, 168, 108, 0.2);
    
    &:hover {
      border-color: #C9A86C;
      transform: translateX(10px);
    }
  `}
`

const LocationHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 16px;
`

const LocationName = styled.h3<{ $active: boolean }>`
  font-family: ${({ theme }) => theme.fonts.heading};
  font-size: 24px;
  color: ${({ $active }) => $active ? '#fff' : '#4a2c34'};
  font-weight: 400;
  margin: 0;
`

const LocationRating = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 14px;
  color: ${({ $active }) => $active ? '#C9A86C' : '#C9A86C'};
  
  svg {
    fill: #C9A86C;
  }
`

const LocationInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const LocationInfoItem = styled.div<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 14px;
  color: ${({ $active }) => $active ? 'rgba(255, 255, 255, 0.8)' : '#6b5055'};
  
  svg {
    color: ${({ $active }) => $active ? '#C9A86C' : '#C9A86C'};
    flex-shrink: 0;
  }
`

const DirectionButton = styled.a<{ $active: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  padding: 14px 28px;
  background: ${({ $active }) => $active 
    ? 'linear-gradient(135deg, #C9A86C 0%, #b89a5a 100%)' 
    : 'transparent'};
  border: ${({ $active }) => $active ? 'none' : '2px solid #d4c4bc'};
  color: ${({ $active }) => $active ? '#fff' : '#7a4a5a'};
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(5px);
    ${({ $active }) => $active 
      ? 'box-shadow: 0 6px 20px rgba(201, 168, 108, 0.4);' 
      : 'border-color: #7a4a5a;'}
  }
`

// Map Container - Creative Design
const MapPanel = styled.div`
  position: relative;
  min-height: 600px;
  background: linear-gradient(145deg, #fff 0%, #faf7f5 100%);
  border: 1px solid rgba(201, 168, 108, 0.2);
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    inset: 15px;
    border: 1px solid rgba(201, 168, 108, 0.2);
    pointer-events: none;
    z-index: 1000;
  }
  
  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(245, 230, 220, 0.15) 0%,
      transparent 40%,
      transparent 60%,
      rgba(245, 230, 220, 0.15) 100%
    );
    pointer-events: none;
    z-index: 999;
  }
  
  @media (max-width: 1100px) {
    min-height: 500px;
  }
  
  .leaflet-container {
    width: 100%;
    height: 100%;
    min-height: 600px;
    background: #f5ebe6;
    filter: sepia(25%) saturate(80%) hue-rotate(-5deg) brightness(1.05);
    
    @media (max-width: 1100px) {
      min-height: 500px;
    }
  }
  
  .custom-marker {
    background: transparent !important;
    border: none !important;
  }
  
  .leaflet-popup-content-wrapper {
    background: linear-gradient(145deg, #fff 0%, #faf7f5 100%);
    border: 1px solid rgba(201, 168, 108, 0.3);
    border-radius: 0;
    box-shadow: 0 10px 40px rgba(74, 44, 52, 0.2);
  }
  
  .leaflet-popup-content {
    margin: 16px 20px;
    font-family: 'Inconsolata', monospace;
  }
  
  .leaflet-popup-tip {
    background: #fff;
    border: 1px solid rgba(201, 168, 108, 0.3);
    box-shadow: none;
  }
  
  .leaflet-control-zoom {
    border: none !important;
    box-shadow: 0 4px 15px rgba(74, 44, 52, 0.15) !important;
  }
  
  .leaflet-control-zoom a {
    background: linear-gradient(145deg, #fff 0%, #faf7f5 100%) !important;
    color: #7a4a5a !important;
    border: 1px solid rgba(201, 168, 108, 0.3) !important;
    
    &:hover {
      background: #7a4a5a !important;
      color: #fff !important;
    }
  }
`

const MapLegend = styled.div`
  position: absolute;
  bottom: 30px;
  left: 30px;
  background: linear-gradient(145deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 247, 245, 0.95) 100%);
  padding: 20px 25px;
  border: 1px solid rgba(201, 168, 108, 0.3);
  z-index: 1000;
  backdrop-filter: blur(10px);
  
  h5 {
    font-family: ${({ theme }) => theme.fonts.heading};
    font-size: 14px;
    color: #4a2c34;
    margin-bottom: 12px;
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
`

const LegendItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: ${({ theme }) => theme.fonts.body};
  font-size: 12px;
  color: #6b5055;
  margin-bottom: 8px;
  
  &:last-child {
    margin-bottom: 0;
  }
`

const LegendDot = styled.div<{ $type: 'active' | 'default' }>`
  width: 14px;
  height: 14px;
  background: ${({ $type }) => $type === 'active' 
    ? 'linear-gradient(135deg, #7a4a5a 0%, #5a3545 100%)'
    : 'linear-gradient(135deg, #C9A86C 0%, #b89a5a 100%)'};
`

const PopupContent = styled.div`
  h4 {
    font-family: 'IM Fell English', Georgia, serif;
    font-size: 16px;
    font-weight: 400;
    color: #4a2c34;
    margin: 0 0 8px 0;
  }
  
  p {
    font-family: 'Inconsolata', monospace;
    font-size: 13px;
    color: #8b6b6b;
    margin: 0;
  }
`

// Sample data
const locations: Location[] = [
  {
    id: 1,
    name: 'Socials Арбат',
    address: 'г. Москва, ул. Арбат, д. 10',
    phone: '+7 (495) 123-45-67',
    hours: 'Ежедневно: 09:00 — 22:00',
    coordinates: [55.7520, 37.5873],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600',
    rating: 4.9
  },
  {
    id: 2,
    name: 'Socials Тверская',
    address: 'г. Москва, ул. Тверская, д. 25',
    phone: '+7 (495) 234-56-78',
    hours: 'Ежедневно: 08:00 — 23:00',
    coordinates: [55.7648, 37.6046],
    image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=600',
    rating: 4.8
  },
  {
    id: 3,
    name: 'Socials Патриаршие',
    address: 'г. Москва, Патриаршие пруды, д. 5',
    phone: '+7 (495) 345-67-89',
    hours: 'Ежедневно: 10:00 — 21:00',
    coordinates: [55.7640, 37.5911],
    image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600',
    rating: 4.9
  },
  {
    id: 4,
    name: 'Socials Кузнецкий',
    address: 'г. Москва, ул. Кузнецкий мост, д. 3',
    phone: '+7 (495) 456-78-90',
    hours: 'Пн-Сб: 09:00 — 22:00',
    coordinates: [55.7605, 37.6214],
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=600',
    rating: 4.7
  },
]

export const Locations: React.FC = () => {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)
  const [showAllLocations, setShowAllLocations] = useState(true)

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location)
    setShowAllLocations(false)
  }

  const getGoogleMapsUrl = (location: Location) => {
    return `https://www.google.com/maps/dir/?api=1&destination=${location.coordinates[0]},${location.coordinates[1]}`
  }

  return (
    <PageWrapper>
      <PageHeader>
        <HeaderContainer>
          <PageTitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Наши Филиалы
          </PageTitle>
          <PageSubtitle
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Выберите ближайшую кондитерскую для посещения
          </PageSubtitle>
        </HeaderContainer>
      </PageHeader>

      <ContentWrapper>
        <LocationsPanel>
          {locations.map((location, index) => (
            <LocationCard
              key={location.id}
              $active={selectedLocation?.id === location.id}
              onClick={() => handleLocationSelect(location)}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <LocationHeader>
                <LocationName $active={selectedLocation?.id === location.id}>
                  {location.name}
                </LocationName>
                <LocationRating $active={selectedLocation?.id === location.id}>
                  <Star size={14} />
                  {location.rating}
                </LocationRating>
              </LocationHeader>
              
              <LocationInfo>
                <LocationInfoItem $active={selectedLocation?.id === location.id}>
                  <MapPin size={16} />
                  <span>{location.address}</span>
                </LocationInfoItem>
                <LocationInfoItem $active={selectedLocation?.id === location.id}>
                  <Phone size={16} />
                  <span>{location.phone}</span>
                </LocationInfoItem>
                <LocationInfoItem $active={selectedLocation?.id === location.id}>
                  <Clock size={16} />
                  <span>{location.hours}</span>
                </LocationInfoItem>
              </LocationInfo>
              
              <AnimatePresence>
                {selectedLocation?.id === location.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    <DirectionButton 
                      $active={true}
                      href={getGoogleMapsUrl(location)}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Navigation size={16} />
                      Проложить маршрут
                      <ChevronRight size={16} />
                    </DirectionButton>
                  </motion.div>
                )}
              </AnimatePresence>
            </LocationCard>
          ))}
        </LocationsPanel>

        <MapPanel>
          <MapContainer
            center={[55.7600, 37.6000]}
            zoom={12}
            scrollWheelZoom={true}
            style={{ height: '100%', width: '100%' }}
          >
            {/* Stadia Alidade Smooth - elegant, muted colors */}
            <TileLayer
              attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a>'
              url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
            />
            
            <MapController 
              selectedLocation={selectedLocation} 
              showAll={showAllLocations}
            />
            
            {locations.map((location) => (
              <Marker
                key={location.id}
                position={location.coordinates}
                icon={createCustomIcon(selectedLocation?.id === location.id)}
                eventHandlers={{
                  click: () => handleLocationSelect(location),
                }}
              >
                <Popup>
                  <PopupContent>
                    <h4>{location.name}</h4>
                    <p>{location.address}</p>
                  </PopupContent>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
          
          <MapLegend>
            <h5>Легенда</h5>
            <LegendItem>
              <LegendDot $type="active" />
              <span>Выбранный филиал</span>
            </LegendItem>
            <LegendItem>
              <LegendDot $type="default" />
              <span>Другие филиалы</span>
            </LegendItem>
          </MapLegend>
        </MapPanel>
      </ContentWrapper>
    </PageWrapper>
  )
}
