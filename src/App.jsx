import { useEffect } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import CategoryFilter from './components/CategoryFilter'
import RetailerList from './components/RetailerList'
import Footer from './components/Footer'
import { useRetailerContext } from './context/RetailerContext'
import { useGeolocation } from './hooks/useGeolocation'
import { MapPin } from 'lucide-react'

function App() {
  const { setRetailers, retailers } = useRetailerContext()
  const { location, error: geoError, getLocation } = useGeolocation()

  useEffect(() => {
    // Update retailers based on geolocation when available
    if (location && retailers.length > 0) {
      const updatedRetailers = sortRetailersByDistance(retailers, location)
      setRetailers(updatedRetailers)
    }
  }, [location, retailers, setRetailers])

 

  const sortRetailersByDistance = (retailers, userLocation) => {
    return [...retailers]
      .map(retailer => {
        const distance = calculateDistance(
          userLocation.latitude,
          userLocation.longitude,
          retailer.coordinates.latitude,
          retailer.coordinates.longitude
        );
        return { ...retailer, distance };
      })
      .filter(retailer => retailer.distance <= 50)  
      .sort((a, b) => a.distance - b.distance);  
  };
  

  // Haversine formula to calculate distance between two points
  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371  
    const dLat = (lat2 - lat1) * Math.PI / 180
    const dLon = (lon2 - lon1) * Math.PI / 180
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a))
    return R * c  
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container-custom py-6">
        <div className="bg-white rounded-lg shadow-md p-4 mb-6">
          <SearchBar />
          <div className="mt-4">
            <CategoryFilter />
          </div>
          {!location && (
            <button 
              onClick={getLocation}
              className="mt-4 btn btn-outline flex items-center justify-center w-full md:w-auto"
            >
              <span><MapPin className='inline text-red-500'/> Use my location</span>
            </button>
          )}
          {geoError && (
            <p className="mt-2 text-sm text-error-500">{geoError}</p>
          )}
        </div>
        <RetailerList />
      </main>
      <Footer />
    </div>
  )
}

export default App