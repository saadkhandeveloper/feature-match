import React from 'react'

const CompareBanner = () => {
  return (
    <div className="relative w-full h-96 mb-32 bg-[#12141d]">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center w-full px-2 sm:px-2">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Compare Hosting Services</h1>
        <p className="text-lg sm:text-xl">
          Find the best hosting options tailored to your website's needs effortlessly. 
        </p>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </div>
  )
}

export default CompareBanner