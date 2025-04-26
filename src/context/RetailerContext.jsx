import { createContext, useContext, useState, useEffect } from 'react'
import mockRetailers from '../data/retailers'

const RetailerContext = createContext()

export const useRetailerContext = () => {
  const context = useContext(RetailerContext)
  if (!context) {
    throw new Error('useRetailerContext must be used within a RetailerProvider')
  }
  return context
}

export const RetailerProvider = ({ children }) => {
  const [retailers, setRetailers] = useState([])
  const [filteredRetailers, setFilteredRetailers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [loading, setLoading] = useState(true)
  
  // Get all available categories from retailers
  const allCategories = [...new Set(retailers.map(retailer => retailer.category))]
  
  // Load mock data
  useEffect(() => {
    // Simulate API call with timeout
    const timer = setTimeout(() => {
      setRetailers(mockRetailers)
      setFilteredRetailers(mockRetailers)
      setLoading(false)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])
  
  // Filter retailers based on search term and selected category
  useEffect(() => {
    let results = retailers
    
    if (searchTerm) {
      results = results.filter(retailer => 
        retailer.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }
    
    if (selectedCategory) {
      results = results.filter(retailer => 
        retailer.category === selectedCategory
      )
    }
    
    setFilteredRetailers(results)
  }, [searchTerm, selectedCategory, retailers])
  
  const clearFilters = () => {
    setSearchTerm('')
    setSelectedCategory('')
  }
  
  const value = {
    retailers,
    setRetailers,
    filteredRetailers,
    searchTerm,
    setSearchTerm,
    selectedCategory,
    setSelectedCategory,
    allCategories,
    clearFilters,
    loading
  }
  
  return (
    <RetailerContext.Provider value={value}>
      {children}
    </RetailerContext.Provider>
  )
}