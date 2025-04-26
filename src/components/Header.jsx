import { useState, useEffect } from 'react'

const Header = () => {
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrolled])
  
  return (
    <header 
      className={`sticky top-0 z-10 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-md py-2' 
          : 'bg-gradient-to-r from-primary-600 to-accent-600 py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <h1 className={`text-2xl md:text-3xl font-bold transition-colors duration-300 ${
            scrolled ? 'text-primary-600' : 'text-white'
          }`}>
            RetailRadar
          </h1>
          <p className={`text-sm md:text-base font-medium transition-colors duration-300 ${
            scrolled ? 'text-gray-600' : 'text-white'
          }`}>
            Find retailers near you
          </p>
        </div>
      </div>
    </header>
  )
}

export default Header