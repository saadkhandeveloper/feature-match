import Link from 'next/link'
import React from 'react'

// const ServiceCard = ({title, imageUrl}) => {
//   return (
//     <div className="card card-compact w-60 sm:w-80 bg-base-100 shadow-xl">
//     <figure><img className='w-full object-contain h-full' src={imageUrl} alt="Shoes" /></figure>
//     <div className="card-body">
//       <h2 className="card-title">{title}</h2>
//       <div className="card-actions justify-end">
//         <button className="btn btn-primary">COMPARE</button>
//       </div>
//     </div>
//   </div>
 
//   )
// }

// export default ServiceCard

const ServiceCard = ({title, imageUrl}) => {
  return (
   
<div class="max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 sm:hover:scale-105">
    <Link href="/compare">
        <img class="rounded-t-lg w-full h-[50%]" src={imageUrl} alt="" />
    </Link>
    <div class="p-5">
        <Link href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
        </Link>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <Link href="/compare" target='blank' class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#533aa7] rounded-lg bg-[">
            COMPARE
             <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </Link>
    </div>
</div>

 
  )
}

export default ServiceCard