import { memo } from 'react'

const RetailerCard = ({ retailer }) => {
  const { name, category, location, phone, distance } = retailer
  
  // Category color and icon mapping
  const categoryConfig = {
    'Grocery': {
      bgColor: 'bg-green-100',
      textColor: 'text-green-800',
      icon: '🛒'
    },
    'Pharmacy': {
      bgColor: 'bg-blue-100',
      textColor: 'text-blue-800',
      icon: '💊'
    },
    'Electronics': {
      bgColor: 'bg-purple-100',
      textColor: 'text-purple-800',
      icon: '🔌'
    },
    'Fashion': {
      bgColor: 'bg-pink-100',
      textColor: 'text-pink-800',
      icon: '👕'
    },
    'Home': {
      bgColor: 'bg-yellow-100',
      textColor: 'text-yellow-800',
      icon: '🏠'
    },
    'Restaurant': {
      bgColor: 'bg-red-100',
      textColor: 'text-red-800',
      icon: '🍽️'
    },
    'Beauty': {
      bgColor: 'bg-indigo-100',
      textColor: 'text-indigo-800',
      icon: '💅'
    },
    // Default
    'default': {
      bgColor: 'bg-gray-100',
      textColor: 'text-gray-800',
      icon: '🏪'
    }
  }
  
  const config = categoryConfig[category] || categoryConfig.default
  
  const openWhatsApp = () => {
    const phoneNumberClean = phone.replace(/[^0-9]/g, '')
    const whatsappUrl = `https://wa.me/${phoneNumberClean}?text=Hi`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }
  
  return (
    <div className="retailer-card animate-fade-in">
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <div className="flex items-center mt-1">
              <span className={`inline-flex items-center ${config.bgColor} ${config.textColor} px-2 py-0.5 rounded text-xs font-medium`}>
                {config.icon} {category}
              </span>
              
              {distance && (
                <span className="text-xs text-gray-500 ml-2">
                  {distance < 1 
                    ? `${Math.round(distance * 1000)} m` 
                    : `${distance.toFixed(1)} km`}
                </span>
              )}
            </div>
          </div>
          <button 
            onClick={openWhatsApp}
            className="bg-[#25D366] text-white p-2 rounded-full hover:bg-[#128C7E] transition-colors"
            aria-label="Contact via WhatsApp"
          >
            <svg 
              className="w-5 h-5" 
              fill="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"></path>
            </svg>
          </button>
        </div>
        
        <div className="mt-3 flex items-start">
          <svg 
            className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <p className="ml-2 text-gray-600 text-sm">{location}</p>
        </div>
      </div>
    </div>
  )
}

// Memo to prevent unnecessary re-renders
export default memo(RetailerCard)