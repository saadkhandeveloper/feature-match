import React from 'react'
import HomeIcon from '../../public/home.png'
import Link from 'next/link';

// { name: 'Lifestyle' },
//   { name: 'Business'},
//   { name: 'Health'},
//   { name: 'Food' },
//   { name: 'Entertainment' },
//   { name: 'Tech' },
//   { name: 'Shopping' },
//   { name: 'Home & Privacy' },
//   { name: 'Family & Pets' },
//   { name: 'Some Others' },
// ];

const categories = [
  { name: 'Lifestyle', logo: 'https://cdn-icons-png.flaticon.com/512/25/25694.png' },
  { name: 'Business', logo: 'https://cdn-icons-png.flaticon.com/512/25/25694.png' },
  { name: 'Health', logo: 'https://cdn-icons-png.flaticon.com/512/25/25694.png' },
  { name: 'Food', logo: 'https://cdn-icons-png.flaticon.com/512/25/25694.png' },
  { name: 'Entertainment', logo: 'https://cdn-icons-png.flaticon.com/512/25/25694.png' },
  { name: 'Tech', logo: 'https://cdn-icons-png.flaticon.com/512/25/25694.png' },
  { name: 'Shopping', logo: 'https://cdn-icons-png.flaticon.com/512/25/25694.png' },
  { name: 'Home & Privacy', logo: 'https://cdn-icons-png.flaticon.com/512/25/25694.png' },
  { name: 'Family & Pets', logo: 'https://cdn-icons-png.flaticon.com/512/25/25694.png' },
  { name: 'Some Others', logo: 'https://cdn-icons-png.flaticon.com/512/25/25694.png' },
];

const CategoriesTable = ({title, linkName , src}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8 ">
    <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
      <h2 className="text-2xl font-bold mb-4 sm:mb-0">{title}</h2>
      <Link href={src} className="text-blue-500 hover:underline">
        {linkName}
      </Link>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-5 gap-4">
      {categories.map((category, index) => (
        <Link href={"/"}
          key={index}
          className="flex flex-col items-center text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl border border-gray-300 rounded-md p-4 shadow-md  transition duration-300"
        >
          <img src={category.logo} alt={category.name} className="w-16 h-16 mb-2" />
          <span className="text-center text-sm">{category.name}</span>
        </Link>
      ))}
    </div>
  </div>
  )
}

export default CategoriesTable