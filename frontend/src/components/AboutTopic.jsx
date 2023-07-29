import React from 'react'

const AboutTopic = ({title , description}) => {
  return (
    <div className="w-full p-5 lg:w-8/12 flex flex-col justify-center mb-10 mt-5">
    <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-gray-800 pb-4">{title}</h1>
    <p className="font-normal text-base leading-6 text-gray-600 ">{description}</p>
</div>
  )
}

export default AboutTopic