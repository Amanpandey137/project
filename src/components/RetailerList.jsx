import { useState, useEffect, useRef, useCallback } from 'react'
import { useRetailerContext } from '../context/RetailerContext'
import RetailerCard from './RetailerCard'
import Loader from './Loader'
import { MapPin } from 'lucide-react'

const ITEMS_PER_PAGE = 15

const RetailerList = () => {
  const { filteredRetailers, loading } = useRetailerContext()
  const [groupedRetailers, setGroupedRetailers] = useState({})
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE)
  const [loadingMore, setLoadingMore] = useState(false)
  const observerTarget = useRef(null)
  
  // Group retailers by location area
  useEffect(() => {
    const retailers = filteredRetailers.slice(0, displayCount)
    const grouped = retailers.reduce((acc, retailer) => {
      const area = retailer.location.split(',')[0].trim()
      if (!acc[area]) {
        acc[area] = []
      }
      acc[area].push(retailer)
      return acc
    }, {})
    
    setGroupedRetailers(grouped)
  }, [filteredRetailers, displayCount])
  
  // Infinite scroll implementation
  const loadMore = useCallback(() => {
    if (loadingMore || displayCount >= filteredRetailers.length) return
    
    setLoadingMore(true)
    setTimeout(() => {
      setDisplayCount(prev => Math.min(prev + ITEMS_PER_PAGE, filteredRetailers.length))
      setLoadingMore(false)
    }, 500) // Simulate loading delay
  }, [loadingMore, displayCount, filteredRetailers.length])
  
  // Intersection Observer setup
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          loadMore()
        }
      },
      { threshold: 0.1 }
    )
    
    if (observerTarget.current) {
      observer.observe(observerTarget.current)
    }
    
    return () => observer.disconnect()
  }, [loadMore])
  
  if (loading) {
    return <Loader />
  }
  
  if (filteredRetailers.length === 0) {
    return (
      <div className="py-8 text-center">
        <svg 
          className="mx-auto h-12 w-12 text-gray-400"
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor" 
          strokeWidth={1}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <h3 className="mt-2 text-sm font-medium text-gray-900">No retailers found</h3>
        <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria.</p>
      </div>
    )
  }
  
  return (
    <div className="space-y-8">
      {Object.entries(groupedRetailers).map(([area, retailers]) => (
        <div key={area} className="animate-fade-in">
          <div className="sticky top-[50px] z-[5] bg-gray-50 py-2 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 p-2">{area}</h2>
            <p className="text-sm text-gray-500 p-1">{retailers.length} retailers</p>
          </div>
          <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {retailers.map(retailer => (
              <RetailerCard key={retailer.id} retailer={retailer} />
            ))}
          </div>
        </div>
      ))}
      
      {displayCount < filteredRetailers.length && (
        <div
          ref={observerTarget}
          className="flex justify-center py-4"
        >
          {loadingMore && (
            <div className="animate-pulse flex space-x-2">
              <div className="h-2 w-2 bg-gray-500 rounded-full"></div>
              <div className="h-2 w-2 bg-gray-500 rounded-full"></div>
              <div className="h-2 w-2 bg-gray-500 rounded-full"></div>
            </div>
          )}
        </div>
      )}
      
      {displayCount >= filteredRetailers.length && (
        <p className="text-center text-gray-500 py-4">
          <MapPin className='inline text-red-500'/>
       "No more retailers within 50 km."
        </p>
      )}
    </div>
  )
}

export default RetailerList