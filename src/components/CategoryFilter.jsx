import { useRetailerContext } from '../context/RetailerContext'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const CategoryFilter = () => {
  const { 
    allCategories, 
    selectedCategory, 
    setSelectedCategory,
    clearFilters 
  } = useRetailerContext()
  
  // Category color mapping
  const categoryColors = {
    'Grocery': 'bg-green-100 text-green-800',
    'Pharmacy': 'bg-blue-100 text-blue-800',
    'Electronics': 'bg-purple-100 text-purple-800',
    'Fashion': 'bg-pink-100 text-pink-800',
    'Home': 'bg-yellow-100 text-yellow-800',
    'Restaurant': 'bg-red-100 text-red-800',
    'Beauty': 'bg-indigo-100 text-indigo-800',
    // Default color
    'default': 'bg-gray-100 text-gray-800'
  }
  
  const getCategoryColor = (category) => {
    return categoryColors[category] || categoryColors.default
  }
  
  return (
    <div>
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-medium text-gray-700">Categories:</span>
        
        <button
          className={`category-chip ${
            selectedCategory === '' 
              ? 'bg-primary-100 text-primary-800 border border-primary-300' 
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          }`}
          onClick={() => setSelectedCategory('')}
        >
          All
        </button>
        
        <TransitionGroup className="flex flex-wrap gap-2">
          {allCategories.map(category => (
            <CSSTransition
              key={category}
              timeout={300}
              classNames="category-fade"
            >
              <button
                className={`category-chip ${
                  selectedCategory === category 
                    ? `${getCategoryColor(category)} border border-current` 
                    : `${getCategoryColor(category)} opacity-70 hover:opacity-100`
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            </CSSTransition>
          ))}
        </TransitionGroup>
        
        {(selectedCategory) && (
          <button
            onClick={clearFilters}
            className="text-sm text-primary-600 hover:text-primary-700 ml-2"
            aria-label="Clear filters"
          >
            Clear filters
          </button>
        )}
      </div>
    </div>
  )
}

export default CategoryFilter