const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-semibold">RetailRadar</h2>
            <p className="text-gray-400 text-sm mt-1">Find retailers near you</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} RetailRadar. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer