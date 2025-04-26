const Loader = () => {
  return (
    <div className="py-12 flex flex-col items-center justify-center">
      <div className="animate-pulse-slow flex space-x-4">
        <div className="rounded-full bg-primary-400 h-3 w-3"></div>
        <div className="rounded-full bg-primary-500 h-3 w-3"></div>
        <div className="rounded-full bg-primary-600 h-3 w-3"></div>
      </div>
      <p className="mt-4 text-gray-500">Loading retailers...</p>
    </div>
  )
}

export default Loader